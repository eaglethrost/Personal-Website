import Image, { type StaticImageData } from "next/image";

export interface ExperienceProps {
  logo: StaticImageData;
  title: string;
  company: string;
  dateRange: string;
  bullets: string[];
  skills?: string;
  isLast?: boolean;
}

export default function ExperienceCard({
  logo,
  title,
  company,
  dateRange,
  skills,
  bullets,
  isLast = false,
}: ExperienceProps) {
  return (
    <div
      className={`bg-transparent w-full px-4 sm:px-8 md:px-12 py-8 ${
        isLast ? "border-y-[2px]" : "border-t-[2px]"
      } border-white`}
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 mb-6">
        <Image
          className="shrink-0 self-center"
          src={logo}
          alt={title}
          width={100}
          height={100}
        />
        <div className="flex-1 min-w-0">
          <p
            className="font-bold text-3xl lg:text-4xl text-white text-center md:text-left"
          >
            {title} @ {company}
          </p>
          {skills && (
            <p
              className="font-normal text-lg lg:text-xl text-white text-center md:text-left mt-0"
            >
              {skills}
            </p>
          )}
        </div>
        <p
          className="font-medium text-lg lg:text-xl text-white text-center md:text-left shrink-0 self-center md:self-start"
        >
          {dateRange}
        </p>
      </div>
      {/* Bullets */}
      <ul className="font-normal text-base lg:text-xl text-white text-center md:text-left list-disc pl-8 md:pl-12">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
