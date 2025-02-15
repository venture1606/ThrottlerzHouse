import React, { useRef } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js';

import Navbar from '../common/Navbar'
import Home from './Home'
import ProductHome from '../product/ProductHome'
import Blogs from '../blogs/Blogs'
import Help from '../help/Help'
import ToggleButton from '../common/ToggleButton'

import '../../assests/styles/home.css'

const HomeContent = () => {
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const blogsRef = useRef(null);
  const helpRef = useRef(null);

  return (
    <div className="App">
    <Navbar
        onNavigate={(section) => {
            if (section === "home" && homeRef.current) homeRef.current.scrollIntoView({ behavior: "smooth" });
            if (section === "products" && productsRef.current) productsRef.current.scrollIntoView({ behavior: "smooth" });
            if (section === "blogs" && blogsRef.current) blogsRef.current.scrollIntoView({ behavior: "smooth" });
            if (section === "help" && helpRef.current) helpRef.current.scrollIntoView({ behavior: "smooth" });
        }}
    />
    <div ref={homeRef}>
        <Home />
    </div>
    <div ref={productsRef}>
        <ProductHome />
    </div>
    <div ref={blogsRef}>
        <Blogs />
    </div>
    <div ref={helpRef}>
        <Help
            onNavigate={(section) => {
            if (section === "home" && homeRef.current) homeRef.current.scrollIntoView({ behavior: "smooth" });
            if (section === "products" && productsRef.current) productsRef.current.scrollIntoView({ behavior: "smooth" });
            if (section === "blogs" && blogsRef.current) blogsRef.current.scrollIntoView({ behavior: "smooth" });
            if (section === "help" && helpRef.current) helpRef.current.scrollIntoView({ behavior: "smooth" });
        }}
        />
    </div>
    <div className='toggle-whatsapp cursor-pointer ButtonStyle' onClick={() => window.open('https://wa.me/917871269665', '_blank')}>
        <Icon icon="ic:baseline-whatsapp" className='Icon'/>
    </div>
    </div>
  );
};

export default HomeContent