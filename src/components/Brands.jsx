import React from "react";
import "./Brands.css";

const data = [
  {
    id: 1,
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/files/7_cd3682ca-ea40-473d-ba60-9d5e65be7f08.png?v=1678862194",
  },
  {
    id: 2,
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/files/logo6.png?v=1678861838",
  },
  {
    id: 3,
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/files/logo2_1.png?v=1678861894",
  },
  {
    id: 4,
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/files/logo1.png?v=1678861920",
  },
  {
    id: 5,
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/files/logo5.png?v=1678861861",
  },
  {
    id: 6,
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/files/logo4.png?v=1678861878",
  },
];

function Brands() {
  return (
    <div className=" container2">
      <div className=" brands-container">
        {data.map((item) => {
          return (
            <div className=" brand-item" key={item.id}>
              <img src={item.image} alt="brand" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Brands;
