import "../App.css"
import { Paper } from "@mui/material";
  

const About = () => {
    return (
        <div className='App-section2'>
        <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
            <Paper style={{ minHeight: "700px", width: "40%", background: "#f8f9e9"}} elevation="0">
                <div style={{ marginTop:"20%", marginLeft: "auto", marginRight: "auto"}}>
                    <Paper style={{width: "95%"}} elevation="5">
                        <img src="/hamza-bike.png" width="100%" height="100%" />
                    </Paper>
                </div>
            </Paper>
            <Paper style={{ minHeight: "700px", width: "60%", background: "#f8f9e9"}} elevation="0">
                <div style={{ margin: "20px"}}>
                    <code>
                    <h1 style={{margin: "20px"}}>ABOUT ME</h1>
                    <p>I'm Hamza Shaikh, a senior in Computer Science at Purdue University. I specifically track in 
            machine learning and security.</p>
                    <br>
                    </br>
                    <p>Things I like to do include but are not limited to:</p>
                    <p>
                    Coding, Reading, Riding Motorcycles, Solving Problems
                    </p>
                    <br/>
                    <p>
                        Languages I have experience with are:
                    </p>
                    <p>
                        Python, Java, C, C++, JavaScript, Typescript
                    </p>
                    <br/>
                    <p>
                        Other tech platforms or skills I have experience with are:
                    </p>
                    <p>
                    MongoDB, NodeJS, React, Deno, Docker, NGINX, Google Firebase Auth & Storage, Splunk, GCP VMs, NGINX, AWS DynamoDB, AWS Amplify, PyTorch, Tensorflow
                    </p>
                    </code>
                </div>
            </Paper>
        </div>
      </div>
      );
}
export default About