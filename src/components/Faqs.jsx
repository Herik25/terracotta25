import React, { useState } from "react";
import "./Faqs.css";

const data = [
  {
    id: 1,
    qus: "What is terracotta made from?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac consectetur icitudin et tortor, id. Est purus egestas ultrices facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac consectetur",
  },
  {
    id: 2,
    qus: "What is so special about terracotta?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac consectetur icitudin et tortor, id. Est purus egestas ultrices facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac consectetur",
  },
  {
    id: 3,
    qus: "What is terracotta used for?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac consectetur icitudin et tortor, id. Est purus egestas ultrices facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac consectetur",
  },
  {
    id: 4,
    qus: "Why is terracotta best for plants?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac consectetur icitudin et tortor, id. Est purus egestas ultrices facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac consectetur",
  },
  {
    id: 5,
    qus: "What's the difference between clay and terracotta?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac consectetur icitudin et tortor, id. Est purus egestas ultrices facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida ac consectetur",
  },
];

function Faqs() {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };
  return (
    <div className=" container2">
      <div className=" heading">
        <span>
          FAQ' <span style={{ color: "#556f5f" }}>s</span>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quia
          atque sit.
        </p>
      </div>
      <div className=" accordion-section">
        <div className=" accordion">
          {data.map((item, index) => {
            return (
              <div
                className="item"
                key={item.id}
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="title">
                  <span>{item.qus}</span> <span style={{ fontSize: "24px" }}>{openAccordionId === index+1 ? '-' : '+' }</span>
                </div>
                {openAccordionId === item.id && (
                  <div className="content">
                    <p>{item.ans}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className=" accordion-image">
          <div className=" accordion-image-container">
            <div className=" img-btn">
              <a href="#">SHOP NOW</a>
              <div className="line"></div>
            </div>
            <img
              src="https://creative-ishi.myshopify.com/cdn/shop/files/faqs-image.png?v=1678882514"
              alt="AccordionImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
