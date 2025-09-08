'use client'
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [editId, setEditId] = useState(null);

  // Check login
  useEffect(() => {
    const loggedIn = sessionStorage.getItem("adminLoggedIn");
    if (!loggedIn) window.location.href = "/admin";
  }, []);

  // Fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        const data = await res.json();
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setSuccess("");

    if (!title || !description || !content) {
      setError("All fields are required");
      return;
    }

    try {
      if (editId) {
        const res = await fetch(`/api/blogs/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description, content }),
        });
        const data = await res.json();
        if (res.ok) {
          setBlogs(blogs.map(b => b._id === editId ? data : b));
          setSuccess("Blog updated successfully!");
          setEditId(null);
          setTitle(""); setDescription(""); setContent("");
        } else setError(data.error || "Failed to update blog");
      } else {
        const res = await fetch("/api/blogs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title, description, content }),
        });
        const data = await res.json();
        if (res.ok) {
          setBlogs([data, ...blogs]);
          setSuccess("Blog added successfully!");
          setTitle(""); setDescription(""); setContent("");
        } else setError(data.error || "Failed to add blog");
      }
    } catch (err) {
      setError("Something went wrong");
      console.error(err);
    }
  };

  const handleEdit = (blog) => {
    setEditId(blog._id);
    setTitle(blog.title);
    setDescription(blog.description);
    setContent(blog.content);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this blog?")) return;
    try {
      await fetch(`/api/blogs/${id}`, { method: "DELETE" });
      setBlogs(blogs.filter(b => b._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p className="text-center mt-24 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

      {/* Add/Edit Blog Form */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{editId ? "Edit Blog" : "Add New Blog"}</h2>
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
              {editId ? "Update Blog" : "Add Blog"}
            </button>
            {error && <span className="text-red-500">{error}</span>}
            {success && <span className="text-green-600">{success}</span>}
          </div>
        </form>
      </div>

      {/* Blogs Table */}
      <div className="bg-white shadow-md rounded-lg p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">All Blogs</h2>
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700">Title</th>
              <th className="px-4 py-2 text-left text-gray-700">Description</th>
              <th className="px-4 py-2 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map(blog => (
              <tr key={blog._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{blog.title}</td>
                <td className="px-4 py-2">{blog.description}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-300 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {blogs.length === 0 && <p className="text-gray-500 mt-4">No blogs found.</p>}
      </div>
    </div>
  );
}
