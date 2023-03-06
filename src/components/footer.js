import React from "react";
import logo from '../assets/images/linkedin.png'
import github from '../assets/images/githubicon.png'
import medium from '../assets/images/medium_logo.png'

export default function Footer() {
    return (
        <footer>
            <a  href='https://www.linkedin.com/in/brettsantor/' rel="noopener noreferrer" target='_blank'><img src={logo} className="footerIcon" alt='LinkedIn Logo'/></a>
            <a  href='https://github.com/BrettSantor' rel="noopener noreferrer" target='_blank'><img src={github} className="footerIcon" alt='Github Logo'/></a>
            <a  href='https://medium.com/@b.santor27' rel="noopener noreferrer" target='_blank'><img src={medium} className="footerIcon" alt='Medium Logo'/></a>
        </footer>
    );
};