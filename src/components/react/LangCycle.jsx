import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Español", "English", "Português"];

export default function LangCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-16 overflow-hidden flex justify-center items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute text-blue-400 font-bold text-5xl md:text-6xl"
        >
          {words[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
