import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useEffect, useState } from "react";
gsap.registerPlugin(useGSAP, SplitText);

type Props = {
  setSelectedPage: (page: string) => void;
  play: boolean;
};

const Home = ({ setSelectedPage, play }: Props) => {
  const [completed, setCompleted] = useState(false);

  // Scroll Lock Effect
  useEffect(() => {
    document.body.style.overflow = completed ? "auto" : "hidden";
    document.documentElement.style.overflow = completed ? "auto" : "hidden";

    // cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [completed]);

  useGSAP(() => {
    document.fonts.ready.then(() => {
      const subHeaderSplit = SplitText.create(".subheader", {
        type: "chars, words",
      });

      gsap.set([".header1, .header2", subHeaderSplit.chars], {
        opacity: 0,
      });

      //ANimation only runs after nav animations completes
      if (!play) return;

      const tl = gsap.timeline();

      tl.fromTo(
        ".header1",
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, opacity: 1, ease: "power2.out", duration: 1 }
      )
        .fromTo(
          ".header2",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            x: () => (window.innerWidth < 768 ? 50 : 150),
            opacity: 1,
            ease: "power2.out",
            duration: 1,
          }
        )
        .fromTo(
          subHeaderSplit.chars,
          {
            opacity: 0,
            rotateY: 90,
            transformOrigin: "center top",
            perspective: 700,
            display: "inline-block",
          },
          {
            opacity: 1,
            rotateY: 0,
            duration: 0.9,
            ease: "power2.out",
            stagger: 0.05,
          }
        )
        .to(".header2", {
          x: () => (window.innerWidth < 768 ? 100 : 200),
          ease: "elastic.in(1,0.75)",
          duration: 0.5,
          yoyo: true,
          repeat: 1,
        })
        .to(".header2", {
          x: 0,
          duration: 0.5,
          onComplete: () => setCompleted(true),
        })
        .to(".rotatingO", {
          rotate: 90,
          repeat: -1,
          repeatDelay: 2,
          yoyo: true,
        });
    });
  }, [play]);

  return (
    <motion.div
      id="home"
      className="my_section px-12 md:px-32 bg-black flex flex-col justify-center text-white "
      onViewportEnter={() => setSelectedPage("Home")}
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="text-8xl md:text-[12rem] text-center tracking-tight ">
        <span className="block header1">HI!</span>{" "}
        <span className="block header2">
          I'M TH<span className="rotatingO inline-block">O</span>NY
        </span>
      </div>

      <div className="mx-auto pt-15 text-xl md:text-2xl subheader">
        Full-Stack Developer
      </div>
    </motion.div>
  );
};

export default Home;
