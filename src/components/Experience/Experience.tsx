import ExperienceCard from "../ExperienceCard/ExperienceCard"
import AimlLogo from "@/assets/aiml.jpg"
import EqunixLogo from "@/assets/equnix.png"
import MgpaLogo from "@/assets/mgpa.png"

export default function Experience() {
    return (
        <section id="experience" className="bg-white pb-10 text-black">
            <h1 className="relative section-header pb-6">I've previously worked as a...</h1>
            <div id="exps-container" className="flex flex-row flex-wrap justify-evenly gap-8">
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