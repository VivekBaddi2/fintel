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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="ml-16">
        <BreadCrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]} />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Your Trusted Source for Insights</h1>
      <p className=" text-gray-500 mb-8 text-center">Expert Knowledge. Real Impact.</p>

      {/* Search Input */}
      <div className="flex mb-12 justify-center">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-96 border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-gray-900 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {/* No Results */}
      {filteredBlogs.length === 0 && (
        <p className="text-center mt-8 text-gray-500">No blogs found.</p>
      )}

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">

        {filteredBlogs.slice(prev, visible).map((blog) => (
          // <div key={blog._id} className="p-4 ">
          //   <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          //     <div className="flex items-center mb-3 h-[20%]">
          //       <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-black text-white flex-shrink-0">
          //         <svg
          //           fill="none"
          //           stroke="currentColor"
          //           strokeLinecap="round"
          //           strokeLinejoin="round"
          //           strokeWidth="2"
          //           className="w-5 h-5"
          //           viewBox="0 0 24 24"
          //         >
          //           <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          //         </svg>
          //       </div>
          //       <h2 title={blog.title} className="text-gray-900 text-lg title-font font-medium overflow-hidden whitespace-nowrap text-ellipsis">{blog.title}</h2>
          //     </div>
          //     <div className="flex-grow h-[60%]">
          //       <p className="leading-relaxed text-base overflow-hidden text-ellipsis line-clamp-6 ">{blog.description}</p>
          //     </div>
          //     <div className='mt-4 h-[20%]'>
          //       <a href={`/UBlogPost/?id=${blog._id}`}>
          //         <button className='bg-gray-900 px-4 py-2 text-white font-semibold cursor-pointer rounded-lg hover:bg-gray-800'>Read more</button>
          //       </a>
          //     </div>
          //   </div>
          // </div>
          <div key={blog._id} className="bg-white flex flex-col justify-around  border border-gray-200 shadow-md transform hover:scale-105 hover:shadow-lg transition rounded-xl p-6">
            <div className="flex items-center mb-4 ">
              <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-6 h-6 text-gray-700 flex-shrink-0" id="document-layout-left">
                <path fill="#000000" d="M13,8h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1S12.4,8,13,8z M21,10h-8c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1S21.6,10,21,10z M3,12h6c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1H3C2.4,4,2,4.4,2,5v6C2,11.6,2.4,12,3,12z M21,14H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,14,21,14z M13,18H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h10c0.6,0,1-0.4,1-1S13.6,18,13,18z"></path>
              </svg>
              <h2 title={blog.title} className="ml-3 text-lg font-semibold text-gray-900 line-clamp-1">
                {blog.title}
              </h2>
            </div>
            <p className="text-gray-600 mb-4  line-clamp-3">
              {blog.description}
            </p>
            <a href={`/UBlogPost/?id=${blog._id}`}>
              <button className="w-fit bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition ">
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
          className="bg-white px-4 py-2 border border-gray-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
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
          className="bg-white px-4 py-2 border border-gray-500 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Next
        </button>
      </div>


    </div>
  );
}
