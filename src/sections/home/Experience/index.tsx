import AimlLogo from "@/assets/aiml.jpg";
import AnderaLogo from "@/assets/andera.svg";
import LyraLogo from "@/assets/lyra-logo.svg";
import ReadmeLogo from "@/assets/readme.svg";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";

import ExperienceCard, { type ExperienceProps } from "./Card";

const currentExperiences: ExperienceProps[] = [
  {
    logo: LyraLogo,
    title: "Forward Deployed Engineer",
    company: "Lyra",
    dateRange: "Jan 2025 - Present",
    skills: "Typescript, Next.js, PostgreSQL, TRPC",
    bullets: [
      "Deployed to 2 SF-based startups to help ship incredible products",
      "Currently leading a team of 6 engineers on a client project (YC)",
    ],
  },
  {
    logo: ReadmeLogo,
    title: "Software Engineer",
    company: "Readme",
    dateRange: "Jun 2025 - Present",
    skills: "React, Typescript, MongoDB, AI Engineering",
    bullets: [
      "Integrated cursor-like AI agent in their documentation platform",
      "Setup AI client and infrastructure",
      "Implemented full-stack feature to allow users to modify enums in their API docs",
    ],
  },
  {
    logo: AnderaLogo,
    title: "Software Engineer",
    company: "Andera",
    dateRange: "Feb 2025 - Jun 2025",
    skills: "Python, MongoDB, Excel, AI engineering",
    bullets: [
      "Improved excel data parsing tools to manually process pivot tables, PDF files, and more",
      "Created testing framework to validate excel data parsing tools",
      "Enhanced evaluation framework to better evaluate AI agents",
    ],
  },
  {
    logo: AimlLogo,
    title: "Research Intern",
    company: "AIML",
    dateRange: "Mar 2023 - Jul 2023",
    skills: "Python, NLP, GPT, Prompt Engineering",
    bullets: [
      "Vision & language reasoning research on improving a robot's ability to reason about its environment",
    ],
  },
];

export default function Experience() {
  const headerAnimation = useFadeInAnimation<HTMLDivElement>({
    direction: "left",
  });
  const containerAnimation = useFadeInAnimation<HTMLDivElement>({
    direction: "up",
  });

  return (
    <Section
      className="pb-12"
      id="experience"
      minHeight="screen"
      tallScreenMinHeight="70vh"
      gradientFrom="backgroundLight"
      gradientTo="backgroundDark"
    >
      <SectionHeader
        title="My Experience"
        description="I've dabbled on a lot of areas to solve interesting problems & build products"
        animation={headerAnimation}
      />

      <div
        ref={containerAnimation.ref}
        className="w-full pt-4 flex flex-row flex-wrap justify-evenly text-center gap-8 opacity-0"
      >
        {currentExperiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </Section>
  );
}
