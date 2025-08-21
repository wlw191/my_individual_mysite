'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

// Metadata for the page
export const metadata: Metadata = {
  title: 'Portfolio | Flann',
  description: 'A selection of projects by Flann (陈悦龙).',
};

const placeholderProjects = [
  {
    name: 'Project Alpha',
    description: 'A brief description of Project Alpha. This project solves a complex problem with a simple solution, showcasing modern web technologies.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Project Beta',
    description: 'An innovative application that streamlines data processing. It features a clean user interface and a robust backend.',
    technologies: ['Python', 'Flask', 'React', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Project Gamma',
    description: 'A personal experiment in 3D rendering and interactive web experiences. This project pushes the boundaries of what a browser can do.',
    technologies: ['React Three Fiber', 'Three.js', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const PortfolioPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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
        className="text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-primary mb-2">My Portfolio</h1>
        <p className="text-xl text-gray-400">A selection of projects I'm proud of.</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {placeholderProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-neutral-800 rounded-lg shadow-lg p-6 flex flex-col"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-primary mb-3">{project.name}</h2>
            <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
            <div className="mb-4">
              {project.technologies.map((tech, i) => (
                <span key={i} className="inline-block bg-neutral-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-auto flex justify-end gap-4">
              <a href={project.githubUrl} className="text-gray-400 hover:text-primary transition-colors duration-300">GitHub</a>
              <a href={project.liveUrl} className="text-gray-400 hover:text-primary transition-colors duration-300">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
