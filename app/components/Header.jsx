import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      
     
        <motion.h1 
        initial={{y:-30,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6,delay:0.3}}
        className='text-4xl sm:text-6xl lg:text-[66px] font-Outfit lg:font-semibold'>Ovais Sharif</motion.h1>
         <motion.h3
       initial={{y:-20,opacity:0}}
       whileInView={{y:0,opacity:1}}
       transition={{duration:0.8,delay:0.5}}
       className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Frontend Engineer
        </motion.h3>
        <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.7}}
        className='max-w-2xl mx-auto font-Ovo'>I’m Frontend Engineer with almost 2.5 years of experience, specialising in React,
             Next.Js, Javascript and other Web technologies.</motion.p>
         <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{y:30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6,delay:1}}
            href='#contact' className='px-10 py-3 border rounded-full border-white bg-black text-white 
            flex items-center gap-2 dark:bg-transparent'>
                Contact me <Image src={assets.right_arrow_white} alt="" className="w-4"/></motion.a>
            <motion.a 
            initial={{y:30,opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.6,delay:1.1}}
            href='/Ovais_CV_Dubai.pdf' download className='px-10 py-3 border rounded-full border-gray-500
             flex items-center gap-2 bg-white dark:text-black'
            >Resume <Image src={assets.download_icon} alt="" className="w-4"/></motion.a>
        </div>    
    </div>
  )
}

export default Header
