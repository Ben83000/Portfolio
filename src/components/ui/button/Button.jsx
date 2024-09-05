import React from "react";
import { motion } from "framer-motion";
import cn from "classnames";
import { shadowAnimation, fillAnimation } from "./animations";

function Button({ text, type, onClick, href }) {
  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      variants={
        type === "shadow"
          ? shadowAnimation
          : type === "fill"
            ? fillAnimation
            : null}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className={cn(
        "border border-fuchsia-600 w-full rounded-lg p-2 cursor-pointer"
      )}
      onClick={onClick}
      href={href}
      {...(href && { target: "_blank" })}
    >
      {text}
    </MotionComponent>
  );
}

export default Button;
