import logo from './logo.svg';
import './App.css';
import About from './Components/about';
import Project from './Components/project';
import WorkXP from './Components/workxp';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useRef} from 'react';



function App() {

  document.title = "Hamza's Portfolio"
  const homeref = useRef(null);
  const aboutref = useRef(null);
  const projectref = useRef(null);
  const workxpref = useRef(null);

  const scrollToHome = () => {
    homeref.current?.scrollIntoView({behavior: 'smooth'});
  };
  const scrollToAbout = () => {
    aboutref.current?.scrollIntoView({behavior: 'smooth'});
  };
  const scrollToProj = () => {
    projectref.current?.scrollIntoView({behavior: 'smooth'});
  };
  const scrollToWorkXP = () => {
    workxpref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
    <div className="App">
    <div className='Navbar'>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{background: '#f8f9e9', color: '#062336'}}>
        <Toolbar>
          <Button onClick={scrollToHome} color="inherit" variant='outlined'>Home</Button>
          <Button onClick={scrollToAbout} color='inherit'>About Me</Button>
          <Button onClick={scrollToProj} color="inherit">Projects</Button>
          <Button onClick={scrollToWorkXP} color="inherit">Work XP</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
      <div ref={homeref}>
      <header className='App-header'>
        <h1>
            <code> WELCOME TO HAMZA'S PAGE </code>
        </h1>
        <code>
        <p>
            "Your time is limited, so don't waste it living someone else's life."  
        </p>
        <p>Check out this startup idea I'm working on:
        <a
          style={{marginLeft: "1em"}}
          className="App-link"
          href="https://inviciai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Invici
        </a>
        </p>
        <p>Keep scrolling or click on the navbar menu to learn more!</p>
        <p>Check out my
        <a
          style={{marginLeft: "1em"}}
          className="App-link"
          href="https://docs.google.com/document/d/1GF4tEhRRXavtDMZhoGbfZaopAz1HOtIioRVpObFesOE/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
        <a
          style={{marginLeft: "1em"}}
          className="App-link"
          href="https://www.linkedin.com/in/hamza-s-892a94103/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linked In
        </a>
        <a
          style={{marginLeft: "1em"}}
          className='App-link'
          href='https://github.com/hamzers'
          target='_blank'
          rel="noopener noreferrer"
        >
          Github
        </a>
        </p>
        </code>
      </header>
      </div>
      <div ref={aboutref}>
      <About/>
      </div>
      <div ref={projectref}>
      <Project/>
      </div>
      <div ref={workxpref}>
      <WorkXP/>
      </div>
    </div>
    </>
  );
}

export default App;
