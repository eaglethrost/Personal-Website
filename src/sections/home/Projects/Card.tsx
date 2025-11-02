import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  technologies: string;
  description: string;
  link?: string;
}

export default function ProjectCard({
  image,
  title,
  technologies,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div
      className="bg-[rgba(34,39,63,0.6)] h-[560px] rounded-[30px] w-[464px] flex-shrink-0"
      data-name="Project Card"
    >
      <div
        className="h-[188px] ml-[54px] mt-[52px] w-[355px]"
        data-name="Project Image"
      >
        <Image
          src={image}
          alt="sigma"
          width={450}
          height={190}
          className="w-full h-full object-contain pointer-events-none"
        />
      </div>
      {link ? (
        <div className="mt-[24px] ml-[54px]">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] text-[32px] text-left text-nowrap text-white whitespace-pre"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            {title}
          </Link>
        </div>
      ) : (
        <p
          className="font-['Roboto:Medium',sans-serif] font-medium leading-[40px] text-[32px] text-left text-nowrap text-white mt-[24px] ml-[54px] whitespace-pre"
          style={{ fontVariationSettings: "'wdth' 100" }}
        >
          {title}
        </p>
      )}
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.4] ml-[54px] not-italic text-[16px] text-white mt-[10px] w-[355px]">
        {technologies}
      </p>
      <p className="font-['Inter:Regular',sans-serif] font-normal h-[187px] leading-[1.2] ml-[54px] not-italic text-[#fefefe] text-[20px] mt-[15px] w-[355px]">
        {description}
      </p>
    </div>
  );
}
