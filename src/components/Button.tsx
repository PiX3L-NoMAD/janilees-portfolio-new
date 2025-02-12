import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded text-white ${
        variant === "primary" ? "bg-pink-600 hover:bg-pink-700" : "bg-gray-600 hover:bg-gray-700"
      }`}
      {...props}
    />
  );
}
