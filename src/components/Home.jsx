// src/Home.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setContinent } from '../continentSlice';
import Content from './Content';
import Footer from './Footer';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContinentClick = (continent) => {
    dispatch(setContinent(continent));
  };

  return (
    <div className="mx-40 mt-14">
      {/* head */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Countries</h1>
        {/* large screen */}
        <div className="md:flex text-2xl text-gray-500 gap-9 hidden">
          <h1 onClick={() => handleContinentClick('All')} className="hover:text-black hover-underline-animation cursor-pointer">All</h1>
          <h1 onClick={() => handleContinentClick('Asia')} className="hover:text-black hover-underline-animation cursor-pointer">Asia</h1>
          <h1 onClick={() => handleContinentClick('Europe')} className="hover:text-black hover-underline-animation cursor-pointer">Europe</h1>
        </div>
        {/* Small Screen Menu */}
        <div className="md:hidden block items-center justify-between p-4">
          <button onClick={toggleMenu} className="relative text-2xl text-gray-500">
            &#9776; {/* Hamburger icon */}
          </button>
        </div>
        <div className={`absolute top-32 right-32 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="text-2xl text-gray-500 bg-black rounded-xl">
            <li onClick={() => handleContinentClick('All')} className="p-4 hover:text-white hover:underline cursor-pointer">All</li>
            <li onClick={() => handleContinentClick('Asia')} className="p-4 hover:text-white hover:underline cursor-pointer">Asia</li>
            <li onClick={() => handleContinentClick('Europe')} className="p-4 hover:text-white hover:underline cursor-pointer">Europe</li>
          </ul>
        </div>
      </div>
      {/* content */}
      <div>
        <Content />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
