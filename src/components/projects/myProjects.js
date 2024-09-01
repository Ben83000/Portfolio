import sugbreak from "../../assets/projects/sugbreak/desktop.png";
import ayknow from "../../assets/projects/ayknow/ayknow.png"

const myProjects = [
  {
    name: "sugbreak",
    image: sugbreak,
    description:
      "Application web moderne pour un Fast Food 'sucré' (Authentification, commande, paiement en ligne..)",
    href: "https://gentle-citadel-85847-6ce2d6bf71ee.herokuapp.com/",
    front: "Reactjs, Tailwind, Shadcn-ui, Yup, Socket.IO",
    back: "Nodejs, Express, MongoDB (mongoose), Resend",
    git: "https://github.com/Ben83000/SugBreak"
  },
  {
    name: "ayknow",
    image: ayknow,
    description:
      "Application mobile ayant pour but d'apporter du fun à l'apprentissage. Participation au back-end de l'application.",
    technos: "C#, .Net",

  },
];

export default myProjects;
