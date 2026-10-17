interface LogoLinkLayout {
  link: string;
  image: string;
  alt: string;
}

export default function LogoLink({ link, image, alt }: LogoLinkLayout) {
  return (
    <a
      href={link}
      target="blank"
      className="mr-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-500 text-slate-500 hover:border-primary hover:bg-primary hover:text-white"
    >
      <img
        src={image}
        alt={alt}
        width={25}
        className="dark:brightness-0 dark:invert"
      />
    </a>
  );
}
