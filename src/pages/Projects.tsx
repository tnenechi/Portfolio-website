import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { projects } from "@/shared/myProjects";
import { MdArrowOutward, MdClose } from "react-icons/md";
import { TbInfoSquareRounded } from "react-icons/tb";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  setSelectedPage: (page: string) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const [openProject, setOpenProject] = useState<null | number>(null);

  useGSAP(
    () => {
      const introText = gsap.utils.toArray<HTMLElement>(".myProjects");

      // top animation
      gsap.from(introText, {
        yPercent: 150,
        ease: "none",
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "top top",
          scrub: 1,
        },
      });

      // bottom animation
      if (!pinnedRef.current) return;

      const wrapper = pinnedRef.current;
      const panels = gsap.utils.toArray<HTMLElement>(".panel");

      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: wrapper,
          start: "top 15%",
          end: () => "+=" + wrapper?.offsetWidth,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          pin: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <>
      <motion.div
        id="projects"
        ref={containerRef}
        onViewportEnter={() => setSelectedPage("Projects")}
        viewport={{ once: false, amount: 0.1 }}
        className="my-section flex flex-col justify-center py-16"
      >
        <div className="pb-y-h1 overflow-hidden ml-auto">
          <h2 className="overflow-hidden pt-2 ">
            <span className="myProjects inline-block">MY</span>
          </h2>
          <h2 className="overflow-hidden">
            <span className="myProjects inline-block py-2 ">PROJECTS</span>
          </h2>
        </div>

        <div>
          <div ref={pinnedRef} className="overflow-x-hidden flex">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className="panel shrink-0 w-full h-full flex items-center justify-center"
              >
                <div className="w-[80vw] md:w-[50vw] px-4">
                  <div className="flex flex-col justify-between h-full bg-base-200 rounded-2xl shadow-sm p-4">
                    <figure className="hidden sm:block h-[40vh]">
                      <video
                        src={project.video}
                        poster={project.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </figure>
                    <div className="px-x-sm py-y-h1 flex flex-col">
                      <p className="font-bold text-xl pb-2">{project.name}</p>

                      <div>
                        <ul className="line-clamp-4 ">
                          {project.description.map((line, i) => (
                            <p key={i} className="font-light mb-2">
                              {line}
                            </p>
                          ))}
                        </ul>

                        <TbInfoSquareRounded
                          className="text-accent cursor-pointer mb-6 transition-transform duration-200 hover:scale-110"
                          onClick={() => setOpenProject(index)}
                          title="Read more."
                          size={20}
                        />
                      </div>

                      <div className="sm:flex justify-between items-center gap-2">
                        <div className="flex-1 flex-wrap flex gap-2">
                          {project.tech.map((aTech) => (
                            <div
                              key={aTech}
                              className="badge badge-xs badge-soft"
                            >
                              {aTech}
                            </div>
                          ))}
                        </div>

                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost btn-soft btn-accent btn-xs mt-4 sm:mt-0 sm:btn-md"
                        >
                          {project.website ? "View Website" : "View Project"}
                          <span>
                            <MdArrowOutward size={15} />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Description Modal */}
      {openProject !== null && (
        <div className="w-full h-full z-[30] fixed top-0 bg-black px-12 md:px-32 py-y-sm flex flex-col gap-10">
          <div
            className="ml-auto bg-white text-black w-fit p-2 rounded-full cursor-pointer"
            onClick={() => setOpenProject(null)}
          >
            <MdClose className="h-7 w-7" />
          </div>

          <div className="text-white max-w-3xl mx-auto">
            <p className="text-xl font-bold mb-6">
              {projects[openProject].name}
            </p>
            <ul>
              {projects[openProject].description.map((line, i) => (
                <p key={i} className="font-light mb-2">
                  {line}
                </p>
              ))}
            </ul>

            <div className="sm:flex sm:justify-between">
              <a
                href={projects[openProject].repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-soft btn-xs mt-4 sm:mt-0 sm:btn-md"
              >
                Repository
                <span>
                  <MdArrowOutward size={15} />
                </span>
              </a>

              {projects[openProject].website && (
                <a
                  href={projects[openProject].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-soft btn-xs mt-4 sm:mt-0 sm:btn-md"
                >
                  View website
                  <span>
                    <MdArrowOutward size={15} />
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
