import { useState } from "react";
import GenresList from "./GenresList";
import { FaBars, FaTimes } from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden fixed top-20 left-4 z-40 bg-gray-900 text-white p-2 rounded-lg shadow-lg border border-gray-700"
        aria-label="Toggle genres menu"
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {isOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          bg-gray-900 w-full sm:w-52 shadow-lg text-white
          fixed sm:static top-0 left-0 h-full sm:h-auto z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between p-3 sm:p-2 border-b sm:border-b-0 border-gray-700">
          <h1 className="font-bold text-xl sm:text-2xl">Genres</h1>
          <button
            onClick={() => setIsOpen(false)}
            className="sm:hidden text-gray-400 hover:text-white"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-80px)] sm:h-auto">
          <GenresList />
        </div>
      </aside>
    </>
  );
};

export default SideBar;
