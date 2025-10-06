"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

    const [pdfs, setPdfs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [visible, setVisible] = useState(6); // posts per page
    const [prev, setPrev] = useState(0);
    const [deleted, setDeleted] = useState(false);

    const router = useRouter();

    // Check login
    useEffect(() => {
        const loggedIn = sessionStorage.getItem("adminLoggedIn");
        if (!loggedIn) window.location.href = "/AdminLogin";
    }, []);
    // function to delete pdf when delete button is clicked
    const deleteBtn = async (id) => {
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
                // setSuccess("Successfully deleted");
                // router.refresh();
                // setDeleted(true);
                toast.success(data.message, {
                    autoClose: 5000,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
                await fetchPdfs(); // Re-fetch PDFs after deletion

            }
            console.log(deleted)


        } catch (error) {
            toast.error(error.message);
            console.log("There is some error: ", error);
        }

    }

    const fetchPdfs = async () => {
        try {
            const res = await fetch("/api/pdfs/getPdf");
            const data = await res.json();
            // Sort the data by the 'createdAt' timestamp in descending order
            const sortedPdfs = data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
            // Take the latest 3 PDFs
            // const latestThreePdfs = sortedPdfs.slice(0, 3);
            // console.log(latestThreePdfs);
            setPdfs(sortedPdfs);
            setLoading(false);
        } catch (err) {
            console.error("Error fetching blogs:", err);
        }
    }

    useEffect(() => {
        fetchPdfs();
    }, []);

    // Filter Pdfs by search
    const filteredPdfs = pdfs.filter(
        (pdf) =>
            pdf.title.toLowerCase().includes(search.toLowerCase()) ||
            pdf.description.toLowerCase().includes(search.toLowerCase())
    );

    if (loading) return <p className="text-center mt-24 text-gray-500">Loading...</p>;


    return (
        <section className='w-[90vw] md:w-[80vw] min-h-[100vh] mx-auto p-2'>
            <h1 className='text-3xl p-2 mb-4 font-semibold'>Your uploaded PDFs</h1>
            {/* Search Input */}
            <div className="flex mb-8 p-2">
                <input
                    type="text"
                    placeholder="Search PDF..."
                    className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* PDF container */}
            {pdfs.length == 0 ?
                <p className='font-light text-lg p-3'>No PDFs to display</p>
                : <div className="pdfCardContainer w-full h-fit mt-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                    {
                        filteredPdfs.slice(prev, visible).map((pdf) => (
                            <div
                                key={pdf._id}
                                className="w-full bg-white rounded-xl shadow-md border border-gray-400 hover:shadow-lg transition-shadow duration-300 flex flex-col"
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
                                            className="text-lg font-semibold text-gray-900 line-clamp-1"
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
                                        <a href={"/EditPdf?id=" + pdf._id} className="w-full sm:w-auto">
                                            <button className="flex-shrink-0 w-full h-12 md:h-full sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition cursor-pointer">
                                                Edit PDF
                                            </button>
                                        </a>
                                        <a href={pdf.path} target="_blank" className="w-full sm:w-auto">
                                            <button className="flex-shrink-0 w-full h-12 md:h-full sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-100 transition cursor-pointer">
                                                View PDF
                                            </button>
                                        </a>
                                        <button
                                            onClick={() => deleteBtn(pdf._id)}
                                            className="w-full h-12 md:h-full sm:w-auto px-3 py-1 md:px-4 md:py-2 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>}


            {/* Page Navigation */}
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
                    disabled={visible >= pdfs.length} // Disable on last page
                    className="bg-white px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                    Next
                </button>
            </div>

        </section>
    )
}

export default page