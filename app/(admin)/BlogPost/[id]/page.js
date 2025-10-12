"use client"
// import { useSearchParams } from 'next/navigation';
import { use, useEffect, useState } from 'react';

export default function BlogPost({ params }) {

    // const searchParams = useSearchParams();
    const blogId = use(params).id;
    console.log(blogId)
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!blogId) return; // Wait until the query param is available

        const fetchBlog = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/blogs/getBlogData', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ blogId }),
                });

                if (!response.ok) throw new Error('Failed to fetch blog data');
                const data = await response.json();
                setBlog(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [blogId]);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
    if (!blog) return <p className="text-center mt-10">No blog found.</p>;

    const updatedDate = new Date(blog.updatedAt).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <article className="w-[90vw] md:w-[80vw] mx-auto p-2">
            {/* Blog title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-4 mt-2">{blog.title}</h1>

            {/* Last updated date */}
            <p className="text-sm text-gray-500 mb-2">
                Last updated on <span className="font-medium">{updatedDate}</span>
            </p>

            {/* Blog content as plain text with preserved line breaks */}
            <div className="text-lg leading-relaxed whitespace-pre-line mb-6 text-justify">
                {blog.content}
            </div>

        </article>
    );
}
