import type { ReactNode } from "react";

interface TextPrimaryLayout {
  children: ReactNode;
  style: string;
}

export default function TextPrimary({ children, style }: TextPrimaryLayout) {
  return (
    <h2 className={`text-4xl font-bold md:text-5xl lg:text-5xl ${style}`}>
      {children}
    </h2>
  );
}
