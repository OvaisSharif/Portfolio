import React from 'react';
import { motion } from "motion/react";
import { skillName } from "@/assets/assets";
import Image from 'next/image'



const Skills = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='skills' className='w-full px-[12%] py-10 scroll-mt-20'>
       <motion.h4 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
       className='text-center mb-2 text-lg font-Ovo'>What I offer</motion.h4>
       <motion.h2
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.5,delay:0.5}}
       className='text-center text-5xl font-Ovo'>My Skills</motion.h2>
       <motion.div
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.7}}
        className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-3
        lg:grid-cols-4 gap-4 lg:gap-x-8 lg:gap-y-10 justify-center dark:bg-dark sm:dark:bg-darkHover dark:lg:p-10 dark:px-0 dark:py-5 dark:rounded-lg">
      {skillName.map((skill, index) => (
        <div key={index} className="text-center ">
          <div className="skill-item h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] mx-auto dark:bg-white sm:dark:bg-darkHover">
            <Image
              alt={`${skill.name} logo`}
              src={skill.imgSrc}
              style={{ color: 'transparent' }}
              className="h-[50px] w-[50px] false lg:h-[100px] lg:w-[100px] "
            />
          </div>
          <p className="mt-3 font-Outfit font-medium text-xl">{skill.name}</p>
        </div>
      ))}
    </motion.div>
   </motion.div>
  );
};

export default Skills;
