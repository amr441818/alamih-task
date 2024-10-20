"use client"
import { useSubscribeMutation } from '@/api/AuthApiSlice';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { z } from 'zod';

interface signInfromData {
    email: string;
    

}
const initialFormData = {
    email: '',
  
};
const NewsLetter = () => {

    const [subscribe, {isLoading}] = useSubscribeMutation()
    const [formData, setFormData] = useState<signInfromData>(initialFormData);
    const [toastData, setToastData] = useState<any>({});
   
    

   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };
 
   
   
    useEffect(() => {
        console.log(toastData);
        if (toastData?.data?.status == "success") {
            console.log(toastData)
            toast.success(toastData?.data?.message, {});
            console.log(toastData);
          
            setToastData({});
           
        }

        if (toastData?.status === 422) {
            toast.error(toastData?.response.data?.message, {});
            setToastData({});
        }
        if (toastData?.error?.status === 403) {
            toast.error(toastData?.error?.data?.message, {});
            setToastData({});
        }
        if (toastData?.error?.data?.status === 500) {
            toast.error(toastData?.error?.data?.message, {});
            setToastData({});
        }

        if (isLoading) {
            toast.loading('Loading...', {
                toastId: 'loginLoadingToast',
                autoClose: false,
            });
        } else {
            toast.dismiss('loginLoadingToast');
        }
    }, [toastData, isLoading]);

 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();



        const formDataa = new FormData()
        formDataa.append('email', formData.email);
       

        try {

            const data = await subscribe(formDataa)
            console.log(data);
            setToastData(data);
          
        } catch (err) {
            setToastData(err);
      
        }

      
    };
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 '>

        <div className="flex flex-col gap-1 md:gap-2 justify-center items-center lg:justify-start lg:items-start">
            <h3 className='font-[700] md:font-[900] text-[24px] ms:text-[32px]'>Subscribe to newsletter</h3>
            <p className='text-[14px] md:text-[18px] '>Stay up-to-date with the latest news and offers.</p>
        </div>

        <form onSubmit={handleSubmit} className="flex ">
            <input type="email" placeholder='Enter your email address ' required onChange={handleChange} name='email' className='w-full p-[8px] lg:p-[26px] text-3 lg:text-[18px]'  />
            <button type='submit' className=' text-[18px] bg-black2 text-white px-5  lg:px-[48px] lg:py-[26px]'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter