import React from 'react';
import './App.css';
import About from './Components/about';
import WorkXP from './Components/workxp';
import Project from './Components/project';

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <div className="logo">Hamza Shaikh</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Software Engineer</h1>
          <p>Building innovative solutions with modern technologies</p>
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <WorkXP />
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <Project />
        </section>

        <section id="contact" className="contact">
          <h2>Get In Touch</h2>
          <p>Let's connect and discuss opportunities</p>
          <div className="contact-links">
            <a href="mailto:hamza@example.com">Email</a>
            <a href="https://linkedin.com/in/hamzashaikh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/hamzashaikh" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Hamza Shaikh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;