import { FaGithub, FaLinkedin, FaCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { useEffect } from "react";

export default function Contact() {

    // add animation
    useEffect(() => {
        const skillsObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.id == "contact-inv") {
                            entry.target.classList.add('animate-fadeInLeft');
                        }
                        skillsObserver.unobserve(entry.target); // Stop observing once animated
                    }
                });
            },
            {}
        );  

        const header = document.querySelector("#contact-inv");
        skillsObserver.observe(header!);
        
    }, []);
    
    return (
        <section id="contact" className="h-section bg-[#EDEDED] flex flex-col">
            <h1 className="text-5xl sm:pl-6 pt-5 pb-6 sm:text-left text-center font-bold">Feel free to contact me!</h1>
            <div id="contact-desc" className="relative lg:w-3/5 w-full basis-1/3 flex text-3xl text-black">
                <span id="contact-inv" className="px-10 mb-5 mt-3 sm:ml-8 lg:text-left text-center"> If you have any questions about my experience or interested in 
                    a collaboration, contact me on any of my platforms. I am always
                    open to internships, job opportunities and projects!
                </span>
            </div>
            <div id="contact-list" className="relative grow bg-[#939393] text-black">
                <div id="contact-details" className="h-4/5 py-5 flex flex-col justify-evenly">
                    <div className="ml-10 flex items-center">
                        <MdEmail className="w-12 h-12 mr-3"/>
                        <a href="mailto:dimazanugrah12@gmail.com" target="_blank" rel="noopener noreferrer" className="sm:text-2xl text-lg hover:underline">dimazanugrah12@gmail.com</a>
                    </div>
                    <div className="ml-10 flex items-center">
                        <FaGithub className="w-12 h-12 mr-3"/>
                        <a href="https://github.com/eaglethrost" target="_blank" rel="noopener noreferrer" className="sm:text-2xl text-lg hover:underline">eaglethrost</a>
                    </div>
                    <div className="ml-10 flex items-center">
                        <FaLinkedin className="w-12 h-12 mr-3"/>
                        <a href="https://www.linkedin.com/in/dimasputraanugerah/" target="_blank" rel="noopener noreferrer" className="sm:text-2xl text-lg hover:underline">Dimas Putra Anugerah</a>
                    </div>
                    <div className="ml-10 flex items-center">
                        <FaLocationDot className="w-12 h-12 mr-3"/>
                        <p className="sm:text-2xl text-lg">Sydney, Australia</p>
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