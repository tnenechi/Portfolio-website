import { useRef } from "react";
import { motion } from "framer-motion";
import { Particles } from "@/components/ui/particles";
import { PiFlowerThin } from "react-icons/pi";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
gsap.registerPlugin(useGSAP, SplitText);

type Props = {
  setSelectedPage: (page: string) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const h1Ref = useRef(null);
  const pRef = useRef(null);
  const otw = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (h1Ref.current && pRef.current && otw.current) {
      const tl = gsap.timeline();

      tl.from(h1Ref.current, {
        yPercent: 100,
        duration: 1.5,
        ease: "power3.out",
      }).from(
        pRef.current,
        {
          yPercent: 100,
          duration: 0.9,
          ease: "power3.out",
        },
        "-=0.6",
      ); // Start p animation 0.6s before h1 finishes
    }

    gsap.from(otw.current, {
      yPercent: 120,
      duration: 0.9,
      delay: 1,
      ease: "power3.out",
    });



    return () => {
    
    };
  }, []);

  return (
    <motion.div
      id="home"
      className="my-section flex flex-col justify-center"
      onViewportEnter={() => setSelectedPage("Home")}
      viewport={{ once: false, amount: 0.1 }}
    >
      <Particles className="absolute inset-0 z-0" />
      <div className="flex flex-col items-center ">
        <div className="overflow-hidden">
          <h1 ref={h1Ref} className="mb-y-h1">
            Thony.
          </h1>
        </div>

        <div className="overflow-hidden">
          <p ref={pRef}>Full-Stack Developer</p>
        </div>
      </div>
      <div className="overflow-hidden relative  -bottom-30 md:-bottom-30 ml-auto p-2">
        <div ref={otw} className="flex items-center gap-2">
          <div>OPEN TO WORK</div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            <PiFlowerThin className="text-accent"/>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
