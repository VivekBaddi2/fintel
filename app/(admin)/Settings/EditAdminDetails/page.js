'use client'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Page = () => {
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
        try {
            const res = await fetch("/api/admin", {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await res.json();
            const loggedinUser = data.filter((d) => d.username === username)
            loggedinUser.forEach((user) => {
                setId(user._id);
            });
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to fetch admin ID',
                background: '#1f1f1f',
                color: '#ffffff',
                width: 350,
                showClass: { popup: 'swal2-noanimation' },
                hideClass: { popup: '' }
            });
            console.log(err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const confirmed = await Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to edit admin details?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            background: '#1f1f1f',
            color: '#ffffff',
            width: 350,
            showClass: { popup: 'swal2-noanimation' },
            hideClass: { popup: '' }
        });

        if (confirmed.isConfirmed) {
            try {
                const res = await fetch("/api/admin", {
                    method: "PUT",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id, username, password })
                });

                if (!res.ok) throw new Error('Failed to edit admin details');

                await res.json();
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Admin details successfully edited!',
                    background: '#1f1f1f',
                    color: '#ffffff',
                    width: 350,
                    showClass: { popup: 'swal2-noanimation' },
                    hideClass: { popup: '' }
                });

                setPassword(""); // reset password field
            } catch (err) {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to edit admin details',
                    background: '#1f1f1f',
                    color: '#ffffff',
                    width: 350,
                    showClass: { popup: 'swal2-noanimation' },
                    hideClass: { popup: '' }
                });
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
        if (username) fetchAdminID();
    }, [username]);

    console.log(id)
    return (
        <>
            <section className='w-[80vw] mx-auto px-2'>
                <h1 className='text-xl md:text-2xl  mb-4 font-semibold'>Change username or password</h1>
                <form onSubmit={handleSubmit} className='flex flex-col mb-8 gap-4'>
                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor="" className='text-md'>Change Username</label>
                        <input
                            className="border py-2 px-4 rounded-md"
                            type="text"
                            placeholder={username}
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor="" className='text-md'>Change Password</label>
                        <input
                            className="border py-2 px-4 rounded-md"
                            type="password"
                            placeholder='Enter new password'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                    <div className='btnContainer flex gap-4'>
                        <div>
                            <button className="active:scale-95 border py-2 px-4 rounded-lg bg-gray-900 text-white cursor-pointer hover:bg-gray-800" type="submit">Submit</button>
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
                        <li>If you wish to only change the username, then just write your new username in the &quot;Change Username&quot; field and enter your existing password then press &quot;Submit&quot;</li>
                        <li>If you wish to only change the password, then just write your new password in the &quot;Change Password&quot; field and enter your existing username then press &quot;Submit&quot;</li>
                        <li>If you wish to change both username and password, then write your new username in the &quot;Change Username&quot; field and your new password in the &quot;Change Password&quot; field then press &quot;Submit&quot;</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Page;
