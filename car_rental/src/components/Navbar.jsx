import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { FaCar } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Vehicles", path: "/vehicles" },
  { name: "Details", path: "/details/1" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="STS Self Drive Car" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-800 bg-blue-50 font-semibold"
                      : "text-gray-600 hover:text-blue-700 hover:bg-blue-50/50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Phone */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-green-600 rounded-full flex items-center justify-center shadow-md">
              <FiPhone className="text-white text-sm" />
            </div>
            <div className="text-right">
              <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                Need help?
              </p>
              <p className="text-sm font-bold text-gray-800">+91 87969 34001</p>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-5 pt-2 space-y-1 bg-white border-t border-gray-100">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-blue-800 bg-blue-50 font-semibold"
                    : "text-gray-600 hover:text-blue-700 hover:bg-blue-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="flex items-center gap-3 pt-3 px-4 border-t border-gray-100 mt-2">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-800 to-green-600 rounded-full flex items-center justify-center">
              <FiPhone className="text-white text-sm" />
            </div>
            <p className="text-sm font-bold text-gray-800">+91 87969 34001</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
