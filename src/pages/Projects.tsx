import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { projects } from "@/shared/myProjects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {
  setSelectedPage: (page: string) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const horizontal = useRef<HTMLDivElement | null>(null);

  return (
    <motion.div
      id="projects"
      ref={horizontal}
      onViewportEnter={() => setSelectedPage("Projects")}
      viewport={{ once: false, amount: 0.1 }}
      className="my-section flex justify-center items-center"
    >
      <div className="flex flex-col justify-between bg-base-300  w-[70vw] md:w-[40vw] rounded-2xl shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-t-2xl"
          />
        </figure>

        <div className="px-x-sm py-y-h1 flex flex-col gap-2">
          <p className="font-bold">Card Title</p>

          <p className="font-light">
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>

          <div className="sm:flex justify-between items-center">
            <div className="flex gap-2">
              <div className="badge badge-xs badge-accent badge-soft">
                Primary
              </div>
              <div className="badge badge-xs badge-accent badge-soft">
                Primary
              </div>
              <div className="badge badge-xs badge-accent badge-soft">
                Primary
              </div>
            </div>
            <div className="btn btn-info btn-soft btn-xs mt-4 sm:mt-0 sm:btn-md">
              View Project
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
