import React, { useState } from 'react'

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
const [hotel,setHotel] = useState(false)
const [pages,setPages] = useState(false)
  const toggleMenu = () => {

    setIsOpen(prev => {
      return prev ? false : true
    })
    console.log(isOpen)
  }

  return (
    <div className='z-50'>
      {/* //Header for Desktop*/}

      <div class='hidden mx-5 my-5 lg:mx-10 lg:my-5 lg:flex flex-wrap items-center justify-between gap-2 '>
        <Link href="javascript:void(0)" className='hidden lg:block lg:text-3xl text-slate-700'>
          {/* <img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' /> */}
          HOTEL BOOKING
        </Link>

        <div id="collapseMenu"
          class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            class='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li class='mb-6 hidden max-lg:block'>
              <Link href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' />
              </Link>
            </li>

            <li class='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
              <div>
                <FlyoutLink href="#" FlyoutContent={HotelContent} >
                  Hotel
                </FlyoutLink>

              </div>
            </li>

            <li class='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
              <FlyoutLink href="#" FlyoutContent={PagesContent} >
                Pages
              </FlyoutLink>
            </li>
            <li class='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link href='javascript:void(0)'
              class='hover:text-[#007bff] text-slate-700 block font-semibold text-[18px]'>Contact Us</Link>
            </li>
            <li class='max-lg:border-b border-gray-300 max-lg:py-3 px-3'><Link href='javascript:void(0)'
              class='hover:text-[#007bff] text-slate-700 block font-semibold text-[18px]'>About Us</Link>
            </li>

          </ul>
        </div>

        <div class='flex  lg:max-lg:ml-auto  lg:space-x-6 '>

          <button className='border rounded-full p-1 lg:p-2 lg:hover:p-[7px] bg-slate-700 text-white hover:bg-white hover:text-slate-700 hover:border-slate-700 hover:border-2'>  <FaShoppingBasket size={25} />
          </button>

          <button
            class='px-4 lg:py-1 rounded-md font-bold text-white border-2 border-slate-700 bg-slate-700 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] hidden lg:block'>Login</button>
          <button
            class='px-4 am:py-1  rounded-md font-bold text-white border-2 border-slate-700 bg-slate-700 transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] hidden lg:block'>Sign
            up</button>


        </div>
      </div>

      {/* //Header for Mobile*/}

      <div class='lg:hidden mx-5 my-5 flex flex-wrap items-center justify-between gap-2 '>

        <button onClick={toggleMenu} >
          <FaBars size={20} />
        </button>
        <Link href="javascript:void(0)" className='text-2xl font-medium text-slate-700'>
          {/* <img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' /> */}
          HOTEL BOOKING
        </Link>
        <button >
          <FaShoppingBasket size={23} /></button>
        <button >
          <FaRegUser size={18}/></button>


        {/* Sidebar */}
        {isOpen && (
          <div className='fixed inset-0 z-50 flex'>
            <div className='fixed inset-0 bg-black opacity-50' onClick={toggleMenu}></div>
            <div className='relative bg-white w-1/2 min-w-[300px] h-full p-6 shadow-md overflow-auto'>
              <button className='fixed top-2 right-4 z-50 rounded-full bg-white p-3' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-slate-800" viewBox="0 0 320.591 320.591">
                  <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000"></path>
                  <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000"></path>
                </svg>
              </button>
              <ul className='space-y-3'>
                <li className='mb-6'>
                  <Link href="javascript:void(0)" className='text-2xl font-medium text-slate-700'>
                    {/* <img src="https://readymadeui.com/readymadeui.svg" alt="logo" class='w-36' /> */}
                    HOTEL BOOKING
                  </Link>
                </li>
                <li className='border-b border-gray-300 py-3 px-3'>
                  <Link href='javascript:void(0)' onClick={()=>{
                    setHotel(!hotel)
                  }} className='flex justify-between items-center text-slate-700  font-semibold text-[18px]'>
                    Hotel <span> {hotel ? <FaAngleUp /> : <FaAngleDown/>}</span>
                  </Link>
                </li>
                {hotel &&
                <div class=""> 
                <li className='border-b border-gray-300 py-2 px-3'>Hotel Option 1</li>
                <li className='border-b border-gray-300 py-2 px-3'>Hotel Option 1</li>
                <li className='border-b border-gray-300 py-2 px-3'>Hotel Option 1</li>
                <li className='border-b border-gray-300 py-2 px-3'>Hotel Option 1</li>
   
  </div>
                                }
                                                <li className=' border-b border-gray-300 py-3 px-3'>
                  <Link href='javascript:void(0)' onClick={()=>{
                    setPages(!pages)
                  }} className='flex justify-between gap-1 items-center text-slate-700  font-semibold text-[18px]'>
                    Pages  <span>{pages ? <FaAngleUp /> : <FaAngleDown/>}</span>
                  </Link>
                </li>
                {pages &&
                <div class=""> 
                <li className='border-b border-gray-300 py-2 px-3'>Page Option 1</li>
                <li className='border-b border-gray-300 py-2 px-3'>Page Option 1</li>
                <li className='border-b border-gray-300 py-2 px-3'>Page Option 1</li>
                <li className='border-b border-gray-300 py-2 px-3'>Page Option 1</li>
   
  </div>}
                <li className='border-b border-gray-300 py-3 px-3'>
                  <Link href='javascript:void(0)' className=' text-slate-700  font-semibold text-[18px]'>
                    Contact Us
                  </Link>
                </li>
                <li className='border-b border-gray-300 py-3 px-3'>
                  <Link href='javascript:void(0)' className=' text-slate-700  font-semibold text-[18px]'>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>




  )
}

const FlyoutLink = ({ children, href, FlyoutContent }) => {

  const [open, setOpen] = useState(false)
  const showFlyout = open && FlyoutContent

  return (
    <div className='z-[1000] relative h-fit w-fit '
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link to={href} className='relative flex items-center gap-1 text-slate-700 font-semibold hover:text-[#007bff] text-[18px]'>
        {children} <span> <FaAngleDown /></span>
        <span
          style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
          //  border navbar
          className='bg-slate-700 absolute h-[5px] -bottom-3 -left-2 -right-2 rounded-full origin-left transition-transform duration-300 ease-out'>
        </span>
      </Link>

      <AnimatePresence>{showFlyout &&
        (<motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          style={{ translateX: "-50%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className='absolute  left-1/2  text-white top-14'>
          {/* // to work hover in the gap */}
          <div className='absolute h-6 -top-6 left-0 right-0 bg-transparent' />
          {/* add the arrow */}
          <div className='absolute h-4 w-4 bg-slate-800 top-0 left-1/2 rounded-[3px] -translate-x-1/2 -translate-y-1/2 rotate-45' />
          <FlyoutContent />
        </motion.div>
        )
      }
      </AnimatePresence>

    </div>

  )

}

const HotelContent = () => {
  return <div className=' w-60 rounded-md bg-slate-800 p-6 shadow-xl flex flex-col text-[18px] gap-2 text-start'>
    <Link to="/" className="text-white  text-[16px]  hover:underline hover:underline-offset-4 ">Search Hotel Half Map</Link>
    <Link to="/" className="text-white  text-[16px]  hover:underline hover:underline-offset-4 ">Search Hotel Popup Map</Link>
    <Link to="/" className="text-white  text-[16px]  hover:underline hover:underline-offset-4 ">Search Hotel Full Map</Link>
    <Link to="/" className="text-white  text-[16px]  hover:underline hover:underline-offset-4 ">Hotel Detail</Link>
    <Link to="/" className="text-white  text-[16px]  hover:underline hover:underline-offset-4 ">Room Detail</Link>


  </div>
}

const PagesContent = () => {
  return <div className='w-60 rounded-md bg-slate-800 p-6 shadow-xl flex flex-col text-[18px] gap-2 text-start'>
    <Link to="/" className="text-white  text-[16px]  hover:underline hover:underline-offset-4 ">Blogs</Link>
    <Link to="/" className="text-white  text-[16px]  hover:underline hover:underline-offset-4 ">Destinations</Link>
    <Link to="/" className="text-white  text-[16px]  hover:underline hover:underline-offset-4 ">Become Local Expert</Link>
    <Link to="/" className="text-white  text-[16px]  hover:underline hover:underline-offset-4 ">FAQs</Link>



  </div>
}

export default Header
