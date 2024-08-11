import React, { useEffect, useState } from 'react'
import './Header.css'
import { IoSearch } from 'react-icons/io5'
import { FaUser } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'
import { MdMail } from 'react-icons/md'
import { FiAlignJustify } from 'react-icons/fi'
import { Link } from 'react-scroll'
const Header = () => {

  const [sticky,setSticky]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 20 ? setSticky(true) : setSticky(false);
    })
  },[]);
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
      <header className={`position-fixed w-100 z-10 left-0   top-0  ${sticky ? "a_bg_red":""}`}>
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
              
              <ul className='a_nav_link mobile_menu flex gap-5 justify-end  align-items-center'>
                <li><Link to='home'  smooth={true} offset={-150} duration={500}>HOME</Link></li>
                <li> <Link to='service'  smooth={true} offset={-200} duration={500}>SERVICES</Link></li>
                <li> <Link to='about'  smooth={true} offset={-250} duration={500}>ABOUT</Link></li>
                <li> <Link to='contact'  smooth={true} offset={-170} duration={500}>CONTACT US</Link></li>
                <li > <Link  className='flex gap-1  align-items-center' to=''  smooth={true} offset={-50} duration={500}><FaUser />LOGIN</Link></li>
                <li> <Link to=''  smooth={true} offset={-50} duration={500}><IoSearch /></Link></li>
              </ul>
             
              <div className='flex gap-4 '>
                <IoSearch size={20} className=" Menu_icons lg:hidden " />
                <FiAlignJustify size={20}  onClick={() => setData(!data)} className=" Menu_icons lg:hidden " />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* mobile menu  */}
      <ul className={` ${data ? " a_menubar" : " a_menu_li"}  lg:hidden  a_mobile_status `}>
        <li><Link>Home</Link></li>
        <li><Link>SERVICES</Link></li>
        <li><Link>ABOUT</Link></li>
        <li><Link>CONTACT US</Link></li>
        <li ><Link className='flex gap-1  align-items-center'><FaUser />LOGIN</Link></li>

      </ul>
    </>
  )
}

export default Header