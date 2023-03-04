import React from 'react';
import Project from '../project';
import images from '../../assets/images/github.png'

console.log(images)
const project = [

    {
        title: 'Project One',
        url: "https://github.com/BrettSantor/santorServices",
        description: "this is a test card",
        image: {images},
    },  {
        title: 'Project Two',
        url: "https://github.com/BrettSantor/santorServices",
        description: "this is a test card",
        image: "../../assets/images/testpic.jpg"
    },  {
        title: 'Project Three',
        url: "https://github.com/BrettSantor/santorServices",
        description: "this is a test card",
        image: "../../assets/images/testpic.jpg"
    },  {
        title: 'Project Four',
        url: "https://github.com/BrettSantor/santorServices",
        description: "this is a test card",
        image: "../../assets/images/testpic.jpg"
    },  {
        title: 'Project Five',
        url: "https://github.com/BrettSantor/santorServices",
        description: "this is a test card",
        image: "../../assets/images/testpic.jpg"
    },  {
        title: 'Project Six',
        url: "https://github.com/BrettSantor/santorServices",
        description: "this is a test card",
        image: "../../assets/images/testpic.jpg"
    },
]

export default function Portfolio(){
    return (
        <div>
            <h1>Projects</h1>
            Project cards go here....
            <Project project={project}/>
        </div>
    );
}