import React from 'react'
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Transition properties
        >
            <div>
                <section className="bg-[#F5F4F4] py-8 px-5 text-center text-gray-600 body-font">
                    <div className="container w-[90vw] px-5 md:py-12 py-8 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xl sm:text-2xl text-blue-500 font-semibold mb-2 tracking-wide title-font">
                                Driven by Expertise
                            </h2>
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 title-font">
                                Your Trusted Partner in Taxation, Finance & Compliance
                            </h1>
                            <p className="max-w-3xl mx-auto md:text-[1.1rem] leading-7 text-gray-600 lg:w-2/3 text-base">
                                At Fintel Solutions, we specialize in delivering personalized, technology-driven consulting services in finance, taxation, compliance, and more. With a team of seasoned professionals, we help entrepreneurs focus on business growth while we manage their regulatory and financial responsibilities with care and precision.
                            </p>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="bg-gray-50 border-l-4 border-blue-500 rounded-xl p-6 text-left shadow-sm hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 transition duration-300 ease-in-out xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-opacity-60">
                                <h2 className="text-xl font-bold text-gray-800 mb-2 sm:text-xl title-font">Who We Are</h2>
                                <p className=" text-gray-600 leading-relaxed text-base mb-4">
                                    Fintel Solutions is a Hubli-based consulting firm founded by passionate professionals to transform businesses through people-centric, dynamic strategies.
                                </p>
                                <a className="text-blue-600 font-semibold inline-flex items-center transition-transform duration-200 hover:translate-x-1" href="#">
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            <div className="bg-gray-50 border-l-4 border-blue-500 rounded-xl p-6 text-left shadow-sm hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 transition duration-300 ease-in-out xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-opacity-60">
                                <h2 className="text-xl font-bold text-gray-800 mb-2 sm:text-xl title-font">Our Vision & Mission</h2>
                                <p className=" text-gray-600 leading-relaxed text-base mb-4">
                                    Fintel Solutions strives to be a trusted, tech-driven consulting firm, delivering ethical, value-based solutions that boost productivity and build lasting client relationships.
                                </p>
                                <a className="text-blue-600 font-semibold inline-flex items-center transition-transform duration-200 hover:translate-x-1" href="#">
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            <div className="bg-gray-50 border-l-4 border-blue-500 rounded-xl p-6 text-left shadow-sm hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 transition duration-300 ease-in-out xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-opacity-60">
                                <h2 className="text-xl font-bold text-gray-800 mb-2 sm:text-xl title-font">Our Values</h2>
                                <p className=" text-gray-600 leading-relaxed text-base mb-4">
                                    Fintel Solutions builds lasting partnerships through integrity, respect, and quality—delivering ethical, practical solutions with a strong commitment to excellence and client satisfaction.
                                </p>
                                <a className="text-blue-600 font-semibold inline-flex items-center transition-transform duration-200 hover:translate-x-1" href="#">
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>

                            <div className="bg-gray-50 border-l-4 border-blue-500 rounded-xl p-6 text-left shadow-sm hover:-translate-y-1 hover:shadow-lg hover:bg-blue-50 transition duration-300 ease-in-out xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-opacity-60">
                                <h2 className="text-xl font-bold text-gray-800 mb-2 sm:text-xl title-font">Our Inspiration</h2>
                                <p className=" text-gray-600 leading-relaxed text-base mb-4">
                                    Inspired by da Vinci’s diverse learning and Newton’s relentless questioning, we embrace curiosity, cross-disciplinary thinking, and innovation to shape forward-thinking business solutions.
                                </p>
                                <a className="text-blue-600 font-semibold inline-flex items-center transition-transform duration-200 hover:translate-x-1" href="#">
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* <div className="flex flex-wrap">
                        {["Shooting Stars", "The Catalyzer", "Neptune", "Melanchole"].map((title, i) => (
                            <div
                                key={i}
                                className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60"
                            >
                                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{title}</h2>
                                <p className="leading-relaxed text-base mb-4">
                                    Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison
                                    bulbche.
                                </p>
                                <a className="text-blue-500 inline-flex items-center" href="#">
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div> */}
                        {/* <button className="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
                        Button
                    </button> */}
                    </div>
                </section>


            </div>
        </motion.div>
    )
}

export default About