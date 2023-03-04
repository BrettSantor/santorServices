import React from "react";
import logo from '../assets/images/githubicon.png'



export default function Project(project){
    const projects = project.project;
    
    return (
        <div className="list-group">
           {projects.map((projects, index) =>(
            <div className="projectCard">
                <h4 className="cardHeader" key={index}>{projects.title}<a href= {projects.url} target="_blank" rel="noopener noreferrer"><img src= {logo} alt="github logo"/></a></h4>
                   <div className="cardBody"  key={index}> 
                    <img className="img-fluid" alt={projects.description} src={projects.image}/>
                    </div>
                </div>
            ))}
        </div>
    )
}