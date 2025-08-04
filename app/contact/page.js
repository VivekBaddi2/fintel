import React from 'react'

const page = () => {
    return (
        <div className='my-12'>
            <div className='mb-4'>
                <h1 className='text-3xl font-semibold text-center'>Reach Out to Fintel Solutions</h1>

                <p className='text-center text-md mt-4 text-gray-500'>Have questions or need guidance? Reach out to our team—we’re here to support your business every step of the way.</p>
            </div>
            <section className="text-gray-600 body-font relative w-[80vw] h-[80vh] mx-auto my-12">
                <div className="absolute inset-0 bg-gray-300 w-[80vw] h-[80vh]">
                    {/* <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="map"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sin!4v1754137220843!5m2!1sen!2sin!6m8!1m7!1s4zhYuvwkutK5h2buOcAynQ!2m2!1d15.3648350153096!2d75.1233128872171!3f59.01331416363016!4f18.381067946269553!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                    ></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.2150571231823!2d75.1233128872171!3d15.3648350153096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d0c5aaaaaaad%3A0x9a29af814ca1a803!2sFintel%20Solutions%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1754137281711!5m2!1sen!2sin" style={{ width: '80vw', height: '80vh' }}
                        allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="container px-14 py-24 mx-auto flex">
                    <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">CONTACT INFORMATION
                        </h2>
                        <p className="text-sm leading-relaxed  text-gray-500">
                            Telephone: +91 8088882088
                        </p>
                        <p className="text-sm leading-relaxed  text-gray-500">E-Mail: varma@fintel.in</p>
                        <p className="text-sm leading-relaxed  text-gray-500">Address: Second Floor, Biliangadi Complex Opp PC Jabins College Hubli - 580031, Karnataka.</p>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                            Submit
                        </button>
                        <div className='flex gap-8 justify-center'>
                            <p className="text-sm text-gray-500 mt-3 underline hover:text-blue-500 cursor-pointer">
                                Facebook
                            </p>
                            <p className="text-sm text-gray-500 mt-3 underline hover:text-blue-500 cursor-pointer">
                                Twitter (X)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default page