import type { ButtonHTMLAttributes } from "react";

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "danger" }) {
  return <button className={`btn btn-${variant}`} {...props}>{children}</button>;
}