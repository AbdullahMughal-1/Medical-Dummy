import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="w-full bg-blue-50">
      <header className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center p-4">

        <h1 className="font-semibold text-2xl">
          E- <span className="text-blue-600">Sheba</span>
        </h1>

        <nav className="hidden md:flex gap-10">
          <ul className="flex gap-6 text-gray-700 cursor-pointer" >
            <li className=' hover:text-blue-500'>Home</li>
            <li className=' hover:text-blue-500'>About</li>
            <li className=' hover:text-blue-500'>Application</li>
            <li className=' hover:text-blue-500'>History</li>
          </ul>
        </nav>

        <div className="hidden md:flex space-x-4">
          <button className="border-2 border-blue-800 rounded-xl px-4 py-1">Log in</button>
          <button className="border bg-blue-800 text-white rounded-xl px-4 py-1">Sign Up</button>
        </div>

 
        <button
          className="md:hidden text-2xl text-blue-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </header>

    
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <nav className="flex flex-col gap-2 text-gray-700">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Application</a>
            <a href="#">History</a>
          </nav>
          <div className="flex flex-col gap-2">
            <button className="border-2 border-blue-800 rounded-xl px-4 py-1">Log in</button>
            <button className="border bg-blue-800 text-white rounded-xl px-4 py-1">Sign Up</button>
          </div>
        </div>
      )}

      
    </div>














  );
};

export default Navbar;
