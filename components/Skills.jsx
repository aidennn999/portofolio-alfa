// components/Skills.jsx
"use client";

import {motion} from "framer-motion";

const skills = [
 {name: "Adobe Photoshop", level: 95},
 {name: "Adobe Illustrator", level: 90},
 {name: "Blender", level: 85},
 {name: "Figma", level: 80},
 {name: "Adobe After Effects", level: 75},
 {name: "Cinema 4D", level: 70},
];

const tools = [
 "Adobe Creative Suite",
 "Blender",
 "Cinema 4D",
 "Figma",
 "Substance Painter",
 "ZBrush",
 "Keyshot",
 "Procreate",
];

export default function Skills() {
 return (
  <section
   id="skills"
   className="py-20 px-4 md:px-8 bg-gray-100 text-gray-800">
   <div className="max-w-6xl mx-auto">
    <motion.h2
     className="text-3xl md:text-4xl font-bold mb-4 text-center"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.5}}
     viewport={{once: true}}>
     Skills & Expertise
    </motion.h2>

    <motion.p
     className="text-center text-lg mb-12 max-w-2xl mx-auto"
     initial={{opacity: 0, y: 20}}
     whileInView={{opacity: 1, y: 0}}
     transition={{duration: 0.5, delay: 0.1}}
     viewport={{once: true}}>
     I've developed a diverse skill set that allows me to tackle various design
     challenges from concept to completion.
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
     <div>
      <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
      <div className="space-y-6">
       {skills.map((skill, index) => (
        <motion.div
         key={skill.name}
         initial={{opacity: 0, x: -30}}
         whileInView={{opacity: 1, x: 0}}
         transition={{duration: 0.5, delay: index * 0.1}}
         viewport={{once: true}}>
         <div className="flex justify-between mb-2">
          <span className="font-medium">{skill.name}</span>
          <span>{skill.level}%</span>
         </div>
         <div className="h-2 bg-gray-300 rounded-full">
          <div
           className="h-full bg-indigo-600 rounded-full"
           style={{width: `${skill.level}%`}}></div>
         </div>
        </motion.div>
       ))}
      </div>
     </div>

     <div>
      <h3 className="text-2xl font-semibold mb-6">Tools & Software</h3>
      <motion.div
       className="flex flex-wrap gap-4"
       initial={{opacity: 0, x: 30}}
       whileInView={{opacity: 1, x: 0}}
       transition={{duration: 0.5, delay: 0.2}}
       viewport={{once: true}}>
       {tools.map((tool, index) => (
        <span
         key={tool}
         className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
         {tool}
        </span>
       ))}
      </motion.div>

      <motion.div
       className="mt-10"
       initial={{opacity: 0, y: 20}}
       whileInView={{opacity: 1, y: 0}}
       transition={{duration: 0.5, delay: 0.4}}
       viewport={{once: true}}>
       <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
       <p className="text-lg">
        I combine technical expertise with artistic vision to create designs
        that are not only visually appealing but also functional and
        user-friendly. My process involves thorough research, iterative design,
        and attention to detail.
       </p>
      </motion.div>
     </div>
    </div>
   </div>
  </section>
 );
}
