import profile from "../assets/me.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-4 py-12">
      <div className="w-full max-w-2xl rounded-2xl bg-gray-900/70 border border-gray-800 shadow-2xl p-10 backdrop-blur-lg flex flex-col items-center text-center">
        <img
          src={profile}
          alt="Profile"
          className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-lg border-4 border-pink-500 transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer mb-6"
        />

        <h1 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
          Mohamad Reza Rajabi
        </h1>

        <p className="text-gray-300 max-w-xl text-sm sm:text-base leading-relaxed mb-6">
          GameVerse is a React project built for learning purposes. It showcases
          routing, state management using Context API, RAWG API integration, and
          a modern gaming-inspired UI built with Tailwind CSS.
        </p>

        <div className="flex gap-8 text-3xl sm:text-4xl">
          <a
            href="https://github.com/rrealmrezarajabi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-pink-400 transition-all duration-300 hover:scale-125 hover:-translate-y-2"
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
    </section>
  );
}
