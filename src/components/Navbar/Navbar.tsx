import Link from "next/link"

export default function Navbar() {
    return (
        <div id="navbar-container" className="h-[85px] w-screen bg-black flex fixed">
            <div id="name-container" className="h-full w-1/4 flex items-center justify-start">
                <h1 className="text-white relative left-5 text-2xl font-bold">Dimas Anugerah</h1>
            </div>
            <div id="links-container" className="h-full w-1/2 flex items-center justify-between">
                <Link href={"#profile"} className="hover:text-blue-500">About</Link>
                <Link href={"#experience"} className="hover:text-blue-500">Experience</Link>
                <Link href={"#skills"} className="hover:text-blue-500">Skills</Link>
                <Link href={"#projects"} className="hover:text-blue-500">Projects</Link>
                <Link href={"#contact"} className="hover:text-blue-500">Contact</Link>
                <Link href={"#blog"} className="hover:text-blue-500">Blog</Link>
            </div>
            <div id="resume-container" className="h-full w-1/4 flex items-center justify-center">
                <button className="text-white relative left-5 bg-[#3650F5] p-2.5 px-6 rounded-full">Resume</button>
            </div>
        </div>
    )
}