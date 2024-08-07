"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import SidebarContent from "./sidebar-content";

interface DrawerTypes {
  setShowDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer = ({ setShowDrawer }: DrawerTypes) => {
  return (
    <motion.div
      className="fixed flex justify-start items-center inset-0 w-full h-screen bg-black bg-opacity-40 backdrop-blur-sm z-[200]"
      onClick={() => setShowDrawer(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.25 }}
        className="h-full bg-white  border-l-2 border-primary  p-4 w-72 "
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose
          className="text-primary text-2xl ml-auto cursor-pointer"
          onClick={() => setShowDrawer(false)}
        />

        <div className="mt-4">
          <SidebarContent setShowDrawer={setShowDrawer} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Drawer;
