import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { DiRedis } from 'react-icons/di'
import { SiMongodb } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { FaHtml5 } from 'react-icons/fa';         // HTML5 Icon
import { FaCss3Alt } from 'react-icons/fa';       // CSS3 Icon
import { IoLogoJavascript } from 'react-icons/io';// JavaScript Icon
import { SiTypescript } from 'react-icons/si';    // TypeScript Icon
import { SiTailwindcss } from 'react-icons/si'; 
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial : { y: -10},
    animate : {
        y : [10,-10],
        transition : {
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType : "reverse"
        }
    }
})

const Tecnologies = () => {
  return (
    <>
        <div className='border-b border-neutral-900 lg:pb-10 pb-5'>
            <motion.h1  
            whileInView={{opacity:1,y:0}}
            initial={{y:-100,opacity:0}}
            transition={{duration:1.5}}
            className='text-4xl text-center'> Technologies </motion.h1>
            <motion.div whileInView={{opacity:1,x:0}}
            initial={{x:-100,opacity:0}}
            transition={{duration:1.5}}
            className='flex gap-5  items-center justify-center p-8 mt-5 flex-wrap'>
                <motion.div variants={iconVariants(2.5)} initial="initail" animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaHtml5 className='text-[#E34F26] text-5xl'/>
                </motion.div>
                <motion.div variants={iconVariants(3)} initial="initail" animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaCss3Alt className='text-blue-500 text-5xl'/>
                </motion.div>
                <motion.div variants={iconVariants(5)} initial="initail" animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <IoLogoJavascript className='text-[#F7DF1E] text-5xl'/>
                </motion.div>
                 <motion.div variants={iconVariants(2)} initial="initail" animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTypescript className='text-[#3178C6] text-5xl'/>
                </motion.div>
                <motion.div variants={iconVariants(6)} initial="initail" animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTailwindcss className='text-blue-600 text-5xl'/>
                </motion.div>
                <motion.div variants={iconVariants(4)} initial="initail" animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-blue-400 text-5xl'/>
                </motion.div>
            </motion.div>
        </div>
    </>
  )
}

export default Tecnologies