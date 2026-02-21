import { FaChevronUp, FaLinkedinIn } from "react-icons/fa6";
import { TiSocialGithub } from "react-icons/ti";
import MyForm from "./MyForm";
import { useState } from "react";
import Modal from "./Modal";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-screen h-[80vh] "
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="w-full h-[80vh] fixed bottom-0 text-black bg-base-content flex flex-col items-center justify-center gap-20 text-2xl tracking-wider ">
          <div className="top flex flex-col justify-center items-center sm:flex-row sm:items-end">
            {/* Links */}
            <div className="flex flex-col gap-6 items-center sm:items-start">
              <a
                href="/docs/Thony-Enechi-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:decoration-accent underline-offset-4"
              >
                My CV
              </a>
              <p
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer hover:underline hover:decoration-accent underline-offset-4"
              >
                Share Feedback
              </p>
            </div>

            <div className="divider sm:divider-horizontal divider-neutral w-full h-full"></div>

            <div id="socials" className="flex gap-4">
              <a
                href="mailto:enechithony@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-accent border-2 border-accent-content shadow-2xl p-2 rounded-full flex justify-center items-center transform hover:scale-90 transition duration-300"
              >
                <BiLogoGmail className="text-accent-content h-7 w-7" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/thony-enechi/"
                className="bg-accent border-2 border-accent-content shadow-2xl p-2 rounded-full flex justify-center items-center transform hover:scale-90 transition duration-300"
              >
                <FaLinkedinIn className="text-accent-content h-7 w-7" />
              </a>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/tnenechi"
                className="bg-accent border-2 border-accent-content shadow-2xl p-2 rounded-full flex justify-center items-center transform hover:scale-90 transition duration-300"
              >
                <TiSocialGithub className="text-accent-content h-7 w-7" />
              </a>
            </div>
          </div>

          <div className="bottom flex flex-col justify-center items-center gap-4 ">
            <div className="text-center">
              <p>
                Thony&copy; {new Date().getFullYear()}. Thanks for stopping by.
              </p>
            </div>
          </div>

          <a
            href="#home"
            className="btn btn-circle bg-accent text-accent-content border-2 border-accent-content absolute bottom-10 right-10 transform hover:scale-90 transition duration-300"
          >
            <FaChevronUp />
          </a>
        </div>
      </div>

      {isModalOpen && (
        <Modal setIsModalOpen={setIsModalOpen}>
          <MyForm feedbackForm />
        </Modal>
      )}
    </>
  );
};

export default Footer;
