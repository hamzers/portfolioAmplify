import '../App.css'
import { Box, color, margin, minHeight } from '@mui/system';
import { Paper } from '@mui/material';
import map from "lodash/map";
import range from "lodash/range";

const xps = [
    {
      name: 'Cisco',
      description1: 
      "Software Engineering Intern - Vulnerability Management - May 2022 - August 2022",
      description2:
      "I developed time-efficient, memory optimized python code that synchronized ratings for millions of vulnerabilities between Cisco and Kenna, an acquired company whose engineering team I had weekly meetings with, then deployed said code as a cronjob on a production server I also developed and deployed a feature allowing security analysts to fetch information about specified threat groups or vulnerabilities. The feature called APIs from Recorded Future about the query and manipulated the resulting data to compile a pandas dataframe with recorded instances and documents referencing relevant threat actors in cyberspace, pushing the resulting dataframe to splunk for further digestion. ",
      img:"/cisco.png",
      photo: true
    },
    {
      name: 'Cisco',
      description1: 
      "Software Engineering Intern - Threat Intelligence - May 2021 - August 2021",
      description2:
      "Using python, I developed a workflow tool to allow indicators of concern from threat intelligence cases to be shared with a malware information-sharing community. In addition, I conducted technical analysis of cases for machines requesting blocked domains, analyzing such traffic using splunk queries, looking through logs, and found context surrounding such cases to determine if internal machines were compromised with malicious software. I also proposed a redesign/restructure of proprietary tools surrounding the threat analysis process to make analysis more efficient, using automation to reduce redundant tasks with precompiled information",
      img:"/cisco.png",
      photo: true
    },
    {
      name: 'WootCloud',
      description1: 
      "Software Engeneering and Data Science Intern - June 2020 - March 2021",
      description2:
      "I developed a tool automating the collection and identification of wireless devices made by manufacturers specified by the user that were registered in the FCC via API calls and webscraping, and stored such data in MongoDB servers for future cross-reference searches and classification. I also created data sets for the training of machine learning models to classify devices into different categories of electronic devices using metadata and photo identification and retrained ML models with Tensorflow using such data sets.",
      img:"/wootcloud.jpg",
      photo: true
    }
  ];

const getWorkXP = () => {
  let html = []
  xps.forEach(() => {
      html.push(
          <div>
              <h1>
                  <code>{xps[0].name}</code>
              </h1>

          <p>
            {xps[0].description1}
          </p>
          <p>
            {xps[0].description1}
          </p>
          </div>
      )
  })
  return html
}

const Container = (props) => {
  return (
    <div style={{ height: "80%", width: "70%", margin: "50px"}}>
      <Paper style={{ minHeight: "700px", width: "900px", background: "#13334b", color:"#f8f9e9"}} elevation="10">
        <div style={{ margin: "20px"}}>
        <code>
        <img src={props.img} width="40%" />
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
        <br/><br/>
      <h1>Work Experience</h1>
      <div style={{ width: "100%", overflow: "auto", display: "flex"}}>
        {map(xps, wxp => (
          <div style={{margin: "25px"}}>
          <Container name={wxp.name} description1={wxp.description1} description2={wxp.description2} img={wxp.img}/>
          </div>
        ))}
      </div>
    </div>
    );
}

export default WorkXP