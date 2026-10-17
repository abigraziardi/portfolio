import type { ReactNode } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

interface NavbarComponent {
  children: ReactNode;
  hamburgerActive: boolean;
}

interface ListLayout {
  children: ReactNode;
  link: string;
  navbarFixed: boolean;
  hamburgerActive: boolean;
}

interface DarkModeLayout {
  navbarFixed: boolean;
  hamburgerActive: boolean;
  darkMode: boolean;
  onToggleDark: (isChecked: boolean) => void;
}

export default function NavbarComponent({
  children,
  hamburgerActive,
}: NavbarComponent) {
  return (
    <nav
      id="nav-menu"
      className={`${hamburgerActive ? "dark:bg-dark" : "hidden"}  absolute top-full right-4 w-full max-w-60 rounded-lg bg-slate-300 py-5 shadow-lg lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none `}
    >
      <ul className="block lg:flex">{children}</ul>
    </nav>
  );
}

NavbarComponent.List = function NavbarComponentList({
  children,
  link,
  navbarFixed,
  hamburgerActive,
}: ListLayout) {
  return (
    <li>
      <a
        href={link}
        onClick={(e) => {
          e.preventDefault();
          const targetId = link.replace("#", "");
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className={`mx-8 flex py-2 text-base text-dark hover:text-primary  lg:text-lg ${!navbarFixed && !hamburgerActive ? "text-white" : "dark:text-white"}`}
      >
        {children}
      </a>
    </li>
  );
};

NavbarComponent.DarkMode = function NavbarComponentDarkMode({
  navbarFixed,
  hamburgerActive,
  darkMode,
  onToggleDark,
}: DarkModeLayout) {
  const textColor =
    navbarFixed || hamburgerActive
      ? "text-dark dark:text-white"
      : "text-white dark:text-white";

  return (
    <li className="mt-2 flex items-center pl-8 lg:mt-0">
      <div className="flex items-center">
        <SunIcon className={`size-7 mr-2  ${textColor}`} />
        <input
          type="checkbox"
          className="hidden"
          id="dark-toggle"
          checked={darkMode}
          onChange={(e) => onToggleDark(e.target.checked)}
        />
        <label htmlFor="dark-toggle">
          <div className="flex h-6 w-10 cursor-pointer items-center rounded-full bg-slate-500 p-1 lg:mt-0.5 dark:bg-primary">
            <div className="toggle-circle item h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
          </div>
        </label>

        <MoonIcon className={`size-6 ml-2  ${textColor}`} />
      </div>
    </li>
  );
};
