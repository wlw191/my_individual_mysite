import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about the creative developer behind this site.',
};

const skills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS',
  'PostgreSQL', 'Three.js', 'Figma', 'Web Design', 'UX/UI'
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-white">
      <h1 className="text-5xl font-bold text-primary mb-8 text-center">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        {/* Image Placeholder */}
        <div className="md:col-span-1 flex justify-center">
          <div className="w-64 h-64 rounded-full bg-neutral-800 border-4 border-primary flex items-center justify-center">
            {/* Using an icon as a placeholder */}
            <Image src="/globe.svg" alt="Placeholder" width={128} height={128} />
          </div>
        </div>

        {/* Introduction Text */}
        <div className="md:col-span-2 prose prose-lg xl:prose-xl dark:prose-invert max-w-none">
          <p>
            Hello! I'm a passionate developer, creator, and lifelong learner. Welcome to my personal space on the internet where I share my thoughts, projects, and journey.
          </p>
          <p>
            My fascination with technology started at a young age. From tinkering with old computers to writing my first lines of code, I've always been driven by a desire to understand how things work and to build things that can make a difference.
          </p>
          <p>
            This website is my digital garden—a place for me to experiment with new technologies, write about my findings, and showcase my work. It's built with Next.js, Tailwind CSS, and a sprinkle of 3D magic.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <div key={skill} className="bg-neutral-800 text-white py-2 px-5 rounded-lg text-lg font-semibold border border-neutral-700 hover:bg-primary transition-colors">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
