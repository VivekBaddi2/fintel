import AboutPageNav from '@/components/AboutPageNav'
import BreadCrumb from '@/components/BreadCrumb'
import React from 'react'

const page = () => {
    return (
        <div className='container my-8 w-screen  mx-auto'>
            <div className="content mx-6 ">
                <BreadCrumb items={[
                    { label: 'Home', href: '/' },
                    { label: 'About', href: '/AboutUs/whoweare' },
                    { label: 'Who We Are' }
                ]} />
                <AboutPageNav />
                <div className="content-one mb-8">
                    <h1 className='text-3xl font-semibold mb-4'>Welcome to Fintel Solutions</h1>
                    <p className='text-justify'>Discovering oneself can be a lifelong adventure. Exploring the ever unfolding new "you" is a fascinating experience. Our dream has been to look for new possibilities, new spaces, and new methodologies to understand people and organizational dynamics and dive deep into relationship spaces. Having worked as independent management consultants for 5 years, our hunger for new horizons made us push our boundaries. That gave birth to Fintel Solutions, a Private Limited Company headquartered at Hubli, comprising of people that we resonate with.</p>
                </div>

                <div className="content-two">
                    <h2 className='text-xl font-semibold mb-4'>Why Choose Us?</h2>
                    <p className='text-justify'>
                        Fintel Solutions is a multi-disciplinary consulting company, focused on providing the young & seasoned entrepreneurs a one stop customized solutions for their Taxation, Finance and Compliance Management queries.
                        <br /><br />

                        Fintel's team includes professionals, & experienced specialists of varied fields who have a sole objective to help you to concentrate on developing your business wherein we take care of your finance, taxation and compliance management. Fintel's delivery is based on thoroughly researched methodology which starts with understanding the needs of every client dynamics.
                        <br /><br />

                        In order to facilitate our clients to be the best in their respective fields, we utilize state of the art technology, services and solutions. While suggesting or implementing any new concept for a particular business, we foresee all the impacts of that concept on that specific business.
                        <br /><br />

                        Fintel provide cost-effective solutions to our clients to maximize their returns. Our versatile business model and unique delivery methodologies help us achieve better results and ensure that our clients get quality and timely solutions by keeping abreast with the latest trends in the industry.

                        <br /><br />
                        Fintel provides a collegial atmosphere in which all individuals are encouraged to learn, improve and excel and to become leaders in the professional, business and civic communities. We conduct our affairs to provide the financial strength and growth necessary to attract and keep the highest quality professionals and staff.
                        <br /><br />

                        At Fintel we strongly believe in promoting Indian Style of Management, symbolized by the values and Ethics, where we observe greater emphasis for the intangibles of life like Long term Relationships, Values & Ethics.

                    </p>
                </div>
            </div>
        </div>
    )
}

export default page