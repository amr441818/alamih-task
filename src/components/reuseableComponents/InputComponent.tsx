
import { customInputProps } from '../../types/types';
// import '../../pages/index.css';
const InputComponent = (props: customInputProps) => {
    const Icon = props.icon
    return (
        <div className="flex flex-col gap-2 w-full">
                  <label className="flex gap-2 items-center text-[16px]  text-black2"> {props.icon} {props.label}</label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                onChange={props.onChange}
                className="py-[23px] px-[20px]  w-full   outline-none    bg-[#F4F4F3]"       
                required={props.required ? props.required : false}
                disabled={props.disabled ? props.disabled : false}
            />
        </div>
    );
};

export default InputComponent;
