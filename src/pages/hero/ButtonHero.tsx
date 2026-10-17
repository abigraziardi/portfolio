import type { ReactNode } from "react";

interface ButtonHeroLayout {
  children: ReactNode;
  link: string;
}

export default function ButtonHero({ children, link }: ButtonHeroLayout) {
  return (
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
      className="rounded-full bg-primary px-6 py-3 text-lg font-semibold shadow-lg text-white transition duration-300 ease-in-out hover:bg-purple-700"
    >
      {children}
    </a>
  );
}
