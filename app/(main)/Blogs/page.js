'use client'
import BreadCrumb from "@/components/BreadCrumb";
import { useState, useEffect } from "react";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(6); // posts per page
  const [prev, setPrev] = useState(0);
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
      <BreadCrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Blog' },
      ]} />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Your Trusted Source for Insights</h1>
      <p className="text-lg md:text-lg font-light text-gray-900 text-center mb-8">Expert Knowledge. Real Impact.</p>

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
        {filteredBlogs.slice(prev, visible).map((blog) => (
          // <div
          //   key={blog._id}
          //   className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300"
          // >
          //   <h2
          //     className="text-xl md:text-2xl font-semibold text-gray-900 cursor-pointer hover:text-gray-700"
          //     onClick={() => setExpanded(expanded === blog._id ? null : blog._id)}
          //   >
          //     {blog.title}
          //   </h2>

          //   <p className="mt-2 text-gray-600 italic">{blog.description}</p>

          //   {/* {expanded === blog._id && ( */}
          //   {/* <div className="mt-4 text-gray-800 space-y-3">
          //     <p>{blog.content}</p>
          //     <p className="text-sm text-gray-400">
          //       Created: {new Date(blog.createdAt).toLocaleDateString()}
          //     </p>
          //   </div> */}
          //   {/* )} */}

          //   <a href={"/UBlogPost?id=" + blog._id}>
          //     <button
          //       className="mt-4 text-blue-600 hover:underline text-sm cursor-pointer"
          //     // onClick={() => setExpanded(expanded === blog._id ? null : blog._id)}
          //     >
          //       {/* {expanded === blog._id ? "Collapse" : "Read More"} */}
          //       Read More
          //     </button>
          //   </a>
          // </div>
          <div key={blog._id} className="p-4 ">
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
                <h2 className="text-gray-900 text-lg title-font font-medium">{blog.title}</h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">{blog.description}</p>
              </div>
              <div className='mt-4'>
                <a href={`/UBlogPost/?id=${blog._id}`}>
                  <button className='bg-gray-900 px-4 py-2 text-white font-semibold cursor-pointer rounded-lg hover:bg-gray-800'>Read more</button>
                </a>
              </div>
            </div>
          </div>
        ))}
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

      {/* No Results */}
      {filteredBlogs.length === 0 && (
        <p className="text-center mt-8 text-gray-500">No blogs found.</p>
      )}
    </div>
  );
}
