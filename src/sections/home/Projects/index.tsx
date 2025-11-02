import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import EInvoice from "@/assets/einvoice.png";
import Outdoor from "@/assets/outdoor.png";
import PPIA from "@/assets/ppiawebsite.png";
import Terminal from "@/assets/terminal.png";
import Unilectives from "@/assets/unilectives.png";
import SectionHeader from "@/components/ui/SectionHeader";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import ProjectCard, { type ProjectCardProps } from "./Card";

const defaultProjects: ProjectCardProps[] = [
  {
    title: "Unilectives",
    link: "https://unilectives.devsoc.app",
    image: Unilectives,
    technologies: "Typescript, Next.js, PostgreSQL, Docker",
    description:
      "Open source website for students to get UNSW courses' reviews. Under my leadership, I deployed major features such as dark mode, filter button, analytics integration, and SEO optimizations",
  },
  {
    title: "E-Invoice APIs",
    image: EInvoice,
    technologies: "Python, Flask, XML, REST API",
    description:
      "Designed and built APIs and a UI for SMEs to convert PDF and JSON invoices to UBL XML 2.1 format, validate schemas and content against predefined rules, and send invoices via email",
  },
  {
    title: "PPI Australia Website",
    link: "https://www.ppi-australia.org/en",
    image: PPIA,
    technologies: "Javascript, React, Tailwind",
    description:
      "As a frontend developer volunteer, I helped to create the organization's website. I migrated the codebase to Tailwind and revamped the homepage to deliver a more dynamic user experience",
  },
  {
    title: "Outdoor Biking Time Trial",
    image: Outdoor,
    technologies: "Javascript, React, Node.js",
    description:
      "Worked with a team of 9 to create a website for bikers to predict outdoor road time trials. I created the GPX file input, track visualization, and track data extraction features",
  },
  {
    title: "Classroom Reservation",
    image: Terminal,
    technologies: "C++, Makefile",
    description:
      "A terminal-based classroom booking system in which users can see room availability, book rooms, and view their bookings",
  },
];

export default function Projects() {
  const headerAnimation = useFadeInAnimation<HTMLHeadingElement>({
    direction: "left",
  });
  const containerAnimation = useFadeInAnimation<HTMLDivElement>({
    direction: "up",
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 500; // Scroll by ~1 card width + gap
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="projects"
      className="min-h-screen tall-screen:min-h-[70vh] bg-gradient-to-b from-backgroundLight w-full to-backgroundDark pt-6 pb-10"
    >
      <div className="w-content mx-auto">
        <SectionHeader
          title="My Projects"
          description="Projects I've been involved in"
          animation={headerAnimation}
        />
        {/* Carousel Container */}
        <div ref={containerAnimation.ref}>
          <div className="relative">
            {/* Left Arrow */}
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`absolute left-[-80px] top-1/2 -translate-y-1/2 z-10 bg-[rgba(34,39,63,0.8)] hover:bg-[rgba(34,39,63,0.95)] rounded-full p-4 transition-all ${
                !canScrollLeft ? "opacity-30 cursor-not-allowed" : "opacity-100"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Scrollable Cards Container */}
            <div
              ref={scrollContainerRef}
              onScroll={checkScroll}
              className="flex gap-[48px] overflow-x-auto scrollbar-hide scroll-smooth"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {defaultProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  image={project.image}
                  title={project.title}
                  technologies={project.technologies}
                  description={project.description}
                  link={project.link}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`absolute right-[-80px] top-1/2 -translate-y-1/2 z-10 bg-[rgba(34,39,63,0.8)] hover:bg-[rgba(34,39,63,0.95)] rounded-full p-4 transition-all ${
                !canScrollRight
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
