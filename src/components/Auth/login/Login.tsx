
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
import { useLoginMutation } from '@/api/AuthApiSlice'
import { redirect } from "next/navigation";
import { z } from 'zod'
const formSchema = 
    z.object({
        email: z.string().email(` please enter a valid email`),
        password: z
            .string()
            .min(3, "Password must be at least 3 characters")
            
    });
interface signInfromData {
    email: string;
    password: string;

}
const initialFormData = {
    email: '',
    password: '',
};
const Login = () => {

  const [login, {isLoading}] = useLoginMutation()
    const [formData, setFormData] = useState<signInfromData>(initialFormData);
    const [toastData, setToastData] = useState<any>({});
   
    

    const [errors, setErrors] = useState<any>({});
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };
 
    useEffect(() => {
        const token = localStorage.getItem('alamihToken');
        console.log(token);    
        if (token) {
            redirect('/home');
        }
    }, []);
   
    useEffect(() => {
        console.log(toastData);
        if (toastData?.data?.status == "success") {
            console.log(toastData)
            toast.success(toastData?.data?.message, {});
            console.log(toastData);
            localStorage.setItem(
                'alamihToken',
                // @ts-ignore
                JSON.stringify(toastData?.data?.token)
            );
            setToastData({});
            // navigate('/Categories/List');
            redirect('/Home');
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

        const result = formSchema.safeParse(formData);
      

        if (!result.success) {
            // @ts-ignore
            setErrors(result.error.formErrors.fieldErrors);
            console.log(result.error.formErrors.fieldErrors);
            return;

        }

        const formDataa = new FormData()
        formDataa.append('email', formData.email);
        formDataa.append('password', formData.password);

        try {

            const data = await login(formDataa)
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
    <div className='grid grid-cols-1 lg:grid-cols-2 h-screen   '>



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

<InputComponent type="email" placeholder="Enter your email address" name='email' onChange={handleChange} value={formData.email}  label="Email Address" icon={<TfiEmail className='size-5' />} />
{errors.email && (
                                <p className="text-[#FF0000] text-[12px]">
                                    {errors.email}
                                </p>
                            )}
<PasswordInput value={formData.password} onChange={handleChange} name='password' />
{errors.password && (
                                <p className="text-[#FF0000] text-[12px]">
                                    {errors.password}
                                </p>
                            )}
</div>
<div className="flex">
<Link href="" className='font-medium text-black2'>Forget your password ?</Link>
</div>

                  <CusttomButton type="submit" title='Login' />   
</div>


          </form>
          <div className="flex justify-center">
<Link href="/register" className=' text-black2 font-semibold'> <span className='text-black1 font-normal'>Don’t have an account?</span> Create account</Link>
</div>
        </div>
    </div>
  )
}

export default Login