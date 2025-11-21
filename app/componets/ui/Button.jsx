import React from "react";

const variants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  ghost: "text-gray-700 hover:bg-gray-100",
  link: "text-blue-600 underline hover:text-blue-700",
};

const sizes = {
  default: "h-10 px-4 text-sm",
  sm: "h-8 px-3 text-sm",
  lg: "h-12 px-6 text-base",
  icon: "h-10 w-10 p-0 flex items-center justify-center",
};

export default function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) {
  const variantClass = variants[variant] ?? variants.default;
  const sizeClass = sizes[size] ?? sizes.default;

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md font-medium transition ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
