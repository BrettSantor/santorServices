import React from 'react';
import Project from '../project';

const images = {};

function importAll(r){
    r.keys().forEach((key) => (images[key] = r(key)));
}

importAll(require.context('../../assets/images', true, /\.(png|jpe?g|svg|ico)$/))

const project = [

    {
        title: 'Project One',
        url: "https://github.com/BrettSantor/santorServices",
        description: "this is a test card",
        image: images['./favicon.ico'],
    },  {
        title: 'Project Two',
        url: "https://github.com/BrettSantor/santorServices",
        description: "this is a test card",
        image: "https://www.freepngimg.com/png/165523-bluey-dog-free-clipart-hq"
    },  {
        title: 'Project Three',
        url: "https://github.com/BrettSantor/santorServices",
        description: "this is a test card",
        image: images["./testpic.jpg"]
    },  {
        title: 'Project Four',
        url: "https://github.com/BrettSantor/santorServices",
        description: "this is a test card",
        image: images["./github.png"]
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