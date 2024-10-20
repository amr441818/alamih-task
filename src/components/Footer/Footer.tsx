import React from 'react'
import NewsLetter from './NewsLetter/NewsLetter'
import footerLogo from '@/assets/footerLogo.png'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#F3F3F1] px-[40px] md:px-[158px] pt-[71px]  pb-4 flex flex-col gap-[64px] ' >
    <NewsLetter/>
    <hr className=' bg-[#3E453E] h-[2px]' />

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0">

    <div className="flex flex-col gap-8  lg:col-span-5 items-center">

        <div className="flex flex-col gap-4 w-full items-center lg:items-start  ">
            <Image src={footerLogo} alt="footer logo" className='text-black' />
            <p className='text-center lg:text-start'> Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce at dui tincidunt nulla semper.</p>
           
        </div>

        <div className="flex gap-4 ">
            <h3 className='text-[16px] text-[#8D999D]'> Follow us on </h3>
            <div className="flex gap-4 items-center">
            <Link href=""> <FaFacebookF className=' size-[24px]'/></Link>
            <Link href=""> <BsTwitterX className=' size-[24px]'/></Link>
            <Link href=""> <FaInstagram className=' size-[24px]'/></Link>
            <Link href=""> <FaYoutube className=' size-[24px]'/></Link>

            </div>
        </div>
    </div>

    <div className="flex flex-col md:flex-row justify-between md:justify-around gap-8  lg:col-span-7">


    
          
            <div className="flex flex-col gap-7  items-center lg:items-start ">
                <div className="flex"> <Link href="" className='text-start'>Main Links </Link></div>
                <div className="flex flex-col gap-4 items-center lg:items-start ">
                <Link href=""> Home</Link>
            <Link href=""> Our Projects</Link>
            <Link href=""> Services</Link>
            <Link href=""> Contact us</Link>

                </div>
          

            </div>
            <div className="flex flex-col gap-7 items-center lg:items-start  ">
                <div className="flex"> <Link href="" className='text-start'>Quick Links </Link></div>
                <div className="flex"> <Link href="" className='text-start'>Privacy policy </Link></div>
                <div className="flex"> <Link href="" className='text-start'>Terms of Use </Link></div>
                
          

            </div>
            
            

 
    </div>
</div>

<hr className=' bg-[#3E453E] h-[2px]' />

<div className="flex justify-center ">
    <p className='text-center'>All Copyrights are reserved by SIANCHES @2024</p>
</div>
    </div>
  )
}

export default Footer