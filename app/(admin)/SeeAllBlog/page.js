"use client"
import React, { useEffect, useState } from 'react'

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

            // alert(data.message);

            // Refresh the blogs on the current page
            await fetchBlogs(); // Re-fetch PDFs after deletion
        } catch (err) {
            alert(err.message);
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
            <div className="pdfCardContainer w-full h-fit mt-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {
                    filteredBlogs.slice(prev, visible).map((blog) => (
                        <div key={blog._id} className="pdfCard h-[300px] bg-white border-1 shadow-md hover:scale-[101%] cursor-pointer rounded-xl border-gray-900 w-full p-4 flex flex-col gap-2">
                            <h3 title={blog.title} className="h-[15%] text-xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis">{blog.title}</h3>
                            <p title={blog.description} className="h-[55%] font-light text-justify text-ellipsis line-clamp-6 ">{blog.description}</p>
                            <div className="h-[20%] btnContainer mt-1 flex gap-4 items-center">
                                <a href={"/BlogEditing/?id=" + blog._id}>
                                    <button className="inline-flex items-center justify-center  px-2 md:py-2 h-12 md:h-10 lg:h-12 lg:text-[14px] text-[12px] font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800 cursor-pointer">Edit Post</button>
                                </a>
                                <a href={"/BlogPost/?id=" + blog._id} target="_blank">
                                    <button className="inline-flex items-center justify-center  px-2 md:py-2 h-12 md:h-10 lg:h-12 lg:text-[14px] text-[12px] font-bold text-black border-2 border-gray-900 rounded-xl hover:bg-gray-100 cursor-pointer">View Post</button>
                                </a>
                                <button onClick={() => deleteBlogBtn(blog._id)} className="h-10 md:h-10 lg:h-12 inline-flex items-center justify-center  px-2 md:py-2  lg:text-[14px] text-[12px] font-bold text-white border-2 bg-red-500 rounded-xl hover:bg-red-400 cursor-pointer">Delete</button>
                            </div>
                        </div>
                    ))
                }
            </div>
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