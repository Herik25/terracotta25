import React, { useState } from 'react'
import { BiCart, BiHeart } from 'react-icons/bi';
import { BsEye } from 'react-icons/bs';

const cards = [
    {
      id: 1,
      thumbnail:
        "https://creative-ishi.myshopify.com/cdn/shop/products/2_9188d6ff-0644-4660-a251-4d0d51433c75_576x.png?v=1679284141",
      image:
        "https://creative-ishi.myshopify.com/cdn/shop/products/3_aad9c139-a5e2-46da-b09a-f98b4af6120d_576x.png?v=1679284141",
      title: "Wowed Art",
      price: "75.00",
      discount: 800,
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
      discount: 950,
      sale: true,
      rating: 5,
    },
    {
      id: 3,
      thumbnail:
        "https://creative-ishi.myshopify.com/cdn/shop/products/9_b2efdb2c-b550-42a1-865f-1eb37819ad28_576x.png?v=1679285383",
      image:
        "https://creative-ishi.myshopify.com/cdn/shop/products/10_0ec4549b-3e69-494c-a44e-3721056c1b5d_576x.png?v=1679285383",
      title: "Wert Art",
      price: "80.00",
      discount: 0,
      sale: false,
      rating: 3,
    },
    {
      id: 4,
      thumbnail:
        "https://creative-ishi.myshopify.com/cdn/shop/products/1_091d0b15-b264-4fdc-b89f-a2e389e68b4b_576x.png?v=1679055946",
      image:
        "https://creative-ishi.myshopify.com/cdn/shop/products/18_2830861d-eb89-45a9-9d84-91c19202b670_576x.png?v=1679055946",
      title: "The Craft",
      price: "750.00",
      discount: 850,
      sale: true,
      rating: 4,
    },
  ];

function TredningProducts() {
  return (
    <div className=" container2">
      <div className=" heading">
        <span>
          Trending <span style={{ color: "#556f5f" }}>Products</span>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia
          atque sit.
        </p>
      </div>
      <div className=" product-cards">
        {cards.map((card, index) => {
          const [hoveredImage, setHoveredImage] = useState(null);
          return (
            <div
              className="product-card"
              key={index}
              onMouseEnter={() => setHoveredImage(card.image)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              {card.soldOut && (
                <span className="product-soldOut">Sold Out</span>
              )}
              {card.sale && <div className="product-sale">Sale</div>}
              <div className=" product-image-container">
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
                <div className="product-rating">
                  <div className="product-stars">
                    {"⭐".repeat(card.rating)}
                  </div>
                </div>
              </div>
              <div className=" prodct-desc">
                <div className="productCard-title">{card.title}</div>
                <div className="product-price">
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
      <div className=" view">
        <button>VIEW ALL</button>
      </div>
    </div>
  )
}

export default TredningProducts