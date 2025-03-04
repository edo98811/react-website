import React from "react";
import "./CV.css";

const EdoardoFilippiCV = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg"></div>
        <h1 className="text-3xl font-bold text-center">Edoardo Filippi</h1>
        <p className="text-center text-gray-600">Biomedical Engineer & Bioinformatician</p>
        
        <div className="mt-4 text-center">
          <p>Email: <a href="mailto:edoardofilippi1998@gmail.com" className="text-blue-500">edoardofilippi1998@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/edo98811" className="text-blue-500">github.com/edo98811</a></p>
          <p>Phone: +49 1774933619</p>
        </div>
        
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Education</h2>
          <ul className="list-disc pl-6">
            <li><strong>M.Sc. in Biomedical Engineering</strong> - Politecnico di Torino (2021-2023)</li>
            <li><strong>B.Sc. in Biomedical Engineering</strong> - Politecnico di Torino (2017-2021)</li>
          </ul>
        </section>
        
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Experience</h2>
          <ul className="list-disc pl-6">
            <li><strong>Bioinformatician</strong> - Universitätsmedizin Mainz (2024-Present)</li>
            <li><strong>Research Assistant</strong> - Universitätsmedizin Mainz (2023-2024)</li>
            <li><strong>Research Assistant (Master&aposs Thesis)</strong> - IBEB Lisbon (2022-2023)</li>
            <li><strong>Internship (Bachelor&aposs Thesis)</strong> - LINKS Foundation, Torino (2020-2021)</li>
          </ul>
        </section>
        
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Technical Skills</h2>
          <ul className="list-disc pl-6">
            <li><strong>Programming:</strong> Python, R, C#, Bash, MATLAB</li>
            <li><strong>Software:</strong> Flask, Docker, Linux, Git CI/CD, LabVIEW, Simulink</li>
            <li><strong>Machine Learning:</strong> scikit-learn, PyTorch, pandas, numpy</li>
            <li><strong>Bioinformatics:</strong> NGS data analysis (R)</li>
          </ul>
        </section>
        
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <ul className="list-disc pl-6">
            <li>Cancer Cell Segmentation - Deep learning (Google Colab)</li>
            <li>IoT Patient Monitoring Platform - Python, HTML, Docker</li>
            <li>Pathological Scan Identification - Machine Learning</li>
            <li>Unity-Based Exergame - Depth Camera, C#</li>
          </ul>
        </section>
        
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Languages</h2>
          <p>Italian (Native), English (C1), German (C1)</p>
        </section>
      </div>
  );
};

export default EdoardoFilippiCV;