import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (page: string) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      id="projects"
      onViewportEnter={() => setSelectedPage("Projects")}
      viewport={{ once: false, amount: 0.1 }}
      className="my_section flex justify-center items-center"
    >
      Projects
    </motion.div>
  );
};

export default Projects;
