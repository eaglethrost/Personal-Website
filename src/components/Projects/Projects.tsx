import ProjectCard, { ProjectCardProps} from "../ProjectCard/ProjectCard"

import Unilectives from "@/assets/unilectives.png"
import EInvoice from "@/assets/einvoice.png"
import PPIA from "@/assets/ppiawebsite.png"
import Outdoor from "@/assets/outdoor.png"
import Terminal from "@/assets/terminal.png"

import { useEffect } from "react"

export default function Projects() {
    const unilectives: ProjectCardProps = {
        title: "Unilectives",
        websiteURL: "https://unilectives.devsoc.app",
        screenshot: Unilectives,
        tools: "Typescript, Next.js, PostgreSQL, Docker",
        description: "Open source website for students to get UNSW courses' reviews. Under my leadership, I deployed major features such as dark mode, filter button, analytics integration, and SEO optimizations",
        codeLink: "https://github.com/devsoc-unsw/unilectives"
    };
    const einvoice: ProjectCardProps = {
        title: "E-Invoice APIs",
        screenshot: EInvoice,
        tools: "Python, Flask, XML, REST API",
        description: "Designed and built APIs and a UI for SMEs to convert PDF and JSON invoices to UBL XML 2.1 format, validate schemas and content against predefined rules, and send invoices via email",
        codeLink: "https://github.com/unsw-cse-comp99-3900/capstone-project-9900f11adothebest"
    };
    const ppia: ProjectCardProps = {
        title: "PPI Australia Website",
        screenshot: PPIA,
        tools: "Javascript, React, Tailwind",
        description: "As a frontend developer volunteer, I helped to create the organization’s website. I migrated the codebase to Tailwind and revamped the homepage to deliver a more dynamic user experience",
        codeLink: "https://github.com/ppiaustralia/projectelementalfrontend"
    };
    const outdoor: ProjectCardProps = {
        title: "Outdoor Biking Time Trial",
        screenshot: Outdoor,
        tools: "Javascript, React, Node.js",
        description: "Worked with a team of 9 to create a website for bikers to predict outdoor road time trials. I created the GPX file input, track visualization, and track data extraction features",
        codeLink: "https://github.com/bboybrian/CyclingApp"
    };
    const classroom: ProjectCardProps = {
        title: "Classroom Reservation",
        screenshot: Terminal,
        tools: "C++, Makefile",
        description: "A terminal-based classroom booking system in which users can see room availability, book rooms, and view their bookings",
        codeLink: "https://github.com/eaglethrost/Classroom-Reservation"
    };    

    // add animation
    useEffect(() => {
        const skillsObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.id == "projects-intro") {
                            entry.target.classList.add('animate-fadeInLeft');
                        } else if (entry.target.id == "projects-container") {
                            entry.target.classList.add('animate-fadeInUp');
                        }
                        skillsObserver.unobserve(entry.target); // Stop observing once animated
                    }
                });
            },
            {}
        );  

        const header = document.querySelector("#projects-intro");
        const techs = document.querySelector("#projects-container");
        skillsObserver.observe(header!);
        skillsObserver.observe(techs!);
        
    }, []);

    return (
        <section id="projects" className="pb-10 bg-white">
           <h1 id="projects-intro" className="relative section-header pb-6">My projects...</h1>
           <div id="projects-container" className="flex flex-row flex-wrap justify-evenly gap-12">
                <ProjectCard {...unilectives}/>
                <ProjectCard {...einvoice}/>
                <ProjectCard {...ppia}/>
                <ProjectCard {...outdoor}/>
                <ProjectCard {...classroom}/>
            </div>
        </section>
    )
}