import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

type Props = {
  setSelectedPage: (page: string) => void;
};

const About = ({ setSelectedPage }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  // useGSAP(
  //   () => {
  //     const aboutContainer = containerRef.current;
  //     const rightContainer = rightRef.current;

  //     if (!aboutContainer || !rightContainer) return;

  //     // LEFT ANIMATION
  //     gsap
  //       .timeline({
  //         scrollTrigger: {
  //           trigger: aboutContainer,
  //           start: "top 80%",
  //           end: "top 50%",
  //           scrub: 1,
  //         },
  //       })
  //       .from(".myImg", { y: 100 })
  //       .from(".about", { opacity: 0, y: -50 }, "<")
  //       .from(".me", { opacity: 0, x: 100 });

  //     // RIGHT ANIMATION
  //     const mm = gsap.matchMedia();

  //     mm.add(
  //       { isMobile: "(max-width: 768px)", isDesktop: "(min-width: 769px)" },
  //       (context) => {
  //         let { isMobile, isDesktop } = context.conditions ?? {};

  //         const tl = gsap.timeline({
  //           scrollTrigger: {
  //             trigger: isMobile ? rightContainer : aboutContainer,
  //             start: isMobile ? "top 20%" : "top 10%",
  //             end: () => "+=" + window.innerHeight * 4,
  //             scrub: 1,
  //             // markers: true,
  //             pin: true,
  //             pinSpacing: true,
  //           },
  //         });

  //         tl.from(".right_top p", {
  //           y: 50,
  //           opacity: 0,
  //           stagger: 0.5,
  //         });

  //         const aboutTexts = gsap.utils.toArray<HTMLElement>(".aboutText");

  //         aboutTexts.forEach((aboutParagraph) => {
  //           const textSplit = SplitText.create(aboutParagraph, {
  //             type: "chars, words",
  //           });

  //           tl.fromTo(
  //             textSplit.chars,
  //             {
  //               opacity: 0,
  //             },
  //             { opacity: 1, stagger: 0.05 }
  //           );
  //         });
  //       }
  //     );
  //   },
  //   { scope: containerRef }
  // );

  return (
    <motion.div
      ref={containerRef}
      id="aboutme"
      viewport={{ once: false, amount: 0.1 }}
      onViewportEnter={() => setSelectedPage("About Me")}
      className="my-section  py-12 flex flex-col"
    >
      <div className="pb-y-h1">
        <h2>
          ABOUT <br /> ME
        </h2>
      </div>

      <div className="flex flex-col md:items-center md:flex-row gap-x-sm">
        <div className="avatar">
          <div className="w-30 md:w-50 rounded-full bg-amber-200 relative">
            <img src="/images/me.png" />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>

        <div ref={rightRef}>
          <p className="aboutText">
            Hi! I’m Thony, a full-stack developer passionate about turning
            creative ideas into fully functional web applications.
          </p>
          <p className="aboutText">
            I work across the whole stack — from designing smooth, interactive
            front-ends to building solid, maintainable back-end systems.
          </p>
          <p className="aboutText">
            I focus on crafting experiences that are not only reliable but also
            genuinely enjoyable for users.
          </p>
          <p className="aboutText">
            When I’m not coding, you’ll probably find me tinkering with design,
            exploring new tools, or collaborating on projects that challenge me.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
export default About;
