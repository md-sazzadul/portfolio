import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/photo.jpg'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Md Sazzadul Islam</h1>
                <h5 className="text-light">Front End Developer</h5>
                <CTA></CTA>
                <HeaderSocials></HeaderSocials>

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
};

export default Header;