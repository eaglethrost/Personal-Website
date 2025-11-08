import Image from "next/image";
import MyFace from "@/assets/my-face.jpg";

import BackgroundCircles from "./BackgroundCircles";
import { BottomRightFrame, TopLeftFrame } from "./RectangleFrames";

function ProfileContent() {
  return (
    <div className="flex flex-col justify-center w-full lg:w-3/5 order-2 lg:order-1">
      <div className="relative w-full">
        <TopLeftFrame />
        <BottomRightFrame />

        <div className="space-y-4 mx-8 my-6 text-center lg:text-left">
          <h1 className="font-bold mt-16 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white tracking-tight">
            Hi, my name is Dimas!
          </h1>
          <p className="font-bold text-2xl lg:text-4xl text-white">
            Software Engineer
          </p>
          <div className="pt-2 font-normal text-lg lg:text-2xl text-white space-y-4">
            <p>{`I'm currently working as a forward deployed engineer to build & ship incredible products for startups!`}</p>
            <p>
              I am a passionate developer and always aim to create high quality
              software
            </p>
            <p>
              My main interests lie in full-stack, backend, and AI engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileImage() {
  return (
    <div className="relative w-full lg:w-1/2 mt-[16vh] lg:mt-0 flex items-center justify-center lg:pl-4 order-1 lg:order-2">
      <div
        className="relative w-full aspect-square max-w-[320px] lg:max-w-[380px] rounded-[67px] overflow-hidden"
        data-name="My Face"
      >
        <Image
          src={MyFace}
          alt="My Face"
          className="object-cover w-full h-full"
          fill
          sizes="(max-width: 1024px) 320px, 380px"
        />
      </div>
    </div>
  );
}

export default function Profile() {
  return (
    <div
      className="min-h-screen tall-screen:min-h-[80vh] bg-gradient-to-b from-backgroundDark w-full to-backgroundLight"
      data-name="Intro Page"
    >
      <BackgroundCircles />
      <div className="flex flex-col lg:flex-row justify-center min-h-screen w-content mx-auto pb-16 lg:pb-0">
        <ProfileContent />
        <ProfileImage />
      </div>
    </div>
  );
}
