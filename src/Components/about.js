import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">About Me</h2>
      <div className="dark-card">
        <p style={{ fontSize: '1.2em', lineHeight: '1.6', color: '#d0d0d0' }}>
          I'm a passionate full-stack developer with expertise in modern web technologies. 
          I love creating efficient, scalable solutions and have experience working with 
          various technologies including React, Node.js, Python, and cloud platforms.
        </p>
        <br />
        <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#b0b0b0' }}>
          When I'm not coding, you can find me exploring new technologies, contributing to 
          open source projects, or riding my bike to discover new places. I believe in 
          continuous learning and always strive to improve my skills.
        </p>
        
        <div style={{ marginTop: '30px' }}>
          <h3 style={{ color: '#61dafb', marginBottom: '15px' }}>Core Technologies</h3>
          <div>
            <span className="tech-tag">React</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">AWS</span>
            <span className="tech-tag">Docker</span>
            <span className="tech-tag">MongoDB</span>
            <span className="tech-tag">PostgreSQL</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;