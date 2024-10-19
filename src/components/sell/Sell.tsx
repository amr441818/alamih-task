import React from 'react'
import CusttomButton from '../reuseableComponents/CusttomButton'
import Image from 'next/image'
import modernImage from '@/assets/modern.png'

const Sell = () => {
  return (
    <>

    <div className="flex container">

   
    <div className='   grid grid-cols-12 bg-[#F8F8F7] gap-[34px] '>
        <div className=" flex flex-col gap-6 justify-center w-full col-span-5 py-[71px] px-[56px]">

            <h2 className='text-[32px] font-[900]'>Sell Your Property With SIANCHES</h2>
           <div className="flex"> <CusttomButton title='Sell your unit' /></div>
        </div>
        <div className="col-span-7 flex   relative">
         <Image src={modernImage} alt='this is an image for building' className='w-full h-[408px] absolute top-[-60px]'/>

        </div>

    </div>
    </div>
    </>
  )
}

export default Sell