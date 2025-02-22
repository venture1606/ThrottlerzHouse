import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

// Importing the custom hooks
import User from '../api/User'

// Importing the data
import ListItems from '../../assests/data/ListItems.json'

function ProductMobileHome() {
  const navigate = useNavigate();
  const { loading, handleCategoryDetails } = User();

  const categories = useSelector((state) => state.category.categories);
  
  const { product } = ListItems; // Destructuring the data
  const listRef = useRef(null); // Reference for the scrollable container
  const fetchedRef = useRef(false);

  const scrollByCards = (numCards) => {
    const cardWidth = 250; // Width of each card (from CSS)
    const cardGap = 29; // Gap between cards (from CSS)
    const scrollDistance = numCards * (cardWidth + cardGap); // Total scroll distance

    return scrollDistance;
  };

  const scrollLeft = () => {
    if (listRef.current) {
      const distance = scrollByCards(1); // Scroll by 4 cards
      listRef.current.scrollBy({ left: -distance, behavior: 'smooth' });
    }
  };

  const scrollRight = () => { 
    if (listRef.current) {
      const distance = scrollByCards(1); // Scroll by 4 cards
      listRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (!fetchedRef.current) {
      handleCategoryDetails();
      fetchedRef.current = true; // Prevent further API calls
    }
  }, []);

  return (
    <div className='ProductMobileHomeContainer'>
      <button className='SliderMobileButton ButtonStyle left' onClick={scrollLeft}>
        <Icon icon="eva:arrow-left-fill" className='Icon' />
      </button>
      <div className='ProductMobileListContainer' ref={listRef}>
        {
          categories.map((item, index) => (
            <div 
              className='ProductMobileCard cursor-pointer' key={index} 
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
          ))
        }
      </div>
      <button className='SliderMobileButton ButtonStyle right' onClick={scrollRight}>
        <Icon icon="eva:arrow-right-fill" className='Icon' />
      </button>
    </div>
  )
}

export default ProductMobileHome