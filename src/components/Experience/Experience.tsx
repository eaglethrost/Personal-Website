import ExperienceCard from "../ExperienceCard/ExperienceCard"
import AimlLogo from "@/assets/aiml.jpg"
import EqunixLogo from "@/assets/equnix.png"
import MgpaLogo from "@/assets/mgpa.png"

import { useEffect, useRef, useState } from 'react';

export default function Experience({observer} : {
    observer: IntersectionObserver;
}) {
    // Add animation to some elements
    useEffect(() => {
        const header = document.querySelector("#exps-intro");
        const experiences = document.querySelector("#exps-container");
        observer.observe(header!);
        observer.observe(experiences!);
    }, []);

    return (
        <section id="experience" className="bg-white pb-10 text-black min-h-screen">
            <h1 id="exps-intro" className="relative section-header pb-6">I've previously worked as a...</h1>
            <div id="exps-container" className="mt-4 flex flex-row flex-wrap justify-evenly text-center gap-8">
                <ExperienceCard
                    companyLogo={AimlLogo}
                    jobTitle="Research Intern"
                    technologies="Python, NLP, Stanza, GPT, Prompt Engineering"
                />
                <ExperienceCard
                    companyLogo={EqunixLogo}
                    jobTitle="Software Engineer Intern"
                    technologies="Go, Linux, R, PostgreSQL, SDLC, Networks"
                />
                <ExperienceCard
                    companyLogo={MgpaLogo}
                    jobTitle="Data Science Intern"
                    technologies="Python, MongoDB, Data Analysis"
                />
            </div>
        </section>
    )
}