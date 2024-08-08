"use client";

import Image from "next/image";
import React, { useState } from "react";
import img1 from "@/assets/calling/img1.webp";
import img2 from "@/assets/calling/img2.webp";
import img3 from "@/assets/calling/img3.webp";
import img4 from "@/assets/calling/img4.webp";
import img5 from "@/assets/calling/img5.webp";
import img6 from "@/assets/calling/img6.webp";
import img7 from "@/assets/calling/img7.webp";
import img8 from "@/assets/calling/img8.webp";
import img9 from "@/assets/calling/img9.webp";
import img10 from "@/assets/calling/img10.webp";
import img11 from "@/assets/calling/img11.webp";
import img12 from "@/assets/calling/img12.webp";
import img13 from "@/assets/calling/img13.webp";
import img14 from "@/assets/calling/img14.webp";
import img15 from "@/assets/calling/img15.webp";
import img16 from "@/assets/calling/img16.webp";
import { AnimatePresence, motion } from "framer-motion";

const Calling = () => {
  const [showImages, setShowImages] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      id: 1,
      img: img1,
      text: "Patrick J. Kennedy Elementary School",
    },
    {
      id: 2,
      img: img2,
      text: "Somerville Community Path",
    },
    {
      id: 3,
      img: img3,
      text: "Elmwood Street",
    },
    {
      id: 4,
      img: img4,
      text: "Airport Station",
    },
    {
      id: 5,
      img: img5,
      text: "East Boston Expressway",
    },
    {
      id: 6,
      img: img6,
      text: "Thorndike Street",
    },
    {
      id: 7,
      img: img7,
      text: "Pleasant Court Condominiums",
    },
    {
      id: 8,
      img: img8,
      text: "Ringer Park",
    },
    {
      id: 9,
      img: img9,
      text: "Bennington Street",
    },
    {
      id: 10,
      img: img10,
      text: "Mendoza Square",
    },
    {
      id: 11,
      img: img11,
      text: "Suffolk Downs",
    },
    {
      id: 12,
      img: img12,
      text: "Neptune Road",
    },
    {
      id: 13,
      img: img13,
      text: "East Boston Expressway",
    },
    {
      id: 14,
      img: img14,
      text: "Post Road Vinyl & Tile",
    },
    {
      id: 15,
      img: img15,
      text: "Pearl Street",
    },
    {
      id: 16,
      img: img16,
      text: "Mackay Drive",
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
      {showImages ? (
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
              alt={images[activeIndex].text}
              className="sm:w-[600px] w-full h-[400px] 2xl:h-[600px] object-cover mx-auto"
            />
            <p className="font-normal mt-2 text-base text-center">
              {activeIndex + 1} / {images.length}
            </p>
            <p className="font-normal text-base text-center">
              {images[activeIndex].text}
            </p>
          </motion.div>
        </AnimatePresence>
      ) : (
        <React.Fragment>
          <h4 className="text-2xl font-semibold text-center">
            Where I'm Calling From
          </h4>
          <p className="text-center text-sm mt-2">2020 - Present</p>

          <p className="mt-8 w-full md:w-3/4 mx-auto">
            In the Summer of 1983, literary magazine and publisher, Granta,
            defined a new literary movement in its 8th issue,
            <span className="italic"> Granta 8: Dirty Realism</span>. The 1983
            issue showcased a new voice in North American literature, as well as
            an introductory column by American journalist Bill Buford. The
            writers in this issue consisted of: Richard Ford, Jayne Anne
            Phillips, Raymond Carver, Elizabeth Tallent, and Tobias Wolff, among
            others.
            <br />
            <br />
            In his piece, Bill Buford describes this genre as a variety of
            literary minimalism characterized by an economy of words and a focus
            on surface description. He explains, “they write about the
            belly-side of contemporary life – a deserted husband, an unwed
            mother, a car thief, a pickpocket, a drug addict – but they write
            about it with a disturbing detachment, at times verging on comedy.
            Understated, ironic, sometimes savage, but insistently
            compassionate.” <br />
            <br />
            Where I'm Calling From is a project inspired by the works of
            American short story writer, Raymond Carver. In this work, Fredson
            offers a pictorial entry to the dirty realist genre. As he
            photographs, the elements of this genre work as creative restraints
            meant to assist his formation of a greater anthology. The images,
            though devoid of people, are embedded with clues meant to guide
            viewers as they explore the stillness and undercurrents of the
            night.
          </p>

          <button
            onClick={() => setShowImages(true)}
            className="mt-12 mx-auto block bg-gray-200 px-8 py-1.5 rounde-md text-base font-semibold"
          >
            View Images
          </button>
        </React.Fragment>
      )}

      {showImages && (
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
      )}
    </div>
  );
};

export default Calling;
