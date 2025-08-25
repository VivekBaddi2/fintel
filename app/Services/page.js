import React from 'react';

const ServicesPage = () => {
    return (
        <section className="text-gray-600 body-font w-[90vw] mx-auto md:px-12">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-left w-full mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">WHAT DO WE OFFER?</h1>
                    <p className="mt-4 text-justify">
                        Fintel Solutions delivers a full range of Taxation, Compliance and Management Consultancy Services. We are first generation professionals with extensive skills and industry expertise, providing cost-effective financial solutions.

                        Our work doesn't end when an assignment ends. We help implement solutions and we follow up to see how the recommendations are working and what impact they're having. As a result, our clients are free to focus more time, energy, and resources on building their business.

                        We stay connected to our clients because we believe deeply in doing what's best for them — not just today, but throughout our relationship with them.
                    </p>
                </div>

                <div className="flex flex-wrap -m-4">
                    {[
                        {
                            title: 'Strategic Consulting',
                            description:
                                'Business strategy is a long term plan of action designed to achieve a particular goal or set of goals or objectives. We at Fintel assist you in tactically planning and matching your strengths with the available opportunities and beyond.',
                        },
                        {
                            title: 'Assurance Service',
                            description:
                                'Assurance has grown beyond the finance function and encompasses other functions like HR, legal etc. Fintel possesses the necessary proficiency to carry out complex audits and reviews related to HR, finance, legal.',
                        },
                        {
                            title: 'Human Resource Service',
                            description:
                                'The ability to attract, retain and nurture talent is increasingly becoming a source of competitive advantage for business. Accordingly, the HR objectives of any company need to align with the aspirations of employees as well as the business.',
                        },
                        {
                            title: 'Compliance Management',
                            description:
                                "Compliance's management is a critical component of the internal control process for any business and a prerequisite for assessing corporate governance standards. Management is thus a specialized responsibility.",
                        },
                        {
                            title: 'Payroll Service',
                            description:
                                'As a business owner one needs to know the real & accurate financial data of the business with zero distortions. We provide accounting management solutions so as to ensure the accounts reflect the true & correct position of the business.',
                        },
                        {
                            title: 'MIS 360',
                            description:
                                'A management information system (MIS) provides information needed to manage organizations efficiently by transforming data into useful information for better decision making.',
                        },
                    ].map((service, index) => (
                        <div key={index} className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                <div className="flex items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="w-5 h-5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                        </svg>
                                    </div>
                                    <h2 className="text-gray-900 text-lg title-font font-medium">{service.title}</h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-base">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPage;
