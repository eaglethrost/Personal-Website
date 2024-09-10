import { FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
    return (
        <section id="contact" className="h-section bg-[#EDEDED] flex flex-col">
            <h1 className="section-header pb-6 lg:text-left text-center">Feel free to contact me!</h1>
            <div className="relative lg:w-3/5 w-full basis-1/3 flex text-3xl text-black">
                <span className="absolute px-10 mt-3 lg:left-10 lg:text-left text-center"> If you have any questions about my experience or interested in 
                    a collaboration, contact me on any of my platforms. I am always
                    open to internships, job opportunities and projects!
                </span>
            </div>
            <div className="relative grow bg-[#939393] text-black">
                <div id="contact-details" className="h-4/5 py-5 flex flex-col justify-evenly">
                    <div className="ml-10 flex items-center text-2xl">
                        <MdEmail className="w-12 h-12 mr-3"/>
                        <a href="mailto:dimazanugrah12@gmail.com" target="_blank" rel="noopener noreferrer">dimazanugrah12@gmail.com</a>
                    </div>
                    <div className="ml-10 flex items-center text-2xl">
                        <FaGithub className="w-12 h-12 mr-3"/>
                        <a href="https://github.com/eaglethrost" target="_blank" rel="noopener noreferrer">eaglethrost</a>
                    </div>
                    <div className="ml-10 flex items-center text-2xl">
                        <FaLinkedin className="w-12 h-12 mr-3"/>
                        <a href="https://www.linkedin.com/in/dimasputraanugerah/" target="_blank" rel="noopener noreferrer">Dimas Putra Anugerah</a>
                    </div>
                    <div className="ml-10 flex items-center text-2xl">
                        <FaLocationDot className="w-12 h-12 mr-3"/>
                        <p>Sydney, Australia</p>
                    </div>
                </div>
                <div id="footer" className="h-1/5 flex items-center justify-center bg-black text-white">
                    <FaCopyright className="mb-0.5"/>
                    <span className="ml-3">2024 Dimas Putra Anugerah</span>
                </div>
            </div>

        </section>
    )
}