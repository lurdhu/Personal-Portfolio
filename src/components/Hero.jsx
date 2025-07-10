import React from 'react'
import { HERO_CONTENT } from '../constants'
import ProfilePic from '../assets/kevinRushProfile.jpg';
import { motion } from "framer-motion"

const containers = (delay) => ({
        hidden: {x:-100, opacity : 0},
        visible: {
            x:0,
            opacity:1,
            transition:{duration:0.5, delay: delay}
        },
        
    }
)

const Hero = () => {
    return (
        <>
            <div className='pb-5 border-b border-neutral-900'>
                <div className='flex lg:mt-16 lg:pb-10 justify-between lg:max-w-7xl mx-auto flex-wrap'>
                    <div className='flex flex-col items-start gap-4 mt-16 lg:w-1/2 w-full'>
                        <motion.h1 
                        variants={containers(0)} 
                        initial="hidden"
                         animate="visible" 
                         className='font-thin tracking-tight lg:text-6xl text-5xl lg:pb-10 pb-5'>
                            Lourdu Saleth Mary
                        </motion.h1>
                        <motion.span variants={containers(0.5)} initial="hidden" animate='visible' className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text lg:text-4xl text-3xl tracking-tight text-transparent'>Frontend Developer</motion.span>
                        <motion.p variants={containers(1)} initial="hidden" animate='visible' className='max-w-xl my-2 font-light py-2'>{HERO_CONTENT}</motion.p>
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <div className='flex justify-center w-full lg:mt-0 mt-3'>
                            <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1.2}}  className='rounded-2xl max-w-full' src={ProfilePic} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero