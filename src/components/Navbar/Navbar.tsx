import Link from "next/link"

export default function Navbar() {
    return (
        <div id="navbar-container" className="h-[80px] w-screen bg-black flex fixed">
            <div id="name-container" className="h-full w-1/5 flex items-center justify-start">
                <h1 className="text-white relative left-5">Dimas Anugerah</h1>
            </div>
            <div id="links-container" className="h-full w-3/5 flex items-center justify-between">
                <Link href={"#profile"}>About</Link>
                <Link href={"#experience"}>Experience</Link>
                <Link href={"#skills"}>Skills</Link>
                <Link href={"#projects"}>Projects</Link>
                <Link href={"#contact"}>Contact</Link>
                <Link href={"#blog"}>Blog</Link>
            </div>
            <div id="resume-container" className="h-full w-1/5 flex items-center justify-end">
                <button className="text-white relative right-5">Resume</button>
            </div>
        </div>
    )
}