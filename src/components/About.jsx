import React from 'react'
import { ABOUT_TEXT } from '../constants'
import AboutPic from '../assets/about.jpg';
import { motion } from "framer-motion"

const About = () => {
    return (
        <>
            <div className='border-b border-neutral-900 pb-10 mb-10'>
                <h1 className='text-center text-4xl my-10'>About <span className='text-neutral-500'>Me</span></h1>
                <div className='flex flex-col lg:justify-between justify-center lg:mt-16 mt-10 md:flex-row w-full'>
                    <motion.div
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className='lg:w-1/2 w-full lg:p-8'>
                        <div className='flex items-center justify-center w-full'>
                            <img className='rounded-2xl' src={AboutPic} alt="About" />
                        </div>
                    </motion.div>
                    <motion.div 
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className='lg:w-1/2 w-full lg:p-8'>
                        <p className='lg:max-w-xl max-w-full tracking-tight my-2 py-2'>{ABOUT_TEXT}</p>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default About