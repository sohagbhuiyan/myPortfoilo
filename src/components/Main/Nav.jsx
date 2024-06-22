import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { logo } from "../../Utils/Images";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const Header = [
    { name: "Home", link: "home" },
    { name: "Skills", link: "skills" },
    { name: "Project", link: "project" },
    { name: "Contact", link: "contact" },
    { name: "CV", link: "cv", isDownload: true },
  ];

  const [open, setOpen] = useState(false);

  // Function to handle CV download
  const handleCvDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1LLslhA-C1LJe0sSR6GvT0Ld7UOZMtPl7/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <div className="sticky top-0 z-50 md:flex md:py-4 bg-slate-800 justify-between px-4 h-14 md:h-16 items-center">
      <div className="py-2">
        <img src={logo} alt="Logo" className="h-12 md:h-14 px-10" />
      </div>
      <div onClick={() => setOpen(!open)} className=' text-white cursor-pointer absolute right-8 top-5 md:hidden'>
        {open ? <FaXmark className='hover:text-red-400' /> : <FiMenu className='hover:text-red-400' />}
      </div>
      <div className="">
        <ul className={`md:flex md:px-20 absolute md:static md:space-x-8 md:pl-0 pl-14 py-2 left-0 w-full md:w-auto transition-all ${open ? "top-16 bg-slate-100" : "top-[-420px]"}`}>
          {Header.map((nav, index) => (
            <li key={index} className="md:text-white text-lg transform transition-transform duration-300 hover:scale-110 text-slate-950 font-medium hover:text-cpink-200 cursor-pointer">
              {nav.isDownload ? (
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleCvDownload(); // Trigger CV download
                    setOpen(false); // Close the menu
                  }}
                
                >
                  {nav.name}
                </a>
              ) : (
                <ScrollLink
                  to={nav.link} // Use the link property for ScrollLink
                  smooth={true}
                  duration={200}
                  spy={true}
                  offset={-65} // Adjust offset for sticky header
                  onClick={() => setOpen(false)} // Close menu on click
                >
                  {nav.name}
                </ScrollLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
