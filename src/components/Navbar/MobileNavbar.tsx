import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import { homePageSections } from "./sections";

export default function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      id="mobile-navbar-container"
      className="w-screen h-navbar bg-navbar flex md:hidden"
    >
      <div
        id="menu-bar"
        className="h-full w-1/5 flex items-center justify-center"
      >
        <button
          onClick={toggleMenu}
          type="button"
          className="text-white relative text-3xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isMenuOpen && (
        <div
          id="mobile-navbar"
          className="absolute top-full h-[450px] w-full flex flex-col items-center justify-between space-y-4 pt-4 pb-8 md:hidden bg-navbar text-white text-xl"
        >
          {homePageSections.map((section) => (
            <Link
              key={section.name}
              href={section.href}
              className="hover:text-blue-500"
            >
              {section.name}
            </Link>
          ))}
          <a
            href="/Dimas_Resume.pdf"
            className="text-white p-2.5 px-6 rounded-full bg-[#3650F5] hover:bg-blue-700"
          >
            Resume
          </a>
        </div>
      )}
    </div>
  );
}
