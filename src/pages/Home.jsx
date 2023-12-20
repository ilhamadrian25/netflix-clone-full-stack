import axios from 'axios'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import url from '../Api'
import { FaPlay } from 'react-icons/fa'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Outlet } from 'react-router-dom'
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { MdNavigateNext } from "react-icons/md";
import Logo from '../assets/logo.png';

const Home = () => {

    const [data, setData] = useState([])
    const rand = Math.floor(Math.random() * 10)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url.popular, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzM2ZWRmZjdhZTQ2ODM1NTVkYjBjNTNkMGQ1NzQ4NyIsInN1YiI6IjY1ODFhYjIzYmYwZjYzMDhhZTYyNjRhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hoeIfDJEZ8mi-BCDL74vszS0lP_SLoNY1-Q7MTkDIsM'
                    }
                });
                setData(response.data.results)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <div className="h-screen">

                <div className='relative w-full h-full overflow-hidden'>
                    <div className='absolute w-full h-full bg-gradient-to-b from-transparent to-black'></div>
                    <img
                        src={`https://image.tmdb.org/t/p/original` + data[rand]?.backdrop_path}
                        className='h-full w-full object-cover'
                        alt=""
                    />
                    <div className="absolute h-[1400px] inset-0 flex items-center text-start text-white p-10">
                        <div className="flex flex-col gap-4">
                            <div className="font-bold">
                                <span>Show</span>
                            </div>
                            <div className="font-bold">
                                <h1 className='text-4xl'>{data[rand]?.title}</h1>
                            </div>
                            <div className='flex flex-row gap-3'>
                                <button className='flex flex-row items-center gap-2 py-2 px-3 rounded-lg bg-white justify-center'>
                                    <FaPlay className='text-black' />
                                    <span className='text-black font-bold'>Play</span>
                                </button>
                                <button className='flex flex-row items-center gap-2 py-2 px-5 rounded-lg bg-white bg-opacity-50 justify-center'>
                                    <IoIosInformationCircleOutline className='text-white' />
                                    <span className='text-white font-bold'>More Info</span>
                                </button>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <div className='flex flex-row font-bold text-2xl items-center'>
                                    <span>
                                        See again
                                    </span>
                                    <div>
                                    <MdNavigateNext />
                                    </div>
                                </div>
                                <div className='relative flex flex-row gap-3 items-center overflow-x-scroll whitespace-nowrap scroll-smooth'>
                                    {data.map((item, index) => (
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                                            className='h-64 w-96 object-cover hover:scale-105 transition-transform duration-300'
                                            alt=""
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home