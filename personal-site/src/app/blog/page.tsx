'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Flann',
  description: 'Thoughts and articles on technology, development, and more.',
};

const placeholderPosts = [
  {
    slug: 'first-post',
    title: 'My First Blog Post',
    summary: 'A short summary of the first blog post, discussing the start of a new journey and the purpose of this digital space.',
    date: 'August 21, 2025',
  },
  {
    slug: 'deep-dive-into-nextjs',
    title: 'Deep Dive into Next.js 15',
    summary: 'Exploring the powerful features of the latest Next.js version, including App Router, Server Actions, and advanced caching.',
    date: 'August 22, 2025',
  },
  {
    slug: 'styling-with-tailwind',
    title: 'The Art of Styling with Tailwind CSS',
    summary: 'A comprehensive guide to utility-first CSS and how it helps in building beautiful, responsive, and maintainable designs.',
    date: 'August 23, 2025',
  },
];

const BlogPage = () => {
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
        className="text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-primary mb-2">My Blog</h1>
        <p className="text-xl text-gray-400">Thoughts on code, design, and everything in between.</p>
      </motion.div>

      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {placeholderPosts.map((post) => (
          <motion.div key={post.slug} variants={itemVariants}>
            <Link href={`/blog/${post.slug}`} className="block bg-neutral-800 rounded-lg shadow-lg p-6 mb-6 hover:bg-neutral-700 transition-colors duration-300">
              <h2 className="text-3xl font-bold text-primary mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-3">{post.date}</p>
              <p className="text-gray-400">{post.summary}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BlogPage;
