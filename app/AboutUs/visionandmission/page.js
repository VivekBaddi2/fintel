import React from 'react'

const page = () => {
    return (
        <div className='container my-8 w-screen h-[60vh] mx-auto  flex items-center'>
            <div className="content mx-6   h-full flex flex-col justify-center">
                <div className="content-one mb-32  ">
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