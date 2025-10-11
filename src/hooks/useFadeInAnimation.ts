import { useEffect, useRef } from "react";

export type FadeDirection = "left" | "right" | "up" | "down";

export interface UseFadeInAnimationOptions {
  direction?: FadeDirection;
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

export interface UseFadeInAnimationReturn<T extends HTMLElement = HTMLElement> {
  ref: React.RefObject<T>;
  isVisible: boolean;
}

/**
 * Custom hook that implements fade-in animation when an element enters the viewport
 * using IntersectionObserver. Follows the transition values defined in Tailwind config.
 *
 * @param options - Configuration options for the animation
 * @returns Object containing ref to attach to element and visibility state
 */
export function useFadeInAnimation<T extends HTMLElement = HTMLElement>(
  options: UseFadeInAnimationOptions = {},
): UseFadeInAnimationReturn<T> {
  const {
    direction = "up",
    rootMargin = "-10px",
    threshold = 0,
    triggerOnce = true,
  } = options;

  const ref = useRef<T>(null);
  const isVisibleRef = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisibleRef.current) {
            const animationClass = getAnimationClass(direction);
            element.classList.add(animationClass);

            isVisibleRef.current = true;

            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!entry.isIntersecting && !triggerOnce) {
            const animationClass = getAnimationClass(direction);
            element.classList.remove(animationClass);
            isVisibleRef.current = false;
          }
        });
      },
      {
        rootMargin,
        threshold,
      },
    );

    observer.observe(element);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, [direction, rootMargin, threshold, triggerOnce]);

  return {
    ref,
    isVisible: isVisibleRef.current,
  };
}

/**
 * Maps direction to the corresponding Tailwind animation class
 */
function getAnimationClass(direction: FadeDirection): string {
  const animationMap: Record<FadeDirection, string> = {
    left: "animate-fadeInLeft",
    right: "animate-fadeInRight",
    up: "animate-fadeInUp",
    down: "animate-fadeInDown",
  };

  return animationMap[direction];
}

export default useFadeInAnimation;
