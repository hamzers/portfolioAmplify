import React from 'react';
import './App.css';
import About from './Components/about';
import Project from './Components/project';
import WorkXP from './Components/workxp';
import StickyBox from 'react-sticky-box';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <div className="liquid-glass-bg">
        <div className="glass-orb glass-orb-1"></div>
        <div className="glass-orb glass-orb-2"></div>
        <div className="glass-orb glass-orb-3"></div>
      </div>
      
      <div className="container">
        <div className="left-panel">
          <StickyBox offsetTop={20} offsetBottom={20}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <About />
            </motion.div>
          </StickyBox>
        </div>
        
        <div className="right-panel">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <WorkXP />
            <Project />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
