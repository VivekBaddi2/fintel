'use client'
import BreadCrumb from '@/components/BreadCrumb'
import { motion } from 'framer-motion'
import React from 'react'

const page = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Transition properties
        >
            <div className='container my-8 w-[90vw] h-[80vh] mx-auto flex flex-col justify-between text-justify'>
                <div className="content mx-6">
                    <BreadCrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'About', href: '/AboutUs/whoweare' },
                        { label: 'Our Values' }
                    ]} />
                    <div className="heading">
                        <h1 className='text-3xl font-semibold'>We strive to build this long-term relationship with clients through our values:
                        </h1>
                    </div>
                    <div className="list h-fit p-8">
                        <ul className='flex gap-12'>
                            <div className="left">
                                <li>
                                    <h2 className="text-xl font-semibold">Honesty and integrity</h2>
                                    <p className='font-light'>Honesty and integrity in conduct, and in all our interactions, without being swayed by extraneous considerations.</p>
                                </li>
                                <li>
                                    <h2 className="text-xl font-semibold">Respect</h2>
                                    <p className='font-light'>We respect the inherent capabilities and potential in people and organizations. Our consultancy solutions are designed and customized to work with our clients rather than thrusting solutions upon them.</p>
                                </li>
                                <li>
                                    <h2 className="text-xl font-semibold">Quality</h2>
                                    <p className='font-light'>The cornerstone of our service delivery. Our promises are well-considered and realistic. Once committed, we ensure the highest quality standards for delivery.</p>
                                </li>
                            </div>
                            <div className="right">
                                <li>
                                    <h2 className="text-xl font-semibold">Professional Ethics</h2>
                                    <p className='font-light'>We are committed to maintaining the highest level of professional ethics in all our dealings and interactions both internally and externally.</p>
                                </li>
                                <li>
                                    <h2 className="text-xl font-semibold">Implementation</h2>
                                    <p className='font-light'>We go beyond advice and reports, working with the client from initialization to project completion.</p>
                                </li>
                                <li>
                                    <h2 className="text-xl font-semibold">Smart work</h2>
                                    <p className='font-light'>We believe in quality over quantity. We are adept at time management and focus on providing excellence in consultancy services.</p>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div className="content ">
                        <p className='mb-4 '>Our winning formula brings our mission and values into practice each day, resulting in more dedicated, responsive company open to new ideas, perspectives, and approaches.</p>
                        <div className='p-8 pt-0'>
                            <h2 className='text-xl font-semibold'>
                                We are driven by:
                            </h2>
                            <ul className='list-disc font-light'>
                                <li>Ethics : Self-regulated and disciplined Professionals.</li>
                                <li>Customer Delight : A commitment to exceed expectations.</li>
                                <li>Leadership : Setting standards in business processes.</li>
                                <li>Integrity : Being transparent and professional in all our transactions.</li>
                                <li>Passion : A Passion for Excellence.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default page