import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Transition properties
        >
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 md:py-44 py-16 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-16 md:mb-0">
                            {/* <img
                            className="object-cover object-center rounded"
                            alt="hero"
                            src="/assets/hero-banner.jpg"
                        /> */}
                            <Image className='object-cover object-center rounded'
                                src="/hero-banner.jpg"
                                width={500}
                                height={500}
                                alt="Finance related picture"
                            />
                        </div>
                        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                                Comprehensive Business Solutions, Delivered with Precision
                            </h1>
                            <p className="mb-8 leading-relaxed">
                                We provide end-to-end business support through strategic consulting, assurance, HR, compliance, payroll, and MIS 360 services. Our expert-driven approach ensures your operations run efficiently, allowing you to focus on growth while we manage the backbone of your business.
                            </p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg cursor-pointer">
                                    Get in Touch
                                </button>
                                {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                Button
                            </button> */}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </motion.div>
    )
}

export default Hero