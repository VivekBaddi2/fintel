'use client'
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from "react";


export default function AdminDashboard() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const [editId, setEditId] = useState(null);

    // Check login
    useEffect(() => {
        setLoading(false);
        const loggedIn = sessionStorage.getItem("adminLoggedIn");
        if (!loggedIn) window.location.href = "/AdminLogin";
    }, []);

    const searchParams = useSearchParams();
    const blogId = searchParams.get('id');
    // console.log(blogId);

    const fetchBlogData = async (blogId) => {
        try {
            const res = await fetch(`/api/blogs/getBlogData`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ blogId }),
            });
            const data = await res.json();

            setTitle(data.title);
            setDescription(data.description);
            setContent(data.content);
        } catch (error) {
            console.error('Error while fetching PDF data:', error);
        }

    };

    useEffect(() => {
        if (blogId != null) {
            fetchBlogData(blogId);
        }
    }, [blogId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = blogId;
        if (id != null) {
            // call /api/blogs/updateBlog
            const res = await fetch('/api/blogs/updateBlog', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, title, description, content }),
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess("Blog updated successfully");
                // setEditId(null);
                // setTitle(""); setDescription(""); setContent("");
            } else setError(data.error || "Failed to update blog");
        }
        else {
            console.log('Creating mode')
            // call /api/blogs/createPost
            const res = await fetch('/api/blogs/createPost', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, description, content })
            });

            const data = await res.json();

            if (res.ok) {
                setSuccess("Blog added successfully");
                // setEditId(null);
                setTitle(""); setDescription(""); setContent("");
            } else setError(data.error || "Failed to add blog");
        }
    }


    if (loading) return <p className="text-center mt-24 text-gray-500">Loading...</p>;

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">Blog Editor</h1>

            {/* Add/Edit Blog Form */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{blogId ? "Edit Blog" : "Add New Blog"}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label htmlFor="blogTitleInput" className='font-medium'>Blog Title</label>
                    <input
                        type="text"
                        id="blogTitleInput"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    <label htmlFor="blogDescriptionInput" className='font-medium'>Blog Description</label>
                    <textarea
                        id='blogDescriptionInput'
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-3 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />

                    <label htmlFor="blogContentInput" className='font-medium'>Blog Content</label>
                    <textarea
                        id='blogContentInput'
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-3 mt-2 border rounded-lg h-64 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                    <div className="flex items-center space-x-4">
                        <button
                            type="submit"
                            className="bg-gray-900 text-white font-medium px-6 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
                        >
                            {blogId ? "Update Blog" : "Add Blog"}
                        </button>
                    </div>
                </form>
                {
                    error &&
                    <span className='text-red-600'>
                        {error}
                    </span>
                }
                {
                    success &&
                    <span className="text-green-600">{success}</span>
                }
            </div>



            {/* Play ground code below, discard later */}

            <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-400 hover:shadow-lg transition-shadow duration-300">
                <div className="p-5">
                    {/* Title with Icon */}
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="36px" id="document-layout-left">
                            <path fill="#000000" d="M13,8h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1S12.4,8,13,8z M21,10h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S21.6,10,21,10z M3,12h6c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1H3C2.4,4,2,4.4,2,5v6C2,11.6,2.4,12,3,12z M21,14H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,14,21,14z M13,18H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S13.6,18,13,18z"></path>
                        </svg>
                        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
                            Ullamco aliquip exercitation ullamc...
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                        Pariatur nisi duis labore nulla pariatur eiusmod qui do fugiat.
                        Ullamco aliquip exercitation ullamco labore. Reprehenderit pariatur esse
                        minim id ullamco incididunt eu non aute incididunt venia...
                    </p>

                    {/* Action buttons */}
                    <div className="mt-4 flex items-center gap-3">
                        <button className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
                            Edit Post
                        </button>
                        <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition">
                            View Post
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition">
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden border border-gray-400 hover:shadow-lg transition-shadow duration-300">
                <div className="p-5">
                    {/* Title with Icon */}
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36px" id="file-alt">
                            <path fill="#000000" d="M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z">
                            </path>
                        </svg>
                        <h2 className="text-lg font-semibold text-gray-900 line-clamp-1">
                            Ullamco aliquip exercitation ullamc...
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                        Pariatur nisi duis labore nulla pariatur eiusmod qui do fugiat.
                        Ullamco aliquip exercitation ullamco labore. Reprehenderit pariatur esse
                        minim id ullamco incididunt eu non aute incididunt venia...
                    </p>

                    {/* Action buttons */}
                    <div className="mt-4 flex items-center gap-3">
                        <button className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition">
                            Edit PDF
                        </button>
                        <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition">
                            View PDF
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition">
                            Delete
                        </button>
                    </div>
                </div>
            </div>






        </div >
    );
}
