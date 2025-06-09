import React, { FC } from "react";

type TButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "warning" | "danger";
};

export const Button: FC<TButtonProps> = ({
  children,
  onClick,
  disabled = false,
  type = "button",
  variant = "default",
}) => {
  const getVariant = () => {
    if (variant === "warning") return "bg-yellow-500 hover:bg-yellow-600";
    if (variant === "danger") return "bg-red-500 hover:bg-red-600";
    return "bg-blue-500 hover:bg-blue-600";
  };


  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${getVariant()} text-white px-4 py-2 rounded transition`}
    >
      {children}
    </button>
  );
};
