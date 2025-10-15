import React from 'react';

const About = () => {
  return (
    <div className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="card">
        <p>
          I'm a passionate software engineer with expertise in full-stack development, 
          cloud technologies, and modern web frameworks. I enjoy solving complex problems 
          and building scalable applications that make a difference.
        </p>
      </div>
      
      <div className="skills-grid">
        <div className="skill-item">
          <h4>Frontend</h4>
          <p>React, JavaScript, TypeScript, HTML5, CSS3</p>
        </div>
        <div className="skill-item">
          <h4>Backend</h4>
          <p>Node.js, Python, Java, REST APIs, GraphQL</p>
        </div>
        <div className="skill-item">
          <h4>Cloud & DevOps</h4>
          <p>AWS, Docker, Kubernetes, CI/CD</p>
        </div>
        <div className="skill-item">
          <h4>Database</h4>
          <p>MongoDB, PostgreSQL, Redis, DynamoDB</p>
        </div>
      </div>
    </div>
  );
};

export default About;