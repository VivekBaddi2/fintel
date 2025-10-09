import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

const MinimalFooter = () => {
    return (
        <footer className="bg-gray-50 text-center py-10 px-4 sm:px-6  mt-2 ">
            <div className="max-w-5xl mx-auto">
                {/* Logo Section */}
                <div className="mb-6">
                    <img
                        src="/footer-banner.png"
                        alt="Fintel footer banner"
                        className="w-64 sm:w-72 md:w-80 mx-auto"
                    />
                </div>

                {/* Divider */}
                <div className="w-24 sm:w-32 h-px mx-auto bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 mb-6 opacity-50" />

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-6">
                    {[
                        { title: "Home", route: "/" },
                        { title: "About", route: "AboutUs/whoweare" },
                        { title: "Services", route: "/Services" },
                        { title: "Contact", route: "/contact" },
                        { title: "InfoZone", route: "Infozone" },
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={item.route}
                            className="text-gray-700 text-sm sm:text-base font-medium hover:text-gray-900 transition"
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="flex justify-center gap-6 text-gray-600 text-lg sm:text-xl mb-6">
                    <a
                        href="https://x.com/finteltweets"
                        className="hover:text-gray-900 transition transform hover:scale-110"
                    >
                        <FaTwitter />
                    </a>
                    <a
                        href="https://www.facebook.com/fintelsolutions"
                        className="hover:text-gray-900 transition transform hover:scale-110"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="#"
                        className="hover:text-gray-900 transition transform hover:scale-110"
                    >
                        <FaInstagram />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Fintel Solutions Pvt. Ltd. — All Rights Reserved
                </p>
            </div>
        </footer>


    );
};

export default MinimalFooter;
