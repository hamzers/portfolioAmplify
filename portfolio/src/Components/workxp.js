import '../App.css'
import { Box, color, margin, minHeight } from '@mui/system';
import { Paper } from '@mui/material';
import map from "lodash/map";
import range from "lodash/range";

const projects = [
    {
      name: 'Cisco',
      description1: 
      "I developed time-efficient, memory optimized python code that synchronized ratings for millions of vulnerabilities between Cisco and Kenna, an acquired company whose engineering team I had weekly meetings with, then deployed said code as a cronjob on a production server.",
      description2:
      "I also developed and deployed a feature allowing security analysts to fetch information about specified threat groups or vulnerabilities. The feature called APIs from Recorded Future about the query and manipulated the resulting data to compile a pandas dataframe with recorded instances and documents referencing relevant threat actors in cyberspace, pushing the resulting dataframe to splunk for further digestion. ",
      photo: true
    }
  ];

const getWorkXP = () => {
  let html = []
  projects.forEach(() => {
      html.push(
          <div>
              <h1>
                  <code>{projects[0].name}</code>
              </h1>
          <p>
            {projects[0].description1}
          </p>
          <p>
            {projects[0].description1}
          </p>
          </div>
      )
  })
  return html
}

const Container = (props) => {
  return (
    <div style={{ height: "80%", width: "70%", margin: "50px" }}>
      <Paper style={{ minHeight: "1000px", width: "900px", background: "#003049"}}>
        <div style={{color: "#fff", margin: "20px"}}>
        <code>
        <h3 style={{margin: "20px"}}>{props.name}</h3>
        <p>{props.description1}</p>
        <br>
        </br>
        <p>{props.description2}</p>
        </code>
        </div>
      </Paper>
    </div>
  );
};




const WorkXP = () => {

    return (
      <div className='App-section2'>
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {map(projects, wxp => (
          <Container name={wxp.name} description1={wxp.description1} description2={wxp.description2}/>
        ))}
        {map(range(4), _ => (
          <Container />
        ))}
      </div>
    </div>
    );
}

export default WorkXP