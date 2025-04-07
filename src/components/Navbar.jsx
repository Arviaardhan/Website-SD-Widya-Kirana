import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LogoSD } from "../assets/images";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `block py-2 px-4 text-base font-medium ${
      isActive ? "text-[#26166e] font-semibold" : "text-gray-600"
    } hover:text-[#26166e]`;

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo dan Nama */}
            <NavLink to="/" className="flex items-center space-x-2">
              <img src={LogoSD} alt="Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold text-[#0f0e0e]">
                SD WIDYA KIRANA KUDUS
              </span>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 md:space-x-0">
              <NavLink to="/" className={navLinkClass}>Beranda</NavLink>
              <NavLink to="/visi-misi" className={navLinkClass}>Visi Misi</NavLink>
              <NavLink to="/guru" className={navLinkClass}>Guru & Staff</NavLink>
              <NavLink to="/ekstra" className={navLinkClass}>Ekstrakurikuler</NavLink>
              <NavLink to="/kurikulum" className={navLinkClass}>Kurikulum</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={toggleSidebar} className="text-gray-700 focus:outline-none">
                <FaBars size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="text-lg font-bold text-[#26166e]">Menu</span>
          <button onClick={toggleSidebar} className="text-gray-600">
            <FaTimes size={22} />
          </button>
        </div>

        <div className="flex flex-col px-4 py-4 space-y-4">
          <NavLink to="/" className={navLinkClass} onClick={toggleSidebar}>
            Beranda
          </NavLink>
          <NavLink to="/visi-misi" className={navLinkClass} onClick={toggleSidebar}>
            Visi Misi
          </NavLink>
          <NavLink to="/guru" className={navLinkClass} onClick={toggleSidebar}>
            Guru & Staff
          </NavLink>
          <NavLink to="/ekstra" className={navLinkClass} onClick={toggleSidebar}>
            Ekstrakurikuler
          </NavLink>
          <NavLink to="/kurikulum" className={navLinkClass} onClick={toggleSidebar}>
            Kurikulum
          </NavLink>
        </div>
      </div>

      {/* Optional: semi-transparent backdrop when sidebar open */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-30 z-40"
        ></div>
      )}
    </>
  );
};

export default Navbar;
