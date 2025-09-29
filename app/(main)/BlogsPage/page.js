import React from 'react'

export default function BlogPage() {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            {/* Navbar */}
            <div className="flex justify-center mb-12">
                <div className="flex gap-4 bg-white shadow-md rounded-full p-2">
                    <button className="px-6 py-2 rounded-full text-gray-600 hover:bg-gray-100">
                        Home
                    </button>
                    <button className="px-6 py-2 rounded-full bg-gray-900 text-white">
                        Blog
                    </button>
                </div>
            </div>

            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-900">
                    Your Trusted Source for Insights
                </h1>
                <p className="text-gray-500 mt-2">
                    Expert Knowledge. Real Impact.
                </p>
            </div>

            {/* Search */}
            <div className="flex justify-center mb-12">
                <input
                    type="text"
                    placeholder="Search blogs..."
                    className="w-96 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-gray-900 focus:outline-none"
                />
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
                <div className="bg-white flex flex-col justify-around  border border-gray-200 shadow-md transform hover:scale-105 hover:shadow-lg transition rounded-xl p-6">
                    <div className="flex items-center mb-4 ">
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 flex-shrink-0" id="document-layout-left">
                            <path fill="#000000" d="M13,8h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1S12.4,8,13,8z M21,10h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S21.6,10,21,10z M3,12h6c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1H3C2.4,4,2,4.4,2,5v6C2,11.6,2.4,12,3,12z M21,14H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,14,21,14z M13,18H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S13.6,18,13,18z"></path>
                        </svg>
                        <h2 className="ml-3 text-lg font-semibold text-gray-900 line-clamp-1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, quisquam?
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-4  line-clamp-3">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum a ipsum qui laboriosam maiores! Est ipsa ipsum iure odio nostrum exercitationem quibusdam autem. Facere laborum repellendus nesciunt vel! Hic non architecto corporis. Eaque et ut corporis officiis, iste dicta neque, tenetur voluptas ipsum rerum voluptate.
                    </p>

                    <button className="w-fit bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition ">
                        Read more
                    </button>


                </div>


            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-4 mt-12">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition">
                    Previous
                </button>
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition">
                    Next
                </button>
            </div>
        </div >
    );
}

