import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import "../styles/modal.css";
import github from "../images/gitHub.webp";
import { useContext } from "react";
import { Context } from "../Context/Context";
import ripple from '../images/Ripple.svg'

function ModalWorkCard({ estado, setEstado }) {
  const modalWorkContext = useContext(Context);

  const work = modalWorkContext.oneWork;

  return (
    <>
      {estado && (
        <Overley>
          <div className="containerMain">
            <button
              className="modalCloseButton"
              onClick={() => {
                setEstado(!estado);
              }}
            >
              <AiOutlineClose className="CloseButton" />
            </button>
            <div className="containerGif">
              {work.gif ? (<div>
                <video width="700" height="327" autoPlay loop>
                <source src={work.gif} />
              </video>
              </div>) : (<div className="ripple">
                <img src={ripple} alt="rolling" />
              </div>)}
            </div>
            <div className="containerInfo">
              <div className="descriptionContainer">
                <div className="descriptionChildContainer">
                  <h2 className="descriptionTitle">Descripción Del proyecto</h2>
                  <p className="descriptionWork">{work.description}</p>
                </div>
                <div className="repositoriesContainer">
                  <div className="repositoriesContainerchild">
                    <h2 className="repositoriesTitle">
                      Repositorio del proyecto
                    </h2>
                  </div>
                  <div className="repositoriesContainerchild">
                    <h2 className="titleRepo">Pagina</h2>
                    <a href={work.repoWeb} target="_blank">
                      <img className="gitHubImage" src={github} alt="gitHub" />
                    </a>
                  </div>
                  <div className="repositoriesContainerchild last">
                    <h2 className="titleRepo">Api</h2>
                    <a href={work.repoApi} target="_blank">
                      <img className="gitHubImage" src={github} alt="gitHub" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="tecnoContainer">
                <h2 className="tecnoTitle">Tecnologias utilizadas</h2>
                <div className="tecno">
                  <section className="tecnoInfo">
                    <img
                      className="tecnoImage"
                      src={work.technoUsed.image1}
                      alt="tecnoImage"
                    />
                    <p className="titleTecno">{work.technoUsed.name1}</p>
                  </section>
                  {work.technoUsed.name2 ? (
                    <section className="tecnoInfo">
                      <img
                        className="tecnoImage"
                        src={work.technoUsed.image2}
                        alt="tecnoImage"
                      />
                      <p className="titleTecno">{work.technoUsed.name2}</p>
                    </section>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Overley>
      )}
    </>
  );
}

export default ModalWorkCard;

const Overley = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  letf: 0;
  top: 0;
  display: grid;
  justify-content: center;
  align-items: center;
`;
