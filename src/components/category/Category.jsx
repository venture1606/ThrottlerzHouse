import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../common/Navbar";
import Card from "../common/Card";

// importing images
import offer from "../../assests/images/offer.jpg";

// importing data
import ListItems from "../../assests/data/ListItems.json";

// Import styles
import "../../assests/styles/category.css"; // Ensure styles are linked

const Category = () => {
  const navigate = useNavigate();
  const { cards } = ListItems;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="CategoryPage">
      {/* Main Content */}
      <div className="CategoryContainer">
        <h1>All Categories</h1>

        <nav className="navbar navbar-expand-lg CategoryNavbarContainer">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Category
                        </a>
                        <div className="dropdown-menu CategoryMenuContainer" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item MenuContainer" href="#">Accessories</a>
                            <a className="dropdown-item MenuContainer" href="#">Bike for sale</a>
                            <a className="dropdown-item MenuContainer" href="#">Bike products</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Brands
                        </a>
                        <div className="dropdown-menu CategoryMenuContainer" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item MenuContainer" href="#">Yamaha</a>
                            <a className="dropdown-item MenuContainer" href="#">Royal Enfield</a>
                            <a className="dropdown-item MenuContainer" href="#">TVS</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Services
                        </a>
                        <div className="dropdown-menu CategoryMenuContainer" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item MenuContainer" href="#">Painting</a>
                            <a className="dropdown-item MenuContainer" href="#">Full Service</a>
                            <a className="dropdown-item MenuContainer" href="#">Foam Wash</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <div 
            className="OfferContainer"
            style={{
                backgroundImage: `url(${offer})`,
            }}
        >
            <h3>Get 20% for the First order.</h3>
            <span>Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</span>
        </div>

        {/* Category Grid */}
        <div className="CategoryGrid">
            {
                cards.map((card) => (
                    <Card key={card.id} card={card} />
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Category;
