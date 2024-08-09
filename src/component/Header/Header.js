import React, { useState } from 'react'
import './Header.css'
import { IoSearch } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'
import { FiAlignJustify } from 'react-icons/fi'
const Header = () => {
  // const data=[
  //     {
  //       icons:<IoMdCall />,
  //       title:"Call : +01 123455678990"
  //     },
  //     {
  //       icons:<IoMdCall />,
  //       title:"Call : +01 123455678990"
  //     },
  //     {
  //       icons:<IoMdCall />,
  //       title:"Call : +01 123455678990"
  //     },
  //   ]

  const [data, setData] = useState(false)
  return (
    <>
      <header>
        <div className="container mt-3">
          <div className="row justify-around  a_top_header bg-[#04233B] py-3">
            {/* {data.map(({icons,title},index)=>{
        return <div className='col-12 col-md-4 flex align-items-center    gap-2 bg-[#04233B] py-3'>
        <h6 className='text-[#0A97B0] w-[25px] h-[25px] bg-[#fff] rounded-full flex justify-center align-items-center hover:text-[#000]'>{icons} </h6>
       <h5 className='text-[#ffffff] text-[15px]'> {title}</h5>
     </div>
        })} */}


            <div className='col-12 col-md-4 flex align-items-center a_top_header_box    gap-2 '>
              <h6 className='text-[#0A97B0] w-[25px] h-[25px] bg-[#fff] rounded-full flex justify-center align-items-center hover:text-[#000]'><IoMdCall /></h6>
              <h5 className='text-[#ffffff] text-[15px]'> Call : +01 123455678990</h5>
            </div>
            <div className='col-12 col-md-4 a_top_header_box flex align-items-center   justify-center gap-2  '>
              <h6 className='text-[#0A97B0] w-[25px] h-[25px] bg-[#fff] rounded-full flex justify-center align-items-center hover:text-[#000]'><MdMail /></h6>
              <h5 className='text-[#ffffff] text-[15px]'>Email : mail@domain.com</h5>
            </div>
            <div className='col-12 col-md-4 a_top_header_box flex align-items-center  justify-end   gap-2  '>
              <h6 className='text-[#0A97B0] w-[25px] h-[25px] bg-[#fff] rounded-full flex justify-center align-items-center hover:text-[#000]'><FaLocationDot /></h6>
              <h5 className='text-[#ffffff] text-[15px]'> Location</h5>
            </div>
          </div>
          <div className="row a_header_mobile justify-between py-4">
            <div className='col-12 col-md-1 a_col'><h5 className='text-[24px] a-700'>Carint</h5></div>
            <div className='col-12 col-md-7 a_col '>
              {/* <nav className=''> */}
              <ul className='a_nav_link mobile_menu flex gap-5 justify-end  align-items-center'>
                <li><a href="#">HOME</a></li>
                <li><a href="#">SERVICES</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">CONTACT US</a></li>
                <li ><a href="#" className='flex gap-1  align-items-center' ><FaUser />LOGIN</a></li>
                <li><a href="#"><IoSearch /></a></li>
              </ul>
              {/* </nav> */}
              <div className='flex gap-4'>
                <IoSearch className=" Menu_icons lg:hidden " />
                <FiAlignJustify onClick={() => setData(!data)} className=" Menu_icons lg:hidden " />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* mobile menu  */}
      <ul className={` ${data ? " a_menubar" : " a_menu_li"}  lg:hidden  a_mobile_status `}>
        <li><a href="#">HOME</a></li>
        <li><a href="#">SERVICES</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT US</a></li>
        <li ><a href="#" className='flex gap-1  align-items-center' ><FaUser />LOGIN</a></li>

      </ul>
    </>
  )
}

export default Header