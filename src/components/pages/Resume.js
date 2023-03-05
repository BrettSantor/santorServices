import React from 'react';
import resume from '../../assets/Resume.pdf';


export default function Resume(){
   
    return (
        <div className='container '>
            <h1 className='resume'>Resume</h1>
            <h2 className='resume'>Skills</h2>
            <div className='frontEnd'>
            <h3>Front-End</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>IndexDB</li>
                <li>React</li>
                <li>Webpack</li>
            </ul></div>
            <div className='backEnd'>
            <h3>Back-End</h3>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>RESTful APIs</li>
            </div>
            <button id='resumeButt'><a href= {resume} download={resume}>Download</a></button>
        </div>
    );
}