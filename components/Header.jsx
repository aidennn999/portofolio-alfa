"use client";

import {useState} from "react";
import Link from "next/link";

export default function Header() {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 return (
  <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50 py-4 px-6">
   <div className="container mx-auto flex justify-between items-center">
    <Link
     href="/"
     className="text-2xl font-bold text-white">
     Portfolio<span className="text-blue-500">.</span>
    </Link>

    <nav className="hidden md:flex space-x-8">
     <Link
      href="/"
      className="text-white hover:text-blue-400 transition-colors">
      Home
     </Link>
     <Link
      href="/about"
      className="text-white hover:text-blue-400 transition-colors">
      About
     </Link>
     <Link
      href="/portfolio"
      className="text-white hover:text-blue-400 transition-colors">
      Portfolio
     </Link>
     <Link
      href="/contact"
      className="text-white hover:text-blue-400 transition-colors">
      Contact
     </Link>
    </nav>

    <button
     className="md:hidden text-white"
     onClick={() => setIsMenuOpen(!isMenuOpen)}>
     {isMenuOpen ? "Close" : "Menu"}
    </button>
   </div>

   {/* Mobile Menu */}
   {isMenuOpen && (
    <div className="md:hidden bg-black/95 absolute top-full left-0 w-full p-6">
     <nav className="flex flex-col space-y-4">
      <Link
       href="/"
       className="text-white hover:text-blue-400 transition-colors">
       Home
      </Link>
      <Link
       href="/about"
       className="text-white hover:text-blue-400 transition-colors">
       About
      </Link>
      <Link
       href="/portfolio"
       className="text-white hover:text-blue-400 transition-colors">
       Portfolio
      </Link>
      <Link
       href="/contact"
       className="text-white hover:text-blue-400 transition-colors">
       Contact
      </Link>
     </nav>
    </div>
   )}
  </header>
 );
}
