'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me | Flann',
  description: 'Get in touch with Flann (陈悦龙).',
};

const contactMethods = [
  {
    name: 'Email',
    handle: 'flann.chen@example.com', // Placeholder
    href: 'mailto:flann.chen@example.com', // Placeholder
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    handle: 'Flann-Chen', // Placeholder
    href: '#', // Placeholder
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: '陈悦龙 (Flann)', // Placeholder
    href: '#', // Placeholder
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

const ContactPage = () => {
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
        <h1 className="text-5xl font-bold text-primary mb-2">Get In Touch</h1>
        <p className="text-xl text-gray-400">I'm always open to new opportunities and collaborations.</p>
      </motion.div>

      <motion.div
        className="max-w-2xl mx-auto grid grid-cols-1 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contactMethods.map((method) => (
          <motion.a
            key={method.name}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 rounded-lg shadow-lg p-6 flex items-center gap-6 hover:bg-neutral-700 transition-colors duration-300"
            variants={itemVariants}
          >
            <div className="text-primary">{method.icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-white">{method.name}</h2>
              <p className="text-gray-400">{method.handle}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactPage;
