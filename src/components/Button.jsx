
import clsx from "clsx";

const baseStyles = "px-4 py-2 rounded text-white font-semibold transition";

const variants = {
  primary: "bg-blue-600 hover:bg-blue-700",
  secondary: "bg-gray-600 hover:bg-gray-700",
  danger: "bg-red-600 hover:bg-red-700",
};

function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
