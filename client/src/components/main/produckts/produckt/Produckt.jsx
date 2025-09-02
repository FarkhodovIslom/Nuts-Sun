import React, { useState, useEffect } from "react";
import './Produckt.css';
import ProducktData from './Produckt.json'

function Produckt() {
    const [produckt, setProduckt] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("produckt"));
        if(saved) {
            setProduckt(saved)
        } else {
            setProduckt(ProducktData);
        }
    }, []);

    const updateProduckt = updated => {
        setProduckt(updated);
        localStorage.setItem("produckt", JSON.stringify(updated));
    };

    const toggleLike = id => {
        const updated = produckt.map(p => p.id === id ? {...p, like: !p.like} : p)
        updateProduckt(updated)
    }

    const toggleAdded = id => {
        const updated = produckt.map(p => p.id === id ? {...p, added: !p.added} : p);
        updateProduckt(updated);
    }

    return (
        <div className="produckt-container">
            <h1>Сухофрукти</h1>
            <div className="produckt-link">
                <a href="">подивитись все <i class="fa-solid fa-angles-right"></i></a>
            </div>
            <div className="produckt-list">
                {produckt.map(card => (
                    <div className="produckt-card" key={card.id}>
                        <div className="produckt-img" style={{ backgroundImage: `url(${card.img})` }}>
                            <div className="produck-bg">
                                <button className={`produckt-like ${card.like ? 'active' : ''}`} onClick={() => toggleLike(card.id)}><i class="fa-regular fa-heart"></i></button>
                            </div>
                        </div>
                        <h2>{card.text}</h2>
                        <p>Ціна: <span>{card.kg}</span></p>
                        <button 
                        onClick={() => toggleAdded(card.id)}
                        className={`produckt-add ${card.added ? 'active' : ''}`}
                        ><i class={`fa-solid ${card.added ? 'fa-cart-arrow-down' : 'fa-cart-plus'}`}></i> {card.added ? 'Added' : 'купити'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Produckt;