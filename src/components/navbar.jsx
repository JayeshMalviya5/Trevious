// Navbar.js
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-sm md:text-xl font-bold">Triveous Times</h1>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white transition duration-300">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {showMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
          {showMenu && (
            <div className="mt-2 bg-white rounded-md shadow-lg absolute right-0 top-12 w-48 z-10">
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Home</a>
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">News</a>
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Opinions</a>
              <a href="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Contact</a>
            </div>
          )}
        </div>
        {
          !showMenu && (<nav className={`lg:flex space-x-4 ${showMenu ? 'block' : 'hidden'}`}>
          <a href="/" className="text-gray-300 hover:text-white transition duration-300">Home</a>
          <a href="/" className="text-gray-300 hover:text-white transition duration-300">News</a>
          <a href="/" className="text-gray-300 hover:text-white transition duration-300">Opinions</a>
          <a href="/" className="text-gray-300 hover:text-white transition duration-300">Contact</a>
        </nav>)
        }
        
      </div>
    </header>
  );
};

export default Navbar;
