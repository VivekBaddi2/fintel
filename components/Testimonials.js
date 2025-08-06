import React from 'react'
import { motion } from "framer-motion";
import './Testimonials.css'

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Transition properties
        >
            <div>
                <section className="testimonials-section text-gray-600 body-font">
                    <div className="container w-[90vw] px-5 md:py-36 py-16 mx-auto">
                        <div className="text-center mb-14">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-6">
                                Testimonials
                            </h1>
                            <p className="sub-heading text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                                Hear what our clients have to say about their experience with Fintel Solutions and our expert-driven approach.
                            </p>
                        </div>
                        <div className="mx-auto w-fit flex flex-wrap -m-12 mt-8">
                            <div className="testimonial-card lg:w-[380px] lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                    <img
                                        alt="testimonial"
                                        className="testimonial-avatar w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                        src="https://dummyimage.com/302x302"
                                    />
                                    <p className="testimonial-text leading-relaxed">
                                        Fintel Solutions has been instrumental in streamlining our compliance process. Their team is professional, responsive, and truly understands startups. We trust them completely with our financial operations.
                                    </p>
                                    <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                    <h2 className="testimonial-name text-gray-900 font-medium title-font tracking-wider text-sm">Ravi Sharma
                                    </h2>
                                    <p className="testimonial-role text-gray-500">Founder, StartupNest</p>
                                </div>
                            </div>
                            <div className="testimonial-card lg:w-[380px] lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                    <img
                                        alt="testimonial"
                                        className="testimonial-avatar w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                        src="https://dummyimage.com/300x300"
                                    />
                                    <p className="testimonial-text leading-relaxed">
                                        Working with Fintel has been a game-changer. Their customized financial strategies and deep insights helped us scale efficiently while staying fully compliant. Highly recommend their services.
                                    </p>
                                    <span className="testimonial-name inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                    <h2 className="testimonial-name text-gray-900 font-medium title-font tracking-wider text-sm">Neha Rao
                                    </h2>
                                    <p className="testimonial-role text-gray-500">Director, BloomWell Enterprises
                                    </p>
                                </div>
                            </div>
                            <div className="testimonial-card lg:w-[380px] lg:mb-0 p-4">
                                <div className="h-full text-center">
                                    <img
                                        alt="testimonial"
                                        className="testimonial-avatar w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                                        src="https://dummyimage.com/305x305"
                                    />
                                    <p className="testimonial-text leading-relaxed">
                                        Exceptional service and unmatched dedication! Fintel’s team goes beyond consulting—they partner with you. Their ethical approach and strategic guidance brought immense value to our business journey.
                                    </p>
                                    <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4"></span>
                                    <h2 className="testimonial-name text-gray-900 font-medium title-font tracking-wider text-sm">Arjun Menon
                                    </h2>
                                    <p className="testimonial-role text-gray-500">CEO, Quantix Technologies
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </motion.div>
    )
}

export default Testimonials