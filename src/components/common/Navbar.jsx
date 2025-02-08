import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import Lottie from "react-lottie";

import "bootstrap/dist/css/bootstrap.min.css";

// Importing assets
import Logo from "../../assests/images/Logo.png";
import Bike from "../../assests/data/Bike.json";
import "../../assests/styles/navbar.css";

const Navbar = ({ onNavigate }) => {
  const navigate = useNavigate();

  const BikeAnimation = {
    loop: true,
    autoplay: true,
    animationData: Bike,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleProduct = () => {
    navigate("/product");
  };

  useEffect(() => {
    const test = () => {
      const tabsNewAnim = $("#navbarSupportedContent");
      const activeItemNewAnim = tabsNewAnim.find(".active");
      const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
      const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
      const itemPosNewAnimTop = activeItemNewAnim.position() || 0;
      const itemPosNewAnimLeft = activeItemNewAnim.position() || 0;

      $(".hori-selector").css({
        top: `${itemPosNewAnimTop.top}px`,
        left: `${itemPosNewAnimLeft.left}px`,
        height: `${activeWidthNewAnimHeight}px`,
        width: `${activeWidthNewAnimWidth}px`,
      });

      $("#navbarSupportedContent").on("click", "li", function () {
        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass("active");
        const activeWidthNewAnimHeight = $(this).innerHeight();
        const activeWidthNewAnimWidth = $(this).innerWidth();
        const itemPosNewAnimTop = $(this).position();
        const itemPosNewAnimLeft = $(this).position();

        $(".hori-selector").css({
          top: `${itemPosNewAnimTop.top}px`,
          left: `${itemPosNewAnimLeft.left}px`,
          height: `${activeWidthNewAnimHeight}px`,
          width: `${activeWidthNewAnimWidth}px`,
        });
      });
    };

    setTimeout(() => test(), 0);

    $(window).on("resize", () => {
      setTimeout(() => test(), 500);
    });

    $(".navbar-toggler").click(() => {
      $(".navbar-collapse").slideToggle(300);
      setTimeout(() => test(), 0);
    });

    const path = window.location.pathname.split("/").pop() || "index.html";
    const target = $(`#navbarSupportedContent ul li a[href="${path}"]`);
    target.parent().addClass("active");
  }, []);

  return (
    <nav className="NavbarContainer navbar-expand-custom">
      <div className="NavbarLogoContainer">
        <img src={Logo} alt="logo" />
        <Lottie options={BikeAnimation} height={50} width={120} />
      </div>
      <div className="MenuContainer" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item active">
            <a
              className="nav-link cursor-pointer"
              onClick={() => onNavigate("home")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link cursor-pointer"
              onClick={() => onNavigate("blogs")}
            >
              Blogs
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link cursor-pointer" onClick={handleProduct}>
              Products
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link cursor-pointer"
              onClick={() => onNavigate("products")}
            >
              Category
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link cursor-pointer"
              onClick={() => onNavigate("help")}
            >
              Help
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link cursor-pointer" href="#signup">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
