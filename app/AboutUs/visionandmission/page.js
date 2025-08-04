import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'

const page = () => {
    return (
        <div className='container my-8 w-screen h-fit mx-auto '>
            <div className="content mx-6 h-full flex flex-col justify-center text-justify">
                <BreadCrumb items={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/AboutUs/whoweare' },
                    { label: 'Our Vision and Mission' }
                ]} />
                <div className="content-one mb-24  ">
                    <h1 className='text-3xl font-semibold mb-4'>Our Vision</h1>
                    <p className='text-justify'>To be a globally respected and accepted organization that provides best-of-breed business solutions leveraging on technology delivered by the best-in-class people resulting in maximum customer satisfaction & contributing to the productivity of Business & Social Systems through promotion of Indian Style of Management.</p>
                </div>

                <div className="content-two ">
                    <h1 className='text-3xl font-semibold mb-4'>Our Mission</h1>
                    <p className='text-justify'>
                        Fintel Solutions is committed in providing excellent customer service while maintaining the highest ethics. Our ultimate goal as a Management Consultant is to earn the lasting trust of our clients.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page