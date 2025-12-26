import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialGithub } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full tracking-wide px-12 md:px-32 py-4 bg-[#FFFFFFCC] backdrop-blur-md flex justify-between">
      <div className="flex flex-col gap-2 ">
        <a href="/docs/CV.pdf" target="_blank" rel="noopener noreferrer">
          My CV
        </a>
        <a href="mailto:enechithony@gmail.com" target="_blank">
          Contact me
        </a>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div id="socials" className="flex gap-4">
          <a
            href="mailto:enechithony@gmail.com"
            target="_blank"
            className="bg-[#909090] p-2 rounded-full flex justify-center items-center"
          >
            <BiLogoGmail className="text-black h-5 w-5" />
          </a>
          <a
            href="https://github.com/tnenechi"
            target="_blank"
            className="bg-[#909090] p-2 rounded-full flex justify-center items-center"
          >
            <TiSocialGithub className="text-black h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/thony-enechi/"
            target="_blank"
            className="bg-[#909090] p-2 rounded-full flex justify-center items-center"
          >
            <FaLinkedinIn className="text-black h-5 w-5" />
          </a>
        </div>
        <p>Thony&copy; {new Date().getFullYear()}. Thanks for stopping by.</p>
      </div>
    </div>
  );
};

export default Footer;
