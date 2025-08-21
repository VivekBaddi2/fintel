"use client";
import { useEffect, useState } from "react";
import { FaFilePdf } from "react-icons/fa";
import PdfForm from "../../components/PdfForm";

export default function PdfList() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    fetch("/api/get-pdfs")
      .then(res => res.json())
      .then(data => setPdfFiles(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-4xl font-extrabold mb-8 text-gray-800">
        📚 Infozone – Available PDFs
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {pdfFiles.map((pdf) => (
          <div
            key={pdf}
            onClick={() => setSelectedPdf(pdf)}
            className="flex items-center p-5 border border-gray-200 rounded-2xl shadow-sm bg-white 
                       hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer group"
          >
            <FaFilePdf className="text-red-600 text-5xl mr-5 group-hover:text-red-700 transition" />
            <div>
              <p className="text-lg font-semibold text-blue-600 group-hover:underline">
                {pdf}
              </p>
              <p className="text-gray-500 text-sm">
                Click to request this PDF via email
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedPdf && (
        <PdfForm pdfName={selectedPdf} onClose={() => setSelectedPdf(null)} />
      )}
    </div>
  );
}
