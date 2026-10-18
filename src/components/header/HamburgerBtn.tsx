interface HamburgerBtnLayout {
  onHamburgerClick: () => void;
  hamburgerActive: boolean;
  navbarFixed: boolean;
}

export default function HamburgerBtn({
  onHamburgerClick,
  hamburgerActive,
  navbarFixed,
}: HamburgerBtnLayout) {
  return (
    <button
      id="hamburger"
      name="hamburger"
      type="button"
      onClick={onHamburgerClick}
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
  );
}
