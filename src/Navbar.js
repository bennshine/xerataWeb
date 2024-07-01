import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-transparent text-white p-4 flex justify-between items-center fixed top-0 w-full z-10">
            <div className="flex items-center">
                <Link to="/" className="text-lg font-bold">Xerata</Link>
                <div className="ml-4 flex rounded-full bg-gray-700">
                    <input type="text" placeholder="Search" className="p-2 rounded-l-full bg-gray-700 border-none text-white outline-none" />
                    <button className="bg-blue-500 rounded-r-full px-4 hover:bg-blue-600">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.61 10.61A5.96 5.96 0 0017 7c0-3.31-2.69-6-6-6S5 3.69 5 7s2.69 6 6 6c1.3 0 2.48-.42 3.47-1.12" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex items-center">
                <Link to="/favorites" className="ml-4">Favorites</Link>
                <Link to="/profile" className="ml-4">Profile</Link>
            </div>
        </nav>
    );
};

export default Navbar;
