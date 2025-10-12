"use client"
// import { useSearchParams } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = ({ params }) => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState("");
    const [title, setTitle] = useState('');
    const [path, setPath] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // const searchParams = useSearchParams();
    const pdfId = use(params).id;

    // Check login
    useEffect(() => {
        const loggedIn = sessionStorage.getItem("adminLoggedIn");
        if (!loggedIn) window.location.href = "/AdminLogin";
    }, []);

    const fetchPdfData = async (pdfId) => {
        try {
            const res = await fetch('/api/pdfs/updatePdf', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pdfId }),
            });
            const data = await res.json();
            console.log(data)
            setTitle(data.title);
            setDescription(data.description);
            let filePath = data.path;
            let fileName = filePath.split('/').pop();
            setFileName(fileName);
        } catch (error) {
            console.error('Error while fetching PDF data:', error);
            toast.error("Failed to fetch PDF data ❌");
        }
    };

    useEffect(() => {
        if (pdfId != null) {
            fetchPdfData(pdfId);
        }
    }, [pdfId]);

    // Function to handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        if (!file && (pdfId === null || pdfId === 'null')) {
            toast.warn('Please select a PDF file.');
            setIsLoading(false);
            return;
        }

        const formData = new FormData();
        if (file) formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('pdfId', pdfId ?? 'null');

        try {
            const response = await fetch('/api/pdfs/uploadPdf', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                // Show success toast
                const successMsg = pdfId && pdfId !== 'null'
                    ? `PDF "${data.pdf.title}" updated successfully.`
                    : `PDF "${data.pdf.title}" uploaded successfully.`;
                toast.success(successMsg);

                // Reset form if new PDF
                if (!pdfId || pdfId === 'null') {
                    setFile(null);
                    setTitle('');
                    setDescription('');
                }

                if (data.pdf?.path) {
                    setPath(data.pdf.path);
                }
            } else {
                toast.error(data.error || 'Failed to upload or update PDF.');
            }
        } catch (error) {
            console.error('Upload error:', error);
            toast.error('An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className='w-[80vw] mx-auto px-2'>
                <h1 className='text-2xl font-bold my-4'>{pdfId != null ? "Update PDF File" : "Upload PDF File"}</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
                    <label htmlFor="uploadPDF" className='cursor-pointer bg-white backdrop-opacity-50 text-lg font-medium h-60 w-full border-2 border-dashed rounded-lg p-8 flex justify-center items-center'>
                        Upload your PDF file here
                    </label>
                    <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} name="uploadPDF" id="uploadPDF" className='hidden border rounded-xl p-2' />
                    {fileName != "" && <p>Selected file: {fileName}</p>}

                    <label htmlFor="pdfTitle" className='font-medium'>PDF Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        name="pdfTitle" id="pdfTitle" placeholder='Title' className='bg-white border rounded-lg p-2' required />

                    <label htmlFor="pdfDescription" className='font-medium'>PDF Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} name="pdfDescription" id="pdfDescription" placeholder='Description' className='bg-white border rounded-xl p-2' required></textarea>

                    <button type="submit" disabled={isLoading} className='active:scale-95 border rounded-lg w-fit px-4 py-3 mt-2 bg-gray-900 text-white font-medium cursor-pointer'>
                        {isLoading ? 'Updating...' : 'Update PDF'}
                    </button>
                </form>

                {path && (
                    <p className='mt-2 p-3'>The URL of uploaded file is:
                        <a href={path} target='_blank' className='text-gray-900 font-semibold underline'> Click here to access</a>
                    </p>
                )}
            </div>

            {/* Toast Container */}
            <ToastContainer position="top-right" autoClose={3000} />
        </>
    );
};

export default Page;
