import React from "react";
import "./Blog.css";

const data = [
  {
    id: 1,
    iamge:
      "https://creative-ishi.myshopify.com/cdn/shop/articles/blog8.png?v=1679049040",
    date: "17 MARCH 2023",
    title: "Artem - Digital Marketing...",
    desc: "Faded short sleeves t-shirt with high neckline. Soft and stretchy m...",
    link: "#",
  },
  {
    id: 2,
    iamge:
      "https://creative-ishi.myshopify.com/cdn/shop/articles/blog7.png?v=1679049008",
    date: "17 MARCH 2023",
    title: "Artem - Digital Marketing...",
    desc: "Faded short sleeves t-shirt with high neckline. Soft and stretchy m...",
    link: "#",
  },
  {
    id: 3,
    iamge:
      "https://creative-ishi.myshopify.com/cdn/shop/articles/blog6.png?v=1679048974",
    date: "17 MARCH 2023",
    title: "Artem - Digital Marketing...",
    desc: "Faded short sleeves t-shirt with high neckline. Soft and stretchy m...",
    link: "#",
  },
  {
    id: 4,
    iamge:
      "https://creative-ishi.myshopify.com/cdn/shop/articles/blog5.png?v=1679048937",
    date: "17 MARCH 2023",
    title: "Artem - Digital Marketing...",
    desc: "Faded short sleeves t-shirt with high neckline. Soft and stretchy m...",
    link: "#",
  },
  {
    id: 5,
    iamge:
      "https://creative-ishi.myshopify.com/cdn/shop/articles/blog4.png?v=1679048905",
    date: "17 MARCH 2023",
    title: "Artem - Digital Marketing...",
    desc: "Faded short sleeves t-shirt with high neckline. Soft and stretchy m...",
    link: "#",
  },
  {
    id: 6,
    iamge:
      "https://creative-ishi.myshopify.com/cdn/shop/articles/blog3.png?v=1679048868",
    date: "17 MARCH 2023",
    title: "Artem - Digital Marketing...",
    desc: "Faded short sleeves t-shirt with high neckline. Soft and stretchy m...",
    link: "#",
  },
  {
    id: 7,
    iamge:
      "https://creative-ishi.myshopify.com/cdn/shop/articles/blog2.png?v=1679048798",
    date: "17 MARCH 2023",
    title: "Artem - Digital Marketing...",
    desc: "Faded short sleeves t-shirt with high neckline. Soft and stretchy m...",
    link: "#",
  },
  {
    id: 8,
    iamge:
      "https://creative-ishi.myshopify.com/cdn/shop/articles/blog1.png?v=1679048738",
    date: "17 MARCH 2023",
    title: "Artem - Digital Marketing...",
    desc: "Faded short sleeves t-shirt with high neckline. Soft and stretchy m...",
    link: "#",
  },
];

function blog() {
  return (
    <div className=" container2">
      <div className=" heading">
        <span>Our Latest Blog</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia
          atque sit.
        </p>
      </div>
      <div className=" blog-section">
        {data.map((item, index) => {
          return (
            <div className="blog-card" key={index}>
              <div className=" blog-image-container">
                <img
                  src={item.iamge}
                  alt="blogImg"
                />
                <div className="blog-card-date">
                  <span>{item.date}</span>
                </div>
              </div>
              <div className="blog-card-content">
                <div className="blog-card-title">
                  <span>{item.title}</span>
                </div>
                <div className="blog-card-desc">
                  <span>{item.desc}</span>
                </div>
                <div className="blog-card-link">
                  <a href={item.link}>READ MORE</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default blog;
