import React from "react";
import './index.css';
import '../../../styles/button.css'
import Hero from "../hero/Hero";
import Carusel from "../carusel/Carusel";
import CategoryMenu from "../produckts/category/CategoryMenu";
import Produckt from "../produckts/produckt/Produckt";
import Timer from "../timer/Timer";
import Infinits from "../infinity-slider/Infinity";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

function Index() {
    return (
        <div className="index-container">
            <section id="hero">
                <Hero />
            </section>
            <section id="carusel">
                <Carusel />
            </section>
            <section id="category">
                <CategoryMenu />
            </section>
            <section id="produckts">
                <Produckt />
            </section>
            <section id="timer">
                <Timer />
            </section>
            <section id="infinty">
                <Infinits />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="footer">
                <Footer />
            </section>
        </div>
    )
};

export default Index;