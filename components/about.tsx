'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

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
        👋 I'm <span className="font-medium">Monfort N. Brian</span>. I live in
        East Africa , where I design and build the future. <br />
        I’ve loved making things for as long as I can remember, and wrote my
        name using <span className="italic">WordArt MS Word-98</span> when I was{' '}
        <span className="underline ">8 years old</span>, just months after my
        uncle bought a brand new desktop that I taught myself to type on. It was
        indeed an exciting time.
      </p>

      <p className="mb-3 text-left">
        I'm a <span className="font-medium">Software developer</span> turned{' '}
        <span className="font-medium">freelancer</span> turned{' '}
        <span className="font-medium">tech startups owner</span>. I love working
        with UX and my main focus is how to better improve the experience for
        different kinds of people. I love working with Javascript
        ecosystem/Jamstack tech and, on occasion, creating new designs (when
        time allows). My real strength, though, is figuring out better ways and
        bridging gaps teams, customers, and everyone else. I'm a methodical,
        logical thinker and I'm constantly looking for force multiplier
        opportunities to help others provide their best results too. I'm
        passionate about creating a better environment for everyone, and
        creating <span className="font-medium">Bluetec</span> is a continuation
        of that goal.
      </p>

      <p className="mb-3 text-left">
        When I'm not in front of the computer, I'm usually minding my own
        business, going out or traveling with friends, or contemplating nature
        while sipping a craft beer. craft beer
      </p>
    </motion.section>
  );
}
