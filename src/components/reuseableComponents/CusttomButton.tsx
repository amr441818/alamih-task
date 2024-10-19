import React from 'react'
import { MdArrowOutward } from "react-icons/md";
type buttonProps = {
    type?: "submit" | "reset" | "button" ,
  
    title: string
    fullWidth?: boolean;
    bgColor?: string;
    textColor?: string;
    
}
const CusttomButton = (props:buttonProps) => {
  return (
    <button type={props.type? props.type: "button"} className={ `flex justify-center items-center ${props.bgColor? `bg-${props.bgColor}`: "bg-black2" } ${props.fullWidth? "w-full": "w-auto"} py-[12px] md:py-[18px] gap-2 text-${props.textColor? props.textColor :"white"} px-4`} > {props.title} <MdArrowOutward /> </button>
  )
}

export default CusttomButton