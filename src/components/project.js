import React from "react";
import logo from '../assets/images/githubicon.png'

export default function Project(project){
    const projects = project.project;

    
    return (
        <div className="list-group">
           {projects.map((projects, index) =>(
            <div className="projectCard cardEffect" key={index}>
                <h4 className="cardHeader">{projects.title}<a href= {projects.github} target="_blank" rel="noopener noreferrer"><img src= {logo} alt="github logo"/></a></h4>
                   <div className="cardBody"> 
                    <p>{projects.description}</p>
                   <a href={projects.url} rel="noopener noreferrer" target="_blank"> <img className="img-fluid" alt={projects.description} src={projects.image}/></a>
                    </div>
                </div>
            ))}
        </div>
    )
}