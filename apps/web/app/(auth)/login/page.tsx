"use client";
import { useState } from "react";
import Link from "next/link";
import log_img from "../../../public/Login.png";
import googlelogo from "../../../public/Google logo.png";
import Image from "next/image";
import { useLogin } from "../../../hooks/useLogin";

import { Alata } from "next/font/google";

export const alata = Alata({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Page(): JSX.Element {
  const { login, error, isLoading, isSucess } = useLogin();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleClick = async () => {
    const loginData = {
      email,
      password,
    };

    await login(loginData);
  };
  return (
    <main className="w-full h-screen flex">
      <div className="grid grid-cols-1 md:grid-cols-2 m-auto h-[450px] sm:max-w-[800px] rounded-2xl">
        <div className="w-full h-[400px] hidden md:block">
          <Image src={log_img} alt="efef" />
        </div>
        <div className="p-4 flex flex-col justify-around">
          <form>
            <h2 className="text-4xl font-medium text-center mb-8">
              Access Your <span className="text-violet-700">Account</span>
            </h2>
            <div>
              <input
                className="border p-2 w-full mb-4 rounded-xl bg-gray-300"
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <input
                className="border p-2 w-full rounded-xl bg-gray-300"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mt-6 text-right">
              <button className="font-medium text-base text-violet-700">
                <Link href="/forgot-password">Forgot Password?</Link>
              </button>
            </div>
            <button
              className="w-full mt-4 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all p-2 rounded-xl bg-violet-700 text-white text-lg font-bold"
              key="1"
              onClick={handleClick}
            >
              Login
            </button>
            <h5 className=" text-center mb-2 mt-2">or</h5>
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
              <p className="font-medium text-base">Did not have an Account?</p>
              <button className="text-violet-700 text-base font-medium ml-2">
                <Link href="/register">Register</Link>
              </button>
            </div>
            {error && (
              <div className="bg-rose-200 text-rose-500 p-5 rounded-lg mt-4">
                Invalid credentials or Email is not verified.
              </div>
            )}
            {isSucess && (
              <div className="bg-slate-200 text-violet-500 p-5 rounded-lg mt-4">
                OTP Send Successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}
