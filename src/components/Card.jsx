function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg shadow-md p-4 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
