import React, { useState } from "react";
import card from "../../assets/card.png";
import Section from "../../assets/Section.png";
import Technical from "../../assets/Technical.png";
import Service from "../../assets/Service.png";
import bar from "../../assets/bar.png";
import logo1 from "../../assets/logo.png";
import logo2 from "../../assets/Layer.png";

import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = [
    {
      name: "بطاقة ماركة",
      icon: card,
    },
    {
      name: "بطاقة موديل",
      icon: card,
    },
    {
      name: "بطاقة قطعة",
      icon: card,
    },
    {
      name: "بطاقة فني",
      icon: Technical,
    },
    {
      name: "بطاقة قسم",
      icon: Section,
    },
    {
      name: "بطاقة خدمة",
      icon: Service,
    },
  ];
  return (
    <div>
      <div style={{ width: isOpen ? "260px" : "80px" }} className="container">
        <div className="sidebar">
          <div className="top_section">
            <div className="logo">
              {isOpen ? (
                <img className="image1" src={logo1} alt="" />
              ) : (
                <img className="image2" src={logo2} alt="" />
              )}
            </div>
            <div className="bars">
              {isOpen ? (
                <img className="image1" onClick={toggle} src={bar} alt="" />
              ) : (
                <img className="image2" onClick={toggle} src={bar} alt="" />
              )}
            </div>
          </div>
          <div className="nav">
            {menuItem &&
              menuItem.map((item, index) => (
                <div
                  key={index}
                  className="link my-1"
                  style={{
                    width: isOpen ? "220px" : "70px",
                    justifyContent: isOpen ? "space-between" : "center",
                    marginLeft: isOpen ? "0px" : "30px"
                  }}
                >
                  {isOpen ? <div className="link_text">{item.name}</div> : null}
                  {isOpen ? (
                    <img className="image1" src={item.icon} alt="" />
                  ) : (
                    <img className="image2" src={item.icon} alt="" />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
