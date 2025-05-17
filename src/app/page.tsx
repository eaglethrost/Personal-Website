"use client"

import Profile from "@/components/Profile/Profile"
import Experience from "@/components/Experience/Experience"
import Projects from "@/components/Projects/Projects"
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";

import { useEffect } from "react";

export default function Home() {

  // add animation to the components when coming into view using an obsever API
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      console.log(entries.length, " entries found");
      entries.forEach(entry => {
        console.log(entry.target.id)
        if (entry.isIntersecting) {
            if (entry.target.id == "exps-intro" || entry.target.id == "skills-intro" || entry.target.id == "projects-intro" || entry.target.id == "contact-inv") {
              entry.target.classList.add('animate-fadeInLeft');
          } else if (entry.target.id == "exps-container" || entry.target.id == "techs-container" || entry.target.id == "projects-container") {
              entry.target.classList.add('animate-fadeInUp');
          }
          observer.unobserve(entry.target); // Stop observing once animated
        }
      })
    }, {rootMargin:"-10px"});

    const expHeader = document.querySelector("#exps-intro");
    const experiences = document.querySelector("#exps-container");
    observer.observe(expHeader!);
    observer.observe(experiences!);

    const skillsHeader = document.querySelector("#skills-intro");
    const techs = document.querySelector("#techs-container");
    observer.observe(skillsHeader!);
    observer.observe(techs!);

    const projectsHeader = document.querySelector("#projects-intro");
    const projects = document.querySelector("#projects-container");
    observer.observe(projectsHeader!);
    observer.observe(projects!);

    const contactInv = document.querySelector("#contact-inv");
    observer.observe(contactInv!);
  });

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
