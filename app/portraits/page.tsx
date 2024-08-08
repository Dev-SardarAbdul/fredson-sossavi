"use client";

import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/assets/portraits/portrait1.webp";
import img2 from "@/assets/portraits/portrait2.webp";
import img3 from "@/assets/portraits/portrait3.webp";
import img4 from "@/assets/portraits/portrait4.webp";
import img5 from "@/assets/portraits/portrait5.webp";
import img6 from "@/assets/portraits/portrait6.webp";
import { AnimatePresence, motion } from "framer-motion";

const Portraits = () => {
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
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

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
          <Image
            placeholder="blur"
            quality={100}
            key={activeIndex}
            src={images[activeIndex].img}
            alt={"Portrait Shots"}
            className="sm:w-[600px] w-full h-[400px] sm:h-[600px] object-cover mx-auto"
          />
          <p className="font-normal mt-2 text-base text-center">
            {activeIndex + 1} / {images.length}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          onClick={handlePrevious}
          className="bg-gray-200 px-8 py-1.5 rounded-md text-base font-semibold"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-200 px-8 py-1.5 rounded-md text-base font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Portraits;
