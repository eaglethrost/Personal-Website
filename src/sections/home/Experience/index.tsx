import type { StaticImageData } from "next/image";
import AimlLogo from "@/assets/aiml.jpg";
import EqunixLogo from "@/assets/equnix.png";
import LyraLogo from "@/assets/lyra-logo.svg";
import MgpaLogo from "@/assets/mgpa.png";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import ExperienceCard from "./Card";

interface ExperienceItem {
  companyLogo: StaticImageData;
  jobTitle: string;
  technologies: string;
  scale?: number;
}

const defaultExperiences: ExperienceItem[] = [
  {
    companyLogo: LyraLogo,
    jobTitle: "Forward Deployed Engineer @ Lyra",
    technologies: "Python, Typescript, Excel",
    scale: 0.8,
  },
  {
    companyLogo: AimlLogo,
    jobTitle: "Research Intern @ AIML",
    technologies: "Python, NLP, Stanza, GPT, Prompt Engineering",
  },
  {
    companyLogo: EqunixLogo,
    jobTitle: "Software Engineer Intern @ Equnix",
    technologies: "Go, Linux, R, PostgreSQL, SDLC, Networks",
  },
  {
    companyLogo: MgpaLogo,
    jobTitle: "Data Science Intern @ MGPA",
    technologies: "Python, MongoDB, Data Analysis",
  },
];

interface ExperienceProps {
  title?: string;
  experiences?: ExperienceItem[];
}

export default function Experience({
  title = "I'm working / previously worked as a...",
  experiences,
}: ExperienceProps = {}) {
  const experiencesToRender = experiences || defaultExperiences;

  const headerAnimation = useFadeInAnimation<HTMLHeadingElement>({
    direction: "left",
  });
  const containerAnimation = useFadeInAnimation<HTMLDivElement>({
    direction: "up",
  });

  return (
    <section
      id="experience"
      className="min-h-screen tall-screen:min-h-[70vh] bg-white pb-10 text-black "
    >
      <h1
        ref={headerAnimation.ref}
        id="exps-intro"
        className="relative section-header pb-6"
      >
        {title}
      </h1>
      <div
        ref={containerAnimation.ref}
        id="exps-container"
        className="mt-4 flex flex-row flex-wrap justify-evenly text-center gap-8"
      >
        {experiencesToRender.map((experience, index) => (
          <ExperienceCard
            key={index}
            companyLogo={experience.companyLogo}
            jobTitle={experience.jobTitle}
            technologies={experience.technologies}
            scale={experience.scale}
          />
        ))}
      </div>
    </section>
  );
}
