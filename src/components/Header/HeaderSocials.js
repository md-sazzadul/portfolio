import React from 'react';
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/md-sazzadul-islam-243a34253/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/md-sazzadul" target="_blank"><BsGithub/></a>
            <a href="https://dribbble.com" target="_blank"><BsDribbble/></a>
        </div>
    );
};

export default HeaderSocials;