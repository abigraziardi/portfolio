import { useState, useEffect, useRef } from "react";
import HamburgerBtn from "./HamburgerBtn";
import NavbarComponent from "./NavbarComponent";
import LogoHeader from "./LogoHeader";

export default function Header() {
  const [navbarFixed, setNavbarFixed] = useState(false);
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarFixed(true);
      } else {
        setNavbarFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setHamburgerActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setHamburgerActive(false);
      }
    };
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const handleHamburger = () => setHamburgerActive(!hamburgerActive);

  const handleToggleDark = (isChecked: boolean) => setDarkMode(isChecked);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <header
        className={`absolute top-0 left-0 z-100 flex w-full justify-center items-center bg-transparent ${navbarFixed ? "navbar-fixed" : ""}`}
      >
        <div className="container px-5">
          <div className="relative flex items-center justify-between">
            <LogoHeader link="#home" navbarFixed={navbarFixed} />

            <div className="flex items-center px-4" ref={navRef}>
              <HamburgerBtn
                onHamburgerClick={handleHamburger}
                hamburgerActive={hamburgerActive}
                navbarFixed={navbarFixed}
              />

              <NavbarComponent hamburgerActive={hamburgerActive}>
                <NavbarComponent.List
                  link="#home"
                  hamburgerActive={hamburgerActive}
                  navbarFixed={navbarFixed}
                >
                  Beranda
                </NavbarComponent.List>
                <NavbarComponent.List
                  link="#about"
                  hamburgerActive={hamburgerActive}
                  navbarFixed={navbarFixed}
                >
                  About
                </NavbarComponent.List>
                <NavbarComponent.List
                  link="#portfolio"
                  hamburgerActive={hamburgerActive}
                  navbarFixed={navbarFixed}
                >
                  Portfolio
                </NavbarComponent.List>

                <NavbarComponent.DarkMode
                  hamburgerActive={hamburgerActive}
                  navbarFixed={navbarFixed}
                  darkMode={darkMode}
                  onToggleDark={handleToggleDark}
                />
              </NavbarComponent>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
