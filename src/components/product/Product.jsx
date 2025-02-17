import React, { useState, useEffect, useCallback } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

// importing components
import ReviewCard from "../common/ReviewCard";
import StarRating from "../common/StarRating";

// importing Image
import ProductImage from "../../assests/images/ProductImage.png";

// importing data
import ListItems from "../../assests/data/ListItems.json";

function Product() {
  const navigate = useNavigate();
  const { similarProducts, reviews } = ListItems;

  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(true);
  const [wishlist, setWishlist] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // State to manage selected category

  // Update the icon based on the cart state
  useEffect(() => {
    window.scrollTo(0, 0);
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

  const toggleCart = useCallback(() => {
    setCart((prevCart) => !prevCart);
  }, []);
  
  // Function to toggle the wishlist state
  const toggleWishlist = useCallback(() => {
      setWishlist((prevWishlist) => !prevWishlist);
  }, []);

  return (
    <div className="ProductReviewContainer">
      <div className="ProductContainer">
        <div className="ProductDetailsContainer">
          <div className="ProductContentContainer">
            <h2>Apple Watch Series 7</h2>
            <div className="ProductDescriptionContainer">
              Product Description: <br />
              The Apple Watch Series 7 is a powerful and stylish smartwatch that
              offers a range of features, including GPS navigation, fitness
              tracking, and health monitoring.
            </div>
            <div className="ProductCategoryContainer">
              <span>Smartwatches</span>
              <div className="ProductCategoryTagsContainer">
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
            <div className="ProductFeaturesContainer">
              Product Features: <br />
              Feature are briefly written below the page.
            </div>
            <span>
              $399.00 <del>$499.00</del> <b>20% off</b> <br />
            </span>
            <div className="ProductRatingContainer">
              <button className="ButtonStyle">Write a review</button>
              <div className="ProductRating">
                <StarRating rating={4.5} />
                <span>4.5</span>
              </div>
            </div>
          </div>
          <div className="SimilarProductsContainer">
            {similarProducts.map((item, index) => (
              <div key={index} className="SimilarProduct cursor-pointer">
                <img src={item.img} alt="Product" />
              </div>
            ))}
          </div>
        </div>
        <div className="ProductImageContainer">
          <div className="ProductNavigationContainer">
            <div className="ProductNavigationButton cursor-pointer ButtonStyle">
              <Icon icon="carbon:chevron-left" className="Icon" />
            </div>
            <div className="ProductNavigationButton cursor-pointer ButtonStyle">
              <Icon icon="carbon:chevron-right" className="Icon" />
            </div>
          </div>
          <img src={ProductImage} alt="Product" />
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
        </div>
      </div>
      <div className="ReviewSectionContainer">
        <div className="ReviewContainer">
            {
              reviews.map((item, index) => (
                <ReviewCard key={index} data={item}/>
              ))
            }
        </div>
        <div className="RatingSliderContainer">
            <div className="RatesContainer">
                <span><StarRating rating={3.5}/></span>
                <span>3.5</span>
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
      </div>
    </div>
  );
}

export default Product;
