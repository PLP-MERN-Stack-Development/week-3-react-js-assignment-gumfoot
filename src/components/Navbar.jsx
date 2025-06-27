import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* App Name / Logo */}
      <Link to="/" className="text-2xl font-bold">
        TaskMate
      </Link>

      {/* Navigation Links + Theme Toggle */}
      <div className="flex items-center space-x-6">
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive ? "underline font-semibold" : "hover:underline"
            }
          >
            Tasks
          </NavLink>
           <NavLink
  to="/posts"
  className={({ isActive }) =>
    isActive ? "underline font-semibold" : "hover:underline"
  }
>
  Posts
</NavLink>

        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100 transition duration-200 text-sm"
        >
          {theme === "light" ? "🌙 Dark" : "🌞 Light"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

