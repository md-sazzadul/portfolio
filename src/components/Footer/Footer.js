import React from 'react';
import './Footer.css';
import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            {/* <a href="" className='footer__logo'>Sazzad</a> */}

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                {/* <li><a href="#services">Services</a></li> */}
                <li><a href="#portfolio">Portfolio</a></li>
                {/* <li><a href="#testimonials">Testimonials</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/md-sazzadul-islam-243a34253/"><FaLinkedin></FaLinkedin></a>
                <a href="https://github.com/md-sazzadul"><FaGithub></FaGithub></a>
                <a href="https://twitter.com"><FaTwitter></FaTwitter></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; All Rights Reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;