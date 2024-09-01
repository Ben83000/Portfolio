import { createContext, useContext, useEffect, useState } from "react";

export const ScreenContext = createContext();

export const ScreenContextProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScreenSize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleScreenSize);
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return (
    <ScreenContext.Provider value={{ width, height }}>
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreenContext = () => useContext(ScreenContext);
