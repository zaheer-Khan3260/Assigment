import React, { useState } from 'react';
import logoImage from "../Images/logo.png"
import {useNavigate} from "react-router-dom"
import cameraImage from "../Images/camera.png"


const DribbbleSignupPage = () => {

  const [preview, setPreview] = useState(null);
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const isFormValid = preview && location;

  return (
    <div className="w-full h-screen bg-white pointer-cursor">
      {/* logo cont */}
      <div className='w-full lg:h-20 h-14 '>
        <div className='w-36 h-12 mt-7 ml-8'>
          <img src={logoImage} alt="" className='' />
        </div>
      </div>
      {/* form container */}
      <div className='w-[80%] md:w-[60%] mx-auto h-auto mt-1'>
        <div className='mt-5'>
          <h1 className='text-[30px] font-extrabold'>Welcome! Let's create your profile</h1>
          <h3 className='mt-1 font-normal'>Let other get to know you better! You can do these later</h3>
        </div>
        <div className='mt-10 mb-6'>
          <h1 className='text-[22px] font-bold'>Add an avatar</h1>
        </div>
        {/* Input file cont */}
        <div className='h-60 w-full flex xl:w-[60%]'>
          <div className='w-[60%] md:w-[50%] lg:w-[40%]'>
            <div className={`w-[10rem] h-[10rem]  md:w-[12rem] md:h-[12rem] ${!preview ? `border-2 border-[#9e9e9e] border-dashed` : ``} flex justify-center items-center rounded-full`}>
              {
                preview ? <img src={preview} alt="" className='w-full h-full object-cover rounded-full' /> :
                  <img src={cameraImage} alt="" className='w-8 h-8' />
              }
            </div>
          </div>
          <div className='w-[40%] md:w-[50%] lg:w-[60%]'>
            <div className='mt-9 ml-4 relative'>
              <div className='absolute border-2 border-[#a8a8a8] w-32 h-10 rounded-lg pt-[0.35rem] px-2 font-semibold cursor-pointer'>
                Choose image
              </div>
              <input type="file" name="image" id="images" accept='image/*' onChange={handleImageChange} className=' text-transparent absolute opacity-0 w-40 h-12 cursor-pointer border-2 border-black' />

            </div>
            <div className='mt-24 ml-5 md:ml-4 text-[14px] font-semibold text-[#7a7a7a]'>
              <span></span>or choose one of our defaults
            </div>
          </div>
        </div>
        {/* location cont */}
            <div className=' w-full mt-2'>
                <div className='text-[22px] font-bold'>
                  Add your location 
                </div>
                <input type="text" value={location} onChange={handleLocationChange}
                placeholder='Enter a location' className='w-full xl:w-[25rem] border-b-2 mt-4 border-[#a8a8a8] mb-5 h-10 outline-none' />
            </div>

            <div
            onClick={() => {
              if(isFormValid) navigate("/RoleChoos")}}
            className={`border-2 ${isFormValid ? 'border-[#EA4B8A] bg-[#EA4B8A]' : 'border-[#F8B8D0] bg-[#F8B8D0]'} w-48 text-white text-center py-1 font-semibold mt-9 h-9 rounded-lg`}
            >
              Next
            </div>
            <div className={`${isFormValid ? `block` : `hidden`} text-[13px] mt-2 w-48 text-center font-semibold text-[#a8a8a8]`}>or Press RETURN</div>
      </div>
    </div>
  );
};

export default DribbbleSignupPage;