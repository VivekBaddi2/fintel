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
            console.log('Fetched Blog data:', data);

            setTitle(data.title);
            setDescription(data.description);
            setContent(data.content);
        } catch (error) {
            console.error('Error while fetching PDF data:', error);
        }

    };

    useEffect(() => {
        if (blogId != null) {
            console.log('Blog ID:', blogId);
            fetchBlogData(blogId);
        }
    }, [blogId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = blogId;
        if (id != null) {
            console.log('Editing mode')
            // call /api/blogs/updateBlog
            const res = await fetch('/api/blogs/updateBlog', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, title, description, content }),
            });

            const data = await res.json();
            console.log(data);

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
            console.log(data);


            if (res.ok) {
                setSuccess("Blog added successfully");
                // setEditId(null);
                setTitle(""); setDescription(""); setContent("");
            } else setError(data.error || "Failed to add blog");
        }
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setError("");
    //     setSuccess("");

    //     if (!title || !description || !content) {
    //         setError("All fields are required");
    //         return;
    //     }

    //     try {
    //         if (editId) {
    //             const res = await fetch(`/api/blogs/${editId}`, {
    //                 method: "PUT",
    //                 headers: { "Content-Type": "application/json" },
    //                 body: JSON.stringify({ title, description, content }),
    //             });
    //             const data = await res.json();
    //             if (res.ok) {
    //                 setBlogs(blogs.map(b => b._id === editId ? data : b));
    //                 setSuccess("Blog updated successfully!");
    //                 setEditId(null);
    //                 setTitle(""); setDescription(""); setContent("");
    //             } else setError(data.error || "Failed to update blog");
    //         } else {
    //             const res = await fetch("/api/blogs", {
    //                 method: "POST",
    //                 headers: { "Content-Type": "application/json" },
    //                 body: JSON.stringify({ title, description, content }),
    //             });
    //             const data = await res.json();
    //             if (res.ok) {
    //                 setBlogs([data, ...blogs]);
    //                 setSuccess("Blog added successfully!");
    //                 setTitle(""); setDescription(""); setContent("");
    //             } else setError(data.error || "Failed to add blog");
    //         }
    //     } catch (err) {
    //         setError("Something went wrong");
    //         console.error(err);
    //     }
    // };



    if (loading) return <p className="text-center mt-24 text-gray-500">Loading...</p>;

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">Blog Editor</h1>

            {/* Add/Edit Blog Form */}
            <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">{blogId ? "Edit Blog" : "Add New Blog"}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="w-full p-3 border rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <div className="flex items-center space-x-4">
                        <button
                            type="submit"
                            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-500 transition"
                        >
                            {blogId ? "Update Blog" : "Add Blog"}
                        </button>
                        {error && <span className="text-red-500">{error}</span>}
                        {success && <span className="text-green-600">{success}</span>}
                    </div>
                </form>
            </div>

        </div>
    );
}
