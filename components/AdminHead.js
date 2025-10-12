'use client'
import React, { useState } from 'react'

const AdminHead = () => {
    const [expanded, setExpanded] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function logoutSession() {
        sessionStorage.removeItem("adminLoggedIn");
    }

    return (
        <div className="bg-gray-50 w-[100vw]">
            <header className="w-full py-4 md:py-6">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a href="/" className="flex rounded ">
                                <img
                                    className="h-auto w-[200px] -ml-4 sm:-ml-0 sm:h-auto sm:w-48 md:w-48 lg:w-48"
                                    src="/fintel-color-logo.png"
                                    alt="Logo"
                                />
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
                                        className="w-5 h-5"
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


                        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10 text-gray-700 hover:text-gray-900">
                            <a href="/EditPdf" className='text-md font-medium hover:underline hover:font-medium'>Add PDF</a>
                            <a href="/BlogEditing" className='text-md font-medium hover:underline hover:font-medium'>Add Blog</a>
                            {/* dropdown here */}
                            <div
                                className="relative"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                            >
                                <button
                                    className='text-md font-medium hover:underline hover:font-medium hover:shadow-md flex items-center gap-1'
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    type="button"
                                >
                                    Settings
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {/* Dropdown Menu */}
                                {dropdownOpen && (
                                    <div className="absolute left-0 mt-0.5 w-40 bg-white border rounded shadow-lg z-50">
                                        <a href="/Settings/EditAdminDetails" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Edit Admin Details</a>
                                    </div>
                                )}
                            </div>
                            <a href="/AdminDashboard" className="active:scale-95 inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800">
                                Dashboard
                            </a>
                            <a href='/AdminLogin' onClick={logoutSession} className="active:scale-95 cursor-pointer inline-flex items-center justify-center px-6 py-3 text-base font-bold text-black bg-transparent border-2 border-gray-900 rounded-xl hover:bg-gray-100">
                                Logout
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {expanded && (
                        <nav className="lg:hidden mt-4">
                            <div className="px-1 py-8">
                                <div className="grid gap-y-7">
                                    <a href="/EditPdf" className='text-md font-medium hover:underline hover:font-medium hover:shadow-md'>Add PDF</a>
                                    <a href="/BlogEditing" className='text-md font-medium hover:underline hover:font-medium hover:shadow-md'>Add Blog</a>
                                    {/* dropdown here */}
                                    <div
                                        className="relative"
                                        onClick={() => dropdownOpen == false ? setDropdownOpen(true) : setDropdownOpen(false)}
                                    // onMouseLeave={() => setDropdownOpen(false)}
                                    >
                                        <button
                                            className='text-md font-medium hover:underline hover:font-medium hover:shadow-md flex items-center gap-1'
                                            onClick={() => setDropdownOpen(!dropdownOpen)}
                                            type="button"
                                        >
                                            Settings
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {/* Dropdown Menu */}
                                        {dropdownOpen && (
                                            <div className="absolute left-0 mt-0.5 w-40 bg-white border rounded shadow-lg z-50">
                                                <a href="/Settings/EditAdminDetails" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Edit Admin Details</a>
                                            </div>
                                        )}
                                    </div>
                                    <a href="/AdminDashboard" className="active:scale-95 inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800">
                                        Dashboard
                                    </a>
                                    <a href="/AdminLogin" onClick={logoutSession} className="active:scale-95 inline-flex items-center justify-center px-6 py-3 text-base font-bold text-black border-2 border-gray-900 rounded-xl hover:bg-gray-100">
                                        Logout
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

export default AdminHead
