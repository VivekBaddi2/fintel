import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const MinimalFooter = () => {
  return (
    <footer className="bg-white text-center py-10">
      {/* Logo */}
      <div className="text-2xl font-bold mb-6">
        <span className="text-pink-500">/</span>
        <span className="tracking-wide">Fintel Solutions</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex justify-center space-x-8 mb-6">
        {["About", "Features", "Works", "Support", "Help"].map((item, i) => (
          <a
            key={i}
            href="#"
            className="text-gray-800 text-base font-medium hover:text-gray-500 transition"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Decorative Divider */}
      <div className="w-40 h-px mx-auto bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mb-6 opacity-50" />

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-gray-700 text-xl mb-6">
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaGithub /></a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500">
        © Copyright {new Date().getFullYear()}, All Rights Reserved
      </p>
    </footer>
  );
};

export default MinimalFooter;
