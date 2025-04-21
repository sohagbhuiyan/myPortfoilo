import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { p2 } from "../../Utils/Images";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const Header = [
    { name: "Home", link: "home" },
    { name: "Projects", link: "project" },
    { name: "Skills", link: "skills" },
    { name: "Education", link: "education" },
    { name: "Contact", link: "contact" },
    { name: "CV", link: "cv", isDownload: true },
  ];

  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleCvDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1yV3hHOLtuwJe3l-sbhYMvaxwSrzWnyoT/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-800 backdrop-blur-lg border-b border-slate-700/50">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 md:py-4">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center"
        >
          <img 
            src={p2} 
            alt="Logo" 
            className="h-7 md:h-10 transition-transform duration-200 hover:rotate-[15deg]" 
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {Header.map((nav, index) => (
            <div
              key={index}
              className="relative"
            >
              {nav.isDownload ? (
                <button
                  onClick={handleCvDownload}
                  className="px-4 py-2 bg-gradient-to-r from-cpink-200 to-blue-500 font-bold text-white rounded-full 
                            shadow-md hover:shadow-lg transition-all duration-150"
                >
                  {nav.name}
                </button>
              ) : (
                <ScrollLink
                  to={nav.link}
                  smooth={true}
                  duration={600}
                  spy={true}
                  offset={-80}
                  // onSetActive={() => setActiveLink(nav.link)}
                  className={`px-4 py-2 cursor-pointer text-lg font-medium ${
                    activeLink === nav.link 
                      ? "text-cpink-200 border-b-2 border-cpink-200"
                      : "text-white hover:text-cpink-200/80"
                  } transition duration-150`}
                >
                  {nav.name}
                </ScrollLink>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-white p-2 hover:text-cpink-200  duration-100"
          aria-label="Navigation menu"
        >
          {open ? <FaXmark /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-10 left-0 right-0 bg-slate-800/95 backdrop-blur-xl 
                        ${open ? "block" : "hidden"} transition-opacity duration-100`}>
          <ul className="flex flex-col items-center py-2 space-y-1">
            {Header.map((nav, index) => (
              <li
                key={index}
                className="w-full text-center"
              >
                {nav.isDownload ? (
                  <button
                    onClick={() => {
                      handleCvDownload();
                      setOpen(false);
                    }}
                    className="w-full py-2.5 text-lg font-medium text-white bg-cpink-200/90 hover:bg-cpink-200 transition-colors duration-150"
                  >
                    {nav.name}
                  </button>
                ) : (
                  <ScrollLink
                    to={nav.link}
                    smooth={true}
                    duration={600}
                    spy={true}
                    offset={-80}
                    onSetActive={() => {
                      setActiveLink(nav.link);
                      setOpen(false);
                    }}
                    className={`block py-2.5 text-lg font-medium ${
                      activeLink === nav.link
                        ? "text-cpink-200"
                        : "text-white hover:text-cpink-200/80"
                    } transition-colors duration-100`}
                  >
                    {nav.name}  
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
