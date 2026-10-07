import { useState, useEffect, useRef } from "react";

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

  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
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
    const handleResize = (e) => {
      if (e.matches) {
        setHamburgerActive(false);
      }
    };
    mediaQuery.addEventListener("change", handleResize);
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

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
            <div className="px-4 ">
              <a
                href="#home"
                className={`block py-6 text-xl font-bold ${navbarFixed ? "text-primary" : "text-white"}`}
              >
                AG
              </a>
            </div>

            <div className="flex items-center px-4" ref={navRef}>
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                onClick={() => setHamburgerActive(!hamburgerActive)}
                className={`absolute right-4 block cursor-pointer ${hamburgerActive ? "hamburger-active" : ""} lg:hidden`}
              >
                <span
                  className={`hamburger-line origin-top-left ${navbarFixed ? "bg-dark dark:bg-white" : "bg-white"} transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`hamburger-line ${navbarFixed ? "bg-dark dark:bg-white" : "bg-white"} transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`hamburger-line ${navbarFixed ? "bg-dark dark:bg-white" : "bg-white"} origin-bottom-left transition duration-300 ease-in-out`}
                ></span>
              </button>

              <nav
                id="nav-menu"
                className={`${hamburgerActive ? "dark:bg-dark" : "hidden"}  absolute top-full right-4 w-full max-w-60 rounded-lg bg-slate-300 py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none `}
              >
                <ul className="block lg:flex">
                  <li>
                    <a
                      href="#home"
                      className={`mx-8 flex py-2 text-base text-dark hover:text-primary  lg:text-lg ${!navbarFixed && !hamburgerActive ? "text-white" : "dark:text-white"}`}
                    >
                      Beranda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className={`mx-8 flex py-2 text-base text-dark hover:text-primary  lg:text-lg ${!navbarFixed && !hamburgerActive ? "text-white" : "dark:text-white"}`}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio"
                      className={`mx-8 flex py-2 text-base text-dark hover:text-primary  lg:text-lg ${!navbarFixed && !hamburgerActive ? "text-white" : "dark:text-white"}`}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="mt-2 flex items-center pl-8 lg:mt-0">
                    <div className="flex">
                      <span
                        className={`mr-2  ${navbarFixed || hamburgerActive ? "text-dark dark:text-white" : "text-white"}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6 lg:size-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                          />
                        </svg>
                      </span>
                      <input
                        type="checkbox"
                        className="hidden"
                        id="dark-toggle"
                        checked={darkMode}
                        onChange={(e) => setDarkMode(e.target.checked)}
                      />
                      <label htmlFor="dark-toggle">
                        <div className="flex h-6 w-10 cursor-pointer items-center rounded-full bg-slate-500 p-1 lg:mt-0.5 dark:bg-primary">
                          <div className="toggle-circle item h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                        </div>
                      </label>
                      <span
                        className={`ml-2  ${navbarFixed || hamburgerActive ? "text-dark dark:text-white" : "text-white"}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-5.5 lg:size-6.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                          />
                        </svg>
                      </span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
