import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../costants";

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav className="w-full navbar text-white flex justify-between items-center py-6">
      <img src={logo} alt="Hoobank" className="w-32 h-8" />
      <ul className="list-none sm:flex hidden flex-1 justify-end">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
            <a className="no-underline" href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      {/* mobile menu */}
      <div className="flex-1 sm:hidden py-2 flex justify-end">
        <img src={toggle ? close : menu} alt="menu" className="w-7 h-7 object-contain cursor-pointer" onClick={() => settoggle((prev) => !prev)} />
      </div>
      {/* menu */}
      <div className={`${toggle ? "flex" : "hidden"} sm:hidden bg-black-gradient p-6 absolute top-20 right-0 mx-4 my-2 rounded-xl min-w-[140px] sidebar`}>
        <ul className="list-none flex flex-col justify-end">
          {navLinks.map((nav, index) => (
            <li
              onClick={() => settoggle((prev) => !prev)}
              key={nav.id}
              className={`font-poppins font-normal text-[16px] ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
            >
              <a className="no-underline" href={`#${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
