import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

import { homePageSections } from "./sections";

function DesktopNavbar() {
  return (
    <>
      <div
        id="name-container"
        className="h-full lg:w-1/4 md:w-[35%] w-4/5 flex items-center justify-start"
      >
        <h1 className="text-white relative left-5 text-2xl font-bold">
          Dimas Anugerah
        </h1>
      </div>
      <div
        id="links-container"
        className="h-full w-1/2 hidden md:flex items-center justify-between text-white"
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
      </div>
      <div
        id="resume-container"
        className="h-full w-1/4 flex items-center justify-center hidden md:flex"
      >
        <a
          href="/Dimas_Resume.pdf"
          className="text-white relative left-5 p-2.5 px-6 rounded-full bg-[#3650F5] hover:bg-blue-700"
        >
          Resume
        </a>
      </div>
    </>
  );
}

export default function Navbar() {
  return (
    <div
      id="navbar-container"
      className="h-[85px] w-screen bg-black flex fixed z-50"
    >
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}
