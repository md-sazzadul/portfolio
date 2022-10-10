import React, { useState } from 'react';
import './Nav.css';
import {AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineCustomerService, AiOutlineContacts} from 'react-icons/ai';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome></AiOutlineHome></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser></AiOutlineUser></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook></AiOutlineBook></a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><AiOutlineCustomerService></AiOutlineCustomerService></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts></AiOutlineContacts></a>
        </nav>
    );
};

export default Nav;