import React from 'react';

function About() {
  return (
    <div className="glass-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Profile Section */}
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h1 style={{ marginBottom: '0.5rem', fontSize: '3.5rem' }}>
                Hamza Shaikh
              </h1>
              <h3 style={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                fontWeight: '400',
                fontSize: '1.3rem',
                marginBottom: '1.5rem'
              }}>
                Software Engineer & Tech Enthusiast
              </h3>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '2rem'
              }}>
                Passionate about creating innovative solutions and building scalable applications. 
                I specialize in full-stack development with a focus on modern web technologies 
                and cloud architecture.
              </p>
              
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a 
                  href="/Hamza_Shaikh_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-button"
                >
                  📄 Download Resume
                </a>
                <a 
                  href="mailto:hamza@example.com" 
                  className="glass-button"
                >
                  📧 Get In Touch
                </a>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="glass-card">
              <h4 style={{ marginBottom: '1rem', color: 'rgba(255, 255, 255, 0.9)' }}>
                Core Technologies
              </h4>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.8rem' 
              }}>
                {['React', 'Node.js', 'Python', 'AWS', 'Docker', 'TypeScript'].map(skill => (
                  <span
                    key={skill}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '20px',
                      padding: '0.4rem 0.8rem',
                      fontSize: '0.9rem',
                      color: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(5px)',
                      WebkitBackdropFilter: 'blur(5px)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image Section */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  width: '300px',
                  height: '300px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <img
                  src="/hamza-bike.png"
                  alt="Hamza Shaikh"
                  style={{
                    width: '280px',
                    height: '280px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(45deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                    borderRadius: '50%'
                  }}
                />
              </div>
              
              {/* Floating Icons */}
              <div
                style={{
                  position: 'absolute',
                  top: '10%',
                  right: '-10%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                💻
              </div>
              
              <div
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '-10%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  animation: 'float 3s ease-in-out infinite 1s'
                }}
              >
                🚀
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem', 
          marginTop: '3rem' 
        }}>
          <div className="glass-card">
            <h4 style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem' }}>
              🎯 Current Focus
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Working on cloud-native applications and exploring the latest in AI/ML technologies 
              to build next-generation solutions.
            </p>
          </div>

          <div className="glass-card">
            <h4 style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem' }}>
              🌟 Interests
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Open source contributions, tech mentoring, and staying updated with emerging 
              technologies in the software engineering landscape.
            </p>
          </div>

          <div className="glass-card">
            <h4 style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1rem' }}>
              📍 Location
            </h4>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Based in the tech hub, always open to remote collaboration and 
              exciting opportunities worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;