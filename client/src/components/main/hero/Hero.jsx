import React, { useState, useEffect } from "react";
import './Hero.css'

function Hero() {
    const [index, setIndex] = useState(0);
    const bgImages = [
        { id: 1, url: './src/assets/img/background/hero-bg1.jpg' },
        { id: 1, url: './src/assets/img/background/hero-bg2.jpg' },
        { id: 1, url: './src/assets/img/background/hero-bg3.jpg' }
    ];

    const nextBg = () => {
        setIndex((prev) => (prev + 1) % bgImages.length);
    };

    const prevBg = () => {
        setIndex((prev) => (prev - 1 + bgImages.length) % bgImages.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextBg();
        }, 5000)

        return () => clearInterval(interval)
    },);

    return (
        <div className="hero-container" style={{ backgroundImage: `url(${bgImages[index].url})` }}>
            {/* <div className="overlay"></div> */}
            <div className="hero-all">
                <div className="hero-texts container">
                    <h1>Спробуйте сухофрукти з великою знижкою та ведіть здоровий спосіб життя</h1>
                    <p>Ласкаво просимо до нашого магазину сухофруктів, де ви знайдете різноманітні смачні та поживні закуски для здоров’я та щастя.</p>
                    <div className="hero-btns">
                        <button className="btn liner"><a href="#category">Досліджувати</a></button>
                        <button className="btn liner"><a href="#">Купити</a></button>
                    </div>
                </div>
                <div className="hero-slide">
                    <button onClick={prevBg}><i class="fa-solid fa-arrow-left"></i></button>
                    <button onClick={nextBg}><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Hero