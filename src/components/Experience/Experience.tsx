import ExperienceCard from "../ExperienceCard/ExperienceCard"
import AimlLogo from "@/assets/aiml.jpg"
import EqunixLogo from "@/assets/equnix.png"
import MgpaLogo from "@/assets/mgpa.png"
import LyraLogo from "@/assets/lyra-logo.svg"

export default function Experience() {
    return (
        <section id="experience" className="bg-white pb-10 text-black min-h-[850px]">
            <h1 className="relative section-header pb-6">I'm working / previously worked as a...</h1>
            <div id="exps-container" className="flex flex-row flex-wrap justify-evenly text-center gap-8">
                <ExperienceCard
                    companyLogo={LyraLogo}
                    jobTitle="Forward Deployed Engineer @ Lyra"
                    technologies="Python, Typescript, Excel"
                    scale={0.8}
                />
                <ExperienceCard
                    companyLogo={AimlLogo}
                    jobTitle="Research Intern @ AIML"
                    technologies="Python, NLP, Stanza, GPT, Prompt Engineering"
                />
                <ExperienceCard
                    companyLogo={EqunixLogo}
                    jobTitle="Software Engineer Intern @ Equnix"
                    technologies="Go, Linux, R, PostgreSQL, SDLC, Networks"
                />
                <ExperienceCard
                    companyLogo={MgpaLogo}
                    jobTitle="Data Science Intern @ MGPA"
                    technologies="Python, MongoDB, Data Analysis"
                />
            </div>
        </section>
    )
}