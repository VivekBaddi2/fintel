"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="overflow-x-hidden bg-gray-50">
            <header className="py-4 md:py-6">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <a href="#" className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2">
                                <img
                                    className="w-auto h-10"
                                    src="/fintel-logo.png"
                                    alt="Logo"
                                />
                            </a>
                        </div>

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

                        <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                            <a href="/AboutUs/ourculture" className="text-base font-medium text-gray-900 hover:text-opacity-50">About Us</a>
                            <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50">Services</a>
                            <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50">Contact</a>
                            <a href="/Infozone" className="text-base font-medium text-gray-900 hover:text-opacity-50">InfoZone</a> {/* ✅ Added */}
                        </div>

                        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                            <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50">Customer Login</a>
                            <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600">
                                Sign up
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {expanded && (
                        <nav className="lg:hidden mt-4">
                            <div className="px-1 py-8">
                                <div className="grid gap-y-7">
                                    <a href="#" className="text-base font-medium text-gray-900 hover:bg-gray-100 p-3 rounded-xl">Features</a>
                                    <a href="#" className="text-base font-medium text-gray-900 hover:bg-gray-100 p-3 rounded-xl">Pricing</a>
                                    <a href="#" className="text-base font-medium text-gray-900 hover:bg-gray-100 p-3 rounded-xl">Automation</a>
                                    <a href="#" className="text-base font-medium text-gray-900 hover:bg-gray-100 p-3 rounded-xl">Customer Login</a>
                                    <a href="/Infozone" className="text-base font-medium text-gray-900 hover:bg-gray-100 p-3 rounded-xl">InfoZone</a> {/* ✅ Added */}
                                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-600">
                                        Sign up
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
