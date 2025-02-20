import { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function Label({ className = "", children, ...props }: LabelProps) {
  return (
    <label className={`text-gray-700 font-medium ${className}`} {...props}>
      {children}
    </label>
  );
}
