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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper/modules";

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
      <div className="sm:hidden block">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          modules={[Pagination]}
          loop={true}
          className="min-w-0"
        >
          {images?.map((img) => (
            <SwiperSlide>
              <Image
                placeholder="blur"
                quality={100}
                key={activeIndex}
                src={img.img}
                alt={"Boston University Shots"}
                className="sm:w-[600px] w-full h-[400px] sm:h-[600px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={activeIndex}
          transition={{ duration: 0.5 }}
          className="flex flex-col w-full max-sm:hidden"
        >
          <Image
            placeholder="blur"
            quality={100}
            key={activeIndex}
            src={images[activeIndex].img}
            alt={"Boston University Shots"}
            className="sm:w-[600px] w-full h-[400px] sm:h-[600px] object-cover mx-auto"
          />
          <p className="font-normal mt-2 text-base text-center">
            {activeIndex + 1} / {images.length}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex justify-center max-sm:hidden items-center gap-4">
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

export default Drink;
