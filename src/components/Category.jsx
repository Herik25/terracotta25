import React from "react";
import './Category.css';

const data = [
    {
        id: 1,
        name: "Chocolate",
        image: "//creative-ishi.myshopify.com/cdn/shop/files/6_7077fad1-d590-45a2-ac47-a6222eb6840b.png?v=1678788938",
    },
    {
        id: 2,
        name: "Pottery",
        image: "//creative-ishi.myshopify.com/cdn/shop/files/1_copy.png?v=1679035016",
    },
    {
        id: 3,
        name: "Bowl",
        image: "//creative-ishi.myshopify.com/cdn/shop/files/1_2e705374-aa50-44ef-b683-ded9616931ef.png?v=1678788454",
    },
    {
        id: 4,
        name: "Tea Set",
        image: "//creative-ishi.myshopify.com/cdn/shop/files/3_e8a98b4f-aff3-4377-bee3-50fdd8bb1c7c.png?v=1678788521",
    },
    {
        id: 5,
        name: "Flower Pot",
        image: "//creative-ishi.myshopify.com/cdn/shop/files/2_c6b43227-ad96-46ab-b27f-139b3e35862b.png?v=1678788552",
    },
    {
        id: 6,
        name: "Desert",
        image: "//creative-ishi.myshopify.com/cdn/shop/files/category-1_50x50_1.png?v=1678789805",
    },
    {
        id: 7,
        name: "Lunch",
        image: "//creative-ishi.myshopify.com/cdn/shop/files/5_f3caf5c2-1937-440b-89ea-58027c4bb954.png?v=1678788922",
    },
]

function Category() {
  return (
    <div className=" container3">
      <div className=" heading">
        <span>
            Exclusive <span style={{ color: "#556f5f" }}>Category</span>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia
          atque sit.
        </p>
      </div>
      <div className=" category-section">
        {data.map((item, index) => {
          return (
            <div className=" category-item" key={index}>
              <div className=" category-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className=" category-text">
                <span>{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" view">
        <button>VIEW ALL</button>
      </div>
    </div>
  );
}

export default Category;
