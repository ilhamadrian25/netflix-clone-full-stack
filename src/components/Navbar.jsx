import React from 'react'
import { FiBell } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between p-4'>
                <div className='flex gap-3 items-center'>
                    <div className='font-bold text-3xl text-red-600'>
                        <p>NETFLIX</p>
                    </div>
                    <div className='flex gap-3 text-white'>
                        <p className='font-bold'>Start</p>
                        <p>Shows</p>
                        <p>Movies</p>
                        <p>New</p>
                        <p>My List</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <span className='cursor-pointer'>
                        <IoIosSearch />
                    </span>
                    <span className='cursor-pointer'>
                        <FiBell />
                    </span>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar