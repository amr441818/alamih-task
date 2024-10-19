"use client";
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { LuKeyRound } from "react-icons/lu";
import { HiOutlineEye } from "react-icons/hi2";
import { AiOutlineEyeInvisible } from "react-icons/ai";

type passProps = {
    value:string;
    name:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    
}
const PasswordInput = (props: passProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
  return (
    <div className="flex flex-col  gap-2 relative w-full">
        <label className="flex gap-2 items-center text-[16px]  text-black2"> <LuKeyRound className='size-6' /> Password</label>
    <input
        type={isPasswordVisible ? 'text' : 'password'}
        value={props.value}
        placeholder="Enter your password"
        className="py-[23px] px-[20px]  w-full   outline-none    bg-[#F4F4F3]"
        name={props.name}
        onChange={props.onChange}
    />
    <div className="absolute top-[55px] right-0 pr-3 flex items-center cursor-pointer" onClick={handleTogglePasswordVisibility}>
        {isPasswordVisible ? <AiOutlineEyeInvisible className="h-5 w-5 text-black1" /> : <HiOutlineEye className="h-5 w-5 text-black1" />}
    </div>
</div>
  )
}

export default PasswordInput