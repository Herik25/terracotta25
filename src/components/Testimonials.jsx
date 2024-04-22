import React from "react";
import "./Testimonials.css";

const data = [
  {
    id: 1,
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/files/Ellipse_30_2.png?v=1678796541",
    name: "Harsh Parmar",
    role: "Web Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ualiquam, ptaliquam, purus sit amet Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/files/T.png?v=1679035172",
    name: "Harsh Parmar",
    role: "Web Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ualiquam, ptaliquam, purus sit amet Lorem ipsum dolor sit amet.",
  },
  {
    id: 3,
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/files/Ellipse_30.png?v=1678794990",
    name: "Harsh Parmar",
    role: "Web Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ualiquam, ptaliquam, purus sit amet Lorem ipsum dolor sit amet.",
  },
  {
    id: 4,
    image:
      "https://creative-ishi.myshopify.com/cdn/shop/files/Ellipse_30_1.png?v=1678796525",
    name: "Harsh Parmar",
    role: "Web Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ualiquam, ptaliquam, purus sit amet Lorem ipsum dolor sit amet.",
  },
];

function Testimonials() {
  return (
    <div className=" container2">
      <div className=" testimonial-heading">
        <span>
          Client <span style={{ color: "#556f5f" }}>Say's</span>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia
          atque sit.
        </p>
      </div>
      <div className="testimonials">
        {data.map((item) => {
          return (
            <div key={item.id} className="testimonial">
              <div className=" testimonials-image">
                <img
                  src={item.image}
                  alt="testimonialImg"
                />
              </div>
              <div className=" testimonials-desc">
                {item.desc}
              </div>
              <div className=" testimonials-name">{item.name}</div>
              <div className=" testimonials-role">({item.role})</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
