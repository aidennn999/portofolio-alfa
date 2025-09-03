"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {useState} from "react";

const projects = [
 {
  id: 1,
  title: "Cosmic Brand Identity",
  category: "Branding",
  image: "/project1.jpg", // Replace with your image path
  description:
   "Complete brand identity for a tech startup specializing in space technology.",
 },
 {
  id: 2,
  title: "3D Character Design",
  category: "3D Art",
  image: "/project2.jpg", // Replace with your image path
  description:
   "Fantasy character design for a mobile game, including modeling and texturing.",
 },
 {
  id: 3,
  title: "Product Packaging",
  category: "Graphic Design",
  image: "/project3.jpg", // Replace with your image path
  description:
   "Eco-friendly packaging design for a sustainable skincare brand.",
 },
 {
  id: 4,
  title: "Architectural Visualization",
  category: "3D Art",
  image: "/project4.jpg", // Replace with your image path
  description: "Photorealistic 3D rendering of a modern residential building.",
 },
 {
  id: 5,
  title: "UI/UX Design",
  category: "Digital Design",
  image: "/project5.jpg", // Replace with your image path
  description:
   "User interface design for a fitness tracking mobile application.",
 },
 {
  id: 6,
  title: "Motion Graphics",
  category: "Animation",
  image: "/project6.jpg", // Replace with your image path
  description: "Animated explainer video for a financial technology company.",
 },
];

const categories = [
 "All",
 "Branding",
 "3D Art",
 "Graphic Design",
 "Digital Design",
 "Animation",
];

export default function Portfolio() {
 const [activeCategory, setActiveCategory] = useState("All");
 const [selectedProject, setSelectedProject] = useState(null);

 const filteredProjects =
  activeCategory === "All"
   ? projects
   : projects.filter((project) => project.category === activeCategory);

 return (
  <section
   id="portfolio"
   className="py-20 px-4 md:px-8 bg-white text-gray-800">
   <div className="max-w-6xl mx-auto">
    <motion.h2
     className="text-3xl md:text-4xl font-bold mb-4 text-center"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.5}}
     viewport={{once: true}}>
     My Portfolio
    </motion.h2>

    <motion.p
     className="text-center text-lg mb-12 max-w-2xl mx-auto"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.5, delay: 0.1}}
     viewport={{once: true}}>
     A selection of my recent work across various disciplines including graphic
     design, 3D art, and branding.
    </motion.p>

    <motion.div
     className="flex flex-wrap justify-center gap-4 mb-12"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.5, delay: 0.2}}
     viewport={{once: true}}>
     {categories.map((category) => (
      <button
       key={category}
       onClick={() => setActiveCategory(category)}
       className={`px-4 py-2 rounded-full transition-all ${
        activeCategory === category
         ? "bg-indigo-600 text-white"
         : "bg-gray-100 text-gray-800 hover:bg-gray-200"
       }`}>
       {category}
      </button>
     ))}
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {filteredProjects.map((project, index) => (
      <motion.div
       key={project.id}
       className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
       initial={{opacity: 0, scale: 0.9}}
       whileInView={{opacity: 1, scale: 1}}
       transition={{duration: 0.5, delay: index * 0.1}}
       viewport={{once: true}}
       onClick={() => setSelectedProject(project)}>
       <div className="relative h-48 w-full">
        <Image
         src={project.image}
         alt={project.title}
         fill
         className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
         <span className="text-white font-medium">View Project</span>
        </div>
       </div>
       <div className="p-4">
        <span className="text-sm text-indigo-600">{project.category}</span>
        <h3 className="text-xl font-semibold mt-1">{project.title}</h3>
        <p className="text-gray-600 mt-2">{project.description}</p>
       </div>
      </motion.div>
     ))}
    </div>

    {/* Project Modal */}
    {selectedProject && (
     <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={() => setSelectedProject(null)}>
      <div
       className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
       onClick={(e) => e.stopPropagation()}>
       <div className="relative h-64 md:h-96 w-full">
        <Image
         src={selectedProject.image}
         alt={selectedProject.title}
         fill
         className="object-cover"
        />
        <button
         className="absolute top-4 right-4 bg-white rounded-full p-2"
         onClick={() => setSelectedProject(null)}>
         <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M6 18L18 6M6 6l12 12"
          />
         </svg>
        </button>
       </div>
       <div className="p-6">
        <span className="text-sm text-indigo-600">
         {selectedProject.category}
        </span>
        <h3 className="text-2xl font-bold mt-1">{selectedProject.title}</h3>
        <p className="text-gray-600 mt-4">{selectedProject.description}</p>
        <div className="mt-6">
         <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg mr-4">
          View Project
         </button>
         <button className="border border-gray-300 px-6 py-2 rounded-lg">
          Close
         </button>
        </div>
       </div>
      </div>
     </div>
    )}
   </div>
  </section>
 );
}
