"use client"
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [visible, setVisible] = useState(6); // posts per page
    const [prev, setPrev] = useState(0);

    // Check login
    useEffect(() => {
        const loggedIn = sessionStorage.getItem("adminLoggedIn");
        if (!loggedIn) window.location.href = "/AdminLogin";
    }, []);
    // function to delete pdf when delete button is clicked
    const deleteBlogBtn = async (id) => {
        if (!confirm("Are you sure you want to delete this blog?")) return;

        try {
            const res = await fetch(`/api/blogs/deleteBlogPost`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            });

            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Failed to delete blog");

            toast.success(data.message,
                {
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                }
            );

            // Refresh the blogs on the current page
            await fetchBlogs(); // Re-fetch PDFs after deletion
        } catch (err) {
            toast.error(err.message);
        }
    }


    // Fetch blogs 
    const fetchBlogs = async () => {
        try {
            const res = await fetch("/api/blogs/getBlogs");
            const data = await res.json();
            // Sort the data by the 'createdAt' timestamp in descending order
            const sortedBlogs = data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
            setBlogs(sortedBlogs);

            setLoading(false);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Filter Pdfs by search
    const filteredBlogs = blogs.filter(
        (blog) =>
            blog.title.toLowerCase().includes(search.toLowerCase()) ||
            blog.description.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p className="text-center mt-24 text-gray-500">Loading...</p>;


    return (
        <section className='w-[90vw] md:w-[80vw] min-h-[100vh] mx-auto p-2'>
            <h1 className='text-3xl p-2 mb-4 font-semibold'>Your uploaded blogs </h1>
            {/* Search Input */}
            <div className="flex mb-8 p-2">
                <input
                    type="text"
                    placeholder="Search Blog Post..."
                    className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {blogs.length == 0 ? <p className='text-lg font-light p-3'>No blogs available</p> :
                // Blog container
                <div className="pdfCardContainer w-full h-fit mt-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                    {
                        filteredBlogs.slice(prev, visible).map((blog) => (
                            <div
                                key={blog._id}
                                className="w-sm bg-white rounded-xl shadow-md border border-gray-400 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                            >
                                <div className="p-5 flex flex-col h-full">
                                    {/* Title with Icon */}
                                    <div className="flex items-center gap-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            enableBackground="new 0 0 24 24"
                                            viewBox="0 0 24 24"
                                            className="w-6 h-6 text-gray-700 flex-shrink-0"
                                            id="document-layout-left"
                                        >
                                            <path
                                                fill="#000000"
                                                d="M13,8h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1S12.4,8,13,8z M21,10h-8c-0.6,0-1,0.4-1,1
          s0.4,1,1,1h8c0.6,0,1-0.4,1-1S21.6,10,21,10z M3,12h6c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1H3C2.4,4,2,4.4,2,5v6
          C2,11.6,2.4,12,3,12z M21,14H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,14,21,14z M13,18H3c-0.6,0-1,0.4-1,1
          s0.4,1,1,1h10c0.6,0,1-0.4,1-1S13.6,18,13,18z"
                                            ></path>
                                        </svg>
                                        <h2
                                            title={blog.title}
                                            className="text-lg font-semibold text-gray-900 line-clamp-1"
                                        >
                                            {blog.title}
                                        </h2>
                                    </div>

                                    {/* Description */}
                                    <p
                                        title={blog.description}
                                        className="mt-2 text-sm text-gray-600 line-clamp-3"
                                    >
                                        {blog.description}
                                    </p>

                                    {/* Buttons at bottom */}
                                    <div className="mt-auto pt-4 flex items-center gap-3">
                                        <a href={"/BlogEditing/?id=" + blog._id} className="w-full sm:w-auto">
                                            <button className="flex-shrink-0 w-full md:h-full h-12 sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
                                                Edit Post
                                            </button>
                                        </a>
                                        <a href={"/BlogPost/?id=" + blog._id} className="w-full sm:w-auto">
                                            <button className="flex-shrink-0 w-full md:h-full h-12 sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition cursor-pointer">
                                                View Post
                                            </button>
                                        </a>
                                        <button
                                            onClick={() => deleteBlogBtn(blog._id)}
                                            className=" w-full h-12 md:h-full  sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            <div className="p-2 flex gap-4 mt-4">
                <button
                    onClick={() => {
                        // Decrease visible by 6 but not below 6
                        const newVisible = Math.max(6, visible - 6);
                        setVisible(newVisible);
                        setPrev(newVisible - 6);
                    }}
                    disabled={visible <= 6} // Disable on first page
                    className="bg-white px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    Previous
                </button>

                <button
                    onClick={() => {
                        const newVisible = visible + 6;
                        setPrev(visible);
                        setVisible(newVisible);
                    }}
                    disabled={visible >= blogs.length} // Disable on last page
                    className="bg-white px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    Next
                </button>
            </div>

        </section>
    )
}

export default page