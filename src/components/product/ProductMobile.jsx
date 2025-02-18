import React, { useState, useEffect, useCallback } from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

// importing components
import ReviewCard from '../common/ReviewCard';
import StarRating from '../common/StarRating';

// importing Image
import ProductImage from '../../assests/images/ProductImage.png';

// importing the styles
import '../../assests/styles/productMobile.css'

// importing data
import ListItems from '../../assests/data/ListItems.json';

function ProductMobile() {

    const navigate = useNavigate();
    const { similarProducts, reviews } = ListItems;

    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState(true);
    const [wishlist, setWishlist] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null); // State to manage selected category

      useEffect(() => {
          window.scrollTo(0, 0);
      }, []);

      // Function to toggle the cart state and update icon
      const toggleCart = useCallback(() => {
        setCart((prevCart) => !prevCart);
      }, []);

      // Function to toggle the wishlist state
      const toggleWishlist = useCallback(() => {
          setWishlist((prevWishlist) => !prevWishlist);
      }, []);
    
      // Ensure the quantity is never less than 1
      const handleQuantityChange = (change) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
      };
    
      // Handle category selection
      const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        console.log(`Selected category: ${category}`);
      };

  return (
    <div className='ProductReviewContainer'>
      <div className='ProductMobileContainer'>
          <div className='ProductImageContainer'>
              <img src={ProductImage} alt='Product Image'/>
          </div>
          <div className='ListOfImagesContainer'>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                <div key={index} className='NextImageContainer'>
                  <img src={ProductImage} alt='Product Image'/>
                </div>
              ))
            }
          </div>
          <div className='ProductDetailsContainer'>
              <h2>Apple Watch Series 7</h2>
              <div className='ProductDescriptionContainer'>
                  Product Description: <br/>
                  The Apple Watch Series 7 is a powerful and stylish smartwatch that offers a range of features, including GPS navigation, fitness tracking, and health monitoring.
              </div>
              <div className='ProductCategoryContainer'>
                  <span>Smartwatches</span>
                  <div className='ProductCategoryTagsContainer'>
                    {["Series 7", "GPS", "Water Resistant"].map((category) => (
                      <span
                        key={category}
                        className={`CategoryTag cursor-pointer ${
                          selectedCategory === category ? "activeTag" : ""
                        }`}
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
              </div>
              <div className='ProductPriceContainer'>
                  <span>$399.99</span>
                  <del>$499.99</del>
              </div>
              <div className="ProductImageDetailsContainer">
                <div className="ProductImageDetailsRightContainer">
                  <div className="QuantityContainer">
                    <div
                      className="QuantityButton cursor-pointer ButtonStyle"
                      onClick={() => handleQuantityChange(1)}
                    >
                      <Icon icon="material-symbols:add-rounded" className="Icon" />
                    </div>
                    <span>{quantity}</span>
                    <div
                      className="QuantityButton cursor-pointer ButtonStyle"
                      onClick={() => handleQuantityChange(-1)}
                    >
                      <Icon icon="fluent:subtract-12-filled" className="Icon" />
                    </div>
                  </div>
                  <div
                    className="AddToCartButton cursor-pointer ButtonStyle"
                    onClick={toggleCart}
                  >
                    <Icon
                        icon={cart ? "solar:cart-check-bold" : "solar:cart-cross-bold"}
                        className="Icon"
                    />
                    <span>{cart ? "Remove from Cart" : "Add to Cart"}</span>
                  </div>
                </div>
                <div
                    className="WishlistButton cursor-pointer ButtonStyle"
                    onClick={toggleWishlist}
                >
                  <Icon
                      icon={wishlist ? "material-symbols:favorite-rounded" : "material-symbols:favorite-outline-rounded"}
                      className="Icon"
                  />
                </div>
              </div>
              <div className="ProductRatingContainer">
                <button className="ButtonStyle">Write a review</button>
                <div className="ProductRating">
                  <StarRating rating={4.5}/>
                  <span>4.5</span>
                </div>
              </div>
              <button className="BuyNowButton cursor-pointer ButtonStyle" onClick={() => navigate('/order')}>
                <Icon icon="akar-icons:cart" className="Icon" />
                <span>Buy Now</span>
              </button>
          </div>
      </div>
      <div className='ReviewSectionContainer'>
        <div className="RatingSliderContainer">
            <div className="RatesContainer">
                <span><StarRating rating={5}/></span>
                <span>5</span>
            </div>
            <hr/>
            <div className="PeopleRateContainer">
                <div className="StarsContainer">
                  <span>5</span>
                  <div className="Slider">
                    <div className="SliderFill" style={{width: `${22}%`}}></div>
                  </div>
                  <span>184</span>
                </div>
                <div className="StarsContainer">
                  <span>4</span>
                  <div className="Slider">
                    <div className="SliderFill" style={{width: `${52}%`}}></div>
                  </div>
                  <span>184</span>
                </div>
                <div className="StarsContainer">
                  <span>3</span>
                  <div className="Slider">
                    <div className="SliderFill" style={{width: `${12}%`}}></div>
                  </div>
                  <span>184</span>
                </div>
                <div className="StarsContainer">
                  <span>2</span>
                  <div className="Slider">
                    <div className="SliderFill" style={{width: `${8}%`}}></div>
                  </div>
                  <span>184</span>
                </div>
                <div className="StarsContainer">
                  <span>1</span>
                  <div className="Slider">
                    <div className="SliderFill" style={{width: `${69}%`}}></div>
                  </div>
                  <span>184</span>
                </div>
            </div>
        </div>
        <div className="ReviewContainer">
            {
              reviews.map((item, index) => (
                <ReviewCard key={index} data={item}/>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default ProductMobile