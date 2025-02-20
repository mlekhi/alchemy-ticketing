import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition ${
        variant === "primary" ? "bg-black text-white hover:bg-gray-800" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      } ${className}`}
      {...props}
    />
  );
}
