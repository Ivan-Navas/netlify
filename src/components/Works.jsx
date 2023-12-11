import React, { useContext, useEffect, useState } from "react";
import "../styles/works.css";
import ModalWorksCard from "./ModalWorksCard";
import { works as trabajos } from "../helpers/data";
import { Context } from "../Context/Context";

function Works() {
  const worksContext = useContext(Context);
  const [stateModal, setStateModal] = useState(false);

  return (
    <div className="mainWorksContainer">
      {worksContext.works.map((work) => (
        <div key={work.name} className="workContainer">
          <button
            className="workButton"
            onClick={() => {
              setStateModal(!stateModal);
              worksContext.getWork(work.id);
            }}
          >
            <img className="workImage" src={work.image} alt={work.name} />
          </button>
          <h2 className="titleWork">{work.name}</h2>
        </div>
      ))}
      <ModalWorksCard estado={stateModal} setEstado={setStateModal} />
    </div>
  );
}

export default Works;
