"use client"

import Image from "next/image"
import PythonLogo from "@/assets/python.svg"
import CppLogo from "@/assets/cplusplus.svg"
import GoLogo from "@/assets/golang.png"

import TsLogo from "@/assets/typescript.svg"
import JsLogo from "@/assets/javascript.svg"
import ReactLogo from "@/assets/react.png"
import PostgresLogo from "@/assets/postgres.svg"
import MongoLogo from "@/assets/mongodb.png"
import DockerLogo from "@/assets/docker.png"
import NodeLogo from "@/assets/nodejs.png"
import RLogo from "@/assets/rstudio.png"
import LinuxLogo from "@/assets/linux.png"
import GitLogo from "@/assets/git.png"
import RustLogo from "@/assets/rust.png"

import { useEffect } from "react"

export default function Skills() {
    const proficientLogos = [PythonLogo, CppLogo, GoLogo];
    const familiarLogos = [TsLogo, JsLogo, ReactLogo, NodeLogo, PostgresLogo, MongoLogo, 
                           LinuxLogo, DockerLogo, GitLogo, RustLogo, RLogo];

    // add animation
    useEffect(() => {
        const skillsObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.id == "skills-intro") {
                            entry.target.classList.add('animate-fadeInLeft');
                        } else if (entry.target.id == "techs-container") {
                            entry.target.classList.add('animate-fadeInUp');
                        }
                        skillsObserver.unobserve(entry.target); // Stop observing once animated
                    }
                });
            },
            {}
        );  

        const header = document.querySelector("#skills-intro");
        const techs = document.querySelector("#techs-container");
        skillsObserver.observe(header!);
        skillsObserver.observe(techs!);
        
    }, []);

    return (
        <section id="skills" className="min-h-screen tall-screen:min-h-[70vh] bg-white pb-10">
            <h1 id="skills-intro" className="relative section-header pb-6">Technologies I've worked with...</h1>
            <div id="techs-container" className="my-5 flex lg:flex-row flex-col">
                <div id="proficient-container" className="basis-2/5 lg:mb-0 mb-10 flex flex-col">
                    <span className="w-full lg:pl-8 pb-8 lg:text-start text-center text-4xl font-bold text-black">Proficient</span>
                    <div className="flex flex-wrap justify-evenly">
                        {proficientLogos.map((logo) => {
                            return (
                                <Image
                                    src={logo}
                                    alt="Language"
                                    width={120}
                                    height={120}
                                />
                            )
                        })}
                    </div>
                </div>
                <div id="familiar-container" className="lg:px-0 px-7 basis-3/5 flex flex-col">
                    <span className="w-full lg:pl-8 pb-8 lg:text-start text-center text-4xl font-bold text-black">Familiar</span>
                    <div className="flex flex-wrap justify-evenly gap-10">
                        {familiarLogos.map((logo) => {
                            return (
                                <Image
                                    src={logo}
                                    alt="Language"
                                    width={120}
                                    height={120}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}