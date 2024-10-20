import React from 'react'
import CusttomButton from '../reuseableComponents/CusttomButton'
import Image from 'next/image'
import modernImage from '@/assets/modern.png'

const Sell = () => {
  return (
    <>

    <div className="flex container justify-center">

   
    <div className='grid grid-cols-1 lg:grid-cols-12 bg-[#F8F8F7]  gap-0 lg:gap-[34px]  h-[600px] lg:h-auto '>
        <div className=" flex flex-col gap-6 justify-start items-center lg:items-start  lg:justify-center w-full lg:col-span-5 py-6 lg:py-[71px] px-[56px]">

            <h2 className='text-[32px] text-center lg:text-start font-[900]'>Sell Your Property With SIANCHES</h2>
           <div className="flex"> <CusttomButton title='Sell your unit' /></div>
        </div>


        <div className=" row-span-12 lg:row-span-1 lg:col-span-7 flex   relative">
         <Image src={modernImage} alt='this is an image for building' className='w-full h-[300px] lg:h-[408px] absolute top-0 lg:top-[-60px]'/>

        </div>

    </div>
    </div>
    </>
  )
}

export default Sell