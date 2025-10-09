import Image from 'next/image';
import React from 'react';

const ComponentName = () => {

    return (
        <>
            <section className="pt-8 h-fit bg-gray-50 sm:pt-12">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">

                        <h1 className=" text-3xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                            Your Partner in Finance and {' '}
                            <span className="relative inline-flex sm:inline">
                                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-20 w-full h-full absolute inset-0"></span>
                                <span className="relative"> Compliance </span>
                            </span>
                        </h1>
                        <p className="px-6 mt-8 text-md md:text-lg text-gray-600 font-inter">
                            Empowering Entrepreneurs with Clarity & Confidence
                        </p>

                        <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9 mb-4">
                            <a
                                href="/contact"
                                className="active:scale-95 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-800 "
                            >
                                Get in Touch
                            </a>


                        </div>

                    </div>
                    <div className="pb-12">
                        <div className="relative">
                            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
                            <div className="mt-8 relative mx-auto">
                                <div className="relative lg:max-w-6xl lg:mx-auto h-[260px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
                                    <Image
                                        src="/banner-8.webp"
                                        alt="Hero banner"
                                        fill
                                        priority
                                        fetchPriority='high'
                                        className="object-cover rounded-2xl"
                                        sizes="(max-width: 640px) 100vw,
                                                (max-width: 1024px) 90vw,
                                                (max-width: 1280px) 80vw,
                                                70vw"
                                    />
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
