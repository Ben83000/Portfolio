import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const NextArrow = ({ onClick, size }) => {
  return (
    <motion.div
      className="absolute  right-2 z-10"
      animate={{ y: "50%", translateY: "-50%", scale: 1.2 }}
      whileHover={{ scale: 1.5, transition: { type: "spring", stiffness: 300} }}
      transition={{ type: "spring", stiffness: 300}}
    >
      <FontAwesomeIcon
        className=" text-cyan-500 hover:text-cyan-400 cursor-pointer rounded-full p-1"
        onClick={onClick}
        icon={faAngleDoubleRight}
        size={size}
      />
    </motion.div>
  );
};

NextArrow.propTypes = {
  onClick: PropTypes.func,
  size: PropTypes.string
};

export default NextArrow;