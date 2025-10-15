import React from 'react';
import { motion } from 'framer-motion';

const Project = () => {
  const projects = [
    {
      title: "IoT Security Dashboard",
      description: "A comprehensive dashboard for monitoring and managing IoT device security across enterprise networks. Features real-time threat detection and automated response capabilities.",
      technologies: ["React", "Node.js", "AWS", "WebSocket", "D3.js"],
      company: "WootCloud",
      year: "2023"
    },
    {
      title: "Network Automation Suite",
      description: "Developed tools for automating network configuration and monitoring. Reduced manual configuration time by 80% and improved network reliability.",
      technologies: ["Python", "REST APIs", "Docker", "PostgreSQL"],
      company: "Cisco",
      year: "2021"
    },
    {
      title: "Vulnerability Analytics Platform",
      description: "Built a platform for analyzing and visualizing security vulnerabilities across enterprise systems. Helped prioritize security remediation efforts.",
      technologies: ["React", "Python", "D3.js", "Redis", "PostgreSQL"],
      company: "Kenna Security",
      year: "2021"
    },
    {
      title: "Startup MVP Solutions",
      description: "Created multiple proof-of-concept applications and MVPs for various startup initiatives. Focused on rapid prototyping and user validation.",
      technologies: ["React", "Express.js", "MongoDB", "Node.js"],
      company: "Invici",
      year: "2020"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="section-title">Featured Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="dark-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 style={{ color: '#61dafb', marginBottom: '15px', fontSize: '1.3em' }}>
              {project.title}
            </h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span style={{ color: '#f0f0f0', fontSize: '1em' }}>{project.company}</span>
              <span style={{ color: '#888', fontSize: '0.9em' }}>{project.year}</span>
            </div>
            <p style={{ color: '#d0d0d0', lineHeight: '1.6', marginBottom: '20px' }}>
              {project.description}
            </p>
            <div>
              {project.technologies.map((tech, techIndex) => (
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

export default Project;