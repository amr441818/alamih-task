import React from 'react'
import CustomSwiper from './PropertiesSwiper/PropertiesSwiper'

const Properties = () => {
  return (
    <div className=' container flex flex-col gap-[40px] justify-center items-center '>

<h3 className='font-[900] text-[32px]'>Properties</h3>

<div className="  w-full  p-10  ">
      <CustomSwiper/>
    </div>

    </div>
  )
}

export default Properties