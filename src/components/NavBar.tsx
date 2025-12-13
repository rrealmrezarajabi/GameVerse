import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import { FaRegBookmark } from "react-icons/fa";
import { useBookMark } from "../context/BookMarkContext";
import BookmarkModal from "./BookMark";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { items } = useBookMark();

  return (
    <>
      <nav className="w-full h-auto sm:h-24 bg-gray-900 text-white shadow-md">
        <div className="flex flex-col sm:flex-row h-full items-center justify-between px-4 py-3 sm:py-0 gap-3 sm:gap-0">
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
            />
            <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
              GameVerse
            </span>
          </NavLink>

          <div className="flex gap-4 sm:gap-6 md:gap-10 text-sm sm:text-base md:text-lg">
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

          <button
            onClick={() => setOpen(true)}
            className="relative flex items-center gap-2
            cursor-pointer rounded-xl bg-pink-400
            px-3 sm:px-5 py-2 text-sm sm:text-base md:text-lg font-medium
            hover:bg-pink-600 transition w-full sm:w-auto justify-center"
          >
            <FaRegBookmark />
            <span className="hidden sm:inline">Bookmarks</span>
            <span className="sm:hidden">Bookmarks ({items.length})</span>

            {items.length > 0 && (
              <span
                className="absolute -top-2 -right-2 hidden sm:block
                rounded-full bg-black px-2 py-0.5
                text-xs text-white"
              >
                {items.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      <BookmarkModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default NavBar;
