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
  const headerAnimation = useFadeInAnimation<HTMLHeadingElement>({
    direction: "left",
  });
  const containerAnimation = useFadeInAnimation<HTMLDivElement>({
    direction: "up",
  });

  return (
    <section
      id="skills"
      className="min-h-screen tall-screen:min-h-[70vh] bg-gradient-to-b from-backgroundDark w-full to-backgroundLight py-6"
    >
      <div className="w-content mx-auto">
        <div ref={headerAnimation.ref} className="mb-16">
          <div className="flex items-center gap-8 mb-4">
            {/* Decorative Line */}
            <div className="w-2 h-16 bg-[#302D97] rounded" />
            <p className="font-bold text-[48px] text-white">My Skills</p>
          </div>
          <p className="font-normal text-xl ml-8 text-white">
            Technologies I've worked with
          </p>
        </div>
        <div
          ref={containerAnimation.ref}
          id="techs-container"
          className="w-full my-5 p-8 grid grid-cols-2 md:grid-cols-4 justify-items-center items-center gap-x-4 gap-y-12 bg-white/10 rounded-3xl backdrop-blur-sm"
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
      </div>
    </section>
  );
}
