import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from './Header';

const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            {/* Hero Section with Background Image */}
            <section
                className="relative text-white min-h-[70vh] flex items-center bg-cover bg-center"
                style={{
                    backgroundImage: `url('/banner-4.png')`,
                }}
            >
                <Header />
                <div className="absolute inset-0 bg-black/50 z-0" />
                <div className="container mx-auto px-6 lg:px-20 relative z-10 py-24">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-extrabold leading-tight mb-4">
                            Unleashing Potential<br />With Innovative Business Solutions
                        </h1>
                        <p className="text-xl text-white/80 mb-8">
                            Transforming visions into reality: your success is our mission
                        </p>
                        <Link href="/contact">
                            <button className="bg-white text-[#1f2937] hover:bg-[#2563eb] hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                                Contact us today
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Value Cards Section */}
            <section className="bg-[#F5F4F4] py-16 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="backdrop-blur-md border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.4)] p-6 rounded-2xl shadow-md transition"
                    >
                        <div className="text-4xl mb-4 text-[#60a5fa]">📊</div>
                        <h2 className="text-2xl font-semibold text-[#1f2937] mb-2">Financial Consulting</h2>
                        <p className="text-[#4b5563]">
                            Our experts help streamline your finances, offering actionable insights to drive profitability.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="backdrop-blur-md border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.4)] p-6 rounded-2xl shadow-md transition"
                    >
                        <div className="text-4xl mb-4 text-[#60a5fa]">🛡️</div>
                        <h2 className="text-2xl font-semibold text-[#1f2937] mb-2">Compliance & Assurance</h2>
                        <p className="text-[#4b5563]">
                            Ensure smooth, worry-free operations with our end-to-end compliance management.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="backdrop-blur-md border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.4)] p-6 rounded-2xl shadow-md transition"
                    >
                        <div className="text-4xl mb-4 text-[#60a5fa]">📈</div>
                        <h2 className="text-2xl font-semibold text-[#1f2937] mb-2">HR & Payroll Services</h2>
                        <p className="text-[#4b5563]">
                            We handle your HR, payroll, and employee compliance—so you can focus on scaling.
                        </p>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default Hero;
