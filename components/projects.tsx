'use client';
// Projects component
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import ProjectDetails from './project-details';
import ProjectDetailsModal from './product-details-modal';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const filterOptions = [
  { label: 'All Projects', value: '' },
  { label: 'Product Design', value: 'agtech' },
  { label: 'No-Code & Code Development', value: 'web-development' },
];

export default function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedFilter, setSelectedFilter] = useState('');
  const { ref } = useSectionInView('Projects', 0.5);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFilterChange = () => {
    const filtered = projectsData.filter(
      (project) => project.category === selectedFilter || selectedFilter === ''
    );
    setFilteredProjects(filtered);
  };

  useEffect(() => {
    handleFilterChange();
  }, [selectedFilter]);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModalOpen = (project: Project) => {
    setIsOpenModal(true);
    setSelectedProject(project); // Set selectedProject when opening modal
  };

  const handleModalClose = () => {
    setIsOpenModal(false);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Some Things I’ve Built</SectionHeading>
      <div className="filters flex justify-center space-x-4">
        {filterOptions.map((option) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.05 }} // Scale slightly on hover
            className={clsx(
              'hover:text-gray-950 transition dark:text-white dark:hover:text-gray-300 px-6 py-2 mb-8 rounded-full font-medium transition-all duration-300 ease-in-out',
              {
                'bg-gray-500 text-white': option.value === selectedFilter, // Active state
              }
            )}
            onClick={() => {
              setSelectedFilter(option.value);
            }}
          >
            {option.label}
          </motion.button>
        ))}
      </div>

      {isOpenModal ? (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={handleModalClose}
        />
      ) : (
        <div>
          {filteredProjects.map((project) => (
            <Project
              key={project.id}
              {...project}
              //onClick={() => handleModalOpen(project)}
              onClick={() => {
                setSelectedProject(project); // Set the selected project
                setIsOpenModal(true); // Open the modal
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
