"use client";

import React from "react";
import SidebarContent from "./sidebar-content";

const Sidebar = () => {
  return (
    <div className="w-[300px] lg:block hidden">
      <SidebarContent />
    </div>
  );
};

export default Sidebar;
