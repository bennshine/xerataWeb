import React from 'react';
import { Link } from 'react-router-dom';

const HorizontalMenu = () => {
    return (
        <ul className="flex space-x-4">
            <li>
                <Link to="/" className="text-white hover:bg-gray-700 py-2 px-4 rounded">Home</Link>
            </li>
            <li>
                <Link to="/services" className="text-white hover:bg-gray-700 py-2 px-4 rounded">Services</Link>
            </li>
            <li>
                <Link to="/about" className="text-white hover:bg-gray-700 py-2 px-4 rounded">About</Link>
            </li>
            <li>
                <Link to="/contact" className="text-white hover:bg-gray-700 py-2 px-4 rounded">Contact</Link>
            </li>
        </ul>
    );
};

export default HorizontalMenu;
