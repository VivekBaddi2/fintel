'use client'
import React, { useState, useEffect } from 'react'

const page = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const checkLogin = () => {
        const loggedIn = sessionStorage.getItem("adminLoggedIn");
        if (!loggedIn) window.location.href = "/AdminLogin";
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); // ⬅ Stops the page refresh

        // fetch add user api, send data to the backend and save in db
        let confirmed = confirm("Are you sure you want to add this admin ?");
        if (confirmed) {
            try {
                const res = await fetch("/api/admin", {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });

                const data = await res.json();
                setMessage("User successfully added as admin!");

                // Hide after 3 seconds
                setTimeout(() => setMessage(""), 3000);
            }
            catch (err) {
                console.error(err);
                setMessage("Failed to add user.");
            }
        }
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return (
        <>
            <section className='w-[80vw] mx-auto px-2'>
                <h1 className='text-xl md:text-2xl  mb-4 font-semibold'>Add new admin</h1>
                <form onSubmit={handleSubmit} className='flex flex-col mb-8 gap-4'>
                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor="" className='text-md'>Username</label>
                        <input required className="border py-2 px-4 rounded-md" type="text" placeholder="Enter username" onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor="" className='text-md'>Password</label>
                        <input required className="border py-2 px-4 rounded-md" type="password" placeholder='Enter password' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className='btnContainer flex gap-4'>
                        <div>
                            <button className="border py-2 px-4 rounded-lg bg-gray-900 text-white cursor-pointer hover:bg-gray-800" type="submit">Add Admin</button>
                        </div>
                        <div>
                            <button className="border py-2 px-4 rounded-lg bg-red-600 text-white cursor-pointer hover:bg-red-500" type='reset'>Reset Form</button>
                        </div>
                    </div>
                    {message && (
                        <p style={{ color: message.includes("successfully") ? "green" : "red" }}>
                            {message}
                        </p>
                    )}
                </form>

            </section>
        </>
    )
}

export default page