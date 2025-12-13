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
      <nav className="w-full h-24 bg-gray-900 text-white shadow-md">
        <div className="flex h-full items-center justify-between px-4">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-20 w-20 object-contain" />
            <span className="text-3xl font-bold tracking-wide">GameVerse</span>
          </NavLink>

          {/* Links */}
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

          {/* Bookmark Button */}
          <button
            onClick={() => setOpen(true)}
            className="relative flex items-center gap-2
            cursor-pointer rounded-xl bg-pink-400
            px-5 py-2 text-lg font-medium
            hover:bg-pink-600 transition"
          >
            <FaRegBookmark />
            <span>Bookmarks</span>

            {items.length > 0 && (
              <span
                className="absolute -top-2 -right-2
                rounded-full bg-black px-2 py-0.5
                text-xs text-white"
              >
                {items.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Bookmark Modal */}
      <BookmarkModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default NavBar;
