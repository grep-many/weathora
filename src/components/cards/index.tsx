import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const Card = ({ children, title }: Props) => {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-linear-to-br from-card to-card/60 p-4 shadow-md">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
