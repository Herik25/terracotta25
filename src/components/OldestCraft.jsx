import React, { useEffect, useState } from "react";
import "./OldestCraft.css";
import { BsEye } from "react-icons/bs";
import { BiCart, BiHeart } from "react-icons/bi";

const cards = [
  {
    id: 1,
    thumbnail:
      "https://creative-ishi.myshopify.com/cdn/shop/products/2_9188d6ff-0644-4660-a251-4d0d51433c75_576x.png?v=1679284141",
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/products/3_aad9c139-a5e2-46da-b09a-f98b4af6120d_576x.png?v=1679284141",
    title: "Wowed Art",
    price: "75.00",
    sale: true,
    rating: 5,
  },
  {
    id: 2,
    thumbnail:
      "https://creative-ishi.myshopify.com/cdn/shop/products/3_964ef98c-b632-4a5e-a040-cc1806846876_576x.png?v=1679284416",
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/products/4_004c6a4c-ff05-46e5-afe6-67b46ea1d599_576x.png?v=1679284416",
    title: "Woodsy Art",
    price: "60.00",
    sale: true,
    rating: 5,
  },
];

function OldestCraft() {
  const targetDate = "2024-12-31T23:59:59"; // Specify your target date here
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className=" container4">
      <div className=" oldest-text-container">
        <span className=" oldest-heading">
          The World's Oldest
          <br /> <span style={{ color: "#556f5f" }}>Craft</span>
        </span>
        <p>
          Discover our fantastic early booking discounts & start planning your
          journey.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Gravida ac consectetur icitudin et tortor, id. Est purus egestas
        </p>

        <div className=" countdown">
          <div style={{ padding: '14px 20px'}}>
            <span style={{ fontSize: "20px", fontWeight: 600 }}>{timeLeft.days} </span>{" "}
            <span style={{ fontSize: "12px", color: '#888' }}>Days</span>
          </div>
          <div style={{ padding: '16px 20px'}}>
            <span style={{ fontSize: "20px", fontWeight: 600 }}>{timeLeft.hours} </span>{" "}
            <span style={{ fontSize: "12px", color: '#888' }}>Hours</span>
          </div>
          <div style={{ padding: '14px 15px'}}>
            <span style={{ fontSize: "20px", fontWeight: 600 }}>{timeLeft.minutes} </span>{" "}
            <span style={{ fontSize: "12px", color: '#888' }}>Minutes</span>
          </div>
          <div style={{ padding: '14px 13px', boxShadow: '0 0 4px 2px #F9D1A5' }}>
            <span style={{ fontSize: "20px", fontWeight: 600 }}>{timeLeft.seconds} </span>{" "}
            <span style={{ fontSize: "12px", color: '#888'}}>Seconds</span>
          </div>
        </div>
        <div className=" oldest-view">
          <button>SHOP MORE</button>
        </div>
      </div>
      <div className=" oldest-products">
        <div className=" oldest-product-cards">
          {cards.map((card, index) => {
            const [hoveredImage, setHoveredImage] = useState(null);
            return (
              <div
                className="oldest-product-card"
                key={index}
                onMouseEnter={() => setHoveredImage(card.image)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                {card.soldOut && (
                  <span className="oldest-roduct-soldOut">Sold Out</span>
                )}
                <div className=" oldest-product-image-container">
                  <div className="animated-icons-container">
                    <div style={{ transition: "0.2s ease-in-out" }}>
                      <BsEye />
                    </div>
                    <div
                      className=" anim2"
                      style={{ transition: "0.4s ease-in-out" }}
                    >
                      <BiHeart />
                    </div>
                    <div
                      className=" anim3"
                      style={{ transition: "0.6s ease-in-out" }}
                    >
                      <BiCart />
                    </div>
                  </div>
                  <div className="animated-icons-placeHolder"></div>
                  <img
                    src={card.thumbnail}
                    alt="image"
                    className={hoveredImage ? "large-image" : "thumbnail"}
                  />
                  <img src={card.image} alt="image" className="large-image" />
                  <div className="oldest-product-rating">
                    <div className="oldest-product-stars">
                      {"⭐".repeat(card.rating)}
                    </div>
                  </div>
                </div>
                <div className=" oldest-prodct-desc">
                  <div className="oldest-productCard-title">{card.title}</div>
                  <div className="oldest-product-price">
                    {card.discount > 0 && (
                      <span className="discount">${card.discount}</span>
                    )}
                    <span className=" price">${card.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OldestCraft;
