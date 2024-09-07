import React from 'react';
import { FaBox, FaShoppingCart, FaTachometerAlt, FaUsers } from 'react-icons/fa';
import { ArrowUpLeftSquare } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const DashboardSidebar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className="h-full bg-white transition-all duration-300 flex flex-col gap-20 justify-start w-[20%]">
            <div className="w-full mt-10 bg-white flex flex-col justify-start">
                <Link to="dashboard">
                    <li className={`h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4 ${pathname === 'dashboard' ? 'border-r-4 bg-gray-100 border-black' : ''} hover:border-r-4 hover:border-black`}>
                        <FaTachometerAlt className="text-black" size={20} />
                        <h1>Dashboard</h1>
                    </li>
                </Link>
                <Link to="products">
                    <li className={`h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4 ${pathname === 'products' ? 'border-r-4 bg-gray-100 border-black' : ''} hover:border-r-4 hover:border-black`}>
                        <FaBox className="text-black" size={20} />
                        <h1>Products</h1>
                    </li>
                </Link>
                <Link to="userorders">
                    <li className={`h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4 ${pathname === 'userorders' ? 'border-r-4 bg-gray-100 border-black' : ''} hover:border-r-4 hover:border-black`}>
                        <FaShoppingCart className="text-black" size={20} />
                        <h1>User Orders</h1>
                    </li>
                </Link>
                <Link to="users">
                    <li className={`h-16 w-full hover:bg-gray-100 flex items-center gap-3 pl-4 ${pathname === 'users' ? 'border-r-4 bg-gray-100 border-black' : ''} hover:border-r-4 hover:border-black`}>
                        <FaUsers className="text-black" size={20} />
                        <h1>Users</h1>
                    </li>
                </Link>
                <div onClick={() => window.history.back()} className="w-12 mt-40 h-12 ml-4 cursor-pointer active:scale-95 flex justify-center items-center rounded-xl bg-gray-100">
                    <ArrowUpLeftSquare size={30} />
                </div>
            </div>
        </div>
    );
}

export default DashboardSidebar;
