
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
function FlipCard({ item }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer perspective-1000"
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
      onClick={() => setFlipped(!flipped)} // for mobile
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT CARD */}
        <div className="absolute inset-0 backface-hidden">
          <div className="relative overflow-hidden border-b xl:border-b-0 border-white/30">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[250px] xl:h-[300px] 3xl:h-[333px] object-cover"
            />
            <div className="pt-4 lg:pt-6 2xl:pt-30px">
              <h3 className="text-24 3xl:text-29 leading-[1.2] font-light mb-2">
                {item.title}
              </h3>
              <p className="text-19 leading-[1.5] font-light">{item.desc}</p>
            </div>
          </div>
        </div>

        {/* BACK CARD */}
        <div
          className="absolute inset-0 flex items-center justify-center p-4 bg-black/80 text-white backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <p className="text-center text-17 leading-relaxed font-light">
            {item.backText || "More details coming soon"}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FlipCard;