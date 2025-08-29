'use client'
import React from 'react';
import { motion } from "framer-motion";

const ContactSection = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Transition properties
        >
            <section className="text-gray-600 body-font relative w-[90vw] md:px-12 mx-auto">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder="0"
                            title="map"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.214458023007!2d75.12078947512131!3d15.364867485217095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d0c5aaaaaaad%3A0x9a29af814ca1a803!2sFintel%20Solutions%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1756099613010!5m2!1sen!2sin"
                            style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                        ></iframe>

                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Second Floor, Biliangadi Complex Opp PC Jabins College Hubli - 580031, Karnataka.</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">varma@fintel.in</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+91 8088882088</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/3 md:w-1/2 bg-gray-50 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Reach out to us with any questions, ideas, or inquiries. We're here to help and happy to hear from you.
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 cursor-pointer rounded text-lg">
                            Submit
                        </button>
                        <div className='flex gap-8 w-fit mx-auto mt-8'>
                            <a href="https://www.facebook.com/fintelsolutions" className='text-gray-500 hover:text-gray-900'>Facebook</a>
                            <a href="https://x.com/finteltweets" className='text-gray-500 hover:text-gray-900'>Twitter (X)</a>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ContactSection;
