'use client'
import BreadCrumb from '@/components/BreadCrumb'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const page = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
            whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
            transition={{ duration: 0.8, ease: "easeOut" }} // Transition properties
        >
            <div className='container my-8 w-[90vw] mx-auto flex flex-col gap-16 justify-between text-justify'>
                <div className='content mx-6'>
                    <BreadCrumb items={[
                        { label: 'Home', href: '/' },
                        { label: 'About', href: '/AboutUs/whoweare' },
                        { label: 'Our Inspiration' }
                    ]} />
                    <div className="content-one flex gap-8 mb-8">
                        <div className="left">
                            <div className="image">
                                <Image className='object-cover object-center rounded-lg border border-black'
                                    src="https://dummyimage.com/600x800"
                                    width={600}
                                    height={800}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="right">
                            <div className="text">
                                <div className="heading mb-2">
                                    <h1 className='text-3xl font-semibold mb-4'>Heading</h1>
                                    <h2 className='text-xl'>Sub-Heading</h2>
                                </div>
                                <div className="pargraph">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit commodi minima excepturi voluptate suscipit placeat. Quae dolores amet aspernatur corporis ipsam nemo repellat commodi voluptates, unde blanditiis explicabo, fugiat impedit similique eveniet quo?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-two flex gap-8">
                        <div className="right">
                            <div className="text">
                                <div className="heading mb-2">
                                    <h1 className='text-3xl font-semibold mb-4'>Heading</h1>
                                    <h2 className='text-xl'>Sub-Heading</h2>
                                </div>
                                <div className="pargraph">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit commodi minima excepturi voluptate suscipit placeat. Quae dolores amet aspernatur corporis ipsam nemo repellat commodi voluptates, unde blanditiis explicabo, fugiat impedit similique eveniet quo?</p>
                                </div>
                            </div>
                        </div>
                        <div className="left">
                            <div className="image">
                                <Image className='object-cover object-center rounded-lg border border-black'
                                    src="https://dummyimage.com/600x800"
                                    width={600}
                                    height={800}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default page