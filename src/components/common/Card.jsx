import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Importing components
import Loading from "../common/Loading";

// Importing API
import User from "../api/User";

// importing style
import "../../assests/styles/card.css";

function Card({ card }) {

  const navigate = useNavigate();
  const userDetails = useSelector((state) => state.user.userDetails);
  const cartList = useSelector((state) => state.category.cartList);
  const wishList = useSelector((state) => state.category.wishList);

  const { 
    handleSingleProduct, 
    handleAddingToCart, 
    handleRemovingFromCart, 
    handleGettingCart,
    handleGetWishlist,
    handleRemoveWishlist,
    handleAddingWishlist,
    loading
} = User();

  const [isHovered, setIsHovered] = useState(false);
  const [cart, setCart] = useState(
    cartList?.some(item => item.product._id === card._id) || false
  );
  const [wished, setWished] = useState(
    wishList?.some(item => item._id === card._id) || false
  );

    console.log(cartList, cartList?.some(item => item.product._id === card._id));
    console.log(wishList, wishList?.some(item => item._id === card._id));
    console.log(card._id);

    useEffect(() => {
        setCart(cartList?.some(item => item.product._id === card._id) || false);
        setWished(wishList?.some(item => item._id === card._id) || false);
        console.log(cart, wished);
    }, [cartList, wishList, card._id]);


  const handleAddingCart = (event) => {
    event.stopPropagation();

    if (cart) {
        handleRemovingFromCart(card._id).then(() => handleGettingCart());
    } else {
        handleAddingToCart({ productId: card._id, quantity: 1 }).then(() => handleGettingCart());
    }

    setCart(!cart);
  };

  const handleWishlist = (event) => {
    event.stopPropagation();
    
    if (wished) {
        handleRemoveWishlist(card._id).then(() => handleGetWishlist());
    } else {
        handleAddingWishlist(card._id).then(() => handleGetWishlist());
    }
    setWished(!wished);
  }

  const gradientId = `starGradient-${Math.random()}`

  const handleCardClick = () => {
    console.log("Card clicked:", card._id);
    console.log("Card details:", card);
    console.log("wishlist status:", userDetails?.wishlist, wished);
    console.log("cart status:", userDetails?.cart, cart);
    handleSingleProduct(card._id);
    navigate('/product/' + card._id);
  }

  return (
    <div
        className="Card"
        onClick={handleCardClick}
        style={{
            backgroundImage: card?.images?.length > 0 
                ? `url(${card.images[0].url})`
                : "url('/default-image.png')",  // Provide a fallback image
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        {loading && <Loading />} 
        <div></div>
        {
            isHovered && (
                <button className="ViewButton" onClick={handleCardClick}>
                    View product
                </button>
            )
        }
        <button className="AddToCart" onClick={handleAddingCart}>
            <Icon icon={ cart ? "material-symbols:bookmark-added" : "proicons:cart"} className="Icon" />
        </button>
        <div className="WishIcon" onClick={handleWishlist}>
            <Icon icon={ wished ? "icon-park-solid:like" : "icon-park-outline:like"} className="Icon" />
        </div>
        <div className="CardDetailsContainer">
            <h3>{card.name}</h3>
            <span className="Description">{card.description}</span>
            { card.numOfReview > 0 &&
                <div className="StarRating">            
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id={gradientId}>
                                <stop offset={`${(card.rating / 5) * 100}%`} stopColor="gold" />
                                <stop offset={`${(card.rating / 5) * 100}%`} stopColor="grey" />
                            </linearGradient>
                        </defs>
                        <path
                            fill={`url(#${gradientId})`}
                            strokeWidth="0"
                            d="M12 2l3.09 6.26 6.91 1-5 4.87 1.18 6.87L12 17.77 6.82 21l1.18-6.87-5-4.87 6.91-1L12 2z"
                        />
                    </svg>
                    <i>{card.rating} ( {card.numOfReview} reviews )</i>
                </div>
            }
            <div className="CountContainer">
                <div className="Price">
                    <span>${card.price}</span>
                    <del>${card.originalPrice}</del>
                </div>
                <div className="Count">
                    {card.stock > 0 
                        ? <span>{card.stock} in stock</span>
                        : <span>Out of stock</span>
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
