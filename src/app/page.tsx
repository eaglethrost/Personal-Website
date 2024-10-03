"use client"

import Profile from "@/components/Profile/Profile"
import Experience from "@/components/Experience/Experience"
import Projects from "@/components/Projects/Projects"
import Contact from "@/components/Contact/Contact";
import Navbar from "@/components/Navbar/Navbar";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  // Observer for when an element enters viewport needed for adding animations
  const viewObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInLeft');
            viewObserver.unobserve(entry.target); // Stop observing once animated
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );  

  return (
    <main>
      <Navbar/>
      <Profile/>
      <Experience observer={viewObserver}/>
      <Skills/>
      <Projects/>
      <Contact/>
    </main>
  );
}
