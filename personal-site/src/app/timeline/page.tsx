import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Timeline',
  description: 'A timeline of my career journey and key milestones.',
};

const timelineData = [
  {
    year: '2023',
    title: 'Senior Frontend Developer, TechCorp',
    description: 'Led the development of a new user-facing dashboard using Next.js, resulting in a 30% increase in user engagement. Mentored junior developers and improved code quality across the team.',
  },
  {
    year: '2021',
    title: 'Mid-Level Developer, Innovate LLC',
    description: 'Developed and maintained complex client websites using React and TypeScript. Collaborated with designers to create pixel-perfect, responsive user interfaces.',
  },
  {
    year: '2019',
    title: 'Junior Developer, WebStart Inc.',
    description: 'Started my professional journey. Learned the fundamentals of web development, worked on bug fixes, and contributed to smaller features on a large-scale e-commerce platform.',
  },
  {
    year: '2018',
    title: 'Graduated University',
    description: 'Completed my Bachelor\'s Degree in Computer Science, where I discovered my passion for building things for the web.',
  },
];

const TimelineItem = ({ data, isLeft }: { data: typeof timelineData[0], isLeft: boolean }) => (
  <div className="mb-8 flex md:justify-between items-center w-full flex-col md:flex-row">
    {/* Desktop: Alternating sides */}
    <div className={`hidden md:block w-5/12 ${isLeft ? 'order-3 text-right' : 'order-1 text-left'}`}>
      <div className="py-4">
        <h4 className="font-bold text-primary text-lg">{data.year}</h4>
        <h3 className="mb-3 font-bold text-white text-xl">{data.title}</h3>
        <p className="leading-snug tracking-wide text-neutral-300">
          {data.description}
        </p>
      </div>
    </div>

    {/* Mobile: All on the right */}
    <div className="block md:hidden w-full order-3">
       <div className="bg-neutral-800 rounded-lg shadow-xl px-6 py-4">
        <h4 className="font-bold text-primary text-lg">{data.year}</h4>
        <h3 className="mb-3 font-bold text-white text-xl">{data.title}</h3>
        <p className="leading-snug tracking-wide text-neutral-300">
          {data.description}
        </p>
      </div>
    </div>

    {/* The circle and line */}
    <div className="z-20 flex items-center order-2 bg-neutral-800 shadow-xl w-8 h-8 rounded-full">
      <div className="h-full w-1 bg-primary mx-auto absolute top-0"></div>
      <div className="h-8 w-8 bg-primary rounded-full border-4 border-neutral-900"></div>
    </div>
  </div>
);


const TimelinePage = () => {
  return (
    <div className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-primary mb-12 text-center">My Journey</h1>
        <div className="relative wrap overflow-hidden p-4 md:p-10">
          <div className="absolute h-full border border-primary" style={{left: '50%', transform: 'translateX(-50%)'}}></div>
           {timelineData.map((item, index) => (
            <TimelineItem key={index} data={item} isLeft={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelinePage;
