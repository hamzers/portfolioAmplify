import React from 'react';
import { motion } from 'framer-motion';

function Project() {
  const projects = [
    {
      title: 'Invici - AI-Powered Analytics Platform',
      description: 'A comprehensive analytics platform leveraging machine learning for business intelligence and predictive analytics.',
      technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL'],
      image: '/Invici.png',
      links: {
        demo: '#',
        github: '#'
      },
      highlights: [
        'Real-time data processing with 99.9% uptime',
        'ML models achieving 85% prediction accuracy',
        'Scalable architecture handling 1M+ data points daily'
      ]
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'DevOps automation suite for managing cloud infrastructure with Infrastructure as Code principles.',
      technologies: ['Terraform', 'Docker', 'Kubernetes', 'Python', 'AWS'],
      image: '/cisco.png',
      links: {
        demo: '#',
        github: '#'
      },
      highlights: [
        'Reduced deployment time by 70%',
        'Automated scaling for 50+ microservices',
        'Cost optimization saving $10k+ monthly'
      ]
    },
    {
      title: 'Security Monitoring Dashboard',
      description: 'Real-time cybersecurity monitoring dashboard for threat detection and incident response.',
      technologies: ['Vue.js', 'Node.js', 'Elasticsearch', 'Redis', 'Docker'],
      image: '/kenna.png',
      links: {
        demo: '#',
        github: '#'
      },
      highlights: [
        'Real-time threat visualization',
        'Automated alert system',
        'Integration with 15+ security tools'
      ]
    }
  ];

  return (
    <motion.div 
      className="glass-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '600' }}>
        Featured Projects
      </h2>
      
      {projects.map((project, index) => (
        <motion.div
          key={index}
          className="project-item"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 + (0.1 * index) }}
          whileHover={{ scale: 1.02 }}
        >
          <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <motion.img
              src={project.image}
              alt={project.title}
              style={{ 
                width: '80px', 
                height: '80px', 
                objectFit: 'cover',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                {project.title}
              </h3>
              <p style={{ 
                fontSize: '0.95rem',
                marginBottom: '1rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                {project.description}
              </p>
            </div>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 * techIndex }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <ul style={{ 
              listStyle: 'none', 
              padding: 0,
              margin: 0,
              marginBottom: '1rem'
            }}>
              {project.highlights.map((highlight, hlIndex) => (
                <motion.li
                  key={hlIndex}
                  style={{ 
                    marginBottom: '0.4rem',
                    paddingLeft: '1rem',
                    position: 'relative',
                    fontSize: '0.85rem',
                    color: 'rgba(255, 255, 255, 0.7)'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + (hlIndex * 0.1) }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'rgba(255, 255, 255, 0.5)'
                  }}>
                    ▸
                  </span>
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <motion.a
              href={project.links.demo}
              className="glass-button"
              style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Live Demo
            </motion.a>
            <motion.a
              href={project.links.github}
              className="glass-button"
              style={{ fontSize: '0.9rem', padding: '0.6rem 1.2rem' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📂 Source Code
            </motion.a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Project;