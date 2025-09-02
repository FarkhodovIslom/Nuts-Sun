import React, { useRef, useState, useEffect } from 'react';
import './Infinity.css';
import sliderData from './Infinity.json';

const Infinits = () => {
    const [position, setPosition] = useState(0);
    const [cardWidth, setCardWidth] = useState(0); 
    const [isTransitioning, setIsTransitioning] = useState(true);
    const startX = useRef(0);
    const currentX = useRef(0);
    const isDragging = useRef(false);
    const sliderRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setCardWidth(window.innerWidth);
            } else {
                setCardWidth(window.innerWidth / 3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const createInfiniteArray = () => {
        return [...sliderData, ...sliderData, ...sliderData, ...sliderData];
    };

    const infiniteData = createInfiniteArray();

    useEffect(() => {
        const autoSlide = setInterval(() => {
            if (!isDragging.current) {
                setPosition(prev => prev + 1);
            }
        }, 3000);

        return () => clearInterval(autoSlide);
    }, []);

    useEffect(() => {
        if (position >= sliderData.length * 3) {
            setTimeout(() => {
                setIsTransitioning(false);
                setPosition(sliderData.length);
                setTimeout(() => setIsTransitioning(true), 50);
            }, 400);
        } else if (position < sliderData.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setPosition(sliderData.length * 2);
                setTimeout(() => setIsTransitioning(true), 50);
            }, 400);
        }
    }, [position]);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.clientX || e.touches?.[0]?.clientX;
        e.preventDefault();
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        currentX.current = e.clientX || e.touches?.[0]?.clientX;
    };

    const handleMouseUp = () => {
        if (!isDragging.current) return;
        const diff = startX.current - currentX.current;

        if (diff > 50) {
            setPosition(prev => prev + 1);
        } else if (diff < -50) {
            setPosition(prev => prev - 1);
        }

        isDragging.current = false;
    };

    const getTextAlignment = (position) => {
        switch (position) {
            case 'left': return 'text-left';
            case 'right': return 'text-right';
            case 'center':
            default: return 'text-center';
        }
    };

    return (
        <div className="slider-container">
            <div className="infinty-text">
                <h1>рекомендований <i class="fa-solid fa-angles-right"></i></h1>
            </div>
            <div
                ref={sliderRef}
                className="slider-track"
                style={{
                    transform: `translateX(-${position * cardWidth}px)`,
                    transition: isTransitioning ? 'transform 0.4s ease' : 'none',
                    width: `${infiniteData.length * cardWidth}px`
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
            >
                {infiniteData.map((slide, index) => (
                    <div
                        key={`${slide.id}-${Math.floor(index / sliderData.length)}`}
                        className="slider-card"
                        style={{ width: cardWidth }}
                    >
                        <div className="slide-bg">
                            <div className={`slide-content ${getTextAlignment(slide.position)}`}>
                                <div className="slide-title">
                                    <img src={slide.img} alt={slide.title} />
                                    <h2>{slide.title}</h2>
                                </div>
                                <p className="slide-dec"><i class="fa-solid fa-quote-left"></i> {slide.dec} <i class="fa-solid fa-quote-right"></i></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Infinits;