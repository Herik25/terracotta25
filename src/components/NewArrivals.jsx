import React from "react";
import "./NewArrivals.css";

function NewArrivals() {
  return (
    <div className=" container3 newArrivals">
      <div className="newArrivals-image-container">
        <div className=" newArrivals-image">
          <div className=" newArrived-image-container" style={{ transform: 'translateY(130px)'}}>
            <img
              src="https://creative-ishi.myshopify.com/cdn/shop/files/banner-image.png?v=1678872580"
              alt="storyImg"
            />
          </div>
          <div className=" newArrived-image-container3" style={{ transform: 'translateY(-20px)'}}>
            <img
              src="https://creative-ishi.myshopify.com/cdn/shop/files/Mask_group.png?v=1679552545"
              alt="storyImg"
            />
          </div>
        </div>
        <div className=" heading">
          <span
            className=" newArrivals"
            style={{ fontSize: "20px", fontWeight: "400", color: "#555f5f" }}
          >
            All NEW ARRIVALS
          </span>
          <span>
            Exclusive <span style={{ color: "#556f5f" }}>Category</span>
          </span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia
            atque sit.
          </p>
        </div>
        <div className=" newArrivals-image">
          <div className=" newArrived-image-container" style={{ transform: 'translate(110px, 0px)',}}>
            <img
              src="https://creative-ishi.myshopify.com/cdn/shop/files/banner-image3.png?v=1678872671"
              alt="storyImg"
            />
          </div>
          <div className=" newArrived-image-container2" style={{ transform: 'translateY(110px)'}}>
            <img
              src="https://creative-ishi.myshopify.com/cdn/shop/files/story2.png?v=1678857699"
              alt="storyImg"
            />
          </div>
        </div> 
      </div>

      <div className=" view">
        <button>SHOP NOW</button>
      </div>
    </div>
  );
}

export default NewArrivals;
