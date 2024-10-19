

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import authImage from '@/assets/auth-img.png'
import  authLogo from '@/assets/auth-logo.png'
import PasswordInput from '@/components/reuseableComponents/PasswordInput'
import { toast } from 'react-toastify'
import InputComponent from '@/components/reuseableComponents/InputComponent'
import { TfiEmail } from "react-icons/tfi";
import Link from 'next/link'
import CusttomButton from '@/components/reuseableComponents/CusttomButton'
import { useLoginMutation, useRegisterMutation } from '@/api/AuthApiSlice'
import Upload_cover from './UploadImage'
import NationalLabelcon from '@/assets/icons/NationalLabelcon'
import { BiUser } from 'react-icons/bi'

interface signInfromData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    terms: string;

}
const initialFormData = {
    name:"",
    email: '',

    password: '',
    password_confirmation: '',
    terms:"0"
};
const Register = () => {

  const [register, {isLoading}] = useRegisterMutation()
    const [formData, setFormData] = useState<signInfromData>(initialFormData);
    const [toastData, setToastData] = useState<any>({});
   
    const [file , setFile] = useState<null | File>(null)

    const [errors, setErrors] = useState<any>({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };
    useEffect(() => {
        // const token = localStorage.getItem('deliProviderToken');
        // console.log(token);    
        // if (token) {
        //     navigate('/Categories/List');
        // }
    }, []);
   
    useEffect(() => {
        console.log(toastData);
        if (toastData?.data?.status == "success") {
            console.log(toastData)
            toast.success(toastData?.data?.message, {});
            console.log(toastData);
            // localStorage.setItem(
            //     'deliProviderToken',
            //     // @ts-ignore
            //     JSON.stringify(toastData?.response.data.token)
            // );
            setToastData({});
            // navigate('/Categories/List');
        }

        if (toastData?.status === 422) {
            toast.error(toastData?.response.data?.message, {});
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

 console.log(file)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // navigate('/Restaurant/Add');

        // const result = loginSchema.safeParse(formData);
        // // phoneSchema.safeParse(phone);

        // if (!result.success) {
        //     // @ts-ignore
        //     setErrors(result.error.formErrors.fieldErrors);
        //     console.log(result.error.formErrors.fieldErrors);
        //     return;

        // }

        const formDataa = new FormData()
        formDataa.append('full_name', formData.name);
        formDataa.append('email', formData.email);
        formDataa.append('password', formData.password);
        formDataa.append('password_confirmation', formData.password_confirmation);
        formDataa.append('terms', formData.terms);
        formDataa.append('national_image', file);
        

        try {

            const data = await register(formDataa)
            console.log(data);
            setToastData(data);
          
            setErrors({});
        } catch (err) {
            setToastData(err);
            setErrors(err);
        }

      
    };
    console.log(formData)
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 h-screen '>



        <div className="">
<Image src={authImage} className='h-full w-full' alt='login image'/>
        </div>
        <div className="flex flex-col gap-[24px] md:gap-[64px] bg-white px-4 md:px-[120px]  py-[36px] md:py-[80px]  ">
          
          <div className="flex justify-center ">
          <Image src={authLogo} className=' h-[56px] md:h-[67px]  w-[150px] md:w-[234px] ' alt='login form logo'/>
          </div> 

          <form onSubmit={handleSubmit} className="flex w-full gap-[24px] md:gap-[64px]">

<div className="flex flex-col gap-4  justify-center w-full">
<div className="flex flex-col gap-8">

<InputComponent type="text" placeholder="Enter your full name" name='name' onChange={handleChange} value={formData.name}  label="Name" icon={<BiUser className='size-5' />} />
<InputComponent type="email" placeholder="Enter your email address" name='email' onChange={handleChange} value={formData.email}  label="Email Address" icon={<TfiEmail className='size-5' />} />
<PasswordInput value={formData.password} onChange={handleChange} name="password" />
<PasswordInput value={formData.password_confirmation} onChange={handleChange} name="password_confirmation" />
<div className="flex flex-col gap-2 w-full">
                  <label className="flex gap-2 items-center text-[16px]  text-black2"> <NationalLabelcon/>  National ID Image</label>
                  <Upload_cover setFile={setFile}/>
        </div>
</div>
<div className="flex justify-center lg:justify-start gap-2 items-center">
<input type="checkbox" className='w-5 h-5' name='terms' onChange={e=> setFormData({...formData, terms:e.target.checked === true? "1": "0"})}  />
<div className=' text-black1  font-semibold'> <span className='text-[#BBB8BF] font-normal'>Agree to the </span> terms and conditions</div>


</div>

                  <CusttomButton type="submit" title='Create account' />   
</div>


          </form>
          <div className="flex justify-center">
<Link href="/login" className=' text-black2 font-semibold'> <span className='text-black1 font-normal'>Have an account? </span>login</Link>
</div>
        </div>
    </div>
  )
}

export default Register