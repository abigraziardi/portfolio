import type { ReactNode } from "react";

interface TextSecondaryLayout {
  children: ReactNode;
}

export default function TextSecondary({ children }: TextSecondaryLayout) {
  return (
    <p className="font-medium text-secondary text-justify md:text-lg">
      {children}
    </p>
  );
}
