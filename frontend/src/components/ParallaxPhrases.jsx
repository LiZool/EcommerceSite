import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const ParallaxPhrases = ({ phrases }) => {
  const sectionRef = useRef(null);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"], // start = top enters viewport, end = bottom leaves
  });

  // Map scroll progress to vertical motion (parallax)
  const yMotion = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const handleNext = () => setPhraseIndex((prev) => (prev + 1) % phrases.length);
  const handlePrev = () =>
    setPhraseIndex((prev) => (prev - 1 + phrases.length) % phrases.length);

  return (
    <div ref={sectionRef}>
      <motion.div style={{ y: yMotion }}>
        <div className="h-24 flex items-center justify-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={phrases[phraseIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold text-yellow-700"
            >
              {phrases[phraseIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={handlePrev}
            className="px-5 py-2 bg-yellow-200 rounded hover:bg-yellow-300 transition-colors"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-5 py-2 bg-yellow-200 rounded hover:bg-yellow-300 transition-colors"
          >
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxPhrases;