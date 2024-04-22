import React from "react";
import "./Story.css";

function Story() {
  return (
    <div className=" container3">
      <div className=" heading">
        <span>
          Every Canvas Has a <span style={{ color: "#556f5f" }}>Story</span>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia
          atque sit.
        </p>
      </div>
      <div className=" line-section">
        <div className=" curved-line">
          <img
            src="https://creative-ishi.myshopify.com/cdn/shop/files/since-line.png?v=1682664702"
            alt="line"
          />
        </div>
        <div className="line-text">
          <div className=" line-years year1">
            <div className=" line-dot"></div>
            1972
          </div>
          <div className=" line-years year2">
            <div className=" line-dot"></div>
            1982
          </div>
          <div className=" line-years year3">
            <div className=" line-dot"></div>
            1992
          </div>
          <div className=" line-years year4">
            <div className=" line-dot"></div>
            2023
          </div>
        </div>
        <div className="story-images">
            <div className=" story-image-container">
                <img src="https://creative-ishi.myshopify.com/cdn/shop/files/story1.png?v=1678857674" alt="storyImg" />
            </div>
            <div className=" story-image-container">
                <img src="https://creative-ishi.myshopify.com/cdn/shop/files/story2.png?v=1678857699" alt="storyImg" />
            </div>
            <div className=" story-image-container">
                <img src="https://creative-ishi.myshopify.com/cdn/shop/files/story3.png?v=1678857717" alt="storyImg" />
            </div>
            <div className=" story-image-container">
                <img src="https://creative-ishi.myshopify.com/cdn/shop/files/story4.png?v=1678857733" alt="storyImg" />
            </div>
        </div>
      </div>
      <div className=" view">
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default Story;
