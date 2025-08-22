'use client'
import React from 'react'
import { motion } from "framer-motion";


const AboutPageNav = () => {

    return (
        <div className='AboutPageNav bg-gray-50 w-full h-20 rounded-lg mb-8 flex items-center p-2 px-4'>
            <nav className='w-full h-full'>
                <ul className='list-none  flex gap-4 w-full h-full items-center'>
                    <motion.button whileTap={{ scale: 0.96 }} className=' h-[80%] w-1/6 bg-gray-900 rounded-lg text-white font-semibold flex items-center justify-center cursor-pointer hover:bg-gray-800'>
                        <li >About Us</li>
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.96 }} className=' h-[80%] w-1/6 bg-gray-900 rounded-lg text-white font-semibold flex items-center justify-center cursor-pointer hover:bg-gray-800'>
                        <li >Our Story</li>
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.96 }} className=' h-[80%] w-1/6 bg-gray-900 rounded-lg text-white font-semibold flex items-center justify-center cursor-pointer hover:bg-gray-800'>
                        <li >Our Strength</li>
                    </motion.button>
                    <motion.button whileTap={{ scale: 0.96 }} className=' h-[80%] w-1/6 bg-gray-900 rounded-lg text-white font-semibold flex items-center justify-center cursor-pointer hover:bg-gray-800'>
                        <li >Our Team</li>
                    </motion.button>
                </ul>
            </nav>
        </div >
    )
}

export default AboutPageNav