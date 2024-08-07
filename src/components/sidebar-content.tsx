import Link from "next/link";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const SidebarContent = ({
  setShowDrawer,
}: {
  setShowDrawer?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [dropdownValue, setDropdownValue] = useState("");

  const navClass = "font-medium text-xl cursor-pointer w-fit text-black";
  const subNavClass =
    "text-base flex justify-start items-center gap-1 cursor-pointer w-fit text-black";

  const navLinks = [
    { id: 1, text: "About", route: "about", hasDropdown: false },
    {
      id: 2,
      text: "Personal",
      route: "personal",
      hasDropdown: true,
      subRoutes: [
        { text: "Where I'm Calling From", route: "calling" },
        { text: "Project B", route: "project-b" },
        { text: "Portraits", route: "portraits" },
      ],
    },
    {
      id: 3,
      text: "Commercial",
      route: "commercial",
      hasDropdown: true,
      subRoutes: [
        { text: "Season International", route: "season" },
        { text: "Drinkwater's Cambridge", route: "drink" },
        { text: "Boston University", route: "boston-university" },
      ],
    },
    {
      id: 4,
      text: "Instagram",
      route: "",
      insta: "https://www.instagram.com/freddybluray/",
      hasDropdown: false,
    },
    {
      id: 5,
      text: "Contact",
      route: "",
      mail: "fredsonsossavi@gmail.com",
      hasDropdown: false,
    },
  ];

  const handleDropdownClick = (text: string) => {
    if (dropdownValue === text) {
      setDropdownValue("");
    } else {
      setDropdownValue(text);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      {navLinks.map((link) => (
        <div key={link.id}>
          {link.hasDropdown ? (
            <div>
              <div
                onClick={() => handleDropdownClick(link.text)}
                className="w-fit cursor-pointer flex justify-start items-center gap-4"
              >
                <p className={navClass}>{link.text}</p>
                <IoIosArrowDown
                  className={`text-xl transition-all ${
                    dropdownValue === link.text ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <AnimatePresence initial={false}>
                {dropdownValue === link.text && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="flex flex-col gap-4 overflow-clip"
                  >
                    <div className="mt-2 flex flex-col gap-2">
                      {link?.subRoutes?.map((item) => (
                        <Link
                          onClick={() => {
                            setShowDrawer && setShowDrawer(false);
                          }}
                          key={item.route}
                          href={item?.route}
                        >
                          <p className={subNavClass}>
                            <GoDotFill className="text-black" />
                            {item.text}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              onClick={() => {
                if (link.id === 4) {
                  window.open(link.insta, "_blank");
                }
                if (link.id === 5) {
                  window.location.href = `mailto:${link.mail}`;
                }
                setShowDrawer && setShowDrawer(false);
              }}
              href={link.route}
            >
              <p className={navClass}>{link.text}</p>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default SidebarContent;
