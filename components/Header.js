"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <div className='h-[10vh]'>
            <header className="text-gray-600 body-font fixed left-0 right-0 mx-auto z-50 bg-white/30 backdrop-blur-md">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                        <Image className='object-cover object-center rounded'
                            src="/fintel-logo.png"
                            width={240}
                            height={406}
                            alt="Fintel logo"
                        />
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center relative">
                        {/* Convert anchor tags to Link tags later */}
                        <a className="mr-5 hover:text-gray-900" href="/">Home</a>
                        <div className="relative group mr-5 focus-within:z-50">
                            {/* <button className="hover:text-gray-900 cursor-pointer focus:outline-none" tabIndex={0}> */}
                            <a href="/AboutUs/whoweare"><label className='cursor-pointer'>About</label></a>
                            {/* </button> */}
                            <div className="absolute left-0 top-full w-40 bg-white rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity duration-200 z-50">
                                <a href="/AboutUs/whoweare" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Who We Are</a>
                                <a href="/AboutUs/visionandmission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Vision and Mission</a>
                                <a href="/AboutUs/ourvalues" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Values</a>
                                <a href="/about/mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Inspiration</a>
                                <a href="/about/mission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Culture</a>
                            </div>
                        </div>
                        <div className="relative group mr-5 focus-within:z-50">
                            <label className='cursor-pointer'>Services</label>
                            <div className="absolute left-0 top-full w-40 bg-white rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity duration-200 z-50">
                                <a href="/services/consulting" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">What We Do</a>
                                <a href="/services/finance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Services</a>
                                <a href="/services/tech" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">How We Do</a>
                            </div>
                        </div>
                        <a className="mr-5 hover:text-gray-900" href="/contact">Contact</a>
                        <a className="mr-5 hover:text-gray-900" href="#">Gallery</a>
                        <a className="mr-5 hover:text-gray-900" href="#">Careers</a>
                        <a className="mr-5 hover:text-gray-900" href="#">InfoZone</a>
                    </nav>
                    <button className="inline-flex items-center bg-blue-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-lg cursor-pointer mt-4 md:mt-0">
                        Get in Touch
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-1"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>

        </div>
    )
}

export default Header