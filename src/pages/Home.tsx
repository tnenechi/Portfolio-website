import { motion } from "framer-motion";

type Props = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const handleConnect = () => {};

  return (
    <motion.div
      id="home"
      className="h-screen relative bg-cover bg-center bg-[url('/images/person.jpg')] md:bg-none flex justify-center items-center md:block bg-url"
      onViewportEnter={() => setSelectedPage("Home")}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="h-full hidden md:grid grid-cols-5">
        <div className="col-span-2"></div>
        <div className="col-span-3 relative shadow-2xl">
          <div className="absolute inset-0 bg-black/50"></div>
          <img
            src="/images/person.jpg"
            alt=""
            className="h-screen w-full object-cover"
          />
        </div>
      </div>

      <div className="bg-accent text-white mx-12 md:mx-32 absolute top-1/3 flex flex-col items-center md:items-start">
        <h1 className="font-fatFace text-6xl  md:text-8xl whitespace-nowrap">
          HI! I'M THONY.
        </h1>
        <div className="my-md text-xl md:text-2xl bg-primary w-fit p-smd rounded-2xl">
          Full-Stack Engineer
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
