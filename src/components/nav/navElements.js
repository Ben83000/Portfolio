import {
  faUser,
  faLaptopCode,
  faHome,
  faEnvelope,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";

const navElements = [
  { title: {fr: "Accueil", en: "Home"}, icon: faHome, id: "home" },
  { title: {fr: "Projets", en: "Projects"}, icon: faLaptopCode, id: "projects" },
  { title: {fr: "Compétences", en: "Skills"}, icon: faAtom, id: "skills" },
  { title: {fr: "À propos", en: "About"}, icon: faUser, id: "about" },
];

export default navElements