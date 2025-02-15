import React from "react";
import { motion } from "framer-motion";
import HomePhotoOne from "../../assests/images/HomePhotoOne.jpg";
import "../../assests/styles/home.css";

const NUM_TILES = 5; // Number of slices

const Home = () => {
  return (
    <div className="HomeContainer">
      {Array.from({ length: NUM_TILES }).map((_, index) => (
        <motion.div
          key={index}
          className="imageSlice"
          style={{
            backgroundImage: `url(${HomePhotoOne})`,
            backgroundSize: `100% ${NUM_TILES * 100}%`,
            backgroundPositionY: `calc(${index} * 100% / ${NUM_TILES - 1})`,
            top: `calc(${index} * 100% / ${NUM_TILES})`,
          }}
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.3, duration: 0.9, ease: "easeOut" }}
        />
      ))}
      <div className="HomeLeftContainer">
        <div className="HomeTitle">
          <h3>
            Throttlerz<br />House
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
