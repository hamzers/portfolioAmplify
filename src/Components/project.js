import React from 'react';

const Project = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      technologies: "React, Node.js, MongoDB, Stripe",
      description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard. Features include user authentication, shopping cart, and order tracking.",
      link: "#"
    },
    {
      title: "Task Management App",
      technologies: "React Native, Firebase, Redux",
      description: "Cross-platform mobile application for team collaboration and task management. Includes real-time updates, push notifications, and offline support.",
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      technologies: "Vue.js, Python, PostgreSQL, D3.js",
      description: "Data visualization dashboard for business intelligence. Features interactive charts, real-time data processing, and customizable reports.",
      link: "#"
    }
  ];

  return (
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3 className="project-title">{project.title}</h3>
          <div className="project-tech">{project.technologies}</div>
          <p className="project-description">{project.description}</p>
          {project.link !== "#" && (
            <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Project;