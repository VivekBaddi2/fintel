'use client'
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';


export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [pdfs, setPdfs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState("");

  // Check login
  useEffect(() => {
    const loggedIn = sessionStorage.getItem("adminLoggedIn");
    if (!loggedIn) window.location.href = "/AdminLogin";
  }, []);

  // Fetch blogs and pdfs
  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs/getBlogs");
      const data = await res.json();
      // Sort the data by the 'createdAt' timestamp in descending order
      const sortedBlogs = data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      // Take the latest 3 Blogs
      const latestThreeBlogs = sortedBlogs.slice(0, 3);
      setBlogs(latestThreeBlogs);

      setLoading(false);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const fetchPdfs = async () => {
    try {
      const res = await fetch("/api/pdfs/getPdf");
      const data = await res.json();
      // Sort the data by the 'createdAt' timestamp in descending order
      const sortedPdfs = data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      // Take the latest 3 PDFs
      const latestThreePdfs = sortedPdfs.slice(0, 3);
      setPdfs(latestThreePdfs);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  }

  useEffect(() => {
    fetchBlogs();
    fetchPdfs();
  }, []);

  // function to delete pdf when delete button is clicked
  const deletePDFBtn = async (id) => {
    console.log("deleteBtn clicked", id);
    if (!confirm("Are you sure you want to delete this PDF?")) return;

    try {
      const response = await fetch("/api/pdfs/deletePdf", {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })

      const data = await response.json();
      console.log(data.message);

      if (response.ok) {
        setSuccess("Successfully deleted");
        toast.success(data.message, {
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
        });
        await fetchPdfs(); // Re-fetch PDFs after deletion
      }

    } catch (error) {
      console.log("There is some error: ", error);
      toast.error(err.message);
    }

  }

  // function to delete blog when delete button is clicked
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

      toast.success(data.message, {
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
      });

      // Refresh the blogs on the current page
      await fetchBlogs(); // Re-fetch PDFs after deletion
    } catch (err) {
      toast.error(err.message);
    }
  }

  if (loading) return <p className="text-center mt-24 text-gray-500">Loading...</p>;

  return (
    <div className="w-[90vw] md:w-[80vw] mx-auto px-2 space-y-8 md:space-y-8">
      <h1 className="text-xl md:text-3xl font-bold text-gray-800">Admin Dashboard</h1>

      <div className="[@media(min-width:1024px)_and_(max-width:1366px)_and_(orientation:portrait)]:h-[450px] md:h-[30vh] lg:h-[50vh] w-full  rounded-xl bg-white shadow-md md:flex hidden">
        <div className="w-1/3">
          <img src={"/Fintel.png"} alt="fintel banner" className="h-full w-[360px] object-cover rounded-tl-xl rounded-bl-xl" />
        </div>
        <div className="w-2/3 p-8 flex flex-col justify-center items-center">
          <div>
            <img src="/quote-svg.svg" alt="Quote svg" className="h-[60px]" />
          </div>
          <p className="w-[90%] text-lg lg:text-2xl italic text-center">
            The fire you seek is already within you—every challenge is just fuel, every setback is just a spark. Rise, ignite your energy, and turn today into the day you move closer to your greatness
          </p>
        </div>
      </div>

      <div className="latestBlogsDiv mb-12">
        <div className="flex justify-between items-center">
          <h2 className="text-md md:text-2xl font-bold">Your latest blogs</h2>
          <a href="/SeeAllBlog">
            <p className="underline text-sm md:text-lg">See all</p>
          </a>
        </div>

        <div className="blogCardContainer h-fit w-full mt-2 flex gap-10 overflow-x-auto noScroll p-2">

          {/* Content */}
          {
            blogs.map((blog) => {
              return (
                <div
                  key={blog._id}
                  className="w-sm bg-white rounded-xl shadow-md border border-gray-400 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="p-5 flex flex-col h-full">
                    {/* Title with Icon */}
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-gray-700 flex-shrink-0"
                        id="document-layout-left"
                      >
                        <path
                          fill="#000000"
                          d="M13,8h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-8c-0.6,0-1,0.4-1,1S12.4,8,13,8z M21,10h-8c-0.6,0-1,0.4-1,1
          s0.4,1,1,1h8c0.6,0,1-0.4,1-1S21.6,10,21,10z M3,12h6c0.6,0,1-0.4,1-1V5c0-0.6-0.4-1-1-1H3C2.4,4,2,4.4,2,5v6
          C2,11.6,2.4,12,3,12z M21,14H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,14,21,14z M13,18H3c-0.6,0-1,0.4-1,1
          s0.4,1,1,1h10c0.6,0,1-0.4,1-1S13.6,18,13,18z"
                        ></path>
                      </svg>
                      <h2
                        title={blog.title}
                        className="text-lg font-semibold text-gray-900 line-clamp-2"
                      >
                        {blog.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p
                      title={blog.description}
                      className="mt-2 text-sm text-gray-600 line-clamp-3"
                    >
                      {blog.description}
                    </p>

                    {/* Buttons at bottom */}
                    <div className="mt-auto pt-4 flex items-center gap-3">
                      <a href={"/BlogEditing/" + blog._id} className="w-full sm:w-auto">
                        <button className="active:scale-95 flex-shrink-0 w-full md:h-full h-12 sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
                          Edit Post
                        </button>
                      </a>
                      <a href={"/BlogPost/" + blog._id} className="w-full sm:w-auto">
                        <button className="active:scale-95 flex-shrink-0 w-full md:h-full h-12 sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition cursor-pointer">
                          View Post
                        </button>
                      </a>
                      <button
                        onClick={() => deleteBlogBtn(blog._id)}
                        className="active:scale-95 w-full h-12 md:h-full  sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>

              )
            })
          }

        </div>
      </div>


      <div className="uploadedPdfsDiv mb-12">
        <div className="flex justify-between items-center">
          <h2 className="text-md md:text-2xl font-bold">Your uploaded PDFs</h2>
          <a href="/SeeAllPdf">
            <p className="underline text-sm md:text-lg">See all</p>
          </a>
        </div>

        <div className="pdfCardContainer h-fit w-full mt-2 flex gap-10 overflow-x-auto noScroll p-2 ">
          {
            pdfs.map((pdf) => {
              return (
                <div
                  key={pdf._id}
                  className="w-[380px] bg-white rounded-xl shadow-md border border-gray-400 hover:shadow-lg transition-shadow duration-300 flex flex-col"
                >
                  <div className="p-5 flex flex-col h-full">
                    {/* Title with Icon */}
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-gray-700 flex-shrink-0"
                        id="file-alt"
                      >
                        <path
                          fill="#000000"
                          d="M9,10h1a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm0,2a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,13.05,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Zm-3-3H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"
                        ></path>
                      </svg>
                      <h2
                        title={pdf.title}
                        className="text-lg font-semibold text-gray-900 line-clamp-2"
                      >
                        {pdf.title}
                      </h2>
                    </div>

                    {/* Description */}
                    <p
                      title={pdf.description}
                      className="mt-2 text-sm text-gray-600 line-clamp-3"
                    >
                      {pdf.description}
                    </p>

                    {/* Buttons at bottom */}
                    <div className="mt-auto pt-4 flex gap-3">
                      <a href={"/EditPdf/" + pdf._id} className="w-full sm:w-auto">
                        <button className="active:scale-95 flex-shrink-0 w-full h-12 md:h-full sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
                          Edit PDF
                        </button>
                      </a>
                      <a href={pdf.path} target="_blank" className="w-full sm:w-auto">
                        <button className="active:scale-95 flex-shrink-0 w-full h-12 md:h-full sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition cursor-pointer">
                          View PDF
                        </button>
                      </a>
                      <button
                        onClick={() => deletePDFBtn(pdf._id)}
                        className="active:scale-95 w-full h-12 md:h-full sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>


              )
            })
          }
        </div>
      </div>
    </div >
  );
}
