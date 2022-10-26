import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/ema-john.PNG';
import IMG2 from '../../assets/crud-reactjs.PNG';
import IMG3 from '../../assets/influencer-gear.PNG';
import IMG4 from '../../assets/leader-board.PNG';
import IMG5 from '../../assets/cash-book.PNG';
import IMG6 from '../../assets/panda-commerce.PNG';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'React SPA With Simple E-commerce',
        github: 'https://github.com/md-sazzadul/ema-john-simple',
        demo: 'https://ema-john-sazzad15.netlify.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'CRUD Application Using React',
        github: 'https://github.com/md-sazzadul/crud-reactjs',
        demo: 'https://crud-application-sazzad15.netlify.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Influencer Gear',
        github: 'https://github.com/md-sazzadul/influencer-gear',
        demo: 'https://influencer-gear-sazzad15.netlify.app/'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Leader Board CSS3',
        github: 'https://github.com/md-sazzadul/leader-board-css3',
        demo: 'https://leader-board-sazzad15.netlify.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Simple Interactive Bank Website',
        github: 'https://github.com/md-sazzadul/cash-book',
        demo: 'https://cash-book-sazzad15.netlify.app/'
    },
    {
        id: 6,
        image: IMG6,
        title: 'Simple E-commerce Landing Page',
        github: 'https://github.com/md-sazzadul/panda-commerce-bootstrap',
        demo: 'https://panda-commerce-sazzad15.netlify.app/#'
    }
]

const Portfolio = () => {
    
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;