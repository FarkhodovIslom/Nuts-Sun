import React from "react";
import './ProducktsList.css';
import { NavLink } from "react-router-dom";

function ProducktsMenu() {
    const MenuLink = [
        { name: 'Сухофрукти', link: '/fruits' },
        { name: 'Горіхи', link: '/nuts' },
        { name: 'Солодощі', link: '/sweets' },
        { name: 'Кава', link: '/cofee' },
        { name: 'Турецкий солодишя', link: '/turk' },
        { name: 'Крупи', link: '/cereals' },
        { name: 'Спеції', link: '/spices' },
    ]

    return (
        <div className="menu-container">
            {MenuLink.map((link, index) => (
                <div key={index}>
                    <NavLink to={link.link} className={({ isActive }) => isActive ? "menu-link active" : "menu-link"}>{link.name}</NavLink>
                </div>
            ))}
        </div>
    )
}

export default ProducktsMenu;