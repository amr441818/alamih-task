import React, { useRef, useState } from 'react';
import uploadImg from '../../../public/assets/images/gallery-import.png';
import uploadUser from '../../../public/assets/images/upload-user.png';
import NationalIcon from '../../../assets/icons/NationalIcon';
type UploadImageProps = {
    user?: boolean;
    setFile: React.Dispatch<React.SetStateAction<File | null>>;
    editImgUrl?: string | null;
};
const Upload_cover = (props: UploadImageProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    const handleButtonClick = () => {
        // Programmatically click the hidden file input
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event?.target?.files;
        if (files && files?.length > 0) {
            const file = files[0];
            props.setFile(file);
            const fileReader = new FileReader();
            fileReader.onload = () => {
                setImageSrc(fileReader.result as string);
            };
            fileReader.readAsDataURL(file);
        }
    };
    return (
     <div  className="flex flex-col items-center w-full gap-[10px]">
            <input type="file" ref={fileInputRef}  onChange={handleFileChange} style={{ display: 'none' , width: "100%"}} accept="image/*" />
            <div         onClick={handleButtonClick}         className="flex cursor-pointer  w-full h-[80px]  border-[2px] border-[#2D2D2D] border-dotted justify-center items-center "
            >
            {imageSrc ? (
          <img src={imageSrc} alt="Uploaded" className="w-full h-full  object-cover" />
        ) : (
         <NationalIcon/>

        )}            </div>

            <button onClick={handleButtonClick} className="flex justify-between items-center  gap-[2px] ">
              
               
              
            </button>
     </div>
    );
};

export default Upload_cover;