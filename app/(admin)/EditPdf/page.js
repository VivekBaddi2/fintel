"use client"
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = (req) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [path, setPath] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);


    const searchParams = useSearchParams();
    const pdfId = searchParams.get('id');
    console.log(file)

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

            setTitle(data.title);
            setDescription(data.description);
        } catch (error) {
            console.error('Error while fetching PDF data:', error);
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
        setMessage('');
        setIsLoading(true);

        // Validate: require a file only when creating a new PDF
        if (!file && (pdfId === null || pdfId === 'null')) {
            setMessage('Please select a PDF file.');
            setIsLoading(false);
            return;
        }

        const formData = new FormData();
        if (file) formData.append('file', file);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('pdfId', pdfId ?? 'null'); // Always send "null" or an actual ID

        try {
            const response = await fetch('/api/pdfs/uploadPdf', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                // Different messages for create vs update
                setMessage(
                    pdfId && pdfId !== 'null'
                        ? `PDF "${data.pdf.title}" updated successfully.`
                        : `PDF "${data.pdf.title}" uploaded successfully.`
                );

                // If creating a new PDF, reset form fields completely
                if (!pdfId || pdfId === 'null') {
                    setFile(null);
                    setTitle('');
                    setDescription('');
                }

                // Optionally update the displayed path or preview
                if (data.pdf?.path) {
                    setPath(data.pdf.path);
                }
            } else {
                setMessage(data.error || 'Failed to upload or update PDF.');
            }
        } catch (error) {
            console.error('Upload error:', error);
            setMessage('An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <>
            <div className='w-[80vw] mx-auto px-2'>
                <h1 className='text-2xl font-bold my-4'>{pdfId != null ? "Update PDF File" : "Upload PDf File"}</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-2'>

                    <label htmlFor="uploadPDF" className='cursor-pointer bg-white backdrop-opacity-50 text-lg font-medium h-60 w-full border-2 border-dashed rounded-lg p-8 flex justify-center items-center'>Upload your PDF file here</label>
                    <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} name="uploadPDF" id="uploadPDF" className='hidden border rounded-xl p-2' />
                    {file != null ? <p>Selected file is: {file.name} </p> : ''}

                    <label htmlFor="pdfTitle" className='font-medium'>Pdf Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}
                        name="pdfTitle" id="pdfTitle" placeholder='Title' className='bg-white border rounded-lg p-2' required />

                    <label htmlFor="pdfDescription" className='font-medium'>Pdf Description</label>
                    {/* <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} name="pdfDescription" id="pdfDescription" placeholder='Description' className='border rounded-xl p-2' required /> */}
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} name="pdfDescription" id="pdfDescription" placeholder='Description' className='bg-white border rounded-xl p-2' required ></textarea>
                    <button type="submit" disabled={isLoading} className='active:scale-95 border rounded-lg w-fit px-4 py-3 mt-2 bg-gray-900 text-white font-medium cursor-pointer'>{isLoading ? 'Uploading...' : 'Upload PDF'}</button>

                </form >
                {message && (
                    <p className={`mt-4 p-3 ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                        {message}
                    </p>
                )
                }
                {
                    path && (<>

                        <p className={`mt-2 p-3`}>The URL of uploaded file is:
                            <a href={path} target='_blank' className='text-gray-900 font-semibold underline'> Click here to access</a>
                        </p>

                    </>)
                }
            </div >

        </>
    )
}

export default page