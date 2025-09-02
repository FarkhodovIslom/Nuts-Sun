import React from "react";
import ProducktsMenu from "../producktsmenu/ProducktsList";
import { Link } from "react-router-dom";

function Spices() {
    return (
        <div className="pages-container">
            <ProducktsMenu />
            <h1 className="spices-text" style={{ 
                backgroundColor: 'var(--black-color)',
                color: 'var(--white-color)',
                textAlign: 'center',
                padding: '5px 0',
                }}><Link to='/' style={{ color: 'var(--green-color)', textDecoration: 'underline' }}>NUTS-SUN©</Link> 2023 Всі права захищені</h1>
        </div>
    )
}

export default Spices;