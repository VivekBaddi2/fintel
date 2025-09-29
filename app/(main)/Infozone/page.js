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
        <div className="flex mb-12">
          <input
            type="text"
            placeholder="Search PDFs..."
            className="w-96 border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-gray-900 focus:outline-none"
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
              className="h-[200px]  flex items-center p-5 border border-gray-200 rounded-2xl shadow-sm bg-white 
                       hover:shadow-lg hover:scale-105 transition-all cursor-pointer group"
            >
              <div className="h-full">
                <div className="flex h-full">
                  <FaFilePdf className="flex-shrink-0 scale-90 text-red-600 text-5xl mr-5 group-hover:text-red-700 transition " />
                  <div className="h-full flex flex-col justify-between">
                    <div className="flex flex-col gap-1.5">
                      <p title={pdf.title} className="flex items-center text-lg md:line-clamp-1 font-semibold text-gray-900 group-hover:underline">
                        {pdf.title}
                      </p>
                      <p className=" text-gray-500 line-clamp-4 text-ellipsis overflow-hidden">
                        {pdf.description}
                      </p>
                    </div>
                    <div className="h-fit flex items-center">
                      <p className="h-[20%] flex items-center text-gray-500 text-sm">
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
