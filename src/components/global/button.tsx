import React, { ReactNode } from "react";

export const Button = ({
  children,
  onClick,
  disabled,
}: {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-2 rounded-md ${
        disabled ? "pointer-events-none bg-gray-300 cursor-no-drop text-white" : "bg-[#FFE8D6] cursor-pointer text-black "
      } `}
    >
      {children}
    </div>
  );
};
