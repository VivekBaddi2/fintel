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
    <div className="w-[100vw] md:w-[90vw] md:mx-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-0">
      <div className="lg:ml-8">
        <BreadCrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]} />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Your Trusted Source for Insights</h1>
      <p className=" text-gray-500 mb-8 text-center">Expert Knowledge. Real Impact.</p>

      {/* Search Input */}
      <div className="flex items-center self-center mb-12 bg-white w-fit shadow-md border-gray-300 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search m-4" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
        <input
          type="text"
          placeholder="Search Blogs..."
          className="w-64 md:w-84 bg-white rounded-lg px-2 py-3 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* No Results */}
      {filteredBlogs.length === 0 && (
        <p className="text-center mt-8 text-gray-500">No blogs found.</p>
      )}

      {/* Blog Grid */}
      <div className="w-fit place-items-center md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mx-auto">

        {filteredBlogs.slice(prev, visible).map((blog) => (
          <div key={blog._id} className="w-[90vw] h-full md:w-full bg-white flex flex-col justify-around  border border-gray-200 shadow-md transform hover:scale-105 hover:shadow-lg transition rounded-xl p-6">
            <div className="flex items-center mb-4 ">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 flex-shrink-0" id="document-layout-left">
                <path fill="#000000" d="M13,8h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1S12.4,8,13,8z M21,10h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S21.6,10,21,10z M3,12h6c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1H3C2.4,4,2,4.4,2,5v6C2,11.6,2.4,12,3,12z M21,14H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,14,21,14z M13,18H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S13.6,18,13,18z"></path>
              </svg>
              <h2 title={blog.title} className="ml-3 text-md font-bold md:text-lg md:font-semibold text-gray-900 line-clamp-2">
                {blog.title}
              </h2>
            </div>
            <p className="text-gray-600 mb-4  line-clamp-3">
              {blog.description}
            </p>
            <a href={`/UBlogPost/?id=${blog._id}`}>
              <button className="active:scale-95 cursor-pointer w-fit bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition ">
                Read more
              </button>
            </a>
          </div>
        ))}
      </div>


      <div className="p-2 flex gap-4 mt-8 justify-center">
        <button
          onClick={() => {
            // Decrease visible by 6 but not below 6
            const newVisible = Math.max(6, visible - 6);
            setVisible(newVisible);
            setPrev(newVisible - 6);
          }}
          disabled={visible <= 6} // Disable on first page
          className="active:scale-95 bg-white px-4 py-2 border border-gray-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
          className="active:scale-95 bg-white px-4 py-2 border border-gray-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Next
        </button>
      </div>


    </div>
  );
}
