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
  const horizontal = useRef<HTMLDivElement | null>(null);
  const [openProject, setOpenProject] = useState<null | number>(null);

  return (
    <>
      <motion.div
        id="projects"
        ref={horizontal}
        onViewportEnter={() => setSelectedPage("Projects")}
        viewport={{ once: false, amount: 0.1 }}
        className="my-section flex justify-center items-center py-16"
      >
        {projects.map((project, index) => (
          <div key={project.name}>
            <div className="flex flex-col justify-between bg-base-300 w-[70vw] md:w-[40vw] rounded-2xl shadow-sm">
              <figure>
                <video
                  src={project.video}
                  poster={project.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
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
                    className="cursor-pointer mb-6 transition-transform duration-200 hover:scale-110"
                    onClick={() => setOpenProject(index)}
                    title="Read more."
                    size={20}
                  />
                </div>

                <div className="sm:flex justify-between items-center gap-2">
                  <div className="flex-1 flex-wrap flex gap-2">
                    {project.tech.map((aTech) => (
                      <div key={aTech} className="badge badge-xs  badge-soft">
                        {aTech}
                      </div>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-soft btn-xs mt-4 sm:mt-0 sm:btn-md"
                  >
                    View website
                    <span>
                      <MdArrowOutward size={15} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
