import Image from 'next/image'
import React from 'react'
import aboutImage from '../../assets/about.png'
import CusttomButton from '../reuseableComponents/CusttomButton'
import HomeIcon from '@/assets/icons/aboutUs/HomeIcon'
import Support from '@/assets/icons/aboutUs/Support'
import Services from '@/assets/icons/aboutUs/Services'
import Great from '@/assets/icons/aboutUs/Great'

const AboutUs = () => {
  return (

    <div className=" container flex flex-col gap-[56px] w-full ">

   
    <div className='grid grid-cols-1 lg:grid-cols-2  gap-[62px] '>
     <div className="flex justify-center order-2 lg:order-1">
        <Image src={aboutImage} className='w-[98%] lg:w-full md:h-[660px]' alt='about us image' />
     </div>


     <div className="flex flex-col items-center justify-center gap-[22px]">
       <h3 className=' text-[36px] md:text-[40px] font-[700] md:font-[900] text-center lg:text-start'>We Help You Realize Your Dream Property</h3>
       <div className="flex flex-col gap-5">
        <p className='text-[16px] text-center lg:text-start'>Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce at dui tincidunt nulla semper venenatis at et magna. Mauris turpis lorem, ultricies vel justo sed, ultrices auctor nisi.
        </p>
       <p className='text-center lg:text-start'>Donec bibendum nibh quis nisl luctus, at aliquet ipsum bibendum. Fusce at dui tincidunt nulla semper.</p>

      <div className="flex justify-center lg:justify-start "> <CusttomButton title='Read More' /></div>
       </div>
     </div>

 
    </div>
    <div className="flex flex-col gap-10 md:flex-row justify-between w-full items-center px-[79px]">
<div className="flex flex-col items-center  w-full gap-3">

<HomeIcon/>

<h3>Property Management</h3>
</div>
<div className="flex flex-col items-center  w-full gap-3">

<Support/>

<h3>Great support</h3>
</div>
<div className="flex flex-col items-center  w-full gap-3">

<Services/>

<h3>Mortgage Services</h3>
</div>
<div className="flex flex-col items-center  w-full gap-3">

<Great/>

<h3>Great support</h3>
</div>


    </div>
    </div>
  )
}

export default AboutUs