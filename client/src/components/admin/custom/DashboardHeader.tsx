"use client";
import { MdForwardToInbox } from "react-icons/md";
import { AiOutlineBulb } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductForm from "./ProductForm";
import { useStore } from "@/store/store";
import { FormControl, FormLabel, Switch } from '@chakra-ui/react'


const DashboardHeader = () => {
    const navigate = useNavigate();
    const openProductForm = useStore((state: any) => state.openProductForm);
    const openCourseForm = useStore((state: any) => state.openCourseForm);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;
    console.log(pathname);

    const user = JSON.parse(localStorage.getItem('user') || '{}');


    return (<>

        <ProductForm />
        <header className='w-full bg-white flex justify-between items-center h-20'>
            <div className='flex justify-start pl-9 items-center xxs:w-[60%] xs:w-[60%] sm:w-[30%] md:w-[30%] w-[20%] h-full'>
                <h1 className='xxs:text-sm xs:text-sm sm:text-lg md:text-lg text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-black'>
                    Evaluate
                </h1>
            </div>
            <nav className='flex justify-end xxs:hidden xs:hidden sm:flex md:flex items-center gap-4 pr-8 w-[40%] h-full'>
                <div className='w-[40%] relative'>
                    <FaSearch className='absolute top-3 left-3' size={20} />
                    <input className='w-full h-10 pl-14 outline-none placeholder-text-[16px] font-normal rounded-3xl bg-gray-100' type="search" name="search" id="search" placeholder='Search here' />
                </div>
                {pathname == '/admin/products' && <Button onClick={() => { openProductForm(true) }} >Add Product</Button>}
                {pathname == '/admin/products' && <Button onClick={() => {openCourseForm(true)}} >Add Course</Button>}
            
                <div className='relative flex justify-center cursor-pointer items-center rounded-full w-12 h-12 bg-gray-100'>
                    <MdForwardToInbox size={30} />
                </div>
                {/* create a switch to navigate on admin dashboard  */}



                {
                    user && user.userType === 'admin' && 
                    (<>
                        <Button onClick={()=>navigate('/')}>
                            <FormControl display="flex" alignItems="center">
                                <FormLabel htmlFor="email-alerts" mb="0">
                                    Home
                                </FormLabel>
                            </FormControl>
                        </Button>
                    </>)
                }










                <div className='flex justify-center cursor-pointer items-center rounded-full w-12 h-12 bg-gray-100'>
                    <AiOutlineBulb size={30} />
                </div>
                <div className='h-14 w-14 cursor-pointer'>
                    <img className='rounded-full' src='https://bit.ly/dan-abramov' alt='Dan Abrahmov' />
                </div>
            </nav>

            {/* Drawer Menu Button */}
            <div className='xxs:flex xs:flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden flex justify-end pr-4 w-[40%]'>
                <button onClick={() => setDrawerOpen(!drawerOpen)} className='text-xl'>
                    {drawerOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Drawer Menu */}
            <div className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out xxs:flex xs:flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden flex flex-col items-center gap-4 p-4`}>
                <button onClick={() => setDrawerOpen(false)} className='self-end text-2xl mb-4'>
                    ×
                </button>
                <div className='w-full relative'>
                    <FaSearch className='absolute top-3 left-3' size={20} />
                    <input className='w-full h-10 pl-14 outline-none placeholder-text-[16px] font-normal rounded-3xl bg-gray-100' type="search" name="search" id="search" placeholder='Search here' />
                </div>
                {pathname == '/admin/products' && <Button onClick={() => openProductForm(true)} >Add Product</Button>}
                {pathname == '/admin/products' && <Button onClick={() => openProductForm(true)} >Add Course</Button>}
                
                <div className='relative flex justify-center cursor-pointer items-center rounded-full w-12 h-12 bg-gray-100'>
                    <MdForwardToInbox size={30} />
                </div>
                <div className='flex justify-center cursor-pointer items-center rounded-full w-12 h-12 bg-gray-100'>
                    <AiOutlineBulb size={30} />
                </div>
                <div className='h-14 w-14 cursor-pointer'>
                    <img className='rounded-full' src='https://bit.ly/dan-abramov' alt='Dan Abrahmov' />
                </div>
            </div>
        </header>
    </>
    );
};

export default DashboardHeader;