import react from "../images/react.png";
import mongoDB from "../images/mongodb.png";
import gestorImagen from "../images/gestorImage.png";
import rickImage from "../images/rickImage.png";
import gestorVideo from "../images/gestorVideo.mp4";
import rickVideo from "../images/rickVideo.mp4";
import redSocialImage from '../images/redSocialImage.png';
import redSocialVideo from '../images/RedSocial.mp4';


export const works = [
  {
    name: "Red social",
    id: 1,
    description:
      "Red social creada con el fin de utilizar todos los conocimientos adquiridos en consumo y creacion de apis, cuenta con, inicio de sesíon, encriptacion de la contrazeña y todos los endpoints basicos para una red social",
    image: redSocialImage,
    gif: redSocialVideo,
    repoWeb: "https://github.com/Ivan-Navas/RedSocial",
    repoApi: "https://github.com/Ivan-Navas/ApiRedSocial",
    technoUsed: {
      name1: "React",
      image1: react,
      name2: "MongoDB",
      image2: mongoDB,
    },
  },

  {
    name: "Gestor de ahorros",
    id: 2,
    description:
      "Pagina web creada para la gestion de ahorros, utilizando react, y mongoDB para la base de datos, La pagina cuenta con una api encardada de comunicar el front con la base de  datos",
    image: gestorImagen,
    gif: gestorVideo,
    repoWeb: "https://github.com/Ivan-Navas/Gestor-de-ahorros",
    repoApi: "https://github.com/Ivan-Navas/apiObjetives",
    technoUsed: {
      name1: "React",
      image1: react,
      name2: "MongoDB",
      image2: mongoDB,
    },
  },

  {
    name: "Consumo de The Rink&Morty Api",
    id: 2,
    description:
      "Pagina wen en la que se consume una api(The rick and morty api), como muetra de conosimientos en consumo de apis",
    gif: rickVideo,
    image: rickImage,
    repoWeb: "https://github.com/Ivan-Navas/RickAndMorty",
    repoApi: "https://rickandmortyapi.com",
    technoUsed: {
      name1: "React",
      image1: react,
    },
  },
];
