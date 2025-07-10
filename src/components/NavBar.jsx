import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

function NavBar() {
  return (
    <>
      <div className='flex items-center justify-between py-7'>
        <div>
          <h1> Salomi </h1>
        </div>
        <div className='flex gap-x-5 text-2xl'>
          <FaLinkedin />
          <FaGithub />
          <FaSquareXTwitter />
          <FaInstagram />

        </div>
      </div>
    </>
  )
}

export default NavBar