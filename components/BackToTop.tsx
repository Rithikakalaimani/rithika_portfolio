"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowUp } from "react-icons/hi";

const SCROLL_THRESHOLD = 400;

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full border-2 border-textGreen bg-bodyColor/90 backdrop-blur-sm text-textGreen flex items-center justify-center shadow-lg hover:bg-hoverColor hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-textGreen focus:ring-offset-2 focus:ring-offset-bodyColor"
          aria-label="Back to top"
        >
          <HiOutlineArrowUp className="text-xl" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
