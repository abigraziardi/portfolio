import type { ReactNode } from "react";
import TextLink from "../../components/TextLink";

interface PortfolioCardLayout {
  children: ReactNode;
  style: string;
}

interface ImageLayout {
  link: string;
  image: string;
  alt: string;
}

interface TitleLayout {
  children: ReactNode;
  link: string;
}

interface DescLayout {
  children: ReactNode;
}

export default function PortfolioCard({
  children,
  style,
}: PortfolioCardLayout) {
  return <div className={`mb-12 p-4 ${style}`}>{children}</div>;
}

PortfolioCard.Image = function PortfolioCardImage({
  link,
  image,
  alt,
}: ImageLayout) {
  return (
    <div className="overflow-hidden rounded-md shadow-lg m-auto h-64 w-full max-w-80 cursor-pointer bg-secondary hover:scale-107 hover:shadow-2xl transition-transform">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-full w-full"
      >
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover transition-all duration-300 group-hover:blur-[2px] group-hover:brightness-40"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="px-4 py-2 text-lg font-semibold text-white">
            Lihat
          </span>
        </div>
      </a>
    </div>
  );
};

PortfolioCard.Title = function PortfolioCardTitle({
  children,
  link,
}: TitleLayout) {
  return (
    <div className="mb-1 text-center lg:text-left">
      <TextLink link={link}>{children}</TextLink>
    </div>
  );
};

PortfolioCard.Desc = function PortfolioCardDesc({ children }: DescLayout) {
  return (
    <p className="text-secondary text-justify dark:text-slate-400">
      {children}
    </p>
  );
};
