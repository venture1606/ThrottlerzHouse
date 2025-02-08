import React, { useRef } from 'react'
import { useBreakpointValue } from '@chakra-ui/react';

import NavbarMobile from '../common/NavbarMobile'
import HomeMobile from './HomeMobile';
import Home from './Home';
import BlogsMobile from '../blogs/BlogsMobile';
import ProductMobileHome from '../product/ProductMobileHome'
import HelpMobile from '../help/HelpMobile';

function HomeContentMobile() {

    const isMobile = useBreakpointValue({ base: true, md: false });

    const homeRef = useRef(null);
    const productsRef = useRef(null);
    const blogsRef = useRef(null);
    const helpRef = useRef(null);

  return (
    <div className='App HomeContentMobileContainer'>
        <div ref={homeRef}>
            { isMobile ? <HomeMobile /> : <Home />}
        </div>
        <div ref={productsRef}>
            <ProductMobileHome />
        </div>
        <div ref={blogsRef}>
            <BlogsMobile />
        </div>
        <div ref={helpRef}>
            <HelpMobile />
        </div>
        <NavbarMobile 
            onNavigate={(section) => {
                if (section === "home" && homeRef.current) homeRef.current.scrollIntoView({ behavior: "smooth" });
                if (section === "products" && productsRef.current) productsRef.current.scrollIntoView({ behavior: "smooth" });
                if (section === "blogs" && blogsRef.current) blogsRef.current.scrollIntoView({ behavior: "smooth" });
                if (section === "help" && helpRef.current) helpRef.current.scrollIntoView({ behavior: "smooth" });
            }}
        />
    </div>
  )
}

export default HomeContentMobile