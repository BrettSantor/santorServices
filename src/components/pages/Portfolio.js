import React from 'react';
import Project from '../project';

const images = {};

function importAll(r){
    r.keys().forEach((key) => (images[key] = r(key)));
}

importAll(require.context('../../assets/images', true, /\.(png|jpe?g|svg|ico)$/))

const project = [

    {
        title: 'Planet X',
        url: "https://planetxapp-jbe.herokuapp.com/",
        description: "This is a social media site with an outer space theme.",
        image: images['./planetx.png'],
        github: "https://github.com/BrettSantor/PlanetX"
    },  {
        title: 'Master Planner 9000',
        url: "https://byxzesc.github.io/01-GroupProject-EventPlanner/",
        description: "This app lets you search for any events in a city and can display the weather in that city on the day of that event",
        github: "https://github.com/BrettSantor/01-GroupProject-EventPlanner",
        image: images['./masterplanner1.png']
    },  {
        title: 'Just Another Text Editor',
        url: "https://young-lowlands-73976.herokuapp.com/",
        description: "J.A.T.E uses indexDB to save your text notes on the client side. It is also a Progressive Web Application and is installable to work offline",
        github: "https://github.com/BrettSantor/J.A.T.E",
        image: images["./jate.png"]
    },  {
        title: 'Weather Dashboard',
        url: "https://brettsantor.github.io/weather-dashboard-app/",
        description: "This weather app fetches data from a weather API and displays it dynamically on the page and saves the data to local storage. Your previously searched cities are then rendered to buttons and can be clicked on to search those cities again.",
        github: "https://github.com/BrettSantor/weather-dashboard-app",
        image: images["./weatherDashboard1.png"]
    },  {
        title: 'Social Network API',
        url: "https://drive.google.com/file/d/1lVaXVo3MD4nMJMRpGHTu8NQMt7hmRUHg/view",
        description: "This is the back-end of a social network using MongoDB and Express.js. ",
        github: "https://github.com/BrettSantor/Social-Network-API",
        image: images['./socialNetworkuserRoutes.png']
    },  {
        title: 'E-Commerce Back-End',
        url: "https://drive.google.com/file/d/1YZbfgFXjDn9leq0QHzkPcC4t4krJgJaA/view",
        description: "This is the back-end for an e-commerce site. It uses MySQL database and Express.js",
        github: "https://github.com/BrettSantor/E-Commerce-Backend",
        image: images['./Insomnia300px.png']
    },
]

export default function Portfolio(){
    return (
        <div className='container'>
            <h1>Projects</h1>
            <Project project={project}/>
        </div>
    );
}