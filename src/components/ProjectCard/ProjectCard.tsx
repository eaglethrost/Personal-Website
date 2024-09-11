import Image, { StaticImageData } from "next/image"

function CardFooter({websiteURL, codeLink}
    : {
        websiteURL?: string;
        codeLink: string;
    }
) {
    if (websiteURL) {
        return (
            <div id="code-container" className="h-1/5 w-full flex items-center justify-evenly">
                <a href={websiteURL} target="_blank" rel="noopener noreferrer" className="w-32 p-3.5 text-center rounded-full bg-gray-700 hover:bg-black text-white">View Site</a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-32 p-3.5 text-center rounded-full bg-gray-700 hover:bg-black text-white">View Code</a>
            </div>
        )
    }
    return (
        <div id="code-container" className="h-1/5 w-full flex items-center justify-end">
            <a href={codeLink} target="_blank" rel="noopener noreferrer" className="relative right-5 p-3 px-5 rounded-full bg-gray-700 hover:bg-black text-white">View Code</a>
        </div>
    )
}

export interface ProjectCardProps {
    title: string;
    screenshot: StaticImageData; 
    tools: string;
    description: string;
    codeLink: string;
    websiteURL?: string;
}

export default function ProjectCard({title, screenshot, tools, description, codeLink, websiteURL} 
    : ProjectCardProps
) {
    return (
        <div id="project-container" className="sm:w-[450px] w-5/6 h-[520px] flex flex-col items-center rounded-xl border-2 border-slate-300 text-black shadow-[3px_3px_3px_gray]">
            <div id="title-container" className="h-20 w-full">
                <h1 className="ml-3 mt-1.5 font-bold text-3xl">{title}</h1>
            </div>
            <div id="screenshot-container" className="h-60 w-full overflow-hidden">
                <a href={websiteURL} target="_blank" rel="noopener noreferrer">
                    <Image
                        src={screenshot}
                        alt="sigma"
                        width={450}
                        height={190}
                    />
                </a>
            </div>
            <div id="tools-container" className="h-1/10 my-2 text-center font-bold text-lg">{tools}</div>
            <div id="description-container" className="h-3/10 text-center mx-2">{description}</div>
            <CardFooter
                websiteURL={websiteURL}
                codeLink={codeLink}
            />
        </div>
    )
}