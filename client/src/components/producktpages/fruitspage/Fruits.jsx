import React from "react";
import '../Produckts.css'
import FruitsItem from './Fruits.json'
import ProducktsMenu from "../producktsmenu/ProducktsList";
import { useCart } from "../../cart/CartContext";

function Fruits() {
    const { addToCart } = useCart();

    return (
        <div className="pages-container">
            <ProducktsMenu />
            <div className="items-box">
                {FruitsItem.map((item) => (
                    <div key={item.id} className="item">
                        <img className="item-img" src={item.img} alt={item.title} />
                        <div className="item-title">{item.title}</div>
                        <p className="item-dec">{item.kg}</p>
                        <button
                            className="item-btn btn small"
                            onClick={() =>
                                addToCart({
                                    id: item.id,
                                    title: item.title,
                                    img: item.img,
                                    kg: item.kg
                                })}
                        >
                            <i class="fa-solid fa-cart-shopping"></i> Купити
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fruits;