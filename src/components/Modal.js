import React from "react";
import { motion } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ children, onClose }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
      variants={backdrop}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-lg overflow-hidden max-w-lg w-full"
        variants={modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">
          <div>{children}</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
