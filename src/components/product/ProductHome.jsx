import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import User from '../api/User';

// importing styles
import '../../assests/styles/product.css';

function ProductHome() {

    const navigate = useNavigate();
    const { loading, handleCategoryDetails } = User();

    const categories = useSelector((state) => state.category.categories);
    const listRef = useRef(null); // Reference for the scrollable container
    const fetchedRef = useRef(false);

    console.log(categories);

    const scrollByCards = (numCards) => {
        const cardWidth = 250; // Width of each card (from CSS)
        const cardGap = 29; // Gap between cards (from CSS)
        const scrollDistance = numCards * (cardWidth + cardGap); // Total scroll distance

        return scrollDistance;
    };


    const scrollLeft = () => {
        const distance = scrollByCards(4); // Scroll by 4 cards
        listRef.current.scrollBy({ left: -distance, behavior: 'smooth' });
    };

    const scrollRight = () => {
        const distance = scrollByCards(4); // Scroll by 4 cards
        listRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    };

    useEffect(() => {
        if (!fetchedRef.current) {
            handleCategoryDetails();
            fetchedRef.current = true; // Prevent further API calls
        }
    }, []);

    return (
        <div className='ProductHomeContainer'>
            <button className='SliderButton ButtonStyle left' onClick={scrollLeft}>
                <Icon icon="eva:arrow-left-fill" className='Icon' />
            </button>
            <div className='ProductListContainer' ref={listRef}>
                {categories.map((item, index) => (
                    <div className='ProductCard cursor-pointer' key={index}
                      style={{
                            backgroundImage: `url(${item.image.url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        onClick={() => navigate('/category')}
                    >
                        <h3>{item.name}</h3>
                        <p>{item.productsCount} products available</p>
                    </div>
                ))}
            </div>
            <button className='SliderButton ButtonStyle right' onClick={scrollRight}>
                <Icon icon="eva:arrow-right-fill" className='Icon' />
            </button>
        </div>
    );
}

export default ProductHome;
