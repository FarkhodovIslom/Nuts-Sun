import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './styles/variables.css';
import './styles/global.css';
import './styles/font.css';
import Navbar from './components/navbar/Navbar'
import Index from './components/main/index';

import Category from './components/category/Category';
import Fruits from './components/producktpages/fruitspage/Fruits';
import Nuts from './components/producktpages/nuts/Nuts';
import Sweets from './components/producktpages/sweets/Sweets';
import Cofee from './components/producktpages/cofee/Cofee';
import Turk from './components/producktpages/tw-turk/Turk';
import Cereals from './components/producktpages/cereals/Cereals';
import Spices from './components/producktpages/spices/Spices';
import CartPage from './components/cart/Cart';
import { CartProvider } from './components/cart/CartContext';

function App() {
  return (
    <CartProvider>
    <Router>
    <div className='app-container'>
      <section id='navbar'>
        <Navbar />
      </section>
      <section id='main'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/category' element={<Category />} />
          <Route path='/fruits' element={<Fruits />} />
          <Route path='/nuts' element={<Nuts />} />
          <Route path='/sweets' element={<Sweets />} />
          <Route path='/cofee' element={<Cofee />} />
          <Route path='/turk' element={<Turk />} />
          <Route path='/cereals' element={<Cereals />} />
          <Route path='/spices' element={<Spices />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </section>
    </div>
    </Router>
    </CartProvider>
  )
}

export default App
