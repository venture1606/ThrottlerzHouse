import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

import Home from "./Home";
import ProductHome from "../product/ProductHome";
import Blogs from "../blogs/Blogs";
import Help from "../help/Help";

import "../../assests/styles/home.css";

const HomeContent = () => {
  const location = useLocation();

  // Refs for each section
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const blogsRef = useRef(null);
  const helpRef = useRef(null);

  // Scroll to the correct section when navigated back
  useEffect(() => {
    if (location.state?.scrollTo) {
      const sections = {
        home: homeRef,
        productHome: productsRef,
        blogs: blogsRef,
        help: helpRef,
      };

      sections[location.state.scrollTo]?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="App">

      {/* Home Section */}
      <div id="home" ref={homeRef}>
        <Home />
      </div>

      {/* Product Section */}
      <div id="productHome" ref={productsRef}>
        <ProductHome />
      </div>

      {/* Blogs Section */}
      <div id="blogs" ref={blogsRef}>
        <Blogs />
      </div>

      {/* Help Section */}
      <div id="help" ref={helpRef}>
        <Help />
      </div>

      {/* WhatsApp Floating Button */}
      <div className="toggle-whatsapp cursor-pointer ButtonStyle" onClick={() => window.open("https://wa.me/918248897561", "_blank")}>
        <Icon icon="ic:baseline-whatsapp" className="Icon" />
      </div>
    </div>
  );
};

export default HomeContent;
