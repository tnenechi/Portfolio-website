import { NavLinks } from "@/shared/NavLinks";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const flexBetween = "flex items-center justify-between";

  //  Check if at the top of the page
  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY == 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <div
        id="header"
        className={`${
          isTopOfPage ? "" : "bg-primary-20"
        } w-full z-30 fixed top-0 py-4`}
      >
        <div
          id="navContainer"
          className={`${flexBetween} w-5/6 mx-auto gap-32`}
        >
          {/* LOGO */}
          <div className="text-xl font-bold">Thony.</div>

          {/* SMALL SCREEN */}
          <div>
            <button
              className={`${
                isMenuOpen ? "hidden" : "block"
              } bg-primary-20 p-2 rounded-full hover:bg-primary-30 cursor-pointer md:hidden`}
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars2Icon className="h-6 w-6 text-white" />
            </button>

            {isMenuOpen && (
              <div className="z-40 bg-primary-20 fixed top-0 right-0 w-1/3 h-full shadow-2xl md:hidden">
                <div
                  className="flex justify-end p-2 m-4 cursor-pointer text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <XMarkIcon className="h-7 w-7" />
                </div>
                <div className={`flex flex-col h-full items-center gap-4`}>
                  {NavLinks.map((navItem) => (
                    <div
                      key={navItem}
                      onClick={() => {
                        setSelectedPage(navItem);
                        setIsMenuOpen(false);
                      }}
                    >
                      <AnchorLink
                        href={`#${navItem.toLowerCase().replace(/\s+/g, "")}`}
                      >
                        {navItem}
                      </AnchorLink>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* BIG SCREEN */}
          <div className={`hidden md:flex justify-end gap-16`}>
            {/* MIDDLE */}
            <div className={`${flexBetween} gap-16`}>
              {NavLinks.map((navItem) => (
                <div
                  key={navItem}
                  className={`${
                    selectedPage == navItem ? "text-primary-30" : ""
                  } hover:text-primary-20 transition duration-500`}
                  onClick={() => setSelectedPage(navItem)}
                >
                  <AnchorLink
                    href={`#${navItem.toLowerCase().replace(/\s+/g, "")}`}
                  >
                    {navItem}
                  </AnchorLink>
                </div>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <button>Hire Me</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
