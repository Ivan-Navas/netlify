import React, { useContext, useEffect, useState } from "react";
import "../styles/techno.css";
import { Context } from "../Context/Context";

function TechnologiesCard() {
  const technoContext = useContext(Context);
  

  return (
    <>
      {technoContext.techno.map((techno) => (
        <div className="imageContainer" key={techno.id}>
          <div className="childContainer">
            <img className="image" src={techno.imagen} alt={techno.name} />
          </div>
          <h2 className="title">{techno.name}</h2>
        </div>
      ))}
    </>
  );
}

export default TechnologiesCard;
