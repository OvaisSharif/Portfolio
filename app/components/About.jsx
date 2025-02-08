import React from 'react';
import { motion } from 'motion/react';

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Heading */}
      <motion.h4
      initial={{opacity:0,y:-20}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.5,delay:0.3}}
       className="text-center mb-2 text-lg font-Ovo">Introduction</motion.h4>
      <motion.h2
       initial={{opacity:0,y:-20}}
       whileInView={{opacity:1,y:0}}
       transition={{duration:0.5,delay:0.5}}
       className="text-center text-5xl font-Ovo">About Me</motion.h2>

      {/* Experience Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="text-5xl font-bold text-blue-600">2.5</span>
          <p className="text-lg dark:text-white/80">Years of Experience</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <span className="text-5xl font-bold text-green-600">15+</span>
          <p className="text-lg dark:text-white/80">Projects Completed</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <span className="text-5xl font-bold text-purple-600">10+</span>
          <p className="text-lg dark:text-white/80">Skills Mastered</p>
        </motion.div>
      </div>

      {/* Skills Timeline */}
      <div className="my-16">
        <h3 className="text-center text-3xl font-Ovo mb-6">Career Highlights</h3>
        <div className="relative">
          <div className="border-l-2 border-gray-400">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10 ml-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <h4 className="text-xl font-semibold">MAK Byte</h4>
              </div>
              <p className="ml-8 dark:text-white/70">
                Began my professional journey as a Frontend Engineer at Mak Byte from July 2022 to January 2023, where I built a strong foundation in web development.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 ml-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                <h4 className="text-xl font-semibold">Gray Matrix Solutions</h4>
              </div>
              <p className="ml-8 dark:text-white/70">
                Continued my journey as a Frontend Engineer at Gray Matrix Solutions from February 2023 to December 2024, where I specialized in React.js and Next.js, building scalable applications.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-10 ml-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                <h4 className="text-xl font-semibold">Contributed to Open Source</h4>
              </div>
              <p className="ml-8 dark:text-white/70">
                Actively contributed to open-source projects, enhancing community-driven tools and gaining global exposure.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Personal Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-gray-100 dark:bg-gray-800 p-8 rounded-lg"
      >
        <p className="text-lg italic text-gray-700 dark:text-white">
          "Code is like humor. When you have to explain it, it’s bad."
        </p>
        <span className="text-sm text-gray-500 dark:text-gray-400 mt-4 block">
          — My Approach to Development
        </span>
      </motion.div>
    </motion.div>
  );
};

export default About;
