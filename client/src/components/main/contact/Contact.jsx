import React from "react";
import './Contact.css';

function Contact() {

    return (
        <div className="contact-container">
            <div className="contact-list">
                <h1 className="contact-title">Зв'яжіться з нами</h1>
                <div className="contact-box">
                    <div className="contact-data">
                        <div className="data-title">Місцезнаходження</div>
                        <div className="contact-link">
                            <i class="fa-solid fa-map-location-dot"></i>
                            <a href="https://maps.app.goo.gl/cANN4AQWzuXoFF1V6">Киев, Киевская улица, 2 В Гатное</a>
                        </div>
                        <div className="contact-link">
                            <i class="fa-solid fa-envelope"></i>
                            <a href="mailto:nuts.sun01@gmail.com">nuts.sun01@gmail.com</a>
                        </div>
                        <div className="contact-link">
                            <i class="fa-solid fa-phone"></i>
                            <a href="tel:+380 68 102 01 01">+380 68 102 01 01</a>
                        </div>
                    </div>
                    <form action="">
                        <div className="input-box">
                            <div className="input">
                                <input type="text" placeholder="" required/>
                                <label>Ім'я</label>
                            </div>
                            <div className="input">
                                <input type="text" placeholder="" required/>
                                <label>Прізвище</label>
                            </div>
                        </div>
                        <div className="input-l">
                            <input type="email" placeholder="" required/>
                            <label htmlFor="">Електронна пошта</label>
                        </div>
                        <div className="input-l">
                            <textarea placeholder="" required></textarea>
                            <label>повідомлення</label>
                        </div>
                        <button className="contact-btn btn" type="submit">Надіслати</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;