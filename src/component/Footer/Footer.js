import React from 'react'
import './Footer.css'
import {  FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#04233B] py-5'>
        <div className='container text-white'>
             <h6 className='text-center'>anirudhashelke698@gmail.com</h6>
             <div className='flex gap-2 justify-center mt-4 a_footer'>
             <h5><FaFacebookF /></h5>
            <h5> <FaInstagram /></h5>
            <h5> <FaTwitter /></h5>
            <h5> <FaLinkedinIn /></h5>
             </div>
        </div>
    </div>
  )
}

export default Footer