'use client'
import { useState, useEffect } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(6); // posts per page

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        // Sort newest first
        setBlogs(data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center mt-20 text-gray-500">Loading blogs...</p>;

  // Filter blogs by search
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Our Blogs</h1>

      {/* Search Input */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Blog Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredBlogs.slice(0, visible).map((blog) => (
          <div
            key={blog._id}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2
              className="text-xl md:text-2xl font-semibold text-gray-900 cursor-pointer hover:text-gray-700"
              onClick={() => setExpanded(expanded === blog._id ? null : blog._id)}
            >
              {blog.title}
            </h2>

            <p className="mt-2 text-gray-600 italic">{blog.description}</p>

            {expanded === blog._id && (
              <div className="mt-4 text-gray-800 space-y-3">
                <p>{blog.content}</p>
                <p className="text-sm text-gray-400">
                  Created: {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
            )}

            <button
              className="mt-4 text-blue-600 hover:underline text-sm"
              onClick={() => setExpanded(expanded === blog._id ? null : blog._id)}
            >
              {expanded === blog._id ? "Collapse" : "Read More"}
            </button>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visible < filteredBlogs.length && (
        <div className="flex justify-center mt-8">
          <button
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            onClick={() => setVisible(visible + 6)}
          >
            Load More
          </button>
        </div>
      )}

      {/* No Results */}
      {filteredBlogs.length === 0 && (
        <p className="text-center mt-8 text-gray-500">No blogs found.</p>
      )}
    </div>
  );
}
