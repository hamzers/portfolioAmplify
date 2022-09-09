import '../App.css'
const projects = [
    {
      name: 'Project 1',
      description: 'The fitness Gram PAcer test is an aerobic capacity test',
      active: true
    }
  ];

const getProjects = () => {
  let html = []
  projects.forEach(() => {
      html.push(
          <div>
              <h1>
                  <code>{projects[0].name}</code>
              </h1>
          <p>
            {projects[0].description}
          </p>
          </div>
      )
  })
  return html
}

const Project = () => {

    let html = getProjects()
    return <div className="App-section1"> {html} </div>
}

export default Project