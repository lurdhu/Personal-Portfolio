import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion"


const Experience = () => {
    return (
        <>
            <div className='border-b border-neutral-900 lg:pb-10 pb-6'>
                <motion.h1 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className='text-4xl text-center my-10'> Experience</motion.h1>
                <div>
                    {
                        EXPERIENCES.map((experience, index) => (
                            <div key={index} className='flex items-start justify-center mb-8 flex-col lg:flex-row'>
                                <motion.div
                                    whileInView={{ x: 0, opacity: 1 }}
                                    initial={{ x: -100, opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className='w-full lg:w-1/4'>
                                    <p className='text-sm mb-2 text-neutral-400'>{experience.year}</p>
                                </motion.div>
                                <motion.div
                                    whileInView={{ x: 0, opacity: 1 }}
                                    initial={{ x: 100, opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className='w-full max-w-xl lg:w-3/4'>
                                    <h6 className='mb-2 font-semibold'> {experience.role}-<span className='text-sm text-purple-100'>{experience.company} </span></h6>
                                    <p className='text-sm text-neutral-400 mb-4'>{experience.description}</p>
                                    <p className='flex items-center flex-wrap'>
                                        {experience.technologies.map((tech, index) => (
                                            <span key={index} className='lg:mr-4 mr-2 rounded-md py-1 px-2 text-sm lg:font-medium bg-neutral-900 text-purple-600 mt-2'>
                                                {tech}
                                            </span>
                                        ))}
                                    </p>
                                </motion.div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Experience