import React, { useState } from 'react';
import './Nav.css';
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {FaBook} from 'react-icons/fa';
import {MdOutlineWorkOutline} from 'react-icons/md';
import {RiContactsLine} from 'react-icons/ri';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome></AiOutlineHome></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser></AiOutlineUser></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook></FaBook></a>
            <a href="#portfolio" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdOutlineWorkOutline></MdOutlineWorkOutline></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiContactsLine></RiContactsLine></a>
        </nav>
    );
};

export default Nav;