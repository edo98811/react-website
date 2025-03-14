'use client'; // Mark this as a client component
import React, { useState, useEffect } from 'react';

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Array<{ id: number; name: string; html_url: string; description: string }>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch GitHub repositories
  useEffect(() => {
    fetch('https://api.github.com/users/edo98811/repos') // fetch returns a promise
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching repositories:', error); // Log the error
        setError('Error fetching repositories');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading repositories...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>My GitHub Projects</h1>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h2>{repo.name}</h2>
            </a>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
