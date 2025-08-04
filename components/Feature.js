import React from 'react'
import { motion } from "framer-motion";

const Feature = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Transition properties
        >
            <div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 md:py-36 py-16 mx-auto">
                        <div className="text-center mb-14">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-6">
                                Our Services
                            </h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                From strategy to compliance, HR to payroll—our integrated services empower businesses to operate smoothly, efficiently, and with full assurance.
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {[
                                "Strategic Consulting",
                                "Assurance Service",
                                "Human Resource Service",
                                "Compliance Management",
                                "Payroll Service",
                                "MIS 360",
                            ].map((text, index) => (
                                <div className="p-2 sm:w-1/2 w-full" key={index}>
                                    <div className="bg-gray-100 rounded flex p-4 h-full items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="3"
                                            className="text-blue-500 w-6 h-6 flex-shrink-0 mr-4"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                            <path d="M22 4L12 14.01l-3-3" />
                                        </svg>
                                        <span className="title-font font-medium">{text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg cursor-pointer">
                            {/* This button will redirect to services page */}
                            Learn More
                        </button>
                    </div>
                </section>

            </div></motion.div>
    )
}

export default Feature