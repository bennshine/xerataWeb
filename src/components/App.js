import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar';
import MainContent from '../MainContent';
import Home from '../Home';
import Services from '../Services';
import About from '../About';
import Contact from '../Contact';
import HorizontalMenu from '../HorizontalMenu'; // Ensure HorizontalMenu is imported
import '../index.css'; // Ensure you have necessary global styles
import 'tailwindcss/tailwind.css';
import HorizontalScroll from "./HorizontalScroll"; // Import Tailwind CSS

const App = () => {
    const regions = [
        'Abruzzo',
        'Basilicata',
        'Calabria',
        'Campania',
        'Emilia-Romagna',
        'Friuli Venezia Giulia',
        'Lazio',
        'Liguria',
        'Lombardia',
        'Marche',
    ];


    const handleNavigation = (region) => {
        console.log('Navigating to region:', region);
        // Implement navigation logic here
    };
    return (
        <Router>
            <div className="flex flex-col h-screen">
                <Navbar />
                <MainContent>
                    <div className="relative">
                        <img
                            src="https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt15d033a1079f0cbf/663b6a9ba2616e233dfeeb09/BCC-2023-FLAGSHIP-233477-paris-ile-de-la-cite-notre-dame-Homepage-desktop-image.jpg?auto=webp&quality=60"
                            alt="Big Image"
                            className="w-full"
                        />
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden md:block">
                            <HorizontalMenu />
                        </div>
                    </div>


                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <HorizontalScroll regions={regions} navigation={{ navigate: handleNavigation }} />

                </MainContent>

                <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between z-10 myMenu">
                    <HorizontalMenu />
                </div>
            </div>
        </Router>
    );
};

export default App;
