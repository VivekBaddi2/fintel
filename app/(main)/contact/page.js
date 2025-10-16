'use client'
import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import BreadCrumb from '@/components/BreadCrumb';

const ContactSection = () => {
    const [captchaValue, setCaptchaValue] = useState(null);
    const [statusMessage, setStatusMessage] = useState(null);
    const [statusType, setStatusType] = useState(null); // 'success' or 'error'
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const showStatusMessage = (message, type = 'success', duration = 4000) => {
        setStatusMessage(message);
        setStatusType(type);
        setTimeout(() => {
            setStatusMessage(null);
        }, duration);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;


        // Allow only alphabets and spaces
        if (/^[A-Za-z\s]*$/.test(name)) {

            if (!captchaValue) {
                showStatusMessage("Please complete the reCAPTCHA.", "error");
                return;
            }

            setIsSubmitting(true);

            try {
                // Verify captcha
                const captchaRes = await fetch("/api/recaptcha-verification", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token: captchaValue }),
                });

                const captchaData = await captchaRes.json();
                if (!captchaData.success) {
                    showStatusMessage("Captcha verification failed. Try again.", "error");
                    setIsSubmitting(false);
                    return;
                }

                // Send form data to backend
                const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, message }),
                });

                const data = await res.json();
                if (data.success) {
                    showStatusMessage("Your message has been sent successfully!", "success");
                    form.reset();
                    setCaptchaValue(null);
                } else {
                    showStatusMessage("Failed to send message. Please try again later.", "error");
                }
            } catch (error) {
                console.error("Error submitting contact form:", error);
                showStatusMessage("An error occurred. Please try again later.", "error");
            } finally {
                setIsSubmitting(false);
            }
        }
        else {
            showStatusMessage("Only alphabets and spaces are allowed in Name field", "error");
        }


    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <section className="text-gray-600 body-font relative w-[95] md:w-[90vw] px-1 md:px-12 mx-auto">
                <div className="container px-5 mx-auto">
                    <BreadCrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'Contact' },
                    ]} />

                    <div className="flex lg:flex-nowrap flex-wrap">

                        {/* <div className="lg:w-2/3 h-[200px] md:h-[350px] lg:h-[600px] w-[90vw] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
                                style={{ filter: 'contrast(1.2) opacity(0.7)' }}
                            ></iframe>
                        </div> */}

                        <div className='lg:w-1/3'>
                            <div className="lg:h-fit bg-gray-50 flex flex-col md:ml-auto w-full md:py-2 mt-8 md:mt-0">
                                <h2 className="text-gray-900 text-lg lg:text-2xl mb-1 font-bold title-font">Contact Us</h2>
                                <p className="leading-relaxed mb-5 text-gray-600">
                                    Reach out to us with any questions, ideas, or inquiries. We&apos;re here to help and happy to hear from you.
                                </p>

                                {/* Inline status message */}
                                {statusMessage && (
                                    <div className={`mb-4 p-3 rounded text-white ${statusType === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                                        {statusMessage}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="relative mb-4">
                                        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            required
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                            required
                                        />
                                    </div>
                                    <div className="relative mb-4">
                                        <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                            required
                                        ></textarea>
                                    </div>

                                    {/* reCAPTCHA widget */}
                                    <ReCAPTCHA
                                        sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                                        onChange={handleCaptchaChange}
                                        className='mb-2 -mt-2 '
                                    />

                                    <button
                                        type='submit'
                                        disabled={isSubmitting}
                                        className={`active:scale-95 cursor-pointer w-full text-white border-0 py-2 px-6 mt-1 rounded text-lg ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gray-900 hover:bg-gray-800'
                                            }`}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit'}
                                    </button>
                                </form>

                                <div className='flex gap-8 w-fit mx-auto mt-6'>
                                    <a href="https://www.facebook.com/fintelsolutions" className='text-gray-500 hover:text-gray-900'>Facebook</a>
                                    <a href="https://x.com/finteltweets" className='text-gray-500 hover:text-gray-900'>Twitter (X)</a>
                                    <a href="tel:+91 8088882088" className='text-gray-500 hover:text-gray-900'>Phone</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default ContactSection;
