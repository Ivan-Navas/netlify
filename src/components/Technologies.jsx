import React, { useContext, useEffect, useRef, useState } from "react";
import TechnologiesCard from "./TechnologiesCard";
import "../styles/techno.css";
import { Context } from "../Context/Context";

function Technologies() {
  const contextTec = useContext(Context);

  const [opacity, setOpacity] = useState(0);
  const divRef = useRef();

  useEffect(() => {
    const scroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      if (y <= 490) {
        setOpacity(1);
        const container = document.getElementById("animation");
        container.classList.add("animacion");
      }
    };
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
  return (
    <>
      <div
        ref={divRef}
        className="mainTContainer"
        id="animation"
        style={{ opacity }}
      >
        <TechnologiesCard />
      </div>
    </>
  );
}

export default Technologies;
