import React from 'react'
import { CONTACT } from '../constants'
import { motion } from "framer-motion"


const Contact = () => {
  return (
    <>
      <motion.div
        className='border-b border-neutral-900 pb-5'>
        <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }}
          className='text-center text-4xl my-10'>Get In Touch</motion.h1>
        <div className='flex flex-col gap-3 items-center pb-10'>
          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className='text-neutral-400 text-sm'>{CONTACT.address}</motion.p>
          <motion.p
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 1 }}
            className='text-neutral-400 text-sm'>{CONTACT.phoneNo}</motion.p>
          <motion.a whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            className='text-neutral-400 text-sm border-b' href="#">{CONTACT.email}</motion.a>
        </div>
      </motion.div>
    </>
  )
}

export default Contact