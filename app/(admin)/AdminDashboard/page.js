'use client'
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [pdfs, setPdfs] = useState([]);
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
        await fetchPdfs(); // Re-fetch PDFs after deletion
      }

    } catch (error) {
      console.log("There is some error: ", error);
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

      // alert(data.message);

      // Refresh the blogs on the current page
      await fetchBlogs(); // Re-fetch PDFs after deletion
    } catch (err) {
      alert(err.message);
    }
  }

  if (loading) return <p className="text-center mt-24 text-gray-500">Loading...</p>;

  return (
    <div className="w-[90vw] md:w-[80vw] mx-auto p-2 space-y-10">
      <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

      <div className="h-[50vh] w-full  rounded-xl bg-white shadow-md md:flex hidden">
        <div className="w-1/3">
          <img src={"/FintelAdminBanner.png"} alt="fintel banner" className="h-full w-[360px] object-cover rounded-tl-xl rounded-bl-xl" />
        </div>
        <div className="w-2/3 p-8 flex flex-col justify-center items-center">
          <div>
            <img src="/quote-svg.svg" alt="Quote svg" className="h-[60px]" />
          </div>
          <p className="w-[90%] text-2xl italic text-center">
            The fire you seek is already within you—every challenge is just fuel, every setback is just a spark. Rise, ignite your energy, and turn today into the day you move closer to your greatness
          </p>
        </div>
      </div>

      <div className="latestBlogsDiv">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">Your latest blogs</h2>
          <a href="/SeeAllBlog">
            <p className="underline text-sm md:text-md">See all</p>
          </a>
        </div>

        <div className="blogCardContainer h-fit w-full mt-2 flex gap-10  overflow-x-auto noScroll p-2 ">
          {
            blogs.map((blog) => {
              return (
                <div key={blog._id} className="blogCard h-[230px] md:h-[300px] w-[300px] md:w-[370px] flex-shrink-0 bg-white border-1 shadow-md hover:scale-[101%] cursor-pointer rounded-xl border-gray-900  p-4 flex flex-col gap-2">
                  <h3 title={blog.title} className="h-[15%] text-xl font-semibold overflow-hidden whitespace-nowrap text-ellipsis">{blog.title}</h3>
                  <p title={blog.description} className="h-[55%] font-light text-justify text-ellipsis line-clamp-4">{blog.description}</p>
                  <div className="h-[20%] btnContainer mt-3 flex gap-4 items-center">
                    <a href={"/BlogEditing/?id=" + blog._id}>
                      <button className="h-10 md:h-10 lg:h-12 lg:text-[14px] text-[12px]  inline-flex items-center justify-center px-4 py-2 text-base font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800 cursor-pointer">Edit Post</button>
                    </a>
                    <a href={"/BlogPost/?id=" + blog._id}>
                      <button className="h-10 md:h-10 lg:h-12 lg:text-[14px] text-[12px]  inline-flex items-center justify-center px-4 py-2 text-base font-bold text-black border-2 border-gray-900 rounded-xl hover:bg-gray-100 cursor-pointer">View Post</button>
                    </a>
                    <button onClick={() => deleteBlogBtn(blog._id)} className="h-10 md:h-10 lg:h-12 lg:text-[14px] text-[12px] inline-flex items-center justify-center px-4 py-2 font-bold text-white border-2 bg-red-500 rounded-xl hover:bg-red-400 cursor-pointer">Delete</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>


      <div className="uploadedPdfsDiv">
        <div className="flex justify-between items-center">
          <h2 className="text-xl md:text-2xl font-bold">Your uploaded PDFs</h2>
          <a href="/SeeAllPdf">
            <p className="underline text-sm md:text-md">See all</p>
          </a>
        </div>

        <div className="pdfCardContainer h-fit w-full mt-2 flex gap-10  overflow-x-auto noScroll p-2 ">
          {
            pdfs.map((pdf) => {
              return (
                <div key={pdf._id} className="pdfCard h-[230px] md:h-[300px] w-[300px] md:w-[370px] flex-shrink-0 bg-white border-1 shadow-md hover:scale-[101%] cursor-pointer rounded-xl border-gray-900 p-4 flex flex-col gap-2">
                  <h3 title={pdf.title} className="h-[15%] text-xl font-semibold  overflow-hidden text-ellipsis whitespace-nowrap">{pdf.title}</h3>
                  <p title={pdf.description} className="h-[55%] font-light text-justify text-ellipsis line-clamp-4 ">{pdf.description}</p>
                  <div className="btnContainer h-[20%] mt-3 flex gap-4 items-center ">
                    <a href={"/EditPdf?id=" + pdf._id}>
                      <button className="h-10 md:h-10 lg:h-12 lg:text-[14px] text-[12px] inline-flex items-center justify-center px-4 py-2 font-bold text-white bg-gray-900 rounded-xl hover:bg-gray-800 cursor-pointer">Edit PDF</button>
                    </a>
                    <a href={pdf.path} target="_blank">
                      <button className="h-10 md:h-10 lg:h-12 lg:text-[14px] text-[12px] inline-flex items-center justify-center px-4 py-2 font-bold text-black border-2 border-gray-900 rounded-xl hover:bg-gray-100 cursor-pointer">View PDF</button>
                    </a>
                    <button onClick={() => deletePDFBtn(pdf._id)} className="h-10 md:h-10 lg:h-12 lg:text-[14px] text-[12px] inline-flex items-center justify-center px-4 py-2 font-bold text-white border-2 bg-red-500 rounded-xl hover:bg-red-400 cursor-pointer">Delete</button>

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
