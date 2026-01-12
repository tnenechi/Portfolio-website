import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  children: React.ReactNode;
};

const HorizontalScroll = ({ children }: Props) => {
  const horizontal = useRef<HTMLDivElement | null>(null);
  const horizontalTrack = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(
      horizontalTrack.current?.children || []
    );

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",

      scrollTrigger: {
        trigger: horizontal.current,
        // start: "top top",
        end: () => "+=" + horizontalTrack.current?.offsetWidth,
        scrub: 1,
        pin: true,
      },
    });
  });

  return (
    <div ref={horizontal} className="h-screen overflow-x-hidden">
      <div ref={horizontalTrack} className="horizontalTrack flex">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;
