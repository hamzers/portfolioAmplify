import React from 'react';
import { motion } from 'framer-motion';

const WorkXP = () => {
  const workExperiences = [
    {
      company: "WootCloud",
      position: "Software Engineer",
      duration: "2022 - Present",
      description: "Developed cloud-based security solutions and IoT device management platforms. Worked with React, Node.js, and AWS services.",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"]
    },
    {
      company: "Cisco",
      position: "Software Developer Intern",
      duration: "Summer 2021",
      description: "Contributed to network automation tools and developed internal dashboards for monitoring network performance.",
      technologies: ["Python", "JavaScript", "REST APIs", "PostgreSQL"]
    },
    {
      company: "Kenna Security",
      position: "Junior Developer",
      duration: "2020 - 2022",
      description: "Built vulnerability management tools and data visualization components. Focused on security analytics and reporting.",
      technologies: ["React", "Python", "D3.js", "PostgreSQL", "Redis"]
    },
    {
      company: "Invici",
      position: "Full Stack Developer",
      duration: "2019 - 2020",
      description: "Developed web applications for startup environment. Created proof of concept solutions and MVP products.",
      technologies: ["React", "Express.js", "MongoDB", "Node.js"]
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="section-title">Work Experience</h2>
      <div className="work-timeline">
        {workExperiences.map((work, index) => (
          <motion.div 
            key={index}
            className="work-item dark-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <h3 style={{ color: '#61dafb', marginBottom: '10px', fontSize: '1.4em' }}>
              {work.position}
            </h3>
            <h4 style={{ color: '#f0f0f0', marginBottom: '8px', fontSize: '1.2em' }}>
              {work.company}
            </h4>
            <p style={{ color: '#888', marginBottom: '15px', fontStyle: 'italic' }}>
              {work.duration}
            </p>
            <p style={{ color: '#d0d0d0', lineHeight: '1.5', marginBottom: '20px' }}>
              {work.description}
            </p>
            <div>
              {work.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default WorkXP;