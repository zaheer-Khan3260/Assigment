import React, { useState } from "react";
import logo from "../Images/logo.png"
import left from "../Images/left.png"
import {useNavigate} from "react-router-dom"
import firstCardImage from "../Images/firstCard.png"
import secondCardImage from "../Images/secondCard.png"
import thirdCardImage from "../Images/thirdCard.png"

const DribbbleIntroPage = () => {
  const [firstCard, setFirstCard] = useState(false);
  const [secondCard, setSecondCard] = useState(false);
  const [thirdCard, setThirdCard] = useState(false);
  const navigate = useNavigate();
  

  const firstCardtoggle = () => {
    setFirstCard(!firstCard);
  }
  const secondCardtoggle = () => {
    setSecondCard(!secondCard);
  }
  const thirdCardtoggle = () => {
    setThirdCard(!thirdCard);
  }
  const isFormValid = firstCard || secondCard || thirdCard; 
  return (
    <div className="w-full h-auto bg-white">
      {/* logo container */}
      <div className=" w-full h-15 flex">
        <div className="w-24 ml-4 mt-6">
          <img src={logo} alt="" />
        </div>
        <div className="w-8 h-8 ml-8 rounded-md border-2 border-gray-200 bg-gray-200 mt-6"
        onClick={() => {navigate("/AvatarChoose")}}
        >
          <img src={left} alt="" className="w-3 mt-[0.50rem] ml-[0.45rem]" />
        </div>
      </div>

      {/* form container
       */}
      <div className=" w-full h-screen ">
        {/* upper cont */}
        <div className="w-full h-28 text-center mt-10">
          <h1 className="text-[35px] font-bold mx-3">What brings you to Dribbble?</h1>
          <h4 className="mt-2 font-semibold opacity-70 mx-2">Select the option that best describe you. Don't worry, you can explore other option later.</h4>
        </div>

        {/* Lower cont */}
        {/* first cont */}
        <div className=" w-full h-auto mt-16 flex justify-center items-center flex-wrap">
          <div className={`border-2 ${firstCard ? `border-[#EF4889]` : `border-[#e4e4e4]`} w-[16rem] h-[16rem] mt-6 rounded-xl text-center`}>
            <img src={firstCardImage} alt="" className={`${firstCard ? `mt-[-2rem]` : `mt-6`} transition-all duration-300`} />
            <div className=" mx-4 font-bold mt-3">
              I'm a designer looking to share my work
            </div>
            <div className={`mt-3 ${firstCard ? `block` : `hidden`}`}>
              <p className="text-[12px] font-semibold text-[#474747]"> With over 7 million shots from a vast community of designers, Deibbble is
                the leading source for design inspiration.</p>
            </div>
            <div className="w-full mt-3" onClick={firstCardtoggle}>
              <div className={` w-6 h-6 border-2 border-[#e4e4e4] mx-auto rounded-full ${firstCard ? `bg-[#EF4889]` : `bg-white`} `}></div>
            </div>
          </div>
          {/* second cont */}
          <div className={`border-2 md:ml-6  mt-6 ${secondCard ? `border-[#EF4889]` : `border-[#e4e4e4]`} w-[16rem] h-[16rem] rounded-xl text-center`}>
            <img src={secondCardImage} alt="" className={`${secondCard ? `mt-[-2rem]` : `mt-6`} transition-all duration-300`} />
            <div className=" mx-4 font-bold mt-3">
              I'm looking to hire a designer
            </div>
            <div className={`mt-3 ${secondCard ? `block` : `hidden`}`}>
              <p className="text-[12px] font-semibold text-[#474747]"> With over 7 million shots from a vast community of designers, Deibbble is
                the leading source for design inspiration.</p>
            </div>
            <div className="w-full mt-3" onClick={secondCardtoggle}>
              <div className={` w-6 h-6 border-2 border-[#e4e4e4] mx-auto rounded-full ${secondCard ? `bg-[#EF4889]` : `bg-white`} `}></div>
            </div>
          </div>
          {/* third cont */}
          <div className={`border-2 lg:ml-6 lg:mt-6  mt-10 ${thirdCard ? `border-[#EF4889]` : `border-[#e4e4e4]`} w-[16rem] h-[16rem] rounded-xl text-center`}>
            <img src={thirdCardImage} alt="" className={`${thirdCard ? `mt-[-3rem]` : `mt-2`} transition-all duration-300`} />
            <div className=" mx-4 font-bold mt-3">
              I'm looking for design inspiration
            </div>
            <div className={`mt-3 ${thirdCard ? `block` : `hidden`}`}>
              <p className="text-[12px] font-semibold text-[#474747]"> With over 7 million shots from a vast community of designers, Deibbble is
                the leading source for design inspiration.</p>
            </div>
            <div className="w-full mt-3" onClick={thirdCardtoggle}>
              <div className={` w-6 h-6 border-2 border-[#e4e4e4] mx-auto rounded-full ${thirdCard ? `bg-[#EF4889]` : `bg-white`} `}></div>
            </div>
          </div>
        </div>
        <div className=" w-full mt-8 h-32 text-center">
        <div className={`${isFormValid ? `block` : `hidden`} mx-auto text-[16px] mt-2 w-72 text-center font-bold`}>Anything else? You can select multiple</div>

        <div
            className={`border-2 mx-auto ${isFormValid ? 'border-[#EA4B8A] bg-[#EA4B8A] mt-5 ' : 'border-[#F8B8D0] bg-[#F8B8D0] mt-[3.25rem] pointer-events-none'} w-48 text-white text-center py-1 font-semibold h-9 rounded-lg`}
              onClick={() => {navigate("/Home")}}
            >
              Finish
            </div>
            <div className={`${isFormValid ? `block` : `hidden`} mx-auto text-[13px] mt-2 w-48 text-center font-semibold text-[#a8a8a8]`}>or Press RETURN</div>
        </div>
      </div>
    </div>
  );
};

export default DribbbleIntroPage;