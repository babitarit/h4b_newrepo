"use client"
import { useParams } from "next/navigation"
import log_img from'../../../../public/OTP.png'
import Image from "next/image";

export default function page() {
    const params = useParams()
    return (
        // <div>
        //     <div>OTP PAGE {params.email}</div>
        // </div>
        <div className='w-full h-screen flex' >
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[350px]sm:max-w-[800px] rounded-2xl'>
           <div className='w-full h-[350px] hidden md:block '>
            <Image className='w-full h-[320px]' src={log_img} alt = "/" />   
           </div>
           <div className='p-4 flex flex-col justify-around'> 
               <form>
                   <h2 className='text-4xl font-medium text-center mb-8'>Enter Your <span className='text-violet-700'>OTP</span></h2>
                   <div>
                       <input 
                       className='border p-2 w-full mb-3 rounded-xl bg-gray-300 ' 
                       type='text' 
                       placeholder='Enter Your OTP' />
                   </div>
                   <button className=" w-full mt-4 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2 rounded-xl  bg-violet-700 text-white text-lg font-bold">Verify OTP</button>
                   <div className='mt-9 flex justify-center items-center'>
                   <p className="font-medium text-base"> Did not get an OTP?</p>
                   <button className="text-violet-700 text-base font-medium ml-2">Resend</button>
                   </div>
               </form>
           </div>
        </div>
    </div>

    )

}