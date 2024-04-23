import React from "react";
import "./Hero.css";
import Navbar from "../Navbar/Navbar";

function Hero() {
  return (
    <div>
      <Navbar />
      <div className=" hero-container">
        <div className=" hero-text">
          <div className=" gif-container2">
            <img
              src="//creative-ishi.myshopify.com/cdn/shop/files/lf20_gt7ccog0.json_3.gif?v=1679653484"
              alt="gif"
            />
          </div>
          <span className=" hero-text-subHeading animated" style={{ animationDelay: '0.2s'}}>THE CANVAS STORY</span>
          <span className=" hero-text-heading animated"  style={{ animationDelay: '0.4s'}}>TERRA COTTA</span>
          <p className=" hero-text-desc animated"  style={{ animationDelay: '0.6s'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis dolor
            ac lobortis iaculis nam adipiscing elit Quis .
          </p>
          <div className=" btn animated"  style={{ animationDelay: '0.8s'}}>
            <div className="shopnow">SHOP NOW</div>
            <div className="readmore">READ MORE</div>
          </div>
        </div>
        <div className=" hero-image">
          <div className=" gif-container1">
            <img
              src="//creative-ishi.myshopify.com/cdn/shop/files/lf20_gt7ccog0.json_3.gif?v=1679653484"
              alt="gif"
            />
          </div>
          <img
            src="//creative-ishi.myshopify.com/cdn/shop/files/Rectangle_114_1_copy.png?v=1679569198"
            alt="productImg"
            height="400"
            width="400"
          />
        </div>
      </div>
      <section>
        <div className=" wavey wave1"></div>
      </section>
    </div>
  );
}

export default Hero;
