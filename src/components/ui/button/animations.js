export const shadowAnimation = {
  visible: {
    boxShadow: "0px 0px 0px rgba(217, 70, 239, 0.8)",
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration: 0.2 },
  },
  hover: {
    boxShadow: "-2px 5px 0px rgba(217, 70, 239, 0.8)",
    y: -2,
    x: 2,
    scale: 1.02,
    transition: { duration: 0.2 },
    backgroundColor: "#4a044e",
  },
  tap: {
    scale: 1,
    y: 0,
    x: 0,
    boxShadow: "0px 0px 0px rgba(217, 70, 239, 0.8)",
  },
};

export const fillAnimation = {
  visible: {
    background:
      "linear-gradient(45deg, rgb(240, 171, 252) 50%, transparent 50%)",
    backgroundSize: "300% 100%",
    backgroundPosition: "100% 0%",
    color: "white",
    transition: { duration: 0.5 },
  },
  hover: {
    backgroundPosition: "0% 0%",
    color: "black",
    transition: { duration: 0.3, backgroundPosition: { duration: 0.5 } },
  },
};
