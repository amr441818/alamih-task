import React from 'react'
import RecentlySwiper from './RecentlySwiper/RecentlySwiper'

const Recently = () => {
    return (
        <div className=' container flex flex-col gap-[40px] justify-center items-center '>
    
    <h3 className='font-[900] text-[32px]'>Recently added</h3>
    
    <div className="  w-full  p-10  ">
          <RecentlySwiper/>
        </div>
    
        </div>
      )
}

export default Recently