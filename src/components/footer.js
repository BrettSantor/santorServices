import React from "react";
import logo from '../assets/images/favicon.ico'
import github from '../assets/images/githubicon.png'

export default function Footer() {
    return (
        <footer>
            <a  href='https://linkedin.com/brettsantor' rel="noopener noreferrer" target='_blank'><img src={logo} alt='LinkedIn Logo'/></a>
            <a  href='https://github.com/BrettSantor' rel="noopener noreferrer" target='_blank'><img src={github} alt='Github Logo'/></a>
            <a  href='https://github.com/BrettSantor' rel="noopener noreferrer" target='_blank'><img src={logo} alt='Medium Logo'/></a>
        </footer>
    );
};