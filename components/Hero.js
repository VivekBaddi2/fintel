import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Transition properties
        >
            <div>
                <section className="text-gray-600 body-font bg-[#f9fafb]">
                    <div className="container w-[90vw] mx-auto flex px-5 md:py-44 py-16 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-16 md:mb-0">
                            <Image className="rounded-[1rem] shadow-[0_10px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:scale-[1.02]"
                                src="/hero-banner.jpg"
                                width={500}
                                height={500}
                                alt="Finance related picture"
                            />
                        </div>
                        <div className=" lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="text-[40px] font-extrabold sm:text-4xl mb-4 text-gray-900">
                                Comprehensive Business Solutions, Delivered with Precision
                            </h1>
                            <p className="text-[1.1rem] max-w-[550px] mb-8 leading-relaxed">
                                We provide end-to-end business support through strategic consulting, assurance, HR, compliance, payroll, and MIS 360 services. Our expert-driven approach ensures your operations run efficiently, allowing you to focus on growth while we manage the backbone of your business.
                            </p>
                            <div className="flex justify-center">
                                <Link href='/contact'>
                                    <button className=" bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl shadow-blue-400/30 cursor-pointer">
                                        Get in Touch
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </div >
        </motion.div >
    )
}

export default Hero