"use client"
import { useParams } from "next/navigation"
import log_img from'../../../../public/OTP.png'
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useVerifyLogin } from "../../../../hooks/useVerifyOtp";
import ButtonLoder from "../../../../components/ButtonLoder";

export default function page() {
      const { verify, error, isLoading, isSucess } = useVerifyLogin();
      const params = useParams<{ email: string }>();
      const email = decodeURIComponent(params.email);
      const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
      const refs = useRef<Array<HTMLInputElement | null>>([]);

      useEffect(() => {
        refs.current = refs.current.slice(0, otp.length);
      }, [otp]);

      const handleChange = (index: number, value: string) => {
        if (value.length > 1) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value === "" && index > 0 && refs.current[index - 1]) {
          refs.current[index - 1]?.focus();
        } else if (
          index < otp.length - 1 &&
          value.length > 0 &&
          refs.current[index + 1]
        ) {
          refs.current[index + 1]?.focus();
        }
      };

      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const otpValue = otp.join("");
        const verifydata = { email, otp: otpValue };
        await verify(verifydata);
      };

    return (
      <div className="w-full h-screen flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[350px]sm:max-w-[800px] rounded-2xl">
          <div className="w-full h-[350px] hidden md:block ">
            <Image className="w-full h-[100%]" src={log_img} alt="/" />
          </div>
          <div className="p-4 flex flex-col justify-around">
            <form onSubmit={handleSubmit}>
              <h2 className="text-4xl font-medium text-center mb-8">
                Enter Your <span className="text-violet-700">OTP</span>
              </h2>

              <div className="flex flex-col space-y-16">
                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-[27rem]">
                  {otp.map((value, index) => (
                    <div className="w-16 h-16" key={index}>
                      <input
                        ref={(el) => {
                          if (el && refs.current[index] !== el) {
                            refs.current[index] = el;
                          }
                        }}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-600 text-lg bg-white focus:bg-gray-50 focus:ring-1 focus:border-none ring-rose-700"
                        type="text"
                        value={value}
                        onChange={(e) => handleChange(index, e.target.value)}
                        maxLength={1}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-7">
                <button
                  disabled={isLoading}
                  className="flex flex-row items-center justify-center text-center w-full border rounded-xl hover:bg-indigo-400 outline-none py-5 bg-indigo-500 border-none text-white shadow-sm text-base font-semibold"
                >
                  {isLoading ? <ButtonLoder /> : <p>Verify Account</p>}
                </button>
              </div>
            </form>
          </div>
          {error && (
            <div className="bg-rose-200 text-rose-500 p-5 rounded-lg mt-4">
              Invalid OTP.
            </div>
          )}
          {isSucess && (
            <div className="bg-slate-200 text-violet-600 p-5 rounded-lg mt-4">
              Login Done!
            </div>
          )}
        </div>
      </div>
    );

}