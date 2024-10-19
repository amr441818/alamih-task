import React from 'react'
import CusttomButton from '../reuseableComponents/CusttomButton'
import Image from 'next/image'
import key from '@/assets/key.png'

const Ambassador = () => {
  return (
    <>

    <div className="flex justify-center w-full ">

   
    <div className='   grid grid-cols-12 bg-[#F8F8F7] gap-[34px] w-full '>
      
        <div className="col-span-12 lg:col-span-7 flex h-[300px] lg:h-auto  relative">
         <Image src={key} alt='this is an image for building' className='w-full h-[351px] absolute top-0 lg:top-[-60px]'/>

        </div>
        <div className=" flex flex-col gap-6 justify-center items-center lg:items-start w-full col-span-12 lg:col-span-5 py-[71px] px-[56px]">

<h2 className=' text-[22px] lg:text-[32px] font-bold lg:font-[900]'>Become an ambassador</h2>
<div className="flex"> <CusttomButton title='Register Now' /></div>
</div>
    </div>
    </div>
    </>
  )
}

export default Ambassador