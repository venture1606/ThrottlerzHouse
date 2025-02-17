import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from 'gsap';

import Lottie from "react-lottie";
import { Icon } from "@iconify/react/dist/iconify.js";

import "bootstrap/dist/css/bootstrap.min.css";

// Importing assets
import Logo from "../../assests/images/Logo.png";
import Bike from "../../assests/data/Bike.json";
import "../../assests/styles/navbar.css";
import SearchBar from "./SearchBar"

const Navbar = () => {

  const navigate = useNavigate();
  const navRef = useRef(null);
  const activeElementRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const BikeAnimation = {
    loop: true,
    autoplay: true,
    animationData: Bike,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const Home = () => {
    const navElement = navRef.current;
    const activeElement = activeElementRef.current;
  
    // Remove the active class from all list items
    const activeItem = navElement.querySelector("ul li.active");
    if (activeItem) {
      activeItem.classList.remove("active");
    }
  
    // Hide the active element animation
    gsap.to(activeElement, {
      "--active-element-show": "0",
      duration: 0.2,
    });
  
    // Navigate to the home page
    navigate('/');
  };

  useEffect(() => {
    const navElement = navRef.current;
    const activeElement = activeElementRef.current;

    const getOffsetLeft = (element) => {
      const elementRect = element.getBoundingClientRect();
      return (
        elementRect.left -
        navElement.getBoundingClientRect().left +
        (elementRect.width - activeElement.offsetWidth) / 2
      );
    };

    const activeButton = navElement.querySelector("ul li.active button");
    if (activeButton) {
      gsap.set(activeElement, {
        x: getOffsetLeft(activeButton),
      });
      gsap.to(activeElement, {
        "--active-element-show": "1",
        duration: 0.2,
      });
    }

    const buttons = navElement.querySelectorAll("ul li button");
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const active = navElement.querySelector("ul li.active");
        const oldIndex = active
          ? [...active.parentElement.children].indexOf(active)
          : -1;

        if (
          index === oldIndex ||
          navElement.classList.contains("before") ||
          navElement.classList.contains("after")
        ) {
          return;
        }

        const x = getOffsetLeft(button);
        const direction = index > oldIndex ? "after" : "before";
        const spacing = Math.abs(x - (active ? getOffsetLeft(active) : 0));
        navElement.classList.add(direction);
        if (active) active.classList.remove("active");
        button.parentElement.classList.add("active");

        gsap.set(activeElement, {
          rotateY: direction === "before" ? "180deg" : "0deg",
        });

        gsap.to(activeElement, {
          keyframes: [
            {
              "--active-element-width": `${
                spacing > navElement.offsetWidth - 60
                  ? navElement.offsetWidth - 60
                  : spacing
              }px`,
              duration: 0.3,
              ease: "none",
              onStart: () => {
                createSVG(activeElement);

                gsap.to(activeElement, {
                  "--active-element-opacity": 1,
                  duration: 0.1,
                });
              },
            },
            {
              "--active-element-scale-x": "0",
              "--active-element-scale-y": ".25",
              "--active-element-width": "0px",
              duration: 0.3,
              onStart: () => {
                gsap.to(activeElement, {
                  "--active-element-mask-position": "40%",
                  duration: 0.5,
                });
                gsap.to(activeElement, {
                  "--active-element-opacity": 0,
                  delay: 0.45,
                  duration: 0.25,
                });
              },
              onComplete: () => {
                activeElement.innerHTML = "";
                navElement.classList.remove("before", "after");
                activeElement.removeAttribute("style");
                gsap.set(activeElement, {
                  x: getOffsetLeft(button),
                  "--active-element-show": "1",
                });
              },
            },
          ],
        });

        gsap.to(activeElement, {
          x,
          "--active-element-strike-x": "-50%",
          duration: 0.6,
          ease: "none",
        });
      });
    });

    const createSVG = (element) => {
      element.innerHTML = `
        <svg viewBox="0 0 116 5" preserveAspectRatio="none" class="beam">
          <!-- SVG content here -->
        </svg>
        <div class="strike">
          <svg viewBox="0 0 114 12" preserveAspectRatio="none">
            <!-- SVG content here -->
          </svg>
        </div>
      `;
    };

    // Cleanup on unmount
    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", null);
      });
    };
  }, []);

  const handleNavigate = (path, scrollToSection) => {
    navigate(path, { state: { scrollTo: scrollToSection } });
  };

  return (
    <div className="NavbarContainer">
      {/* Logo */}
      <div className="NavbarLogoContainer cursor-pointer" onClick={() => handleNavigate("/", "home")} title="Click to view Home Page">
        <img src={Logo} alt="logo" />
        <Lottie options={BikeAnimation} height={50} width={120} />
      </div>

      {/* Navigation Links */}
      <div className="HeaderContainer">
        <nav ref={navRef}>
          <ul>
            <li>
              <button onClick={() => handleNavigate("/", "productHome")}>CATEGORY</button>
            </li>
            <li>
              <button onClick={() => navigate("/category")}>PRODUCTS</button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/", "blogs")}>BLOGS</button>
            </li>
            <li>
              <button onClick={() => navigate("/service")}>SERVICES</button>
            </li>
            <li>
              <button onClick={() => handleNavigate("/", "help")}>CONTACT</button>
            </li>
          </ul>
          <div ref={activeElementRef} className="active-element"></div>
        </nav>
      </div>

      {/* Search, Cart & User Icons */}
      <div className="SearchContainer">
        <Icon icon="material-symbols:search-rounded" onClick={() => setShowPopup(true)} className="SearchIcon" />
        {showPopup && <SearchBar onClose={() => setShowPopup(false)} />}
        <Icon icon="icon-park-outline:like" className="SearchIcon" onClick={() => navigate("/cart")} />
        <Icon icon="solar:user-outline" className="Icon" onClick={() => navigate("/login")} />
      </div>
    </div>
  );
};

export default Navbar;
