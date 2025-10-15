import React, { useState, useEffect } from 'react';
import './App.css';
import About from './Components/about';
import Project from './Components/project';
import WorkXp from './Components/workxp';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'about', label: 'About', component: About },
    { id: 'experience', label: 'Experience', component: WorkXp },
    { id: 'projects', label: 'Projects', component: Project }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App">
      {/* Floating Background Shapes */}
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>

      {/* Navigation */}
      <nav className="nav-container">
        <div className="nav-items">
          {sections.map(section => (
            <button
              key={section.id}
              className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ paddingTop: '80px' }}>
        {sections.map(section => (
          <section key={section.id} id={section.id}>
            <section.component />
          </section>
        ))}
      </main>
    </div>
  );
}

export default App;