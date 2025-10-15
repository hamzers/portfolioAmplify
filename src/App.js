import React from 'react';
import './App.css';
import About from './Components/about';
import Project from './Components/project';
import WorkXP from './Components/workxp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hamza Shaikh</h1>
        <p>Full Stack Developer & Software Engineer</p>
        <div className="contact-links">
          <a 
            href="/Hamza_Shaikh_Resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            Resume
          </a>
          <a 
            href="https://linkedin.com/in/hamza-shaikh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/hamzashaikh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
        </div>
      </header>

      <main>
        <section className="dark-section">
          <About />
        </section>

        <section className="dark-section">
          <WorkXP />
        </section>

        <section className="dark-section">
          <Project />
        </section>
      </main>
    </div>
  );
}

export default App;