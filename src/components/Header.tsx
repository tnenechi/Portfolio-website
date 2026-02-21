import { NavLinks } from "@/shared/NavLinks";
import { useEffect, useRef, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaBars, FaLinkedinIn } from "react-icons/fa6";
import { TiSocialGithub } from "react-icons/ti";
import { ShinyButton } from "@/components/ui/shiny-button";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import Modal from "./Modal";
import MyForm from "./MyForm";

gsap.registerPlugin(useGSAP);

type Props = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const Header = ({ selectedPage, setSelectedPage }: Props) => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const navBtn = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //To help with the nav's background color change on scroll
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerBg = isTopOfPage
    ? "bg-transparent"
    : "bg-[#FFFFFFCC] backdrop-blur-md";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const offset = navRef.current?.offsetHeight || 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useGSAP(() => {
    gsap.from("#logo", {
      yPercent: 100,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".navLinks", {
      yPercent: "100%",
      opacity: 0,
      duration: 1,
      ease: "power1.out",
    });

    gsap.from(navBtn.current, {
      yPercent: 110,
      duration: 0.9,
      ease: "power3.out",
      delay: 1,
    });

    // HOVER ANIMATION
    const links = gsap.utils.toArray<HTMLElement>(".navLinks");
    const splitTextMap = new Map<HTMLElement, SplitText>();

    const onEnter = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      let splitText = splitTextMap.get(target);

      if (!splitText) {
        splitText = new SplitText(target, { type: "chars" });
        splitTextMap.set(target, splitText);
      }

      gsap.to(splitText.chars, {
        y: -5,
        stagger: 0.03,
        duration: 0.1,
        ease: "power1.out",
        overwrite: true,
      });
    };

    const onLeave = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const splitText = splitTextMap.get(target);

      if (splitText) {
        gsap.to(splitText.chars, {
          y: 0,
          stagger: 0.03,
          duration: 0.1,
          ease: "power1.out",
          overwrite: true,
        });
      }
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", onEnter);
      link.addEventListener("mouseleave", onLeave);
    });

    const onEnterNavBtn = () => {
      gsap.to(navBtn.current, {
        scale: 0.95,
        overwrite: true,
      });
    };

    const onLeaveNavBtn = () => {
      gsap.to(navBtn.current, {
        scale: 1,
        overwrite: true,
      });
    };

    navBtn.current?.addEventListener("mouseenter", onEnterNavBtn);
    navBtn.current?.addEventListener("mouseleave", onLeaveNavBtn);

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onEnter);
        link.removeEventListener("mouseleave", onLeave);
      });
      splitTextMap.forEach((splitText) => splitText.revert());

      navBtn.current?.removeEventListener("mouseenter", onEnterNavBtn);
      navBtn.current?.removeEventListener("mouseleave", onLeaveNavBtn);
    };
  });

  return (
    <>
      <nav
        ref={navRef}
        className={`w-full z-[20] fixed top-0 ${headerBg} py-y-sm flex justify-between items-center`}
      >
        <div
          onClick={() => scrollToSection("home")}
          className={`${
            isTopOfPage ? "text-white" : "text-black"
          } cursor-pointer text-2xl tracking-tight overflow-hidden`}
        >
          <p id="logo">Thony.</p>
        </div>

        {/* Desktop navigation */}
        <div
          className={`${
            isTopOfPage ? "text-white" : "text-black"
          } hidden md:flex items-center gap-10`}
        >
          {NavLinks.map((navItem) => (
            <div
              key={navItem}
              className={`${
                selectedPage === navItem ? "border-b-2 border-accent" : ""
              } py-2 cursor-pointer navLinks`}
              onClick={() => {
                let id = navItem.toLowerCase().replace(/\s+/g, "");
                setSelectedPage(navItem);
                scrollToSection(id);
              }}
            >
              {navItem}
            </div>
          ))}

          <div className="overflow-hidden">
            <div ref={navBtn}>
              <ShinyButton
                onClick={() => setIsFormModalOpen(true)}
                className="bg-[#00865C] border-2 border-accent-content text-black"
              >
                Get in touch
              </ShinyButton>
            </div>
          </div>
        </div>

        {/* Small screen hamburger */}
        <div className=" md:hidden">
          {!isMobileModalOpen && (
            <div
              onClick={() => setIsMobileModalOpen(true)}
              className="p-2 rounded-full cursor-pointer bg-black"
            >
              <FaBars className="text-white" size={25} />
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu (outside header so z-index is never blocked) */}
      {isMobileModalOpen && (
        <Modal setIsModalOpen={setIsMobileModalOpen}>
          <div className=" flex justify-center gap-5">
            <div className="h-full flex flex-col justify-center items-end gap-10 text-white px-10 border-r-2 ">
              {NavLinks.map((navItem) => (
                <div
                  key={navItem}
                  onClick={() => {
                    setSelectedPage(navItem);
                    setIsMobileModalOpen(false);
                  }}
                >
                  <div
                    onClick={() =>
                      scrollToSection(navItem.toLowerCase().replace(/\s+/g, ""))
                    }
                    className="cursor-pointer"
                  >
                    <p className="text-xl sm:text-2xl tracking-wider">
                      {navItem}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div
              id="socials"
              className="self-end text-white flex flex-col sm:flex-row gap-4"
            >
              <a
                href="mailto:enechithony@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-white p-2 rounded-full"
              >
                <BiLogoGmail className="text-black h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/thony-enechi/"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-white p-2 rounded-full"
              >
                <FaLinkedinIn className="text-black h-5 w-5" />
              </a>

              <a
                href="https://github.com/tnenechi"
                rel="noopener noreferrer"
                target="_blank"
                className="bg-white p-2 rounded-full"
              >
                <TiSocialGithub className="text-black h-5 w-5" />
              </a>
            </div>
          </div>
        </Modal>
      )}

      {/* GET IN TOUCH */}
      {isFormModalOpen && (
        <Modal setIsModalOpen={setIsFormModalOpen}>
          <MyForm />
        </Modal>
      )}
    </>
  );
};

export default Header;
