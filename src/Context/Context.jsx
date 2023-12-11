import React, { useEffect, useState } from "react";
import { technologies } from "../helpers/technologies";
import { works as myWorks } from "../helpers/data";

export const Context = React.createContext({});

export const ContextProvider = ({ children }) => {
  const techno = technologies;
  const works = myWorks;
  const [oneWork, setOneWork] = useState({});
  const [stateTechno, setStateTechno] = useState(false)

  const proximamente = ()=>{
    setStateTechno(!stateTechno);
  }

  const getWork = (idWork) => {
    const work = works[idWork - 1];
    setOneWork(work);
  };

  console.log(stateTechno)
  return (
    <Context.Provider value={{ techno, works, getWork, oneWork, stateTechno, setStateTechno }}>
      {children}
    </Context.Provider>
  );
};
