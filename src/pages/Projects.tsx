import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (page: string) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      id="projects"
      onViewportEnter={() => setSelectedPage("Projects")}
      viewport={{ once: false, amount: 0.3 }}
      className="bg-amber-50 h-screen"
    >
      Projects
    </motion.div>
  );
};

export default Projects;
