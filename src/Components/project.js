import '../App.css'

import { Paper } from '@mui/material';
import map from "lodash/map";

const projects = [
    {
      name: 'LogicNerve',
      link: "https://logicnerve.com",
      imgs: [],
      description: 'LogicNerve is a project I started to attempt to build a base HIPAA compliant platform for medical IoT creators to base their devices on without having to worry about HIPAA compliancy or regulations.',
      tid:"Created microservice structure, implemented Firebase authentication, implemented JWT authentication microservice for backend services, added organizations feature, created service to handle creation and changes in user information, email authentication, reverse proxy via NGINX, setup and connected MongoDB storage for all data, created service to handle attributing data streams from user devices, containerized services with docker, created automated testing service to test all API endpoints.",
      note:"(site may be down for revamp)",
      active: true
    },
    {
      name: 'Pose Estimation for Physical Therapy w/ Unity',
      imgs: [],
      link: "https://github.com/hamzers/poseTherapy",
      tid:"I created unity scripts to allow user input for transformation of objects, connected firebase firestore to transfer detected phsyical positions to unity, created scripts to construct a baseline to accurately portray phsyical coordinates from 2d camera coordinates and estimated distance.",
      note:"",
      description: 'I attempted to create software to use pose estimation within unity web for creating a game (sort of like xbox kinnect) to be able to get an understanding of physical movement limitations. Using unity games we hoped to create a possible way to allow physical therapy patients to practice excersizes at home. Unfortunately the pose estimation was very inaccurate and thus couldn\'t be used for such purposes.',
      active: true
    },
    {
      name: 'Parent Class Inheritance Extension',
      imgs: [],
      link: "https://github.com/ethanclay99/UnityParent/",
      tid:"Created proper scalability to transform with parent class quaternion roatations, assisted in implementing collision boundaries between objects.",
      note:"",
      description: 'A friend and I decided to create a new parent inheritance script in unity to extend the possible transformations on child objects via quaternion changes in parent objects.',
      active: true
    },
    {
      name: 'Unity VR Classroom',
      imgs: [],
      link: "",
      tid:"I created unity scripts to allow user input for transformation of objects, created actions to occur on collisons, created tasks to achieve throughout classroom experience.",
      note:"",
      description: 'Fellow students and I worked on a prototype of a unity based VR classroom that could be run off a cellphone using Google Cardboard VR headsets.',
      active: true
    },
    {
      name: 'Meme Hotline',
      imgs: [],
      link: "",
      tid:"Created 'DeepFry' feature with openCV, created tmp storage for photos to be stored for twilio export.",
      note:"",
      description: 'We attempted to utilize Twilio\'s API to create a Meme Hotline, which sent GIFs based on text input and returned Deepfried images based on user image input.',
      active: true
    }
  ];


  const Container = (props) => {
    return (
      <div style={{ height: "80%", width: "70%", margin: "50px"}}>
        <Paper style={{ minHeight: "700px", width: "900px", background: "#FFFFFF"}} elevation="10">
          <div style={{ margin: "20px"}}>
          <code>
          <img src={props.img} width="40%" />
          <h3 style={{margin: "20px"}}>{props.name}</h3>
          <p>{props.description1}</p>
          <br/>
          <p>Features I worked on:</p>
          <p>{props.description2}</p>
          <br/>
          <a 
            style={{marginLeft: "1em"}}
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            href={props.link}>
              {props.link}
          </a>
          <p>{props.note}</p>
          </code>
          </div>
        </Paper>
      </div>
    );
  };


const Project = () => {

  return (
    <div className='App-section2'>
      <br/><br/>
    <h1>Projects</h1>
    <div style={{ width: "100%", overflow: "auto", display: "flex"}}>
      {map(projects, proj => (
        <div style={{margin: "25px"}}>
        <Container name={proj.name} description1={proj.description} imgs={proj.imgs} description2={proj.tid} note={proj.note} link={proj.link}/>
        </div>
      ))}
    </div>
  </div>
  );
    // let html = getProjects()
    // return <div className="App-section1"> {html} </div>
}

export default Project