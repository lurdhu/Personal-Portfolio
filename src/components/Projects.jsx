import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from "framer-motion"


const Projects = () => {
    return (
        <>
            <div className='border-b border-neutral-900 lg:pb-10 pb-5'>
                <motion.h1 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className='text-4xl text-center my-10 '> Projects </motion.h1>
                <div>
                    {
                        PROJECTS.map((project, index) => (
                            <div key={index} className='flex lg:mb-8 mb-4 justify-center items-start flex-wrap'>
                                <div className='w-full lg:w-1/4'>
                                    <motion.div
                                        whileInView={{ x: 0, opacity: 1 }}
                                        initial={{ x: -100, opacity: 0 }}
                                        transition={{ duration: 1 }}
                                        className='w-full h-full'>
                                        <img className='rounded-2xl mb-6 w-40 h-40' src={project.image} alt={project.title} />
                                    </motion.div>
                                </div>
                                <motion.div
                                    whileInView={{ x: 0, opacity: 1 }}
                                    initial={{ x: 100, opacity: 0 }}
                                    transition={{ duration: 1 }} className='max-w-xl w-full lg:w-3/4 flex flex-col gap-y-4'>
                                    <h2 className='font-semibold'>{project.title}</h2>
                                    <p className='text-sm font-medium text-neutral-400'>{project.description}</p>
                                    <div className='flex'>
                                        {project.technologies.map((tech, index) => (
                                            <span key={index} className='lg:mr-4 mr-2 rounded-md py-1 px-2 text-sm font-medium bg-neutral-900 text-purple-600 mt-2'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                </motion.div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Projects