"use client";

import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/assets/bu/bu1.webp";
import img2 from "@/assets/bu/bu2.webp";
import img3 from "@/assets/bu/bu3.webp";
import img4 from "@/assets/bu/bu4.webp";
import img5 from "@/assets/bu/bu5.webp";
import img6 from "@/assets/bu/bu6.webp";
import img7 from "@/assets/bu/bu7.webp";
import img8 from "@/assets/bu/bu8.webp";
import img9 from "@/assets/bu/bu9.webp";
import img10 from "@/assets/bu/bu10.webp";
import { AnimatePresence, motion } from "framer-motion";

const Drink = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    },
    {
      id: 9,
      img: img9,
    },
    {
      id: 10,
      img: img10,
    },
  ];

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={activeIndex}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full"
        >
          <img
            width={300}
            height={300}
            key={activeIndex}
            src={images[activeIndex].img.src}
            alt={"Boston University Shots"}
            className="sm:w-[600px] w-full h-[400px] sm:h-[600px] object-cover mx-auto rounded-2xl"
          />
          <p className="font-normal mt-2 text-base text-center">
            {activeIndex + 1} / {images.length}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          disabled={activeIndex === 0}
          onClick={() => activeIndex > 0 && setActiveIndex((prev) => prev - 1)}
          className="bg-gray-200 px-8 py-1.5 rounded-md disabled:opacity-50 text-base font-semibold"
        >
          Previous
        </button>
        <button
          disabled={activeIndex === 9}
          onClick={() =>
            activeIndex < images.length - 1 &&
            setActiveIndex((prev) => prev + 1)
          }
          className="bg-gray-200 px-8 py-1.5 disabled:opacity-50 rounded-md text-base font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Drink;
