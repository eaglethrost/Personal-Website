"use client";

import Navbar from "@/components/ui/Navbar";
import Contact from "@/sections/home/Contact";
import Experience from "@/sections/home/Experience";
import Profile from "@/sections/home/Profile";
import Projects from "@/sections/home/Projects";
import Skills from "@/sections/home/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Profile />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
