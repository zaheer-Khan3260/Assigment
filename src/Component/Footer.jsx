import React from "react";
import logo from "../Images/logo.png"
import twitter from "../Images/twitter.png"
import instagram from "../Images/instagram.png"
import facebook from "../Images/facebook.png"
import pinterest from "../Images/pinterest-logo.png"

const Footer = () => {
  return (
    <>
    <footer className="w-full border-t-2 border-[#d8d8d8]  h-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between pt-11 px-4 xl:px-10 text-[15px]">
     <div className="w-full lg:w-full lg:pl-2 xl:pl-8 xl:pr-4">
    <img src={logo} alt="" className="w-32 mx-auto lg:mx-0 mb-8" />
      <h4 className="text-[13px] font-semibold mt-3 w-60 text-[#494949] hidden lg:block" >
        Dribbble is the world's leading community for creatives to share, grow, and get hired.
      </h4>
      <div className=" w-full mt-4 hidden lg:flex"> 
        <img src={twitter} alt="" className="w-6 h-6 mx-1"/>
        <img src={facebook} alt="" className="w-6 h-6 mx-1"/>
        <img src={instagram} alt="" className="w-6 h-6 mx-1"/>
        <img src={pinterest} alt="" className="w-6 h-6 mx-1"/>
      </div>
     </div>
     <div className=" mx-3 my-2 lg:mx-0 lg:w-full">
      <div className="font-semibold text-[18px]">For designers</div>
      <ul className="text-[13px] font-semibold text-[#6b6b6b] hidden lg:block ">
        <li className="mt-3">Go Pro!</li>
        <li className="mt-3">Explore design work</li>
        <li className="mt-3">Design blog</li>
        <li className="mt-3">Overtime podcast </li>
        <li className="mt-3">Playoffs</li>
        <li className="mt-3">Weekly Warm-Up</li>
        <li className="mt-3" >Refer a Friend</li>
        <li className="mt-3">Code of conduct</li>
       

      </ul>
     </div>
     <div className=" mx-3 my-2 lg:mx-0 lg:w-full">
     <div className="font-semibold text-[18px]">Hire Designers </div>
      <ul className="text-[13px] font-semibold text-[#6b6b6b] hidden lg:block">
        <li className="mt-3">Post a job opening</li>
        <li className="mt-3">Post a freelance Project</li>
        <li className="mt-3">Search for designers</li>
        <li className="mt-6 text-black text-[18px]">Brands </li>
        <li className="mt-3">Advertise with us</li>
        
      </ul>
     </div>
     <div className=" mx-3 my-2 lg:mx-0 lg:w-full">
     <div className="font-semibold text-[18px]">Company</div>
      <ul className="text-[13px] font-semibold text-[#6b6b6b] hidden lg:block">
        <li className="mt-3">About</li>
        <li className="mt-3">Careers</li>
        <li className="mt-3">Support</li>
        <li className="mt-3">Media kit</li>
        <li className="mt-3">Testimonials</li>
        <li className="mt-3">API</li>
        <li className="mt-3" >Terms of service</li>
        <li className="mt-3">Privacy policy</li>
        <li className="mt-3">Cookie policy</li>
      </ul>
     </div>
     <div className=" mx-3 my-2 lg:mx-0 lg:w-full">
     <div className="font-semibold text-[18px]">Directories</div>
      <ul className="text-[13px] font-semibold text-[#6b6b6b] hidden lg:block">
        <li className="mt-3">Design jobs</li>
        <li className="mt-3">Designers for hire</li>
        <li className="mt-3">Freelance designers for hire</li>
        <li className="mt-3">Tags</li>
        <li className="mt-3">Places</li>
        <li className="mt-5 font-semibold text-black text-[18px]">Design assets</li>
        <li className="mt-3" >Dribbble Marketplace</li>
        <li className="mt-3">Creative Market</li>
        <li className="mt-3">Fontspring</li>
        <li className="mt-3">Font Squirrel</li>

      </ul>
     </div>
     <div className=" mx-3 my-2 lg:mx-0 lg:w-full">
     <div className="font-semibold text-[18px]">Design Resources</div>
      <ul className="text-[13px] font-semibold text-[#6b6b6b] hidden lg:block">
        <li className="mt-3">Freelancing</li>
        <li className="mt-3">Design Hiring</li>
        <li className="mt-3">Design Portfolio</li>
        <li className="mt-3">Design Education</li>
        <li className="mt-3">Creative Process</li>
        <li className="mt-3">Design Industry Trends</li>
      </ul>
     </div>
     <div className="flex w-full justify-center mt-8 lg:hidden"> 
        <img src={twitter} alt="" className="w-6 h-6 mx-1"/>
        <img src={facebook} alt="" className="w-6 h-6 mx-1"/>
        <img src={instagram} alt="" className="w-6 h-6 mx-1"/>
        <img src={pinterest} alt="" className="w-6 h-6 mx-1"/>
      </div>
      <div className="container mx-auto flex lg:hidden justify-center items-center pt-5 mb-5 mt-5 border-t-2 border-[#d8d8d8]">
        <p className="text-sm">&copy; 2023 Dribbble. All rights reserved.</p>
      </div>
    </footer>
    <div className="container mx-auto justify-center items-center pt-5 mb-5 mt-5 border-t-2 border-[#d8d8d8] hidden lg:flex">
    <p className="text-sm">&copy; 2023 Dribbble. All rights reserved.</p>
  </div>
  </>
  );
};

export default Footer;