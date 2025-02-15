import React, { useState, useEffect } from 'react';
import logo from '../assets/images/tripyAi_icon.svg';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility
  const [scrolling, setScrolling] = useState(false); // State to track scroll

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
  };

  // Track scroll position and apply blur effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // Apply blur effect after scrolling 50px
      } else {
        setScrolling(false); // Remove blur effect if scrolled back up
      }
    };

    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup event listener
  }, []);

  return (
    <div
      className={`w-full px-10 py-5 flex justify-between items-center fixed z-30 transition-all ${
        scrolling ? 'backdrop-blur-lg ' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href='/' className='cursor-pointer'>
        <img src={logo} alt="logo" className="w-[100px]"  />
      </a>

      {/* Links for larger screens */}
      <ul className="hidden lg:flex gap-10">
        <li className="flex items-center cursor-pointer" 
          onClick={() => {
            const target = document.getElementById('multichain-support');
            const navbarHeight = 100; // Adjust this value based on your navbar's height
            const yOffset = -navbarHeight; // Offset to prevent overlap
            const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
          }}
            >
              Our Partners
        </li>        
        <li className="flex items-center cursor-pointer"
           onClick={() => {
            const target = document.getElementById('future-of-travel');
            const navbarHeight = 100; // Adjust this value based on your navbar's height
            const yOffset = -navbarHeight; // Offset to prevent overlap
            const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
          }}

          >Future of Ai</li>
        <li className="flex items-center cursor-pointer"

          onClick={() => {
            const target = document.getElementById('technology');
            const navbarHeight = 100; // Adjust this value based on your navbar's height
            const yOffset = -navbarHeight; // Offset to prevent overlap
            const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
          }}
        
          >Technology</li>
        <li className="flex items-center cursor-pointer"

          onClick={() => {
            const target = document.getElementById('roadmap');
            const navbarHeight = 100; // Adjust this value based on your navbar's height
            const yOffset = -navbarHeight; // Offset to prevent overlap
            const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
          }}
        
          >Roadmap</li>
        <li className="flex items-center cursor-pointer"
        
          onClick={() => {
            const target = document.getElementById('tokenization');
            const navbarHeight = 100; // Adjust this value based on your navbar's height
            const yOffset = -navbarHeight; // Offset to prevent overlap
            const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: yPosition, behavior: 'smooth' });
          }}
          
          >Tokenization</li>
      </ul>

      {/* Hamburger Menu for small screens */}
      {/* <div className="lg:hidden">
        <div className="flex items-center">
          <button onClick={toggleMenu}>
            <RxHamburgerMenu size={35} />
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-full bg-transparent shadow-lg rounded-lg flex flex-col gap-3 h-[calc(100vh-100px)]">
            <h3 className="cursor-pointer">Our Partners</h3>
            <h3 className="cursor-pointer">Future of Ai</h3>
            <h3 className="cursor-pointer">Technology</h3>
            <h3 className="cursor-pointer">Roadmap</h3>
            <h3 className="cursor-pointer">Tokenization</h3>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Navbar;
