import React, {useState} from "react";

import { useNavigate } from "react-router-dom";

const Form = () => {
 const navigate = useNavigate();
 const [name, setName] = useState("");
 const [username, setUsername] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [formErrors, setFormErrors] = useState({});
 

 const handleSubmit = (event) => {
   event.preventDefault();
   const newErrors = {};
   if (!name) {
     newErrors.name = "Name is required";
   }
   if (!username) {
     newErrors.username = "Username is required";
   }
   if (!email.includes("@")) {
     newErrors.email = "Invalid email format";
   }
   if (password.length < 6) {
     newErrors.password = "Password must be 6 characters long";
   }
   setFormErrors(newErrors);
   if (Object.keys(newErrors).length === 0) {
     console.log("Submit: ", { name, username, email, password });
   }
 };
 const isValid = name && username && email && password;


 return (
  <form onSubmit={handleSubmit} className="mt-10">
       <div className="mt-6" >
                  <h1 className="text-[25px] font-extrabold">Sign up to Dribbble</h1>
                </div>
                <div className="ml-6 mt-3">
                  <ul className=" list-disc" ><li className="text-red-600 font-semibold">Username has already been taken</li></ul>
                </div>
      <div className="flex mt-10 w-full">
    <div className="mb-8">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
        Name
      </label>
      <input
        className="shadow appearance-none border rounded-xl w-[95%] h-11 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {formErrors.name && <p className="text-red-500 text-xs">{formErrors.name}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input
        className="shadow appearance-none border rounded-xl w-[100%] h-11 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {formErrors.username && <p className="text-red-500 text-xs">{formErrors.username}</p>}
    </div>
    </div>
    <div className="mb-8">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input
        className="shadow appearance-none border rounded-xl w-full xl:w-[26rem] h-11 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {formErrors.email && <p className="text-red-500 text-xs">{formErrors.email}</p>}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input
        className="shadow appearance-none border rounded-xl w-full xl:w-[26rem] h-11 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="password"
        type="password"
        value={password}
        placeholder="6+ character"
        onChange={(e) => setPassword(e.target.value)}
      />
      {formErrors.password && <p className="text-red-500 text-xs">{formErrors.password}</p>}
    </div>
      <div className=" relative xl:w-[26rem]">
          <input type="checkbox" name="" id="" className=" absolute top-[0.38rem] left-1" />
          <h2 className=" inline-block ml-6 font-semibold">
              Creating an account means you're okay with our <a href="#" className="text-blue-600">Terms of Service, Privacy Policy,</a>
              and default <a href="#" className="text-blue-600">Notification Setting</a>
          </h2>
      </div>

    <div className="flex justify-start mt-7">
      <button
        className={`bg-blue-500 mb-6 hover:bg-blue-700 text-white font-semibold py-3 px-8  rounded-lg focus:outline-none focus:shadow-outline`}
        type="submit"
        onClick={() => {
          if(isValid){
            navigate("/AvatarChoose")
          }
        }}
      >
        Create Account
      </button>
    </div>
  </form>
);
};

export default Form;