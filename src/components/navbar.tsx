"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import Drawer from "./drawer";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="flex justify-between items-center gap-4">
      <Link href={"/"}>
        <h4 className="text-black font-frankGothic text-2xl sm:text-3xl lg:text-5xl cursor-pointer">
          FREDSON SOSSAVI
        </h4>
      </Link>

      <RiMenu4Line
        onClick={() => setShowDrawer(true)}
        className="text-3xl text-black lg:hidden block cursor-pointer "
      />
      <AnimatePresence mode="wait" initial={false}>
        {showDrawer && <Drawer setShowDrawer={setShowDrawer} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
