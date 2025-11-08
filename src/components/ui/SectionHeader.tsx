import type { UseFadeInAnimationReturn } from "@/hooks/useFadeInAnimation";

interface SectionHeaderProps {
  title: string;
  description: string;
  animation: UseFadeInAnimationReturn<HTMLDivElement>;
}

export default function SectionHeader({
  title,
  description,
  animation,
}: SectionHeaderProps) {
  return (
    <div ref={animation.ref} className="mb-16 opacity-0">
      <div className="flex items-center gap-8 mb-4">
        {/* Decorative Line */}
        <div className="w-2 h-16 bg-[#302D97] rounded" />
        <p className="font-bold text-5xl lg:text-6xl text-white">{title}</p>
      </div>
      <p className="font-normal text-2xl ml-8 text-white">{description}</p>
    </div>
  );
}
