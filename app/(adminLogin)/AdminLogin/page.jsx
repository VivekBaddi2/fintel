// components/AdminLoginCard.jsx or app/login/page.jsx
'use client'
import React, { useState } from 'react';
import { User, Eye } from 'lucide-react'; // Using Lucide icons for a clean look
import { useRouter } from 'next/navigation';

const AdminLoginCard = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });
            const data = await res.json();

            if (res.ok && data.success) {
                sessionStorage.setItem("adminLoggedIn", "true");
                sessionStorage.setItem("username", username);
                router.push("/AdminDashboard");
            } else {
                setError(data.error || "Invalid username or password");
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        // Outer container for the full page, mimicking the purple background from the design
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
                <img src="/fintel-logo.png" className='w-70 mb-8 ' alt="Fintel Logo" />

                {/* Background shape elements (for the "futuristic" corporate feel) */}
                <div className="absolute top-10 left-10 text-white opacity-20 text-4xl transform rotate-45">+ +</div>
                <div className="absolute bottom-10 right-10 text-white opacity-20 text-4xl transform -rotate-45">+ +</div>

                {/* The central white card */}
                <div className="bg-white rounded-2xl shadow-2xl md:w-[70%] w-full max-w-4xl flex flex-col lg:flex-row overflow-hidden h-fit lg:min-h-[500px]">

                    {/* === LEFT SIDE: Illustration/Visuals === */}
                    <div className="hidden lg:w-1/2 p-8 lg:flex items-center justify-center bg-white border-r border-gray-200 relative">

                        {/* Mockup for the illustration (Replace this div with your actual SVG/Image component) */}
                        <div className="w-full max-w-sm h-full max-h-80 flex items-center justify-center">
                            {/* In a real application, you'd import your illustration SVG/PNG here. 
              For this Tailwind mockup, we'll use an abstract placeholder.
            */}
                            <div className="relative w-full h-full">
                                {/* <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg"></div> */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* <p className="text-xl font-semibold text-indigo-700">Corporate Illustration Here</p> */}
                                    <img src="/admin_login_illustration.jpg" alt="Login Illustration" />
                                </div>
                                {/* Visual elements similar to the illustration image */}
                                <div className="absolute top-1/4 left-5 w-4 h-4 bg-black rounded-full"></div>
                                {/* <div className="absolute bottom-1/4 right-5 w-10 h-2 bg-black transform skew-x-12"></div> */}
                            </div>
                        </div>
                    </div>

                    {/* === RIGHT SIDE: Login Form === */}
                    <div className="lg:w-1/2 p-10 flex flex-col justify-center">
                        <h2 className="text-xl font-semibold text-gray-700 mb-8">Login as Admin </h2>

                        <form onSubmit={handleLogin} className="space-y-6">
                            {/* Username Field */}
                            <div className="relative">
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    placeholder="Username"
                                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg transition duration-150 text-base"
                                />
                                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                            </div>

                            {/* Password Field */}
                            <div className="relative">
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                    className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg transition duration-150 text-base"
                                />
                                <Eye onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-gray-900 text-white font-bold text-lg rounded-lg shadow-md hover:bg-gray-800 transition duration-200 focus:outline-none focus:ring-4 focus:ring-purple-300"
                            >
                                {loading ? "Logging in..." : "LOGIN"}
                            </button>
                        </form>
                        {error && <p className="text-red-500 text-center mt-4">{error}</p>}


                        {/* Home Link */}
                        <div className="mt-8 text-center">
                            <a href='/' className="text-sm text-gray-600 hover:text-gray-800 hover:underline cursor-pointer">
                                Get back to home page
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLoginCard;