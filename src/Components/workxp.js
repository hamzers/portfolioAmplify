import React from 'react';

const WorkXP = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Company Inc.",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React and Node.js. Collaborate with cross-functional teams to deliver high-quality software solutions."
    },
    {
      title: "Software Engineer",
      company: "Innovation Corp",
      period: "2020 - 2022",
      description: "Developed and maintained microservices architecture. Implemented CI/CD pipelines and improved deployment efficiency by 40%."
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Built responsive web applications and contributed to the development of the company's core platform using modern JavaScript frameworks."
    }
  ];

  return (
    <div className="work-experience">
      {experiences.map((exp, index) => (
        <div key={index} className="work-item">
          <h3 className="work-title">{exp.title}</h3>
          <div className="work-company">{exp.company} • {exp.period}</div>
          <p className="work-description">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkXP;