import '../App.css'
const projects = [
    {
      name: 'Cisco',
      description: 'The fitness Gram PAcer test is an aerobic capacity test',
      active: true
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
            {projects[0].description}
          </p>
          </div>
      )
  })
  return html
}

const WorkXP = () => {

    let html = getWorkXP()
    return <div className="App-section2"> {html} </div>
}

export default WorkXP