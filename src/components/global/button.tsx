import React, { ReactNode } from "react";

export const Button = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="p-2 cursor-pointer bg-[#FFE8D6] rounded-md"
    >
      {children}
    </div>
  );
};
