import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import tripyIcon from '../assets/images/tripyAi_icon.svg'

const Footer = () => {
  return (
    <div className='w-full min-h-[15vh] lg:min-h-[5vh] grid grid-cols-1 lg:flex justify-between px-20 relative mb-20 lg:my-0'>
        <div className='flex items-center justify-center lg:justify-start order-1 py-10'>
            <img src={tripyIcon} alt="tripy_img" className='w-[40%] lg:w-[10%]'/>
        </div>
        <div className='flex items-center justify-center gap-10 order-2 pb-5 lg:pb-0'>
            <BsTwitterX size={20} className='cursor-pointer'/>
            <FaTelegramPlane size={20} className='cursor-pointer'/>
            <SiAppstore size={20} className='cursor-pointer'/>

        </div>
        <div
          className="absolute inset-0 bg-[#fff] opacity-[0.07] rounded-full blur-xl z-0 flex items-center justify-center"
          style={{
            height: "80%",
            width: "100%",
            top: "10%", // Positioning the div in the center vertically
          }}
        ></div>
    </div>
  )
}

export default Footer