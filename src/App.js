import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Product from './components/product/Product';
import ProductMobile from './components/product/ProductMobile';

import HomeContent from './components/home/HomeContent';
import HomeContentMobile from './components/home/HomeContentMobile';

import Login from './components/login/Login';
import LoginMobile from './components/login/LoginMobile';

import './App.css';
import { useSelector } from 'react-redux';
import { useBreakpointValue } from '@chakra-ui/react';

function App() {

  const mode = useSelector((state) => state.message.mode);
  const isMobile = useBreakpointValue({ base: true, lg: false });

  if (mode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={isMobile ? <HomeContentMobile /> : <HomeContent />}/>
        <Route path='/product' element={ isMobile ? <ProductMobile /> : <Product />} />
        <Route path='/login' element={isMobile ? <LoginMobile /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
