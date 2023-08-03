import React, { useRef, useEffect } from "react";
import ProfileIcon from "../../UI/ProfileIcon";
export const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });

  const handleClickNavbar = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      ref={headerRef}
      className="w-full h-[-80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <ProfileIcon />
          <div id="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClickNavbar}
                  className="text-smallTextColor font-600"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClickNavbar}
                  className="text-smallTextColor font-600"
                  href="#additional"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClickNavbar}
                  className="text-smallTextColor font-600"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClickNavbar}
                  className="text-smallTextColor font-600"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
