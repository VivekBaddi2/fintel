import React, { useState } from 'react';

const ComponentName = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            <section className="pt-12 h-fit bg-gray-50 sm:pt-16">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="px-6 text-lg text-gray-600 font-inter">
                            Smart email campaign builder, made for Developers
                        </h1>
                        <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                            Turn your visitors into profitable{' '}
                            <span className="relative inline-flex sm:inline">
                                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                                <span className="relative"> business </span>
                            </span>
                        </p>

                        <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                            <a
                                href="#"
                                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            >
                                Get in Touch
                            </a>


                        </div>

                        <p className="mt-8 text-base text-gray-500 font-inter">
                            60 Days free trial · No credit card required
                        </p>
                    </div>
                    <div className="pb-12">
                        <div className="relative">
                            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                            <div className="relative mx-auto">
                                <div className="lg:max-w-6xl lg:mx-auto">
                                    <img className="transform scale-90 rounded-2xl" src="/banner-8.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ComponentName;
