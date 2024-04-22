import React from "react";
import "./Services.css";
import { BsArrowRight } from "react-icons/bs";

const cards = [
  {
    icon: "	https://creative-ishi.myshopify.com/cdn/shop/files/swdr.gif?v=1679986554",
    title: "Free Delivery Worldwide",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
  },
  {
    icon: "//creative-ishi.myshopify.com/cdn/shop/files/23.gif?v=1679986580",
    title: "Money Back Gaurantee",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
  },
  {
    icon: "//creative-ishi.myshopify.com/cdn/shop/files/eq2.gif?v=1679986600",
    title: "Gift Voucher",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
  },
  {
    icon: "//creative-ishi.myshopify.com/cdn/shop/files/e2.gif?v=1679986618",
    title: "24*7 Online Support",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy",
  },
];

function Services() {
  return (
    <div className=" container2">
      <div className=" heading">
        <span>
          Why <span style={{ color: "#556f5f" }}>TerraCotta ?</span>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia
          atque sit.
        </p>
      </div>
      <div className="cards">
        {cards.map((card, index) => {
          return (
            <div className=" card" key={index}>
              <img src={card.icon} alt="cardImg" />
              <div className=" content">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
              <div className="icon">
                <BsArrowRight size="25px" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
