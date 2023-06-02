import '../App.css'

import { Paper } from '@mui/material';
import map from "lodash/map";

const projects = [
    {
      name: 'Invici',
      links: ["https://inviciai.com", "/invici_proof_of_concept.webarchive"],
      imgs: [],
      description: 'A proof of concept of being able to extract product information from Invoices. This turned into a startup in which I created a shopify app allowing merchants to automatically extract invoice information, fill in missing information via data retrieval and generation, and export the data into shopify listing on their store.',
      tid:"Shopfiy React App, Flask Backend for APIs, Created invoice processing api, utilized ML models including DeTr networks and GPU accelerated OCRs, utilized open-assistant chat AI models and Image-to-text networks for description generation, table data extraction code, MongoDB database, cloud hosting and routing (AWS & GCP)",
      note:"We are currently beta testing with customers. We also won a $10,000 grant in a pitch competition.",
      active: true
    },
    {
      name: 'Gpt2 Fine Tuning for Instagram Captions',
      links: ["https://huggingface.co/thicchamz/gpt2_finetune_instagram_caption_generator", "https://github.com/hamzers/gpt2_fine_tune_instagram_captions"],
      imgs: [],
      description: 'Quick fun project to fine-tune gpt 2 on a dataset of Instagram Captions to generate text with Instagram user comment lingo.',
      tid:"Model Fine Tuning, Upload to Hugging Face",
      note:"",
      active: true
    },
    {
      name: 'LogicNerve',
      links: [],
      imgs: [],
      description: 'LogicNerve is a project I started to attempt to build a base HIPAA compliant platform for medical IoT creators to base their devices on without having to worry about HIPAA compliancy or regulations.',
      tid:"Created microservice structure, implemented Firebase authentication, implemented JWT authentication microservice for backend services, added organizations feature, created service to handle creation and changes in user information, email authentication, reverse proxy via NGINX, setup and connected MongoDB storage for all data, created service to handle attributing data streams from user devices, containerized services with docker, created automated testing service to test all API endpoints.",
      note:"(site taken down with project)",
      active: true
    },
    {
      name: 'Pose Estimation for Physical Therapy w/ Unity',
      imgs: [],
      links: ["https://shaikhmed.com/test","https://github.com/hamzers/poseTherapy"],
      tid:"I created unity scripts to allow user input for transformation of objects, connected firebase firestore to transfer detected phsyical positions to unity, created scripts to construct a baseline to accurately portray phsyical coordinates from 2d camera coordinates and estimated distance.",
      note:"(Use chrome for shaikhmed.com/test to ensure camera works. Firebase sync is no longer active.)",
      description: 'I attempted to create software to use pose estimation within unity web for creating a game (sort of like xbox kinnect) to be able to get an understanding of physical movement limitations. Using unity games we hoped to create a possible way to allow physical therapy patients to practice excersizes at home. Unfortunately the pose estimation was very inaccurate and thus couldn\'t be used for such purposes.',
      active: true
    },
    {
      name: 'Parent Class Inheritance Extension',
      imgs: [],
      links: ["https://github.com/ethanclay99/UnityParent/"],
      tid:"Created proper scalability to transform with parent class quaternion roatations, assisted in implementing collision boundaries between objects.",
      note:"",
      description: 'A friend and I decided to create a new parent inheritance script in unity to extend the possible transformations on child objects via quaternion changes in parent objects.',
      active: true
    },
    {
      name: 'Unity VR Classroom',
      imgs: [],
      links: [],
      tid:"I created unity scripts to allow user input for transformation of objects, created actions to occur on collisons, created tasks to achieve throughout classroom experience.",
      note:"",
      description: 'Fellow students and I worked on a prototype of a unity based VR classroom that could be run off a cellphone using Google Cardboard VR headsets.',
      active: true
    },
    {
      name: 'Meme Hotline',
      imgs: [],
      links: ['https://github.com/hamzers/vandy19'],
      tid:"Created 'DeepFry' feature with openCV, created tmp storage for photos to be stored for twilio export.",
      note:"",
      description: 'We attempted to utilize Twilio\'s API to create a Meme Hotline, which sent GIFs based on text input and returned Deepfried images based on user image input.',
      active: true
    }
  ];


  const Container = (props) => {
    return (
      <div style={{ height: "80%", width: "70%", margin: "20px"}}>
        <Paper style={{ minHeight: "600px", width: "700px", background: "#082032", color:"#f8f9e9"}} elevation="10">
          <div style={{ margin: "20px"}}>
          <code>
          <img src={props.img} width="40%" />
          <h3 style={{margin: "20px"}}>{props.name}</h3>
          <p>{props.description1}</p>
          <br/>
          <p>Features I worked on:</p>
          <p>{props.description2}</p>
          <br/>
          {
            props.links.map((link) => {
              return   <><a 
              style={{marginLeft: "1em"}}
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
              href={link}>
                {link}
            </a>
            <br />
            </>
            })
          }
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
        <Container name={proj.name} description1={proj.description} imgs={proj.imgs} description2={proj.tid} note={proj.note} links={proj.links}/>
        </div>
      ))}
    </div>
  </div>
  );
    // let html = getProjects()
    // return <div className="App-section1"> {html} </div>
}

export default Project