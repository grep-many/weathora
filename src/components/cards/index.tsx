import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
  className?: string;
};

const Card = ({ children, title, className }: Props) => {
  return (
    <div
      className={clsx(
        "from-card to-card/60 flex flex-col gap-4 rounded-xl bg-linear-to-br p-4 shadow-md",
        className,
      )}
    >
      <main className="motion-safe:animate-[fade-in_1s_ease-out_forwards] motion-reduce:animate-none">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {children}
      </main>
    </div>
  );
};

export default Card;
