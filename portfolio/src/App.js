import logo from './logo.svg';
import './App.css';
import About from './Components/about';
import Project from './Components/project';
import NavBar from './Components/Navbar';

function App() {
  return (
    <>
    <div className="App">
    <NavBar/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <code>Welcome to Hamza's page.</code>
        </p>
        <p className='App-description'>
          <code>
            I'm Hamza Shaikh, a senior in Computer Science at Purdue University. I specifically track in 
            machine learning and security. 
          </code>
        </p>
        <code>
        <p>Things I like to do include but are not limited to:</p>
        <p>
          Coding, Reading, Riding Motorcycles, Solving Problems
        </p>
        <br/><br/>
        <p>Check out my
        <a
          style={{marginLeft: "1em"}}
          className="App-link"
          href={require("./Hamza_Shaikh_Resume.pdf")}
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
      <About/>
      <Project/>
    </div>
    </>
  );
}

export default App;
