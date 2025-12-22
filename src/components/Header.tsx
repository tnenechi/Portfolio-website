import { NavLinks } from "@/shared/NavLinks";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
};

const Header = ({ selectedPage, setSelectedPage }: Props) => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <>
      <nav
        ref={navRef}
        className={`w-full z-[20] fixed top-0 ${headerBg} px-12 md:px-32 py-2 flex justify-between items-center`}
      >
        <div className="text-3xl">
          <div
            onClick={() => scrollToSection("home")}
            className="cursor-pointer"
          >
            Thony.
          </div>
        </div>

        {/* Desktop navigation */}
        <div
          className={`${
            isTopOfPage ? "text-white" : "text-black"
          } hidden md:flex items-center gap-lg`}
        >
          {NavLinks.map((navItem) => (
            <div
              key={navItem}
              className={`${
                selectedPage === navItem ? "border-b-4 border-primary" : ""
              } py-sm cursor-pointer`}
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
          <AnimatePresence mode="wait">
            {!isMenuOpen && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                onClick={() => setIsMenuOpen(true)}
                className="p-sm rounded-full cursor-pointer bg-black"
              >
                <Bars2Icon className="h-7 w-7 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile Menu (outside header so z-index is never blocked) */}
      {isMenuOpen && (
        <AnimatePresence mode="wait">
          <motion.div
            key="close"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className={`w-full h-full z-[30] fixed top-0 bg-black  px-12 md:px-32 py-2 flex flex-col gap-44`}
          >
            <div
              className="bg-white w-fit p-sm rounded-full cursor-pointer ml-auto"
              onClick={() => setIsMenuOpen(false)}
            >
              <XMarkIcon className="h-7 w-7" />
            </div>

            <div className=" flex justify-center gap-5">
              <div className="h-full flex flex-col gap-lg text-white px-20 border-r-2 ">
                {NavLinks.map((navItem) => (
                  <div
                    key={navItem}
                    onClick={() => {
                      setSelectedPage(navItem);
                      setIsMenuOpen(false);
                    }}
                  >
                    <a href={`#${navItem.toLowerCase().replace(/\s+/g, "")}`}>
                      {navItem}
                    </a>
                  </div>
                ))}
              </div>

              <div className="self-end text-white">
                <h1>Links</h1>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Header;
