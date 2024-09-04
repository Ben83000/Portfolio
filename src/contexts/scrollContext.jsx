import { createContext, useContext, useRef, useEffect, useState } from "react";

const ScrollContext = createContext();

export const ScrollContextProvider = ({ children }) => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const lastScrollPos = useRef(0);

  useEffect(() => {
    const handleScrollingDown = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > lastScrollPos.current) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollPos.current = currentScrollPos;
    };
    window.addEventListener("scroll", handleScrollingDown);
    return () => {
      window.removeEventListener("scroll", handleScrollingDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrollingDown, isTop }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
