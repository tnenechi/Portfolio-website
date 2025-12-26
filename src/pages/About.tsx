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
      className="my_section bg-black text-white px-12 md:px-32 py-12 flex flex-col md:flex-row gap-12"
    >
      <div id="left" className="relative flex-1 flex justify-center">
        <div className="absolute top-4 left-20 md:left-12">
          <h1 className="text-9xl">
            <span className="block">
              AB <span className="relative left-24">UT</span>
            </span>
            <span className="block relative z-10">ME</span>
          </h1>
        </div>

        <div className="h-full max-w-full">
          <img src="/images/me.png" alt="" className="" />
        </div>
      </div>

      <div id="right" className="flex-1">
        <p className="text-6xl  mt-12">
          <span>WEB</span>
          <span className="block indent-[10%]">
            DEVELOPER{" "}
            <a
              href="/docs/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs"
            >
              my CV
            </a>
          </span>
        </p>
        <p className="indent-[10%] py-5">
          Hey! I’m Thony and I am a Full-Stack Developer who loves turning ideas
          into real, working web applications. <br /> I enjoy solving tricky
          problems and finding ways to make apps both reliable and easy to use.
          I work across the whole stack — from designing smooth, interactive
          front-ends to building solid, maintainable back-end systems.
          <br /> I’m always curious about new technologies and enjoy
          experimenting to see how they can improve what I build. When I’m not
          coding, you’ll probably find me tinkering with design, exploring new
          tools, or collaborating on projects that challenge me. I care about
          creating experiences that not only work well but feel enjoyable for
          the people using them. I love learning, building, and sharing what I
          know. If you have an idea or a project, let’s make it happen!
        </p>
        <a href="mailto:enechithony@gmail.com" target="_blank">
          Get in touch!
        </a>
      </div>
    </motion.div>
  );
};

export default About;
