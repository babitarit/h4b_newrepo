"use client";
import { useState } from "react";
import Link from "next/link";
import log_img from "../../../public/Registration.png";
import googlelogo from "../../../public/Google logo.png";
import Image from "next/image";
import { useRegister } from "../../../hooks/useRegister";

import { Alata } from "next/font/google";
import React from "react";

export const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Page(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setName] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");
  const { register, error, isLoading, isSucess } = useRegister();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handlePhonenumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhonenumber(event.target.value);
  };

  const handleClick = async () => {
    const registerData = {
      email,
      password,
      username,
      phonenumber,
    };

    await register(registerData);
  };
  return (
    <main className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[500px] sm:max-w-[900px] rounded-2xl">
        <div className="w-full  h-[450px] hidden md:block ">
          <Image
            className="w-full mt-14 ml-2 h-[380px]"
            src={log_img}
            alt="/"
          />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-medium text-center mb-8">
              Create Your <span className="text-violet-700">Account</span>
            </h2>
            <div>
              <input
                className="border p-2 w-full mb-4 rounded-xl bg-gray-300"
                type="username"
                placeholder="Username"
                value={username}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <input
                className="border p-2 w-full mb-4 rounded-xl bg-gray-300 "
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>

            <div>
              <input
                className="border p-2 w-full mb-4 rounded-xl bg-gray-300"
                type="phone"
                placeholder="Phone"
                value={phonenumber}
                onChange={handlePhonenumberChange}
              />
            </div>

            <div>
              <input
                className="border p-2 w-full  rounded-xl bg-gray-300"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              className=" w-full mt-4 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2 rounded-xl  bg-violet-700 text-white text-lg font-bold"
              key="1"
              onClick={handleClick}
            >
              Register
            </button>
            <h5 className=" text-center mb-2 mt-2">Or</h5>
            <div className="flex items-center justify-center ">
              <button className=" w-full flex rounded-2xl py-2 border-violet-700 border-2 items-center justify-center gap-2 active:scale-[.98] active:duration-75  hover:scale-[1.01] ease-in-out transition-all">
                <Image
                  className="w-6 h-6"
                  src={googlelogo}
                  loading="lazy"
                  alt="google logo"
                />
                <span>Continue with Google</span>
              </button>
            </div>

            <div className="mt-6 flex justify-center items-center">
              <p className="font-medium text-base">Already have an account?</p>
              <button className="text-violet-700 text-base font-medium ml-2">
                <Link href="/login">Login</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
