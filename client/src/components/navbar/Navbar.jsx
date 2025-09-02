import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './Navbar.css';

function Navbar() {
    const [scrolled, setScroll] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuTransform, setMenuTransform] = useState(false);
    const [searchTransform, setSearchTransform] = useState(false);
    
    const NavbarLink = [
        { name: 'Головна', link: '/#hero' },
        { name: 'Про нас', link: '/#carusel' },
        { name: 'Послуги', link: '/#timer' },
        { name: 'Продукти', link: '/#produckts' },
        { name: `Зв'язатися з нами`, link: '/#contact' }
    ]

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 30) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    const barTransform = () => {
        setMenuTransform(!menuTransform);
    }

    const menuClick = () => {
        toggleMenu()
        barTransform()
    }

    const toggleSearch = () => {
        setSearchTransform(!searchTransform);
    }

    return (
        <div className="navbar-container">
            <nav className={`navbar ${scrolled ? 'active' : ''}`}>
                <div className="logo">
                    <Link to="/"><img src="./logo.png" alt=""/></Link>
                </div>
                <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
                    {NavbarLink.map((item, index) => (
                        <li className="nav-item" key={index}>
                            <HashLink smooth to={item.link} className="nav-link">{item.name}</HashLink>
                        </li>
                    ))}
                </ul>
                <div className={`search-bar ${searchTransform ? 'active' : ''}`}>
                    <label htmlFor=""><i class="fa-solid fa-magnifying-glass"></i></label>
                    <input type="search" placeholder="Пошук..." />
                </div>
                <div className="nav-contact">
                    <div className="nav-search" onClick={toggleSearch}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <a href=""><i class="fa-solid fa-phone"></i></a>
                    <Link to="/cart" className="save-product"><i class="fa-solid fa-cart-arrow-down"></i></Link>
                    <a href=""><i class="fa-solid fa-user"></i></a>
                    <div className={`nav-menu ${menuTransform ? 'active' : ''}`} onClick={menuClick}>
                        <div className="nav-line"></div>
                        <div className="nav-line"></div>
                        <div className="nav-line"></div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;