import React from "react";
import aboutImg from "@/assets/aboutImg.jpg";
import Image from "next/image";

const Ppage = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between items-start gap-8">
      <p className="w-full lg:w-1/2">
        Fredson Sossavi (b.1995) is a Togolese-American artist with an affinity
        for photography, dance, and martial arts. His projects shed light on
        unique subcultures in urban areas and the stories of the people
        intertwined in them.
        <br />
        <br />
        <span className="font-semibold"> Exhibitions:</span> <br />
        1. Where I’m Calling From, Solo Exhibition, Nepenthes New York, New York
        City, 2022.
        <br />
        2. Far Away From Home, Group Exhibition at Dolphin Gallery, Worcester,
        2022.
        <br />
        3. The Curated Fridge, Group Exhibition, Boston, 2022.
        <br />
        4. Postcards from the Edge, Group Exhibition, New York City, 2023.
      </p>
      <Image
        src={aboutImg}
        className="w-full sm:w-[400px] mx-auto rounded-2xl"
        alt="About image"
      />
    </div>
  );
};

export default Ppage;
