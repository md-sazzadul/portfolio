import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {SiResearchgate} from 'react-icons/si';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/md-sazzadul-islam15/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/md-sazzadul" target="_blank"><BsGithub/></a>
            <a href="https://www.researchgate.net/profile/Md-Sazzadul-Islam-3" target="_blank"><SiResearchgate/></a>
        </div>
    );
};

export default HeaderSocials;