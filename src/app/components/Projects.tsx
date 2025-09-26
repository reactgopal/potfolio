'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useRef } from 'react';

const projects = [
  {
    title: 'Project 1',
    thumbnail: '/images/projects/project1.jpg',
    description: 'Interactive Dashboard',
    link: '#',
    github: '#',
  },
  // Add more projects...
  {
    title: 'Project 2',
    thumbnail: '/images/projects/project2.jpg',
    description: 'E-commerce Site',
    link: '#',
    github: '#',
  },
  {
    title: 'Project 3',
    thumbnail: '/images/projects/project3.jpg',
    description: '3D Portfolio',
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img src={project.thumbnail} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.link} className="flex items-center text-blue-500">
                    <ExternalLink size={16} className="mr-1" /> Case Study
                  </a>
                  <a href={project.github} className="flex items-center text-gray-500">
                    <Github size={16} className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
