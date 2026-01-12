import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { projects } from "@/shared/myProjects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  setSelectedPage: (page: string) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const horizontal = useRef<HTMLDivElement | null>(null);
  const horizontalTrack = useRef<HTMLDivElement | null>(null);

  // TODO: FIX RESIZING BUG
  useGSAP(
    () => {
      const container = horizontalTrack.current;
      const projectPanels = gsap.utils.toArray<HTMLElement>(".projectPanel");

      const horizontalTween = gsap.to(projectPanels, {
        xPercent: -100 * (projectPanels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 10%",
          end: () => "+=" + container?.offsetWidth,
          pin: true,
          scrub: 1,
          snap: 1 / (projectPanels.length - 1),
          invalidateOnRefresh: true,
          markers: true,
        },
      });

      projectPanels.forEach((projectPanel, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: projectPanel,
            scrub: 1,
            start: "left center",
            end: "left left",
            containerAnimation: horizontalTween,
          },
        });

        tl.to(horizontal.current, {
          backgroundColor: projects[i].bg,
          ease: "none",
        });

        tl.from(
          projectPanel.children,
          {
            rotateY: 90,
          },
          "<"
        );
      });

      // requestAnimationFrame(() => {
      //   ScrollTrigger.refresh();
      // });
    },
    { scope: horizontal }
  );

  return (
    <motion.div
      id="projects"
      ref={horizontal}
      onViewportEnter={() => setSelectedPage("Projects")}
      viewport={{ once: false, amount: 0.1 }}
      className="my_section"
    >
      <div ref={horizontalTrack} className="overflow-x-hidden flex">
        {projects.map((project, index) => (
          <div
            key={index}
            className="projectPanel w-screen h-[80vh] shrink-0 flex flex-col gap-4 items-center mt-4"
          >
            <div className=" w-[80vw] md:w-[60vw] flex items-center gap-14 tracking-wide">
              <span className="font-semibold text-6xl md:text-7xl">
                MY <br className="md:hidden" /> WORK
              </span>
              <span className="text-4xl md:text-4xl">{project.name}</span>
            </div>

            <div className="projectCard w-[80vw] h-[50vh] md:w-[60vw] md:h-[60vh] px-10  rounded-4xl bg-white shadow-2xl  flex gap-2">
              <div className="left flex-1  flex flex-col justify-evenly">
                <p className="tracking-wide leading-8">{project.discription}</p>

                <div className="text-sm tracking-wide  flex gap-5">
                  {project.tech.map((techItem, i) => (
                    <span key={i}>{techItem}</span>
                  ))}
                </div>
                <div className="my-2 flex items-center gap-1">
                  <span>Go to website</span> <GoArrowUpRight />
                </div>
              </div>

              <div className="right flex-1 hidden md:block">
                <img src={project.image} alt="Screenshot of project" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
