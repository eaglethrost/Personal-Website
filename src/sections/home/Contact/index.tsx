import Image from "next/image";
import MyFace from "@/assets/my-face.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[65vh] bg-gradient-to-b from-backgroundDark to-backgroundLight flex flex-col"
      data-name="Contact Page"
    >
      <div className="mt-auto flex flex-col">
        <div className="bg-backgroundMedium">
          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center w-content mx-auto gap-12 lg:gap-16 px-8 py-16">
            {/* Left Column - Contact Message */}
            <div className="flex flex-col space-y-6 lg:w-1/2">
              <h1 className="text-5xl lg:text-6xl text-center lg:text-left font-bold text-white">
                Let's Talk!
              </h1>
              <p className="text-xl lg:text-3xl text-center lg:text-left text-white leading-relaxed">
                Get in contact with me if you're interested to work together and
                build the coolest products!
              </p>
              <div className="flex items-center gap-3 justify-center lg:justify-start text-white">
                <FaLocationDot className="w-6 h-6" />
                <span className="text-lg lg:text-xl">Sydney, Australia</span>
              </div>
            </div>

            {/* Right Column - Profile Info */}
            <div className="flex flex-col items-center lg:items-start lg:w-1/2 space-y-4">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-[67px] overflow-hidden">
                <Image
                  src={MyFace}
                  alt="Dimas Putra Anugerah"
                  className="object-cover"
                  fill
                  sizes="(max-width: 1024px) 192px, 224px"
                />
              </div>
              <div className="flex flex-col items-center lg:items-start space-y-2">
                <h2 className="text-4xl lg:text-5xl font-bold text-white">
                  Dimas Putra Anugerah
                </h2>
                <p className="text-xl lg:text-2xl text-white">Software Engineer</p>
                <div className="flex items-center gap-4 mt-4">
                  <a
                    href="mailto:dimazanugrah12@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                    aria-label="Email"
                  >
                    <MdEmail className="w-8 h-8" />
                  </a>
                  <a
                    href="https://github.com/eaglethrost"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/dimasputraanugerah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="bg-[#070810] py-6 flex items-center justify-center">
          <p className="text-white text-base lg:text-lg">
            Copyright @ Dimas Putra Anugerah
          </p>
        </footer>
      </div>
    </section>
  );
}
