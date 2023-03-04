import React from "react";



export default function Project(project){
    // const [project, setProject] = useState(project)
    const projects = project.project;
    console.log(projects)
    return (
        <div className="list-group">
           {projects.map((projects, index) =>(
                <h4 className="list-group-item" key={index}>
                   <div className="cardBody"  key={index}> <a href= {projects.url} target="_blank" rel="noopener noreferrer"><h3>{projects.title}</h3></a>
                    <img className="img-fluid" alt={projects.description} src={projects.image}/></div>
                </h4>
            ))}
        </div>
        // <div className="list-group">
        //      <h4 className="list-group-item" key={project[0].title}>
        //              <a href= {project[0].url}><h3>{project[0].title}</h3></a>
        //              <img className="img-fluid" alt={project[0].description} src={project[0].image}/>
        //          </h4>
        // </div>
    )
}