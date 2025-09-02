import React from "react";
import './Footer.css';
import { HashLink } from "react-router-hash-link";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-input">
                <div className="footer-title">Підпишіться, щоб першими отримувати всі оновлення продукту</div>
                <form action="" className="footer-form">
                    <input type="text" placeholder="адресу електронної пошти" required/>
                    <button type="submit">Підпишіться</button>
                </form>
            </div>
            <div className="footer-box">
                <div className="footer-links">
                    <h2>Nuts Sun</h2>
                    <div className="footer-line"></div>
                    <p>Ми раді, що ви завітали на наш сайт</p>
                    <div className="footer-list">
                        <a className="footer-icon" href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
                        <a className="footer-icon" href="https://www.telegam.com"><i class="fa-brands fa-telegram"></i></a>
                    </div>
                </div>
                <div className="footer-links">
                    <h2>Menu</h2>
                    <div className="footer-line"></div>
                    <a className="footer-link" href="#hero">Головна</a> <br />
                    <a className="footer-link" href="#carusel">Про нас</a> <br />
                    <a className="footer-link" href="#timer">Послуги</a> <br />
                    <a className="footer-link" href="#produckts">Продукти</a> <br />
                    <a className="footer-link" href="#contact">Зв'язатися з нами</a>
                </div>
                <div className="footer-links">
                    <h2>Кращі продукти</h2>
                    <div className="footer-line"></div>
                    <HashLink className="footer-link" to="/fruits#">Курага</HashLink> <br />
                    <HashLink className="footer-link" to="/fruits#">Финик</HashLink> <br />
                    <HashLink className="footer-link" to="/nuts#">Арахіс</HashLink> <br />
                    <HashLink className="footer-link" to="/nuts#">Фісташки</HashLink> <br />
                    <HashLink className="footer-link" to="/fruits#">Пекан</HashLink> <br />
                </div>
                <div className="footer-links">
                    <h2>Easy Payment</h2>
                    <div className="footer-line"></div>
                    <a className="footer-pay" href=""><i class="fa-brands fa-cc-amazon-pay"></i></a>
                    <a className="footer-pay" href=""><i class="fa-brands fa-cc-mastercard"></i></a>
                    <a className="footer-pay" href=""><i class="fa-brands fa-cc-paypal"></i></a>
                    <a className="footer-pay" href=""><i class="fa-brands fa-cc-visa"></i></a>
                </div>
            </div>
        </div>
    )
};

export default Footer;