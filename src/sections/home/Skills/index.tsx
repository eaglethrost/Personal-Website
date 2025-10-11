"use client";

import Image, { type StaticImageData } from "next/image";
import CppLogo from "@/assets/cplusplus.svg";
import DockerLogo from "@/assets/docker.png";
import GitLogo from "@/assets/git.png";
import GoLogo from "@/assets/golang.png";
import JsLogo from "@/assets/javascript.svg";
import LinuxLogo from "@/assets/linux.png";
import MongoLogo from "@/assets/mongodb.png";
import NodeLogo from "@/assets/nodejs.png";
import PostgresLogo from "@/assets/postgres.svg";
import PythonLogo from "@/assets/python.svg";
import ReactLogo from "@/assets/react.png";
import RLogo from "@/assets/rstudio.png";
import RustLogo from "@/assets/rust.png";
import TsLogo from "@/assets/typescript.svg";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";

interface SkillsProps {
  title?: string;
  proficientLogos?: StaticImageData[];
  familiarLogos?: StaticImageData[];
  proficientTitle?: string;
  familiarTitle?: string;
}

export default function Skills({
  title = "Technologies I've worked with...",
  proficientLogos = [PythonLogo, CppLogo, GoLogo],
  familiarLogos = [
    TsLogo,
    JsLogo,
    ReactLogo,
    NodeLogo,
    PostgresLogo,
    MongoLogo,
    LinuxLogo,
    DockerLogo,
    GitLogo,
    RustLogo,
    RLogo,
  ],
  proficientTitle = "Proficient",
  familiarTitle = "Familiar",
}: SkillsProps) {
  const headerAnimation = useFadeInAnimation<HTMLHeadingElement>({
    direction: "left",
  });
  const containerAnimation = useFadeInAnimation<HTMLDivElement>({
    direction: "up",
  });

  return (
    <section
      id="skills"
      className="min-h-screen tall-screen:min-h-[70vh] bg-white pb-10"
    >
      <h1
        ref={headerAnimation.ref}
        id="skills-intro"
        className="relative section-header pb-6"
      >
        {title}
      </h1>
      <div
        ref={containerAnimation.ref}
        id="techs-container"
        className="my-5 flex lg:flex-row flex-col"
      >
        <div
          id="proficient-container"
          className="basis-2/5 lg:mb-0 mb-10 flex flex-col"
        >
          <span className="w-full lg:pl-8 pb-8 lg:text-start text-center text-4xl font-bold text-black">
            {proficientTitle}
          </span>
          <div className="flex flex-wrap justify-evenly">
            {proficientLogos.map((logo, index) => {
              return (
                <Image
                  key={`proficient-${index}`}
                  src={logo}
                  alt="Language"
                  width={120}
                  height={120}
                />
              );
            })}
          </div>
        </div>
        <div
          id="familiar-container"
          className="lg:px-0 px-7 basis-3/5 flex flex-col"
        >
          <span className="w-full lg:pl-8 pb-8 lg:text-start text-center text-4xl font-bold text-black">
            {familiarTitle}
          </span>
          <div className="flex flex-wrap justify-evenly gap-10">
            {familiarLogos.map((logo, index) => {
              return (
                <Image
                  key={`familiar-${index}`}
                  src={logo}
                  alt="Language"
                  width={120}
                  height={120}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
