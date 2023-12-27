// Button/index.jsx
import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, variant, size, isDisabled }) => {
  // Define the base style
  let baseStyle = "focus:outline-none transition ease-in-out duration-300";

  // Variant styles
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    alert: "bg-red-500 hover:bg-red-700 text-white"
  };

  // Size styles
  const sizeStyles = {
    small: "text-xs py-2 px-4",
    medium: "text-sm py-3 px-6",
    large: "text-lg py-4 px-8"
  };

  // Combine the base style with variant and size styles
  const buttonStyle = `${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]}`;

  return (
    <button className={buttonStyle} onClick={onClick} disabled={isDisabled}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary", "alert"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  isDisabled: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  variant: "primary",
  size: "medium",
  isDisabled: false
};

export default Button;
