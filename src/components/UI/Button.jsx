// src/components/UI/Button.jsx
import React from "react";

const Button = ({ children, variant = "primary", size = "medium", icon, className = "", ...props }) => {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "primary",
    ghost: "ghost",
    tiny: "tiny"
  };
  const sizeClasses = {
    small: "btn-sm",
    medium: "",
    large: "btn-lg"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {icon && <i className={`bx ${icon}`} />}
      {children}
    </button>
  );
};

export default Button;