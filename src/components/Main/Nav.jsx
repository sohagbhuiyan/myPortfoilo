import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { p2 } from "../../Utils/Images";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const Header = [
    { name: "Home", link: "home" },
    { name: "Experience", link: "experience" },
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
      "https://drive.google.com/file/d/1IXYhEBfTz7HyeZj4qGG6GzAoQL5-cLQ8/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/30 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center"
        >
          <img
            src={p2}
            alt="Logo"
            className="h-8 transition-transform duration-300 hover:rotate-12"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          {Header.map((nav, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="relative"
            >
              {nav.isDownload ? (
                <button
                  onClick={handleCvDownload}
                  className="px-3 py-1.5 text-sm font-semibold bg-gradient-to-r from-cpink-200 to-purple-600 text-white rounded-full 
                            shadow-sm hover:shadow-md transition-all duration-200"
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
                  onSetActive={() => setActiveLink(nav.link)}
                  className={`px-3 py-1.5 text-sm font-medium ${
                    activeLink === nav.link
                      ? "text-cpink-200 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-cpink-200"
                      : "text-gray-200 hover:text-cpink-200"
                  } transition duration-200 cursor-pointer`}
                >
                  {nav.name}
                </ScrollLink>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-xl text-gray-200 p-1.5 hover:text-cpink-200 transition-colors duration-200"
          aria-label="Navigation menu"
        >
          {open ? <FaXmark /> : <FiMenu />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden fixed top-12 left-0 right-0 bg-slate-900/95 backdrop-blur-lg shadow-lg ${
            open ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-2">
            {Header.map((nav, index) => (
              <li key={index} className="w-full text-center">
                {nav.isDownload ? (
                  <button
                    onClick={() => {
                      handleCvDownload();
                      setOpen(false);
                    }}
                    className="w-full py-2 text-md font-semibold text-white bg-cpink-200 hover:bg-cpink-300 transition-colors duration-200"
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
                    className={`block py-2 text-sm font-medium ${
                      activeLink === nav.link
                        ? "text-cpink-200"
                        : "text-gray-200 hover:text-cpink-200"
                    } transition-colors duration-200`}
                  >
                    {nav.name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Nav;
