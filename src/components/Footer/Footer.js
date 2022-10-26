import React from 'react';
import './Footer.css';
import {FaLinkedin, FaGithub, FaResearchgate} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            {/* <a href="" className='footer__logo'>Sazzad</a> */}

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                {/* <li><a href="#about">About</a></li> */}
                <li><a href="#experience">Skills</a></li>
                {/* <li><a href="#services">Services</a></li> */}
                <li><a href="#portfolio">Portfolio</a></li>
                {/* <li><a href="#testimonials">Testimonials</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/md-sazzadul-islam15/" target='_blank'><FaLinkedin></FaLinkedin></a>
                <a href="https://github.com/md-sazzadul" target='_blank'><FaGithub></FaGithub></a>
                <a href="https://www.researchgate.net/profile/Md-Sazzadul-Islam-3" target='_blank'><FaResearchgate></FaResearchgate></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; All Rights Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;