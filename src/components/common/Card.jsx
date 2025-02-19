import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

// importing style
import "../../assests/styles/card.css";

function Card({ card }) {

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [wished, setWished] = useState(card.wishlist);

  const handleAddingCart = (event) => {
    event.stopPropagation();
    if(card.cart){
        alert("Removed to cart!");
    } else {
        alert("Added from cart!");
    }
  }

  const handleWishlist = (event) => {
    event.stopPropagation();
    setWished(!wished);
  }

  const gradientId = `starGradient-${Math.random()}`

  return (
    <div
        className="Card"
        onClick={() => navigate('/product')}
        style={{
            backgroundImage: `url(${card.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div></div>
        {
            isHovered && (
                <button className="ViewButton" onClick={() => navigate('/product')}>
                    View product
                </button>
            )
        }
        <button className="AddToCart" onClick={handleAddingCart}>
            <Icon icon="proicons:cart" className="Icon" />
        </button>
        <div className="WishIcon" onClick={handleWishlist}>
            <Icon icon={ wished ? "icon-park-solid:like" : "icon-park-outline:like"} className="Icon" />
        </div>
        <div className="CardDetailsContainer">
            <h3>{card.title}</h3>
            <span className="Description">{card.description}</span>
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
                <i>{card.rating} / 5 ( {card.reviews} reviews )</i>
            </div>
            <div className="CountContainer">
                <div className="Price">
                    <span>${card.price}</span>
                    <del>${card.originalPrice}</del>
                </div>
                <div className="Count">
                    {card.count > 0 
                        ? <span>{card.count} in stock</span>
                        : <span>Out of stock</span>
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default Card;
