import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.jpg";


const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Classes", path: "/classes" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const location = useLocation();

  return (
     <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
         {/* Logo and Title */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Yoga Logo" className="h-10 w-auto" />
          <span className="text-xl font-bold text-gray-800">Kanishka yoga Center</span>
        </Link>
        {/* <h1 className="text-xl font-bold">Kanishka yoga Center</h1> */}
         <nav className="space-x-6 text-gray-700 font-medium hidden md:block">
        {/* <nav className="space-x-6 hidden md:flex"> */}
          {navItems.map((item) => (
            <a key={item.label} href={`#${item.label.toLowerCase()}`}>
                {item.label}
            </a>
            ))}
        </nav>
      </div>
    </header>
  );
}