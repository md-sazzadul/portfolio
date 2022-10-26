import React from 'react';
import './About.css';
import ME from '../../assets/sunglass.jpg';
import {FaAward, FaUsers, FaFolder} from 'react-icons/fa';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                {/* <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div> */}

                <div className="about__content">
                    {/* <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'></FaAward>
                            <h5>Experience</h5>
                            <small>3+ years Experience</small>
                        </article>

                        <article className='about__card'>
                            <FaUsers className='about__icon'></FaUsers>
                            <h5>Clients</h5>
                            <small>200+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <FaFolder className='about__icon'></FaFolder>
                            <h5>Projects</h5>
                            <small>80+ Completed</small>
                        </article>
                    </div> */}

                    <p>
                        Hey, my name is Sazzadul Islam & I am known by my nickname Sazzad. I'm a front-end developer from Bangladesh. I'm always curious to learn more when it comes to new technologies & creative coding.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;