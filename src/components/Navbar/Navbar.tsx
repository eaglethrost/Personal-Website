"use client"

import { useState } from "react";
import Link from "next/link"
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const openPDF = () => {
        window.open('/resume.pdf', '_blank');
    };

    return (
        <div id="navbar-container" className="h-[85px] w-screen bg-black flex fixed z-50">
            <div id="name-container" className="h-full lg:w-1/4 md:w-[35%] w-4/5 flex items-center justify-start">
                <h1 className="text-white relative left-5 text-2xl font-bold">Dimas Anugerah</h1>
            </div>
            <div id="links-container" className="h-full w-1/2 hidden md:flex items-center justify-between text-white">
                <Link href={"#profile"} className="hover:text-blue-500">About</Link>
                <Link href={"#experience"} className="hover:text-blue-500">Experience</Link>
                <Link href={"#skills"} className="hover:text-blue-500">Skills</Link>
                <Link href={"#projects"} className="hover:text-blue-500">Projects</Link>
                <Link href={"#contact"} className="hover:text-blue-500">Contact</Link>
                <Link href={"#blog"} className="hover:text-blue-500">Blog</Link>
            </div>
            <div id="resume-container" className="h-full w-1/4 flex items-center justify-center hidden md:flex">
                <a href="/Dimas_Resume.pdf" className="text-white relative left-5 p-2.5 px-6 rounded-full bg-[#3650F5] hover:bg-blue-700">Resume</a>
            </div>

            {/* Mobile Navbar */}
            <div id="menu-bar" className="h-full w-1/5 flex items-center justify-end md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-white relative right-5 text-3xl"
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />} 
                </button>
            </div>
            {isMenuOpen && (
                <div id="mobile-navbar" className="absolute top-full h-[450px] w-full flex flex-col items-center justify-between space-y-4 pt-4 pb-8 md:hidden bg-black text-white text-xl">
                    <Link href="#profile" onClick={toggleMenu} className="hover:text-blue-500">About</Link>
                    <Link href="#experience" onClick={toggleMenu} className="hover:text-blue-500">Experience</Link>
                    <Link href="#skills" onClick={toggleMenu} className="hover:text-blue-500">Skills</Link>
                    <Link href="#projects" onClick={toggleMenu} className="hover:text-blue-500">Projects</Link>
                    <Link href="#contact" onClick={toggleMenu} className="hover:text-blue-500">Contact</Link>
                    <Link href="#blog" onClick={toggleMenu} className="hover:text-blue-500">Blog</Link>
                    <a href="/Dimas_Resume.pdf" className="text-white p-2.5 px-6 rounded-full bg-[#3650F5] hover:bg-blue-700">Resume</a>
                </div>
            )}
        </div>
    )
}