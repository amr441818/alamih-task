import React from 'react'
import PartenerCarusal from './PartenersCarousal'

const Partener = () => {
  return (
    <div className=' container flex flex-col gap-[40px] justify-center items-center '>

    <h3 className='font-[900] text-[32px]'>Our Parteners</h3>
    
    <div className="  w-full  p-10  ">
    <PartenerCarusal/>
        </div>
    
        </div>
  )
}

export default Partener