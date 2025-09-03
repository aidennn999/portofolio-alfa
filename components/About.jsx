// components/About.jsx
"use client";

import {motion} from "framer-motion";
import Image from "next/image";

export default function About() {
 return (
  <section
   id="about"
   className="py-20 px-4 md:px-8 bg-white text-gray-800">
   <div className="max-w-6xl mx-auto">
    <motion.h2
     className="text-3xl md:text-4xl font-bold mb-12 text-center"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.5}}
     viewport={{once: true}}>
     About Me
    </motion.h2>

    <div className="flex flex-col md:flex-row items-center gap-10">
     <motion.div
      className="w-full md:w-1/3"
      initial={{opacity: 0, x: -30}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 0.7}}
      viewport={{once: true}}>
      <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-indigo-100">
       <Image
        src="/profile.jpg" // Replace with your image path
        alt="Jane Doe"
        fill
        className="object-cover"
       />
      </div>
     </motion.div>

     <motion.div
      className="w-full md:w-2/3"
      initial={{opacity: 0, x: 30}}
      whileInView={{opacity: 1, x: 0}}
      transition={{duration: 0.7, delay: 0.2}}
      viewport={{once: true}}>
      <h3 className="text-2xl font-semibold mb-4">
       Crafting Digital Experiences
      </h3>
      <p className="text-lg mb-4">
       With over 5 years of experience in graphic design and 3D artistry, I
       specialize in creating visually compelling designs that resonate with
       audiences. My work spans brand identity, 3D modeling, animation, and
       digital marketing materials.
      </p>
      <p className="text-lg mb-6">
       I believe in the power of visual storytelling and strive to create work
       that not only looks beautiful but also communicates effectively and
       creates emotional connections.
      </p>
      <div className="flex flex-wrap gap-4">
       <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">
        Brand Identity
       </span>
       <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">
        3D Modeling
       </span>
       <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">
        Motion Graphics
       </span>
       <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full">
        UI/UX Design
       </span>
      </div>
     </motion.div>
    </div>
   </div>
  </section>
 );
}
