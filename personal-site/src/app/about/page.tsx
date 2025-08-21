'use client';

import React from 'react';
import type { Metadata } from 'next';
import { motion } from 'framer-motion';

// Metadata is still supported in client components
export const metadata: Metadata = {
  title: 'About Me | Flann',
  description: 'Learn more about Flann (陈悦龙), a Software Engineer.',
};

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-primary mb-2">陈悦龙 (Flann)</h1>
        <p className="text-xl text-gray-400">Software Engineer</p>
      </motion.div>

      <motion.div
        className="prose lg:prose-xl dark:prose-invert max-w-4xl mx-auto mt-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">About Me</h2>
          <p>
            Hello! I'm Flann, a passionate software engineer currently working as a technical support specialist at Tarinn. My primary focus is on developing simple yet effective scripts for data cleaning and web scraping, helping to streamline operations and ensure data integrity.
          </p>
          <p>
            I am driven by a curiosity for technology and a desire to build solutions that are both functional and elegant. I'm always looking to learn new things and expand my skillset.
          </p>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">Current Role</h2>
          <p>
            At <span className="text-primary font-semibold">Tarinn</span>, I am responsible for:
          </p>
          <ul>
            <li>Developing and maintaining scripts for data cleaning and processing.</li>
            <li>Building web scrapers to gather information from various online sources.</li>
            <li>Providing technical support to ensure the smooth operation of our data pipelines.</li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-semibold text-primary mt-8 mb-4">Skills</h2>
          <p>
            While my current role is focused on scripting, I have a foundation in a variety of technologies and I am always eager to learn more.
          </p>
          <ul>
              <li>Python</li>
              <li>JavaScript / TypeScript</li>
              <li>React & Next.js</li>
              <li>HTML & CSS</li>
              <li>SQL & PostgreSQL</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
