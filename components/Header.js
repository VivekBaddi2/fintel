'use client'
import Image from 'next/image';
import React, { useState } from 'react'

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="overflow-x-hidden bg-gray-50 ">
            <header className="py-4 md:py-6">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="-ml-7 sm:-ml:0 flex-shrink-0">
                            <a href="/" className="block rounded">
                                {/* ✅ The parent must be relative AND have height */}
                                <div className="relative w-[200px] h-16 sm:w-48 md:w-52 lg:w-50">
                                    <Image
                                        src="/fintel-black-logo.png"
                                        alt="Fintel Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                        sizes="(max-width: 640px) 200px, (max-width: 768px) 12rem, (max-width: 1024px) 13rem, 14rem"
                                    />
                                </div>
                            </a>
                        </div>



                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="text-gray-900"
                                onClick={() => setExpanded(!expanded)}
                                aria-expanded={expanded}
                            >
                                {expanded ? (
                                    <svg
                                        className="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden lg:flex lg:ml-2 items-center justify-between lg:space-x-10 xl:space-x-16 xl:ml-16">
                            <a href="/" className="text-base font-medium text-gray-700 hover:text-gray-900">Home</a>
                            <a href="/AboutUs/whoweare" className="text-base font-medium text-gray-700 hover:text-gray-900">About Us</a>
                            <a href="/Services" className="text-base font-medium text-gray-700 hover:text-gray-900">Services</a>
                            <a href="/contact" className="text-base font-medium text-gray-700 hover:text-gray-900">Contact</a>
                            <a href="/Infozone" className="text-base font-medium text-gray-700 hover:text-gray-900">InfoZone</a>
                            <a href="/Blogs" className="text-base font-medium text-gray-700 hover:text-gray-900">Blog</a> {/* ✅ Added Blogs */}
                        </div>

                        {/* CTA button */}
                        <div className="hidden lg:ml-auto lg:flex items-center lg:space-x-10">
                            <a href="/contact" className="active:scale-95 inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800">
                                Get in touch
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {expanded && (
                        <nav className="lg:hidden mt-4 px-4">
                            <div className="px-1 py-8">
                                <div className="grid gap-y-7">
                                    <a href="/" className="text-base font-medium text-gray-900 hover:bg-gray-100 p-3 rounded-xl">Home</a>
                                    <a href="/AboutUs/whoweare" className="text-base font-medium text-gray-900 hover:bg-gray-100 p-3 rounded-xl">About Us</a>
                                    <a href="/Services" className="text-base font-medium text-gray-900 hover:bg-gray-100 p-3 rounded-xl">Services</a>
                                    <a href="/contact" className="text-base font-medium text-gray-900 hover:bg-gray-100 p-3 rounded-xl">Contact</a>
                                    <a href="/Infozone" className="text-base font-medium text-gray-900 hover:bg-gray-100 p-3 rounded-xl">InfoZone</a>
                                    <a href="/Blogs" className="text-base font-medium text-gray-900 hover:bg-gray-100 p-3 rounded-xl">Blog</a> {/* ✅ Added Blogs */}
                                    <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800">
                                        Get in touch
                                    </a>
                                </div>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        </div>
    )
}

export default Header
