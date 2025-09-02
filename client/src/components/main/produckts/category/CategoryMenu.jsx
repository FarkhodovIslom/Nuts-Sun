import React from "react";
import './CategoryMenu.css'
import { Link } from "react-router-dom";

function CategoryMenu() {
    const Category = [
        { text: 'Курага', kg: '260кг+', end: 'продано', img: './src/assets/img/products/dried-fruits/dried-apricot-uzb.jpg' },
        { text: 'Финик', kg: '180кг+', end: 'продано', img: './src/assets/img/products/dried-fruits/dried-date.jpg' },
        { text: 'Арахіс', kg: '220кг+', end: 'продано', img: './src/assets/img/products/nuts/peanut-roasted-salty.jpg' },
        { text: 'Миндаль', kg: '280кг+', end: 'продано', img: './src/assets/img/products/nuts/almond-uzb.jpg' }
    ];

    return (
        <div className="category-container">
            <h3>Топ продуктів</h3>
            <div className="category-link">
                <a href="">подивитись все <i class="fa-solid fa-angles-right"></i></a>
            </div>
            <div className="category-cards">
                {Category.map((card) => (
                    <Link to="/category" className="category-card" style={{ backgroundImage: `url(${card.img})` }}>
                        <div className="category-texts">
                            <h2>{card.text}</h2>
                            <span>{card.kg}</span>
                            <p>{card.end}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategoryMenu;