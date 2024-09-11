import Image, { StaticImageData } from "next/image"

export default function ExperienceCard({companyLogo, jobTitle, technologies} 
    : {
        companyLogo: StaticImageData; 
        jobTitle: string;
        technologies: string;
    }
) {
    return (
        <div id="exp-container" className="w-[550px] h-68 flex flex-col items-center">
            <div className="h-52 w-full flex items-center justify-center">
                <Image
                    src={companyLogo}
                    alt="Generic Logo"
                    width={200}
                    height={200}
                />
            </div>
            <span className="text-2xl font-bold">{jobTitle}</span>
            <p className="text-lg">{technologies}</p>
        </div>
    )
}