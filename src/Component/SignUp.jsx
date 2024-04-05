import React from "react";
import Image from "../Images/signupImage.jpeg"
import Form from "./Form";

const SignUp = () => {
  return (
   <div className="w-full h-[100vh] flex">
    {/* left side container */}
           <div className=" relative h-[100vh] w-[40%] bg-[#F2D884] hidden lg:block">
            <div className=" absolute w-full top-28 left-14 xl:left-40">
              
              <h1 className="w-[18rem] text-[20px] font-extrabold text-[#846115]">Discover the world's top Designers & Creatives.</h1>
            </div>
              <div className="h-full">
                <img src={Image} alt="" className="h-full object-contain" />
              </div>
           </div>
           {/* right side container */}
           <div className="w-full lg:w-[60%] ">
              <div className=" h-14 w-full text-right">
                <h1 className="text-[18px] mt-4 mr-2 font-semibold">Already a member? <a href="#" className="text-blue-800">Sign In</a></h1>
              </div>

              <div className="h-auto w-[90%] md:w-[60%] mx-auto">
                <Form/>         
              </div>
           </div>
   </div>
  );
};

export default SignUp;