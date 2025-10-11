"use client";
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";
import PdfForm from "@/components/PdfForm";
import BreadCrumb from "@/components/BreadCrumb";

export default function PdfList() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [pdfData, setPdfData] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    // Get pdf data from database
    fetch("/api/pdfs/getPdf")
      .then(res => res.json())
      .then(data => setPdfData(data))
      .catch(err => console.error(err));

    // Get actual pdf file from file storage
    fetch("/api/get-pdfs")
      .then(res => res.json())
      .then(data => setPdfFiles(data))
      .catch(err => console.error(err));
  }, []);

  console.log(pdfFiles)
  console.log(pdfData)

  // Filter PDFs by search
  const filteredPdfs = pdfData.filter(
    (pdf) =>
      pdf.title.toLowerCase().includes(search.toLowerCase()) ||
      pdf.description.toLowerCase().includes(search.toLowerCase())
  );

  const findPdf = (clickedPdf) => {
    let pdfName = clickedPdf.path.split("/").pop();
    console.log("Pdf Name:", pdfName)


    pdfFiles.forEach(pdf => {
      // const str = pdfPath.substr(pdfName)
      if (pdf == pdfName) {
        console.log(pdf)
        console.log("true")
        setSelectedPdf(pdf)
        return 0;
      }
    });
    return 0;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial state (invisible and slightly down)
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and normal position when in view
      transition={{ duration: 0.8, ease: "easeOut" }} // Transition properties
    >
      <div className="w-[90vw] mx-auto my-8 md:px-20">
        <BreadCrumb items={[
          { label: 'Home', href: '/' },
          { label: 'Infozone' },
        ]} />
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          Infozone – Available PDFs
        </h2>

        {/* Search Input */}
        <div className="flex items-center mb-12 bg-white w-fit shadow-md border-gray-300 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search m-4" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            type="text"
            placeholder="Search PDFs..."
            className="w-64 md:w-84 bg-white rounded-lg px-2 py-3 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* No Results */}
        {filteredPdfs.length === 0 && (
          <p className="mt-8 text-gray-500">No PDFs found.</p>
        )}

        <div className="grid gap-4 lg:grid-cols-2">
          {filteredPdfs.map((pdf) => (
            <div
              key={pdf._id}
              onClick={() => findPdf(pdf)}
              className="h-[150px] flex items-center p-5 border border-gray-200 rounded-2xl shadow-sm bg-white 
             hover:shadow-lg hover:scale-105 transition-all cursor-pointer group overflow-hidden"
            >
              <div className="h-full w-full">
                <div className="flex h-full">
                  <FaFilePdf className="flex-shrink-0 scale-90 text-red-600 text-5xl mr-5 group-hover:text-red-700 transition" />
                  <div className="h-full flex flex-col justify-between overflow-hidden">
                    <div className="flex flex-col gap-1.5 overflow-hidden">
                      {/* Title with ellipsis */}
                      <p
                        title={pdf.title}
                        className="text-lg font-semibold text-gray-900 group-hover:underline  line-clamp-2"
                      >
                        {pdf.title}
                      </p>

                      {/* Description with 3-4 line clamp */}
                      <p className="text-gray-500 text-sm line-clamp-3 sm:line-clamp-4 overflow-hidden text-ellipsis">
                        {pdf.description}
                      </p>
                    </div>
                    <div className="h-fit flex items-center">
                      <p className="text-gray-900 text-sm">
                        Click to request this PDF via email
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))}
        </div>

        {console.log(selectedPdf)}
        {selectedPdf && (
          <PdfForm pdfName={selectedPdf} onClose={() => setSelectedPdf(null)} />
        )}
      </div>
    </motion.div>
  );
}
