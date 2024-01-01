// ProjectDetails component
'use client';
// ProjectDetails component
import React from 'react';

interface Project {
  id: string; // Add the id property
    title: string;
    description: string;
    tags: string[];
    imageUrl: string;
  externalLinks: Array<{ label: string; url: string }>;
}

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="project-details">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img src={project.imageUrl} alt={project.title} />
      <div className="links">
        {project.externalLinks.map((link, index) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
