import React from "react";
import '../Produckts.css'
import FruitsItem from './Fruits.json'
import ProducktsMenu from "../producktsmenu/ProducktsList";

function Fruits() {
    return (
        <div className="pages-container">
            <ProducktsMenu />
            <div className="items-box">
                {FruitsItem.map((item) => (
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

export default Fruits;