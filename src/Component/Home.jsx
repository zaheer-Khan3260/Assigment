import React from 'react';
import mail from "../Images/receive.png"
import Header from './Header';
import Footer from './Footer';
const Home = () => {
  return (
    <div className="p-4 w-full mx-auto text-center mt-12">
      <h2 className="text-2xl font-bold mb-2">Please verify your email...</h2>
      <img src={mail} alt="" className='w-40 mx-auto' />
      <p className="mb-4">
       Please verify your email We've sent a confirmation email to: <br className="sm:block hidden mt-4" />
        <span className="font-bold ">account@refero.design</span>
      </p>
      <p className="mb-4">
        Click the confirmation link in that email to begin using Dribbble.
      </p>
      <p className="mb-4">
        Didn't receive the email? Check your Spam folder, it may have been caught by a filter.
        <br />
        If you still don't see it, you can <button className="underline text-[#EA4B8A] font-semibold">resend the confirmation email</button>.
      </p>
      <p className="mb-4">Wrong email address? <button className="underline text-[#EA4B8A] font-semibold">Change it</button>.</p>
    </div>
    
  );
};

export default Home;