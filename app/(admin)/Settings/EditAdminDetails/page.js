"use client"
import { get } from 'mongoose';
import React, { useEffect, useState } from 'react'

const page = () => {
    const [id, setId] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");


    function logoutSession() {
        sessionStorage.removeItem("adminLoggedIn");
        window.location.href = "/AdminLogin";
    }

    // Get id of admin
    const fetchAdminID = async () => {
        // fetch admin details
        const res = await fetch("/api/admin", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        // console.log("Fetched data : ", data._id)
        const loggedinUser = data.filter((d) => d.username == username)
        loggedinUser.map((user) => {
            setId(user._id);
        });


    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // fetch add user api, send data to the backend and save in db
        let confirmed = confirm("Are you sure you want to edit admin details?");
        if (confirmed) {
            try {
                const res = await fetch("/api/admin", {
                    method: "PUT",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id, username, password })
                });

                const data = await res.json();
                setMessage("Admin details successfully edited!");
            }
            catch (err) {
                console.log(err);
                setMessage("Failed to edit admin details.");
            }

        }
    }

    const deleteAdmin = async (e) => {
        e.preventDefault();
        // delete admin api
        let confirmed = confirm("Are you sure you want to delete admin?");
        if (confirmed) {
            try {
                const res = await fetch("/api/admin", {
                    method: "DELETE",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id })
                });

                const data = await res.json();
                console.log("Data is :", data);
                logoutSession();
                setMessage("Admin successfully deleted!");
            }
            catch (err) {
                console.log(err);
                setMessage("Failed to delete admin.");
            }

        }
    }
    const checkLogin = () => {
        const loggedIn = sessionStorage.getItem("adminLoggedIn");
        if (!loggedIn) window.location.href = "/AdminLogin";
    }

    const getUsername = () => {
        setUsername(sessionStorage.getItem('username'));
    }

    useEffect(() => {
        checkLogin();
        getUsername();
    }, []);

    useEffect(() => {
        fetchAdminID();
    }, [username]);

    // useEffect(async () => {
    // }, [])
    console.log(id)
    return (
        <>
            <section className='w-[80vw] mx-auto px-2'>
                <h1 className='text-xl md:text-2xl  mb-4 font-semibold'>Change username or password</h1>
                <form onSubmit={handleSubmit} className='flex flex-col mb-8 gap-4'>
                    {/* <div className='flex flex-col gap-1.5'>
                        <label htmlFor="adminID">Admin ID</label>
                        <input className="border py-2 px-4 rounded-md bg-gray-200 backdrop-opacity-40" type="text" disabled value={id ?? ""} />
                    </div> */}
                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor="" className='text-md'>Change Username</label>
                        <input className="border py-2 px-4 rounded-md" type="text" placeholder={username} value={username} onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor="" className='text-md'>Change Password</label>
                        <input className="border py-2 px-4 rounded-md" type="password" placeholder='********' onChange={(e) => { setPassword(e.target.value) }} />
                    </div>
                    <div className='btnContainer flex gap-4'>
                        <div>
                            <button className="border py-2 px-4 rounded-lg bg-gray-900 text-white cursor-pointer hover:bg-gray-800" type="submit">Edit Details</button>
                        </div>
                        <div>
                            <button className="border py-2 px-4 rounded-lg bg-red-600 text-white cursor-pointer hover:bg-red-500" type='button' onClick={deleteAdmin}>Delete</button>
                        </div>
                    </div>
                    {message && (
                        <p style={{ color: message.includes("successfully") ? "green" : "red" }}>
                            {message}
                        </p>
                    )}
                </form>
                <div className='border bg-gray-100 text-justify text-gray-800 p-8'>
                    <h2 className='text-lg font-semibold mb-2'>Note</h2>
                    <ul className='font-light text-sm list-disc list-inside text-justify'>
                        <li>If you wish to only change the username, then just write your new username in the "Change Username" field and enter your existing password then press "Submit"</li>
                        <li>If you wish to only change the password, then just write your new password in the "Change Password" field and enter your existing username then press "Submit"</li>
                        <li>If you wish to change both username and password, then write your new username in the "Change Username" field and your new password in the "Change Password" field then press "Submit"</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default page