import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

import { homePageSections } from "./sections";

function DesktopNavbar() {
  return (
    <div 
      id="desktop-navbar-container" 
      className="w-4/5 h-navbar bg-navbar hidden md:flex rounded-3xl mt-8"
    >
      <div
        id="name-container"
        className="h-full w-1/5 flex items-center justify-center pl-6"
      >
        <h1 className="text-white text-2xl font-bold">
          Dimas Anugerah
        </h1>
      </div>
      <div
        id="links-container"
        className="h-full flex-1 hidden md:flex items-center justify-center text-white lg:gap-x-6 md:gap-x-3"
      >
        {homePageSections.map((section) => (
          <Link
            key={section.name}
            href={section.href}
            className="text-lg hover:text-blue-500 transition-colors"
          >
            {section.name}
          </Link>
        ))}
      </div>
      <div
        id="resume-container"
        className="h-full w-1/5 flex items-center justify-center"
      >
        <a
          href="/Dimas_Resume.pdf"
          className="text-white p-2.5 px-6 rounded-full bg-[#3650F5] hover:bg-blue-700 transition-colors"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <section id="navbar" className="w-full h-navbar flex fixed items-center justify-center isolate z-[9999]">
      <DesktopNavbar />
      <MobileNavbar />
    </section>
  );
}
