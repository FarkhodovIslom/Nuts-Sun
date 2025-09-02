import React from "react";
import './Category.css';
import { Link } from "react-router-dom";

const CategoryItem = [
    { title: 'Сухофрукти', link: '/fruits', img: './src/assets/img/banner/fruit.jpg' },
    { title: 'Горіхи', link: '/nuts', img: './src/assets/img/background/contact.jpg' },
    { title: 'Солодощі', link: '/sweets', img: './src/assets/img/banner/sweets.jpg' },
    { title: 'Кава', link: '/cofee', img: './src/assets/img/banner/coffee.jpg' },
    { title: 'Турецкий солодишя', link: '/turk', img: './src/assets/img/banner/sweets-2.jpg' },
    { title: 'Крупи', link: '/cereals', img: './src/assets/img/banner/cereal.jpeg' },
    { title: 'Спеції', link: '', img: './src/assets/img/banner/spice.jpg' }
]

function Category() {
    return (
        <div className="category-container">
            <h1 className="category-title">Категоріі</h1>
            <div className="banner-box">
                <div className="banner-cards">
                    {CategoryItem.slice(0, 3).map((item, index) => (
                        <Link to={item.link} className="banner-card" key={index} style={{ backgroundImage: `url(${item.img})` }}>
                            <h1>{item.title}</h1>
                        </Link>
                    ))}
                </div>
                <div className="banner-cards">
                    {CategoryItem.slice(3, 5).map((item, index) => (
                        <Link to={item.link} className="banner-card" key={index} style={{ backgroundImage: `url(${item.img})` }}>
                            <h1>{item.title}</h1>
                        </Link>
                    ))}
                </div>
                <div className="banner-cards">
                    {CategoryItem.slice(5, 7).map((item, index) => (
                        <Link to={item.link} className="banner-card" key={index} style={{ backgroundImage: `url(${item.img})` }}>
                            <h1>{item.title}</h1>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Category;