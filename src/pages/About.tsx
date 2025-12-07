import profile from "../assets/me.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-white p-4 sm:p-6 md:p-8">
      {/* Profile Image */}
      <img
        src={profile}
        alt="Profile"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg mb-4 sm:mb-6 border-4 border-pink-500 
                   transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer"
      />

      {/* Name */}
      <h1 className="text-2xl sm:text-3xl font-bold text-pink-400 mb-2 text-center px-4">
        Mohamad Reza Rajabi
      </h1>

      {/* Description */}
      <p className="text-gray-300 max-w-xl text-center mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base px-4">
        GameVerse is a React project built for learning purposes. It
        demonstrates routing, state management with Context, API handling, and
        modern UI using Tailwind CSS.
      </p>

      {/* Social Links */}
      <div className="flex gap-6 sm:gap-8 text-3xl sm:text-4xl">
        <a
          href="https://github.com/rrealmrezarajabi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 hover:-translate-y-2"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/mohamad-reza-rajabi-781678374/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-300 transition-all duration-300 hover:scale-125 hover:-translate-y-2"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}
