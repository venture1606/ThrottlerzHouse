import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Category from './components/category/Category';
import CategoryMobile from './components/category/CategoryMobile';

import Cart from './components/cart/Cart';
import CartMobile from './components/cart/CartMobile';

import Product from './components/product/Product';
import ProductMobile from './components/product/ProductMobile';

import HomeContent from './components/home/HomeContent';
import HomeContentMobile from './components/home/HomeContentMobile';

import Login from './components/login/Login';
import LoginMobile from './components/login/LoginMobile';

import Order from './components/order/Order';
import OrderMobile from './components/order/OrderMobile';

import Navbar from './components/common/Navbar';

import './App.css';
import { useSelector } from 'react-redux';
import { useBreakpointValue } from '@chakra-ui/react';
import NavbarMobile from './components/common/NavbarMobile';

function App() {

  const mode = useSelector((state) => state.message.mode);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  if (mode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  return (
    <Router className="CommonStyle">

      {isMobile ? <NavbarMobile /> : <Navbar />}

      <Routes>
        <Route path='/' element={isMobile ? <HomeContentMobile /> : <HomeContent />}/>
        <Route path='/product' element={ isMobile ? <ProductMobile /> : <Product />} />
        <Route path='/login' element={isMobile ? <LoginMobile /> : <Login />} />
        <Route path='/category' element={isMobile ? <CategoryMobile /> : <Category />} />
        <Route path='/cart' element={isMobile ? <CartMobile /> : <Cart />} /> 
        <Route path='/order' element={isMobile ? <OrderMobile /> : <Order />} />
      </Routes>
    </Router>
  );
}

export default App;
