import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdminHead from "@/components/AdminHead";
import AdminFoot from "@/components/AdminFoot";
import { Slide, ToastContainer } from 'react-toastify';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Fintel Solutions - Admin Login",
    description: "Admin Panel for managing PDFs and blogs.",
};

export default function AdminLoginLayout({ children }) {
    return (
        <html lang="en" className="h-full">
            <body
                className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 antialiased min-h-screen flex flex-col box-border m-0 p-0`}
            >
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
            </body>
        </html>
    );
}
