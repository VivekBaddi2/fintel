"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'


const Header = () => {
    return (
        <div className='h-[10vh]'>
            <header className="absolute top-0 w-full bg-transparent z-[999] text-white body-font left-0 right-0 ">
                <div className="container w-[90vw] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
                    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                        <Image className='object-cover object-center rounded'
                            src="/logo-6.png"
                            width={240}
                            height={406}
                            alt="Fintel logo"
                        />
                    </Link>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center relative">
                        {/* Convert anchor tags to Link tags later */}
                        <Link className="mr-5 hover:text-gray-900" href="/">Home</Link>
                        <div className="relative group mr-5 focus-within:z-50">
                            {/* <button className="hover:text-gray-900 cursor-pointer focus:outline-none" tabIndex={0}> */}
                            <Link href="/AboutUs/whoweare"><label className='cursor-pointer'>About</label></Link>
                            {/* </button> */}
                            <div className="absolute left-0 top-full w-40 bg-white rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity duration-200 z-50">
                                <Link href="/AboutUs/whoweare" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Who We Are</Link>
                                <Link href="/AboutUs/visionandmission" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Vision and Mission</Link>
                                <Link href="/AboutUs/ourvalues" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Values</Link>
                                <Link href="/AboutUs/ourinspiration" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Inspiration</Link>
                                <Link href="/AboutUs/ourculture" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Culture</Link>
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
                        <Link className="mr-5 hover:text-gray-900" href="/contact">Contact</Link>
                        <Link className="mr-5 hover:text-gray-900" href="#">InfoZone</Link>
                    </nav>
                    <Link href='/contact'>
                        <button className="bg-blue-500 text-white px-3 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] inline-flex items-center border-0 focus:outline-none hover:bg-blue-600 text-lg cursor-pointer mt-4 md:mt-0">
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
                    </Link>
                </div>
            </header>

        </div>
    )
}

export default Header