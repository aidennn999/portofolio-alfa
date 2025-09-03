// components/Hero.jsx
"use client";

import {useEffect, useState} from "react";
import {FaChevronDown} from "react-icons/fa";

export default function Hero() {
 const [scrollY, setScrollY] = useState(0);

 useEffect(() => {
  const handleScroll = () => {
   setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 const scrollToAbout = () => {
  document.getElementById("about").scrollIntoView({behavior: "smooth"});
 };

 return (
  <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden gradient-bg text-white">
   <div
    className="absolute inset-0 opacity-20"
    style={{
     transform: `translateY(${scrollY * 0.5}px)`,
     backgroundImage: `url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    }}
   />

   <div className="relative z-10 text-center px-4 md:px-8 max-w-6xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Jane Doe</h1>
    <h2 className="text-xl md:text-3xl font-light mb-8">
     Graphic Designer & 3D Artist
    </h2>
    <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
     Creating visually stunning designs and immersive 3D experiences that tell
     stories and captivate audiences.
    </p>
    <button
     onClick={scrollToAbout}
     className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center mx-auto">
     View My Work
     <FaChevronDown className="h-5 w-5 ml-2" />
    </button>
   </div>

   <div className="absolute bottom-10 animate-bounce">
    <FaChevronDown className="h-8 w-8 text-white" />
   </div>
  </section>
 );
}
