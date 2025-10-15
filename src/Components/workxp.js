import React from 'react';
import { motion } from 'framer-motion';

function WorkXP() {
  const workExperience = [
    {
      company: 'Cisco Systems',
      position: 'Senior Software Engineer',
      duration: '2020 - Present',
      logo: '/cisco.png',
      description: 'Leading full-stack development initiatives and architecting scalable solutions for enterprise networking products.',
      achievements: [
        'Led development of microservices architecture serving 10M+ users',
        'Improved system performance by 40% through optimization',
        'Mentored junior developers and established coding standards'
      ]
    },
    {
      company: 'WootCloud',
      position: 'Software Engineer',
      duration: '2018 - 2020',
      logo: '/wootcloud.jpg',
      description: 'Developed IoT security solutions and cloud-based analytics platforms.',
      achievements: [
        'Built real-time analytics dashboard using React and D3.js',
        'Implemented ML algorithms for threat detection',
        'Reduced deployment time by 60% with CI/CD pipelines'
      ]
    },
    {
      company: 'Kenna Security',
      position: 'Junior Software Engineer',
      duration: '2016 - 2018',
      logo: '/kenna.png',
      description: 'Contributed to cybersecurity risk management platform development.',
      achievements: [
        'Developed REST APIs handling millions of vulnerability records',
        'Implemented automated testing framework',
        'Collaborated on agile development processes'
      ]
    }
  ];

  return (
    <motion.div 
      className="glass-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: '600' }}>
        Work Experience
      </h2>
      
      {workExperience.map((work, index) => (
        <motion.div
          key={index}
          className="work-item"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          whileHover={{ scale: 1.02 }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
            <img
              src={work.logo}
              alt={work.company}
              className="company-logo"
              style={{ 
                width: '60px', 
                height: '60px', 
                objectFit: 'contain',
                padding: '8px'
              }}
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>
                {work.position}
              </h3>
              <h4 style={{ 
                fontSize: '1.1rem', 
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '0.3rem',
                fontWeight: '500'
              }}>
                {work.company}
              </h4>
              <p style={{ 
                fontSize: '0.9rem', 
                color: 'rgba(255, 255, 255, 0.6)',
                marginBottom: '0'
              }}>
                {work.duration}
              </p>
            </div>
          </div>
          
          <p style={{ marginBottom: '1rem', fontSize: '0.95rem' }}>
            {work.description}
          </p>
          
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            margin: 0
          }}>
            {work.achievements.map((achievement, achIndex) => (
              <motion.li
                key={achIndex}
                style={{ 
                  marginBottom: '0.5rem',
                  paddingLeft: '1rem',
                  position: 'relative',
                  fontSize: '0.9rem',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + (achIndex * 0.1) }}
              >
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  •
                </span>
                {achievement}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default WorkXP;