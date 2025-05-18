import React from 'react'

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-purple-500 to-pink-400 shadow-lg flex justify-between items-center px-8 h-16">
            <div className="logo font-extrabold text-white text-2xl tracking-wide flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1.104.896-2 2-2s2 .896 2 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2c0-1.104.896-2 2-2z" />
                    <rect width="20" height="12" x="2" y="7" rx="6" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
                Password Manager
            </div>
            <ul className="flex gap-6">
                <li>
                    <a href="/" className="text-white px-4 py-2 rounded-md transition-all duration-200 hover:bg-white hover:text-purple-600 font-semibold shadow-sm">Home</a>
                </li>
                <li>
                    <a href="/about" className="text-white px-4 py-2 rounded-md transition-all duration-200 hover:bg-white hover:text-purple-600 font-semibold shadow-sm">About</a>
                </li>
                <li>
                    <a href="/contact" className="text-white px-4 py-2 rounded-md transition-all duration-200 hover:bg-white hover:text-purple-600 font-semibold shadow-sm">Contact</a>
                </li>
                <li>
                    <a href="/services" className="text-white px-4 py-2 rounded-md transition-all duration-200 hover:bg-white hover:text-purple-600 font-semibold shadow-sm">Services</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
