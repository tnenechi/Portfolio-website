import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
// import { SpinningText } from "@/components/ui/spinning-text";
import { LightRays } from "@/components/ui/light-rays";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

type Props = {
  setSelectedPage: (page: string) => void;
};

const About = ({ setSelectedPage }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const introText = gsap.utils.toArray<HTMLElement>(".aboutMe");
      const pic = gsap.utils.toArray<HTMLElement>(".pic");
      const aboutText = gsap.utils.toArray<HTMLElement>(".aboutText");

      // top animation
      gsap.from(introText, {
        yPercent: -150,
        duration: 0.9,
        ease: "none",
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "top top",
          scrub: 1,
          // markers: true,
        },
      });

      // bottom animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: () => "bottom top",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          snap: 1 / (pic.length + aboutText.length - 1),
          // markers: true,
        },
      });

      gsap.set([...aboutText, ...pic], { opacity: 0 });
      tl.to(pic, { opacity: 1, ease: "power3.in" });

      aboutText.forEach((txt) => {
        tl.to(txt, {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <motion.div
      ref={containerRef}
      id="aboutme"
      viewport={{ once: false, amount: 0.1 }}
      onViewportEnter={() => setSelectedPage("About Me")}
      className="my-section  py-12 flex flex-col"
    >
      <div className="pb-y-h1 overflow-hidden">
        <h2 className="overflow-hidden">
          <span className="aboutMe inline-block">ABOUT</span>
        </h2>
        <h2 className="overflow-hidden">
          <span className="aboutMe inline-block">ME</span>
        </h2>
      </div>

      <div className="flex flex-col md:items-center md:flex-row gap-x-sm">
        {/* image */}
        <div className="avatar">
          <div className="ring-2 w-30 md:w-50 rounded-full relative pic">
            {/* <div className="absolute inset-0 bg-black/20"></div> */}

            <img src="/images/me.png" />
            <LightRays color="#00cc8b40" speed={10} />
          </div>
        </div>

        <div className="flex flex-col gap-4">
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
