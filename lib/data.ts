import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },

  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Founder & Engineering Lead',
    location: 'Bluetec - Burundi',
    description:
      'Full-stack dev and leading a team building web & mobile apps and custom software solutions; providing tech consulting and development.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jul 2020 - Present',
  },
  {
    title: 'UI/UX Designer',
    location: 'Health & Wellness F. - United States',
    description:
      'Full-stack dev and leading a team building web & mobile apps and custom software solutions; providing tech consulting and development.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2022 - June 2022',
  },
  {
    title: 'Project Manager & Full Stack Developer',
    location: 'Mediabox - Burundi',
    description:
      'At Mediabox, I provided strategic technology advice to achieve goals, designed and implemented workflows, handled junior engineer training and development, provided escalated support, and assisted in overall workplace management.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2020 - Dec 2020',
  },
  {
    title: 'UX & Front-End Developer',
    location: 'DAGUAN Computer Co., ltd - China',
    description:
      'As a recent graduate, I designed, developed and managed systems for clients, building new features and optimizing for user experience, speed and scalability.',
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2019 - Oct 2019',
  },
] as const;

export const projectsData = [
  {
    title: 'Agtech Dashboard',
    description:
      'They connect farmers to markets. it allows managers to view farmer, visualize market data & trends, and optimize operations.',
    tags: ['React', 'scss', 'MongoDB', 'JS'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'NeoBank Website',
    description:
      'Modern website for NeoBank. Responsive design - Adaptive site provides optimal viewing and navigation on any device.',
    tags: ['React', 'Next.js', 'Tailwind', 'vite', 'JS'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Real Estate Platform',
    description:
      'A one-stop real estate marketplace for rental listings, home sales, and seamless transactions. For renters, buyers, landlords, and agents.',
    tags: ['React', 'Next.js', 'Chakra.ui', 'Axios', 'Framer motion', 'js'],
    imageUrl: wordanalyticsImg,
  },
  {
    title: 'Rebook Landing page',
    description:
      'A top notch landing page for sneakers. Bold, stylish aesthetics - Striking visuals reflect the energy and attitude of the brand.',
    tags: ['React', 'Next.js', 'Tailwind', 'vite', 'js'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'JavaScript(ES6+)',
  'React',
  'Next.js',
  'Node.js',
  'Typescript',
  'CSS',
  'MongoDB',
  'Tailwind',
  'Framer Motion',
  'Git',
  'GraphQL',
  'Python',
] as const;
