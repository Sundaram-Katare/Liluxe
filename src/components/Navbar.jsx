import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-row justify-between items-center p-6 md:p-8 mb-16">
      {/* Logo */}
      <div className="text-blue-400 text-3xl md:text-4xl font-800 font-dyna">
        <h1>Liluxe</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-10 text-lg md:text-xl font-semibold text-gray-700">
        <h2 className="cursor-pointer hover:text-orange-500">Home</h2>
        <h2 className="cursor-pointer hover:text-orange-500">About</h2>
        <h2 className="cursor-pointer hover:text-orange-500">Shop</h2>
        <h2 className="cursor-pointer hover:text-orange-500">New Arrival</h2>
      </div>

      {/* GitHub + Hamburger */}
      <div className="flex items-center gap-6">
        <FaGithub size={30} className="cursor-pointer" onClick={() => window.open("https://github.com/Sundaram-Katare/stylespot", "_blank")} />
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 md:hidden z-50">
          <h2 className="cursor-pointer hover:text-orange-500">Home</h2>
          <h2 className="cursor-pointer hover:text-orange-500">About</h2>
          <h2 className="cursor-pointer hover:text-orange-500">Shop</h2>
          <h2 className="cursor-pointer hover:text-orange-500">New Arrival</h2>
        </div>
      )}
    </nav>
  );
}
