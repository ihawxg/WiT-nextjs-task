import React, {useState } from 'react';
import Link from 'next/link';
import { Slide } from '@/types/types';


const Carousel: React.FC<{ slides: Slide[] }> = ({ slides }) => {

    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const prevSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    const nextSlide = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <Link key={index} passHref legacyBehavior href={'/post-single'}>
                        <div key={slide.id} className={`carousel-item ${currentSlide === index ? 'active' : ''}`}>
                            <section className="single-header" style={{ backgroundImage: `url('${slide.imageUrl}')` }}>
                                <div className="container">
                                    <a href="#" className="bookmark"><i className="fal fa-bookmark"></i></a>
                                    <ul className="post-categories">
                                        <li><a href="#">TRAVEL</a></li>
                                        <li><a href="#">LIFESTYLE</a></li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </Link>
                ))}
            </div>
            <button className="carousel-control-prev" onClick={prevSlide}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" onClick={nextSlide}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
