import React, { useState, useRef, useEffect } from "react";
import './Carusel.css';
import caruselData from './CaruselItem.json'

function Carusel() {
    const caruselRef = useRef(null);
    const [active, setActive] = useState(0);
    const startX = useRef(0);
    const currentX = useRef(0)
    const isDagging = useRef(false);
    const [cardWidth, setCardWidth] = useState(600);

    const gap = 20
    const totalWidth = cardWidth + gap;

    const handleMouseDown = (e) => {
        isDagging.current = true;
        startX.current = e.clientX || e.touches[0].clientX;
    }

    const handleMouseMove = e => {
        if(!isDagging.current) return;
        currentX.current = e.clientX || e.touches[0].clientX;
    }

    const handleMouseUp = () => {
        if(!isDagging.current) return;
        const diff = startX.current - currentX.current;

        if(diff > 50 && active < caruselData.length - 1) {
            setActive((prev) => prev + 1);
        } else if(diff < -50 && active > 0) {
            setActive((prev) => prev - 1);
        }
        isDagging.current = false
    }

    const style = {
        transform: `translateX(calc(50% - ${(active + 0.5) * totalWidth}px))`,
        transition: "transform 0.4s ease"
    }

    useEffect(() => {
        const updateWidth = () => {
            if(window.innerWidth < 600) {
                setCardWidth(300);
            }else if(window.innerWidth < 992) {
                setCardWidth(400)
            } else {
                setCardWidth(600)
            }
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => {
            window.removeEventListener('resize', updateWidth);
        };
    }, []);

    return (
        <div className="carusel-container">
            <h3 className="carusel-title">Про нас</h3>
            <div className="carusel"
                ref={caruselRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
            >
                <div className="carusel-cards" style={style}>
                    {caruselData.map((carusel, i) => (
                        <div className={`carusel-card ${i === active ? 'active' : i < active ? "left" : "right"}`} key={carusel.id} style={{ backgroundImage: `url(${carusel.img})`, width: cardWidth}}>
                            <p>{carusel.text}</p>
                        </div>
                    ))}
                </div>
                <div className="dots">
                    {caruselData.map((_, i) => (
                        <span key={i} className={`dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}></span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Carusel;