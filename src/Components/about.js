import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div 
      className="glass-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <motion.img
          src="/hamza-bike.png"
          alt="Hamza Shaikh"
          className="profile-image"
          style={{ 
            width: '200px', 
            height: '200px', 
            objectFit: 'cover',
            marginBottom: '1rem'
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <h1 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>
          Hamza Shaikh
        </h1>
        <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '1.5rem' }}>
          Senior Software Engineer
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
          Passionate software engineer with expertise in full-stack development, 
          cloud technologies, and creating innovative solutions that drive business growth.
        </p>

        <div style={{ marginBottom: '2rem' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Skills</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {[
              'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
              'TypeScript', 'GraphQL', 'MongoDB', 'PostgreSQL'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                className="glass-button"
                style={{ 
                  padding: '0.4rem 0.8rem',
                  fontSize: '0.85rem',
                  cursor: 'default'
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <motion.a
            href="/Hamza_Shaikh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            📄 Resume
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/hamzashaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            💼 LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/hamzashaikh"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🔗 GitHub
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;