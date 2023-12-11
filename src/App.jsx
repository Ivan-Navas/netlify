import "./App.css";
import MyInfo from "./components/MyInfo";
import Technologies from "./components/Technologies";
import Works from "./components/Works";
import { ContextProvider } from "./Context/Context";
import { myInfo } from "./helpers/myInfo";
import myCharacter from "./images/myCharacter.jpeg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function App() {

  return (
    <>
      <ContextProvider>
        <div className="iconsContainer">
          <a href="https://github.com/Ivan-Navas" target="_blank">
            <AiFillGithub className="logos github" />
          </a>
          <a
            href="https://www.linkedin.com/in/ivan-navas-0990021a6/"
            target="_blank"
          >
            <AiFillLinkedin className="logos linkedin" />
          </a>
        </div>
        <div className="myInfoContainer">
          <MyInfo />
          <div className="characterContainer">
            <img className="character" src={myCharacter} alt="Character" />
          </div>
        </div>
        <div className="mySecoContainer">
          <div>
            <h2 className="title margin">Tecnologías</h2>
            <Technologies />
          </div>
          <p className="secundary">{myInfo.secundaryInfo}</p>
        </div>
        <div className="worksContainer">
          <h2 className="title margin">Proyectos</h2>
          <Works />
        </div>
      </ContextProvider>
    </>
  );

}

export default App
