import React from "react";
import "./Fields.css";

const Fields = ({ name, image, icon, state , text }) => {
  return (
    <div className="field">
      <p className="name">{name}</p>
      <div className="image">
        <p>{text}</p>
        {state && (
          <div>
            <img src={image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Fields;
