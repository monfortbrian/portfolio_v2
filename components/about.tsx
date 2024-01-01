'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';

import { useActiveSectionContext } from '@/context/active-section-context';

export default function About() {
  const { ref } = useSectionInView("About");
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-left">
        👋 I'm <span className="font-medium">Monfort N. Brian</span>, I design
        and build the future. I’ve loved doing things on the computer for as
        long as I can remember, I wrote names and other stuff using{' '}
        <span className="font-medium">WordArt</span> MS Word 98 when I was{' '}
        <span className="underline font-medium">8 years old</span> It was indeed
        an exciting time and I think it's where I got passion for computers and
        I was curious.
      </p>

      <p className="mb-3 text-left">
        I'm a <span className="font-medium">Software developer</span> turned{' '}
        <span className="font-medium">freelancer</span> turned{' '}
        <span className="font-medium">tech startup founder</span>. I love
        creating UX & enjoy enhancing the experience for different types of
        users. I love working with the Javascript/Jamstack ecosystem. My real
        strength: finding better ways of doing things and bridging gaps between
        teams, clients and all stakeholders. I'm a methodical, logical thinker
        and am constantly looking for opportunities to multiply strength to help
        others deliver their best results, and creating{' '}
        <span className="font-medium">
          <a href="http://bluetec.bi" target="_blank">
            Bluetec
          </a>
        </span>{' '}
        is a continuation of that goal.
      </p>

      <p className="mb-3 text-left">
        When I'm not in front of the computer, I'm usually minding my own
        business, going out or traveling with friends, or contemplating nature
        while sipping a craft beer.
      </p>
      <div className="p-6 flex justify-center">
        <Link
          href="#contact"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[12rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65 "
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Let's Talk{' '}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
      </div>
    </motion.section>
  );
}
