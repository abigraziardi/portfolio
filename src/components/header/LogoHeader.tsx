interface LogoHeaderLayout {
  link: string;
  navbarFixed: boolean;
}

export default function LogoHeader({ link, navbarFixed }: LogoHeaderLayout) {
  return (
    <div className="px-4 ">
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
        className={`block py-6 text-xl font-bold ${navbarFixed ? "text-primary" : "text-white"}`}
      >
        AG
      </a>
    </div>
  );
}
