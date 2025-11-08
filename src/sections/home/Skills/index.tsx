"use client";

import Image from "next/image";
import CppLogo from "@/assets/cplusplus.svg";
import DockerLogo from "@/assets/docker.png";
import GitLogo from "@/assets/git.png";
import GoLogo from "@/assets/golang.png";
import LinuxLogo from "@/assets/linux.png";
import MongoLogo from "@/assets/mongodb.png";
import NodeLogo from "@/assets/nodejs.png";
import PostgresLogo from "@/assets/postgres.svg";
import PythonLogo from "@/assets/python.svg";
import ReactLogo from "@/assets/react.png";
import RLogo from "@/assets/rstudio.png";
import RustLogo from "@/assets/rust.png";
import TsLogo from "@/assets/typescript.svg";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";

const logos = [
  TsLogo,
  PythonLogo,
  ReactLogo,
  PostgresLogo,
  MongoLogo,
  NodeLogo,
  LinuxLogo,
  DockerLogo,
  GitLogo,
  CppLogo,
  GoLogo,
  RustLogo,
  RLogo,
];

export default function Skills() {
  const headerAnimation = useFadeInAnimation<HTMLDivElement>({
    direction: "left",
  });
  const containerAnimation = useFadeInAnimation<HTMLDivElement>({
    direction: "up",
  });

  return (
    <Section
      id="skills"
      minHeight="screen"
      tallScreenMinHeight="70vh"
      gradientFrom="backgroundDark"
      gradientTo="backgroundLight"
    >
      <SectionHeader
        title="My Skills"
        description="Technologies I've worked with"
        animation={headerAnimation}
      />
      <div
        ref={containerAnimation.ref}
        id="techs-container"
        className="w-full my-5 p-8 grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-x-2 gap-y-12 bg-white/10 rounded-3xl backdrop-blur-sm"
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Image
              src={logo}
              alt={`Tech logo ${index + 1}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
