// components/Navbar.js
"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';



const Navbar = () => {
 
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 0;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-gray-800 p-4 ${isScrolled ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
      <div className="container mx-auto flex justify-center items-center">
        <div className="space-x-4">
          <Link href="/" className="text-white hover:underline">HOME</Link>
          <Link href="/AboutUs" className="text-white hover:underline">ABOUT US</Link>
          <Link href="/catagory" className="text-white hover:underline">CATEGORY</Link>
          <Link href="/MarketPlace" className="text-white hover:underline">MARKETPLACE</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
