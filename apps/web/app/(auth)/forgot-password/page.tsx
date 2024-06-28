"use client";
import { useState } from "react";
import log_img from '../../../public/Forgot password.png'
import Image from "next/image";

import { Alata } from "next/font/google";
import React from "react";

export const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
export default function Page(): JSX.Element {
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, confirmPassword] = useState<string>("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     confirmPassword(event.target.value);
  };

  const handleClick = async () => {
    const registerData = {
      password,
      confirmpassword,
    };

    console.log(registerData);

  };
  return (
    <main className='w-full h-screen flex' >
    <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[500px] sm:max-w-[900px] rounded-2xl'>
       <div className='w-full  h-[450px] hidden md:block '>
         <Image className="w-full mt-14 ml-2 h-[380px]" src={log_img} alt="/" />   
       </div>
       <div className='p-4 flex flex-col justify-around'> 
           <form>
               <h2 className='text-4xl font-medium text-center mb-10'>Forgot <span className='text-violet-700'>Password</span></h2>
               <div>

                   <input 
                   className='border p-2 w-full mt-4 rounded-xl bg-gray-300' 
                   type='password' 
                   placeholder='Enter New Password' 
                   value={password}
                   onChange={handlePasswordChange}
                   />
               
               </div>               
               <div>
                   <input 
                   className='border p-2 w-full mt-4 rounded-xl bg-gray-300 ' 
                   type='password' 
                   placeholder='Confirm Password' 
                   value={confirmpassword}
                   onChange={handleConfirmPasswordChange}
                   />
               
               </div>
               <button 
               className=" w-44 mt-7 ml-20 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2 rounded-xl  bg-violet-700 text-white text-lg font-bold"
               key="1"
               onClick={handleClick}
               >Update Password
               </button>               

               </form>
       </div>
    </div>
</main>

  );


}