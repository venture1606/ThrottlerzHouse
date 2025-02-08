import React, { useRef } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

import '../../assests/styles/product.css';
import ListItems from '../../assests/data/ListItems.json';

function ProductHome() {
    const { product } = ListItems;
    const listRef = useRef(null); // Reference for the scrollable container

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

    return (
        <div className='ProductHomeContainer'>
            <button className='SliderButton ButtonStyle left' onClick={scrollLeft}>
                <Icon icon="eva:arrow-left-fill" className='Icon' />
            </button>
            <div className='ProductListContainer' ref={listRef}>
                {product.map((item, index) => (
                    <div className='ProductCard cursor-pointer' key={index}
                      style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* <img src={item.image} alt={item.name} /> */}
                        <h3>{item.name}</h3>
                        <p>{item.count} products available</p>
                        {/* <p>{item.description}</p> */}
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
