import React, { useState } from 'react';
import logo from "../Images/logo.png"
import menu from "../Images/burgerMenu.png"
import close from "../Images/delete.png"
import search from "../Images/search.png"
import bagImage from "../Images/rejected.png"
import userImage from "../Images/user.png"
function Header() {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const menuToggle = () => {
    setIsNavbarActive(!isNavbarActive);
  }
  return (
    <header className="bg-white relative lg:static text-gray-800 flex justify-between lg:justify-normal w-full h-14 items-center cursor-pointer">
     {/* logo container */}
     <div className=' w-full md:w-[40%] lg:w-[8rem] md:ml-2 flex justify-between  '>
      <img src={menu} alt="" className='w-10 mr-2 lg:hidden' onClick={menuToggle} />
    <img src={logo} alt="" className='w-[6rem] hidden md:block ' />
     </div>
     {/* navintems cont */}
     <div  className=' w-full px-5 hidden lg:block '>
            <ul className='flex font-semibold text-[#3d3d3d]'>
                <li className=''>Inspiration</li>
                <li className='mx-4'>Find Work</li>
                <li className='mx-2'>Learn Design</li>
                <li className='mx-4'>Go Pro</li>
                <li className='mx-2'>Hire Designers</li>
            </ul>
     </div>
     {/* right side container */}
     <div  className=' relative h-full w-full md:w-auto py-2 flex justify-end '>
            <div className=''>
                <img src={search} alt="" className=' absolute w-5 top-4' />
               
                <input type="search" name="" id="" placeholder='Search'
                 className='w-28 md:w-32 bg-[#dadada] font-semibold text-[18px] text-black border-2 border-[#dadada] rounded-md outline-none
                 h-9 pl-6' />
            </div>
            <div className='w-8 ml-1 md:ml-3 mt-1'>
                <img src={bagImage} alt=""  />
            </div>
            <div className='w-10 h-10 border-2 border-black ml-1 md:ml-3 mt-[-4px] rounded-full'>
           <img src={userImage} alt="" className='rounded-full object-cover' />
            </div>
            <div className='w-20 md:w-24 ml-1 md:ml-3 mt-[-3px] h-10 border-2 border-[#EA4B8A] bg-[#EA4B8A] rounded-md px-3 md:px-4 pt-[0.30rem] font-semibold text-white '>
             Upload
            </div>
     </div>
     {/* slide navbar cont */}
        <div className={`absolute left-0 w-[13rem] h-screen border-2 border-[#c5c5c5] inset-0 z-20 backdrop-filter backdrop-blur-sm ${isNavbarActive ? `block` :  `hidden`}`}>
          <div className='w-full flex justify-between md:justify-end'>
            <img src={logo} alt="" className={`w-24 h-8 mt-2 ml-2 md:hidden`} />
           <img src={close} alt="" className='w-6 mt-4 mr-4 cursor-pointer'onClick={menuToggle} />
          </div>
        <ul className='font-semibold text-[#3d3d3d] pl-6 cursor-pointer'>
                <li className='my-4'>Inspiration</li>
                <li className='my-2'>Find Work</li>
                <li className='my-4'>Learn Design</li>
                <li className='my-2'>Go Pro</li>
                <li className='my-4'>Hire Designers</li>
            </ul>
        </div>
    </header>
  );
}

export default Header;