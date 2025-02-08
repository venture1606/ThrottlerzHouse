import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

// importing Image
import ProductImage from "../../assests/images/ProductImage.png";
import ListItems from "../../assests/data/ListItems.json";

function Product() {
  const navigate = useNavigate();
  const { similarProducts } = ListItems;

  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState(true);
  const [wishlist, setWishlist] = useState(false);
  const [iconName, setIconName] = useState("solar:cart-check-bold");
  const [selectedCategory, setSelectedCategory] = useState(null); // State to manage selected category

  // Update the icon based on the cart state
  useEffect(() => {
    setIconName(cart ? "solar:cart-check-bold" : "solar:cart-cross-bold");
  }, [cart]);

  // Ensure the quantity is never less than 1
  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log(`Selected category: ${category}`); // Log the selected category for backend integration
    // Here you can send the selected category to the backend via an API call if needed
  };

  return (
    <div className="ProductContainer">
      <div className="BackButtonContainer cursor-pointer ButtonStyle">
        <Icon
          icon="proicons:home"
          className="Icon"
          onClick={() => navigate("/")}
        />
      </div>
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
                    selectedCategory === category ? "active" : ""
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
              <Icon icon="material-symbols:star-rounded" className="Icon" />
              <Icon icon="material-symbols:star-rounded" className="Icon" />
              <Icon icon="material-symbols:star-rounded" className="Icon" />
              <Icon icon="material-symbols:star-rounded" className="Icon" />
              <Icon icon="material-symbols:star-half-rounded" className="Icon" />
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
              onClick={() => setCart(!cart)}
            >
              <Icon icon={iconName} className="Icon" />
              <span>Add to wishlist</span>
            </div>
          </div>
          <div
            className="WishlistButton cursor-pointer ButtonStyle"
            onClick={() => setWishlist(!wishlist)}
          >
            {wishlist ? (
              <Icon icon="material-symbols:favorite-rounded" className="Icon" />
            ) : (
              <Icon
                icon="material-symbols:favorite-outline-rounded"
                className="Icon"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
