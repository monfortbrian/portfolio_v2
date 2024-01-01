"use client";
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
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

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>Some Things I’ve Built</SectionHeading>
      <div className="filters flex justify-center space-x-4">
        {filterOptions.map((option) => (
          <motion.button
            key={option.value}
            whileHover={{ scale: 1.05 }}
            className={clsx(
              'hover:text-gray-950 transition dark:text-white dark:hover:text-gray-300 px-6 py-2 mb-8 rounded-full font-medium transition-all duration-300 ease-in-out',
              { 'bg-gray-500 text-white': option.value === selectedFilter }
            )}
            onClick={() => setSelectedFilter(option.value)}
          >
            {option.label}
          </motion.button>
        ))}
      </div>
      
    </section>
  );
}
