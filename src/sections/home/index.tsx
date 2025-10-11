"use client";

import { useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import Contact from "@/sections/home/Contact";
import Experience from "@/sections/home/Experience";
import Profile from "@/sections/home/Profile";
import Projects from "@/sections/home/Projects";
import Skills from "@/sections/home/Skills";

export default function Home() {
  // add animation to the components when coming into view using an obsever API
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries.length, " entries found");
        entries.forEach((entry) => {
          console.log(entry.target.id);
          if (entry.isIntersecting) {
            if (
              entry.target.id === "exps-intro" ||
              entry.target.id === "skills-intro" ||
              entry.target.id === "projects-intro" ||
              entry.target.id === "contact-inv"
            ) {
              entry.target.classList.add("animate-fadeInLeft");
            } else if (
              entry.target.id === "exps-container" ||
              entry.target.id === "techs-container" ||
              entry.target.id === "projects-container"
            ) {
              entry.target.classList.add("animate-fadeInUp");
            }
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { rootMargin: "-10px" },
    );

    const expHeader = document.querySelector("#exps-intro");
    const experiences = document.querySelector("#exps-container");
    if (expHeader) observer.observe(expHeader);
    if (experiences) observer.observe(experiences);

    const skillsHeader = document.querySelector("#skills-intro");
    const techs = document.querySelector("#techs-container");
    if (skillsHeader) observer.observe(skillsHeader);
    if (techs) observer.observe(techs);

    const projectsHeader = document.querySelector("#projects-intro");
    const projects = document.querySelector("#projects-container");
    if (projectsHeader) observer.observe(projectsHeader);
    if (projects) observer.observe(projects);

    const contactInv = document.querySelector("#contact-inv");
    if (contactInv) observer.observe(contactInv);
  });

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
