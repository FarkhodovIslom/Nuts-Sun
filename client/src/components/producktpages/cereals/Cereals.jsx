import React from "react";
import '../Produckts.css';
import CerealsItem from './Cereals.json'
import ProducktsMenu from "../producktsmenu/ProducktsList";

function Cereals() {
    return (
        <div className="pages-container">
            <ProducktsMenu />
            <div className="items-box">
                {CerealsItem.map((item) => (
                    <div className="item" key={item.id}>
                        <img className="item-img" src={item.img} />
                        <div className="item-title">{item.title}</div>
                        <p className="item-dec">{item.kg}</p>
                        <button className="item-btn btn small"><i class="fa-solid fa-cart-shopping"></i> купити</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cereals;