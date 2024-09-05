import sugbreak from "../../../assets/projects/sugbreak/desktop.png";
import ayknow from "../../../assets/projects/ayknow/ayknow.png";

const myProjects = [
  {
    name: "sugbreak",
    image: sugbreak,
    description: {
      fr: "Application web moderne pour un fast food à thème sucré (authentification, commande, paiement en ligne, etc.)",
      en: "Modern web application for a sweet-themed fast food (authentication, ordering, online payment, etc.)",
    },
    href: "https://gentle-citadel-85847-6ce2d6bf71ee.herokuapp.com/",
    front: "Reactjs, Tailwind, Shadcn-ui, Yup, Socket.IO",
    back: "Nodejs, Express, MongoDB (mongoose), Resend",
    git: "https://github.com/BenjaminBoufflers/SugBreak",
  },
  {
    name: "ayknow",
    image: ayknow,
    description: {
      fr: "Application mobile ayant pour but d'apporter du fun à l'apprentissage. Participation au back-end de l'application.",
      en: "Mobile application designed to make learning fun. Contributed to the back-end development of the application."
    }
      ,
    technos: "C#, .Net",
  },
];

export default myProjects;
