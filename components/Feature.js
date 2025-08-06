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
                <section className="bg-[#F5F4F4] py-8 px-5 text-center">
                    <div className="container w-[90vw] px-5 md:py-24 py-16 mx-auto">
                        <div className="text-center mb-14">
                            <h1 className="text-4xl font-extrabold text-gray-800 mb-2 sm:text-3xl text-center title-font ">
                                Our Services
                            </h1>
                            <p className="max-w-xl mx-auto mb-10 text-[1.1rem] text-gray-600 text-base leading-relaxed xl:w-2/4 lg:w-3/4">
                                From strategy to compliance, HR to payroll—our integrated services empower businesses to operate smoothly, efficiently, and with full assurance.
                            </p>
                        </div>
                        <div className=" flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            {[
                                "Strategic Consulting",
                                "Assurance Service",
                                "Human Resource Service",
                                "Compliance Management",
                                "Payroll Service",
                                "MIS 360",
                            ].map((text, index) => (
                                <div className="p-2 sm:w-1/2 w-full" key={index}>
                                    <div className="bg-gray-100 border px-6 py-5 rounded-[12px] text-[1.1rem] font-semibold text-blue-900 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-[0_10px_20px_rgba(30,64,175,0.15)] hover:bg-indigo-50 cursor-pointer flex p-4 h-full items-center">
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
                        <button className="inline-block bg-blue-500 text-white px-7 py-3 rounded-full font-semibold no-underline transition-all duration-300 ease-in-out  hover:scale-105 mx-auto mt-16 border-0 focus:outline-none hover:bg-blue-600  text-lg cursor-pointer">
                            {/* This button will redirect to services page */}
                            Learn More
                        </button>
                    </div>
                </section>

            </div></motion.div>
    )
}

export default Feature