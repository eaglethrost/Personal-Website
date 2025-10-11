import Image, { type StaticImageData } from "next/image";

interface CardProps {
  companyLogo: StaticImageData;
  jobTitle: string;
  technologies: string;
  scale?: number;
}

export default function Card({
  companyLogo,
  jobTitle,
  technologies,
  scale = 1,
}: CardProps) {
  return (
    <div
      id="exp-container"
      className="w-[550px] h-68 flex flex-col items-center"
    >
      <div className="h-52 w-full flex items-center justify-center">
        <Image
          src={companyLogo}
          alt="Generic Logo"
          width={200 * scale}
          height={200 * scale}
        />
      </div>
      <span className="text-2xl font-bold">{jobTitle}</span>
      <p className="text-lg">{technologies}</p>
    </div>
  );
}
