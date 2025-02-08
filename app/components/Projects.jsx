import React from 'react'
import { assets,serviceData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "motion/react"

const Projects = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>
       <motion.h4 
        initial={{opacity:0,y:-20}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5,delay:0.3}}
       className='text-center mb-2 text-lg font-Ovo'>What I have Created</motion.h4>
       <motion.h2
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.5,delay:0.5}}
       className='text-center text-5xl font-Ovo'>My Projects</motion.h2>
        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5,delay:0.7}}
        className='grid grid-cols-1 gap-8 my-10 lg:grid-cols-2 '>
          {
            serviceData.map(({company,title,description,techstack},index)=>(
              <motion.div 
              whileHover={{scale:1}}
              key={index} className='border border-gray-400 rounded-lg p-4 md:p-8 md:flex flex-col justify-between hover:shadow-black
              cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover
              dark:hover:shadow-white'>
                <div>
                <p className='text-xs text-gray-600 leading-5 dark:text-white/80'>{company}</p>
                <h3 className='text-xl  mt-2 mb-1 text-gray-700 dark:text-white font-medium'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                </div>
                <p className='flex items-end gap-2 text-lg mt-6 font-semibold'>Techstack : {techstack}
                </p>
              </motion.div>
            ))
          }
        </motion.div>
    </motion.div>
  )
}

export default Projects
