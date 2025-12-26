import { NavLinks } from "@/shared/NavLinks";
import { FaBars, FaLinkedinIn } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { TiSocialGithub } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Props = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  onComplete: () => void;
};

const Header = ({ selectedPage, setSelectedPage, onComplete }: Props) => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";

    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

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
    //NAV ONLOAD ANIMATION
    const navtl = gsap.timeline({
      defaults: { x: -10, opacity: 0, duration: 0.5, ease: "power1.out" },
    });

    navtl.from("#logo", {}).from(".navLinks", { onComplete }, "-=0.1");

    // HOVER ANIMATION
    const links = gsap.utils.toArray<HTMLElement>(".hoverLinks");

    const onEnter = (e: Event) => {
      gsap.to(e.currentTarget, {
        scale: 0.9,
        duration: 0.2,
        overwrite: true,
      });
    };

    const onLeave = (e: Event) => {
      gsap.to(e.currentTarget, { scale: 1, duration: 0.2, overwrite: true });
    };

    links.forEach((link) => {
      link.addEventListener("mouseenter", onEnter);
      link.addEventListener("mouseleave", onLeave);

      return () => {
        link.removeEventListener("mouseenter", onEnter);
        link.removeEventListener("mouseleave", onLeave);
      };
    });
  });

  return (
    <>
      <nav
        ref={navRef}
        className={`w-full z-[20] fixed top-0 ${headerBg} px-12 md:px-32 py-4 flex justify-between items-center`}
      >
        <div
          id="logo"
          onClick={() => scrollToSection("home")}
          className={`${
            isTopOfPage ? "text-white" : "text-black"
          } cursor-pointer text-2xl tracking-tight`}
        >
          Thony.
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
                selectedPage === navItem ? "border-b-2 border-primary" : ""
              } py-2 cursor-pointer navLinks hoverLinks`}
              onClick={() => {
                let id = navItem.toLowerCase().replace(/\s+/g, "");
                setSelectedPage(navItem);
                scrollToSection(id);
              }}
            >
              {navItem}
            </div>
          ))}
        </div>

        {/* Small screen hamburger */}
        <div className=" md:hidden">
          {!isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-full cursor-pointer bg-black"
            >
              <FaBars className="text-white" size={25} />
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu (outside header so z-index is never blocked) */}
      {isMenuOpen && (
        <div
          className={`w-full h-full z-[30] fixed top-0 bg-black  px-12 md:px-32 py-2 flex flex-col gap-44`}
        >
          <div
            className="ml-auto bg-white w-fit p-2 rounded-full cursor-pointer "
            onClick={() => setIsMenuOpen(false)}
          >
            <MdClose className="h-7 w-7" />
          </div>

          <div className=" flex justify-center gap-5">
            <div className="h-full flex flex-col gap-10 text-white px-10 border-r-2 ">
              {NavLinks.map((navItem) => (
                <div
                  key={navItem}
                  onClick={() => {
                    setSelectedPage(navItem);
                    setIsMenuOpen(false);
                  }}
                >
                  <div
                    onClick={() =>
                      scrollToSection(navItem.toLowerCase().replace(/\s+/g, ""))
                    }
                    className="my_big_text cursor-pointer"
                  >
                    {navItem}
                  </div>
                </div>
              ))}
            </div>

            <div id="socials" className="self-end text-white flex gap-4">
              <a
                href="mailto:enechithony@gmail.com"
                target="_blank"
                className="bg-white p-2 rounded-full"
              >
                <BiLogoGmail className="text-black h-5 w-5" />
              </a>
              <a
                href="https://github.com/tnenechi"
                target="_blank"
                className="bg-white p-2 rounded-full"
              >
                <TiSocialGithub className="text-black h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/thony-enechi/"
                target="_blank"
                className="bg-white p-2 rounded-full"
              >
                <FaLinkedinIn className="text-black h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
