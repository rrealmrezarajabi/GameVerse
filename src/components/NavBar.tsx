import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="w-full h-24 bg-gray-900 text-white shadow-md">
      <div className="flex h-full items-center justify-between px-4 ">
        <NavLink to="/" className="flex items-center ">
          <img src={logo} alt="logo" className="h-20 w-20 object-contain" />
          <span className="text-3xl font-bold tracking-wide">GameVerse</span>
        </NavLink>

        <div className="flex gap-10 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-pink-400 font-semibold"
                : "text-gray-300 hover:text-pink-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-pink-400 font-semibold"
                : "text-gray-300 hover:text-pink-400 transition"
            }
          >
            About Me
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-pink-400 font-semibold"
                : "text-gray-300 hover:text-pink-400 transition"
            }
          >
            Contact Me
          </NavLink>
        </div>

        <button className=" cursor-pointer rounded-xl bg-pink-400 px-5 py-2 text-lg font-medium hover:bg-pink-600 transition">
          BookMark
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
