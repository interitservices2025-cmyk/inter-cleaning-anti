import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-montserrat font-semibold text-sm tracking-wider uppercase rounded-full px-8 py-3.5 transition-all duration-300 transform active:scale-98 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-[#c20b65] hover:shadow-lg hover:shadow-primary/20 focus:ring-primary",
    secondary:
      "bg-secondary text-text-dark hover:bg-accent hover:shadow-lg hover:shadow-secondary/20 focus:ring-secondary",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    white:
      "bg-white text-primary hover:bg-brand-light hover:shadow-lg focus:ring-white",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
