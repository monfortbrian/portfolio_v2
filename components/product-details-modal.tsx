import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  externalLinks: Array<{ label: string; url: string }>;
}

const ProjectDetailsModal: React.FC<{
  project: Project;
  onClose: () => void;
}> = ({ project, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
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
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
