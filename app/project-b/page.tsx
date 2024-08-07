"use client";

import Image from "next/image";
import React, { useState } from "react";
import projectB from "@/assets/projecBImg.webp";
import { AnimatePresence, motion } from "framer-motion";

const ProjectB = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div>
      {showImages ? (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col w-full"
          >
            <Image
              placeholder="blur"
              quality={100}
              src={projectB}
              alt={"Al's 540 Kick"}
              className="sm:w-[600px] w-full h-[400px] 2xl:h-[600px] object-cover mx-auto rounded-2xl"
            />

            <p className="font-normal mt-2 text-base text-center">
              Al's 540 Kick
            </p>
          </motion.div>
        </AnimatePresence>
      ) : (
        <React.Fragment>
          <h4 className="text-2xl font-semibold text-center">Project B</h4>
          <p className="text-center text-sm mt-2">2019 - Present</p>

          <p className="mt-8 w-full md:w-3/4 mx-auto">
            Martial Arts Tricking, commonly known as “Tricking” is a training
            discipline that originated in the late 1990s. Tricking combines
            elements from Wushu, Taekwondo, Gymnastics and various extreme
            sports.The goal of Tricking is not necessarily to engage in combat
            but to showcase skill, athleticism, and artistic expression. It
            involves performing acrobatic flips, twists, and kicks, often
            stringing them together in a fluid and creative manner. <br />
            <br />
            Project B provides a generational look at the Tricking community in
            the Greater Boston area and the experiences of those who shape it.
          </p>

          <button
            onClick={() => setShowImages(true)}
            className="mt-12 mx-auto block bg-gray-200 px-8 py-1.5 rounde-md text-base font-semibold"
          >
            View Image
          </button>
        </React.Fragment>
      )}
    </div>
  );
};

export default ProjectB;
