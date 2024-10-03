"use client"

import Profile from "@/components/Profile/Profile"
import Experience from "@/components/Experience/Experience"
import Projects from "@/components/Projects/Projects"
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";

export default function Home() {

  return (
    <main>
      <Navbar/>
      <Profile/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}
