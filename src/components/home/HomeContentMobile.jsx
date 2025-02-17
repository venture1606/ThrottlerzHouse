import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import HomeMobile from './HomeMobile';
import BlogsMobile from '../blogs/BlogsMobile';
import ProductMobileHome from '../product/ProductMobileHome'
import HelpMobile from '../help/HelpMobile';

function HomeContentMobile() {

    const location = useLocation();

    const homeRef = useRef(null);
    const productsRef = useRef(null);
    const blogsRef = useRef(null);
    const helpRef = useRef(null);

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
    <div className='App HomeContentMobileContainer'>
        <div id='home' ref={homeRef}>
            <HomeMobile />
        </div>
        <div id='productHome' ref={productsRef}>
            <ProductMobileHome />
        </div>
        <div id='blogs' ref={blogsRef}>
            <BlogsMobile />
        </div>
        <div id='help' ref={helpRef}>
            <HelpMobile />
        </div>
    </div>
  )
}

export default HomeContentMobile