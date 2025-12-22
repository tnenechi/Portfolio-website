import ActionButton from "@/components/ActionButton";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (page: string) => void;
};

const About = ({ setSelectedPage }: Props) => {
  return (
    <motion.div
      id="aboutme"
      viewport={{ once: false, amount: 0.1 }}
      onViewportEnter={() => setSelectedPage("About Me")}
      className="min-h-screen"
    >
      <div className="mx-12 md:mx-32 h-full py-lg flex flex-col md:flex-row">
        <div className="w-full h-[50vh]  md:h-[80vh]">
          <img
            src="/images/person.jpg"
            alt=""
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>

        <div
          id="aboutContainer"
          className="w-full md:h-[80vh] py-10 md:py-0 md:px-5 flex flex-col gap-6"
        >
          <h1 className="font-fatFace text-6xl tracking-wider">ABOUT ME</h1>
          <p className="tracking-widest leading-7 mt-4">
            Hey! I’m Thony and I am a Full-Stack Developer who loves turning
            ideas into real, working web applications. <br /> I enjoy solving
            tricky problems and finding ways to make apps both reliable and easy
            to use. I work across the whole stack — from designing smooth,
            interactive front-ends to building solid, maintainable back-end
            systems.
            <br /> I’m always curious about new technologies and enjoy
            experimenting to see how they can improve what I build. When I’m not
            coding, you’ll probably find me tinkering with design, exploring new
            tools, or collaborating on projects that challenge me. I care about
            creating experiences that not only work well but feel enjoyable for
            the people using them. I love learning, building, and sharing what I
            know. If you have an idea or a project, let’s make it happen!
          </p>

          <div
            id="buttonContainer"
            className="flex justify-between items-end mt-auto"
          >
            <ActionButton>Get in touch!</ActionButton>
            <a
              href="/docs/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 text-blue-700 hover:text-blue-800  cursor-pointer  transform transition duration-200 hover:scale-95"
            >
              View my CV
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
