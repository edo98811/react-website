'use client';

import React, { useState, useEffect } from 'react';
import styles from './projects.module.css'; // Import CSS module

type Project = {
  name: string;
  description: string;
  github: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/projects.json') // Load the JSON file
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading projects:', error);
        setError('Failed to load projects.');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <h1>My GitHub Projects</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}