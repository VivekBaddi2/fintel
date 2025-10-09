"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  // Check login
  useEffect(() => {
    setLoading(false);
    const loggedIn = sessionStorage.getItem("adminLoggedIn");
    if (!loggedIn) window.location.href = "/AdminLogin";
  }, []);

  const searchParams = useSearchParams();
  const blogId = searchParams.get("id");

  const fetchBlogData = async (blogId) => {
    try {
      const res = await fetch(`/api/blogs/getBlogData`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ blogId }),
      });
      const data = await res.json();

      setTitle(data.title);
      setDescription(data.description);
      setContent(data.content);
    } catch (error) {
      console.error("Error while fetching blog data:", error);
      toast.error("Failed to fetch blog data");
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
      const res = await fetch("/api/blogs/updateBlog", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, title, description, content }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Blog updated successfully");
      } else toast.error(data.error || "Failed to update blog");
    } else {
      // call /api/blogs/createPost
      const res = await fetch("/api/blogs/createPost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, content }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Blog added successfully");
        setTitle("");
        setDescription("");
        setContent("");
      } else toast.error(data.error || "Failed to add blog");
    }
  };

  if (loading)
    return <p className="text-center mt-24 text-gray-500">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
      />

      <h1 className="text-3xl font-bold text-gray-800">Blog Editor</h1>

      {/* Add/Edit Blog Form */}
      <div className="bg-transparent rounded-lg ">
        <h2 className="text-xl font-semibold mb-4">
          {blogId ? "Edit Blog" : "Add New Blog"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="blogTitleInput" className="font-medium">
            Blog Title
          </label>
          <input
            type="text"
            id="blogTitleInput"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none bg-white focus:ring-2 focus:ring-gray-300"
          />

          <label htmlFor="blogDescriptionInput" className="font-medium">
            Blog Description
          </label>
          <textarea
            id="blogDescriptionInput"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 mt-2 border rounded-lg focus:outline-none bg-white focus:ring-2 focus:ring-gray-300"
          />

          <label htmlFor="blogContentInput" className="font-medium">
            Blog Content
          </label>
          <textarea
            id="blogContentInput"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 mt-2 border rounded-lg h-64 focus:outline-none bg-white focus:ring-2 focus:ring-gray-300"
          />

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="active:scale-95 bg-gray-900 text-white font-medium px-6 py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >
              {blogId ? "Update Blog" : "Add Blog"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
