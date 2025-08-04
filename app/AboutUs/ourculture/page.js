import BreadCrumb from '@/components/BreadCrumb'
import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <div className='container my-8 w-screen h-[60vh] mx-auto  flex items-center'>
            <div className="content mx-6 h-full flex flex-col justify-center">
                <BreadCrumb items={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/AboutUs/whoweare' },
                    { label: 'Our Culture' }
                ]} />
                <div className="content-one mb-24">
                    <h1 className='text-3xl font-semibold mb-4'>Our Culture</h1>
                    <p className='text-justify'>Fintel believes in placing its clients' needs front and center at all times, hires the best professionals and invests continually in their personal and professional development and believes in adhering to a set of values that are core to everything we do.
                    </p>
                </div>

                <div className="content-two ">
                    <h1 className='text-3xl font-semibold mb-4'>Our Thought</h1>
                    <p className='text-justify'>
                        Life is all about simplicities and these are what makes life colorful and livable. So in whatever you do, never ignore a little help, a kind gesture, an innocent smile and a shoulder to cry on. They maybe small but they sure mean a lot
                    </p>
                    <p className='italic font-semibold text-lg text-blue-500 mt-2'>" Peace Cyril "</p>
                </div>
            </div>
        </div>
    )
}

export default page