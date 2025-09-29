import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdminHead from "@/components/AdminHead";
import AdminFoot from "@/components/AdminFoot";
import { Slide, ToastContainer } from 'react-toastify';

// import Footer from "@/components/Footer";
// import Header from "@/components/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Fintel Solutions - Admin Panel",
    description: "Admin Panel for managing PDFs and blogs.",
};

// app/admin/layout.js


export default function AdminLayout({ children }) {
    return (
        <html lang="en" className="h-full">
            <head>
                <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.2.0/css/solid.css"></link>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 antialiased min-h-screen flex flex-col box-border m-0 p-0`}
            >
                <AdminHead />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Slide}
                />
                <main className="flex-1">{children}</main>
                <AdminFoot />
            </body>
        </html>
    );
}
