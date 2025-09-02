import React from "react";
import { useCart } from "./CartContext";
import ProducktsMenu from "../producktpages/producktsmenu/ProducktsList";
import './Cart.css';
import '../producktpages/Produckts.css'

function CartPage() {
    const { cart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useCart();

    return (
        <div className="pages-container">
            <ProducktsMenu />
            <div className="cart-page">
                <h2 className="cart-title">Корзина</h2>
                {cart.length === 0 ? (
                    <p className="cart-dec">Корзина пуста.</p>
                ) : (
                    <div className="cart-box">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.img} alt={item.title} width="100" />
                                <h4>{item.title}</h4>
                                <p>{item.kg || item.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                </div>
                                <button className="cart-delete" onClick={() => removeFromCart(item.id)}><i class="fa-solid fa-trash"></i> Выключать</button>
                            </div>
                        ))}
                        <div className="cart-clear-b">
                            <button onClick={clearCart} className="clear-btn">Очистить корзину</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartPage;