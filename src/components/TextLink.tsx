import type { ReactNode } from "react";

interface TextLinkLayout {
  children: ReactNode;
  link: string;
  page?: string;
}

export default function TextLink({ children, link, page }: TextLinkLayout) {
  return (
    <h4 className="font-bold mt-5 text-lg md:text-xl ">
      <a
        href={link}
        target={page !== "same-page" ? "_blank" : "_self"}
        onClick={(e) => {
          if (page === "same-page") {
            e.preventDefault();
            const targetId = link.replace("#", "");
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          }
        }}
        className="text-primary hover:text-purple-700"
      >
        {children}
      </a>
    </h4>
  );
}
