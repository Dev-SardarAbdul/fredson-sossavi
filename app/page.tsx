"use client";

import Image from "next/image";
import homeImg1 from "@/assets/home/homeImg1.jpg";
import homeImg2 from "@/assets/home/homeImg2.jpg";
import homeImg3 from "@/assets/home/homeImg3.jpg";
import homeImg4 from "@/assets/home/homeImg4.jpg";
import homeImg5 from "@/assets/home/homeImg5.jpg";
import homeImg6 from "@/assets/home/homeImg6.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const imgs = [homeImg1, homeImg2, homeImg3, homeImg4, homeImg5, homeImg6];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % imgs.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={activeIndex}
        >
          <Image
            src={imgs[activeIndex]}
            alt={`Home Image ${activeIndex + 1}`}
            className="md:w-[700px] w-full rounded-2xl object-cover h-[400px] md:h-[700px] mx-auto block"
          />
        </motion.div>
      </AnimatePresence>
    </main>
  );
}
