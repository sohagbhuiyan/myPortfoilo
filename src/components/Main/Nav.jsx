import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { logo } from "../../Utils/Images";
import { Link as ScrollLink } from "react-scroll"; // Import Link from react-scroll

const Nav = () => {
  const Header = [
    { name: "Home", link: "home" }, // Sections should match ids of the sections in your page
    { name: "Skills", link: "skills" },
    { name: "Project", link: "project" },
    { name: "Contact", link: "contact" },
    { name: "CV", link: "Cv" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="md:flex md:py-4 bg-slate-800 justify-between px-4 h-14 md:h-16 items-center">
      <div className="py-2">
        <img src={logo} alt="Logo" className="h-12 md:h-14 px-10" />
      </div>
      <div onClick={() => setOpen(!open)} className='w-10 text-white cursor-pointer absolute right-8 top-6 md:hidden'>
        {open ? <FaXmark className='hover:text-red-400' /> : <FiMenu className='hover:text-red-400' />}
      </div>
      <div className="">
        <ul className={`md:flex md:px-20 absolute md:static md:space-x-8 md:pl-0 pl-14 py-2 left-0 w-full md:w-auto transition-all ${open ? "top-16 bg-slate-100" : "top-[-420px]"}`}>
          {Header.map((nav, index) => (
            <li key={index} className="md:text-white text-slate-950 font-medium hover:text-cpink-200 cursor-pointer">
              <ScrollLink 
                to={nav.name} 
                smooth={true} 
                duration={500} 
                spy={true} 
                offset={-100} // Adjust offset for sticky header
                onClick={() => setOpen(false)} // Close menu on click
              >
                {nav.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
