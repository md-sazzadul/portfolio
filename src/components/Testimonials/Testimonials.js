import React from 'react';
import './Testimonials.css';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
    {
        avatar: 'Avatar',
        name: 'Tina Snow',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quaerat mollitia velit facere itaque temporibus fuga aut voluptatum cumque maxime assumenda hic minima molestias, maiores ipsa molestiae sit reiciendis illo.'
    },
    {
        avatar: 'Avatar',
        name: 'Tina Snow',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quaerat mollitia velit facere itaque temporibus fuga aut voluptatum cumque maxime assumenda hic minima molestias, maiores ipsa molestiae sit reiciendis illo.'
    },
    {
        avatar: 'Avatar',
        name: 'Tina Snow',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quaerat mollitia velit facere itaque temporibus fuga aut voluptatum cumque maxime assumenda hic minima molestias, maiores ipsa molestiae sit reiciendis illo.'
    },
    {
        avatar: 'Avatar',
        name: 'Tina Snow',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quaerat mollitia velit facere itaque temporibus fuga aut voluptatum cumque maxime assumenda hic minima molestias, maiores ipsa molestiae sit reiciendis illo.'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                        // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src="" alt={avatar} />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;