"use client";
import { motion } from "framer-motion";

export default function SplitText({ text, delay = 0 }) {
  return (
    <motion.span
      initial={{ y: "100%", opacity: 0 }}
      whileInView={{ y: "0%", opacity: 1 }}
      transition={{
        delay: delay,
        duration: 0.6,
        ease: "easeOut"
      }}
      viewport={{ once: false, amount: 0.2 }}
      className="inline-block whitespace-pre-wrap"
    >
      {text}
    </motion.span>
  );
}
