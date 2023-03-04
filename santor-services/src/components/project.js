import React from "react";



export default function Project(project){
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
    )
}