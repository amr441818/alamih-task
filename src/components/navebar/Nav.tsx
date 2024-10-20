"use client"

import img from "../../assets/logo.svg";
import { TbWorld } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

// import lang from '../../assets/lang.svg'
// import i18n from "../../i18n";
import "./nav.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CusttomButton from "../reuseableComponents/CusttomButton";
// import { useTranslation } from "react-i18next";






const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  console.log(isScrolled)

  // useEffect(() => {
  //   const data = localStorage.getItem("auth_data");

  //   if (data) {
  //     setIsLogedIn(true);
  //   }
  // }, []);
  // useEffect(() => {
  //   const savedLanguage = window.localStorage.getItem("language");
  //   console.log(savedLanguage);
  //   document.documentElement.dir = savedLanguage
  //     ? savedLanguage === "ar"
  //       ? "rtl"
  //       : "ltr"
  //     : "rtl";
  // }, []);
  // const { t } = useTranslation();
  // const navigate = useNavigate();

  // const registerHandler = () => {
  //   navigate("/register");
  // };
  // const LoginHandler = () => {
  //   navigate("/login");
  // };
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar = () => {
    setIsOpen(false);
  };

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  //   // dispatch(langActions.setLanguage(lng));
  //   window.localStorage.setItem("language", lng);
  //   document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  //   closeSidebar();
  //   console.log(lng);
  // };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        style={{ zIndex: 100 }}
        className="hidden container sticky top-0 w-full z-50 lg:flex justify-between bg-transparent text-white h-[85px]  items-center"
      >
        <div>
          <Link href="#">
            <Image
              src={img}
              className=" w-[150px] lg:w-[266px]  lg:h-[36px]"
              alt=""
            />
          </Link>
        </div>

        <div className="flex gap-4 lg:gap-6 items-center text-white">
        <div className="flex items-center gap-2 lg:gap-6 text-[14px] ">
        <Link href="/">Home</Link>
        <Link href="/">About us</Link>
        <Link href="/">services</Link>
        <Link href="/">Properties</Link>
        <Link href="/">Our Partners</Link>
        <Link href="/">Contact us</Link>

        </div>
        <div className="flex items-center ">

          <div className="flex items-center gap-4"> <button className="flex items-center gap-1"> <TbWorld  className="size-6"/> Ar </button>
          <svg width="2" height="40" viewBox="0 0 2 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.788086" y1="2.18557e-08" x2="0.788084" y2="40" stroke="#929EAA"/>
         </svg>


<button><CiHeart className="size-8" /> </button>

<CusttomButton title="Become an ambassador" bgColor="white" textColor="black2"  />

</div>
        </div>
         
        </div>
      </nav>

      <nav className="flex relative mobile_nav  z-999  lg:hidden">
                <div className="flex  justify-between w-full items-center lg:items-start">
                    <Image src={img} alt="" className="w-[150px] h-[50px]" />
                    <button
                        onClick={toggleSidebar}
                        data-drawer-target="default-sidebar"
                        data-drawer-toggle="default-sidebar"
                        aria-controls="default-sidebar"
                        type="button"
                        className=" relative    inline-flex items-center p-2 mt-2 ms-3 text-sm text-black rounded-lg   focus:outline-none focus:ring-2  "
                    >
                        <span className="sr-only">Open sidebar</span>
                        <RxHamburgerMenu className="text-white size-7" />
                    </button>
                </div>
            </nav>

            <div
                onClick={closeSidebar}
                className={` ${
                    isOpen
                        ? "  w-[100%] lg:hidden layout h-[100vh] fixed right-0 left-0  top-0"
                        : ""
                }`}
            >
                <aside
                    id="default-sidebar"
                    className={`gradiants lg:hidden  fixed  top-0 right-0 w-[50%] h-screen transition-transform ${
                        isOpen ? "" : "translate-x-full"
                    }`}
                    aria-label="Sidebar"
                >
                    {/* Close button */}
                    <button
                        onClick={closeSidebar}
                        className="absolute top-0 right-0 m-4 text-black focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <div className="h-full  px-3 py-[130px] overflow-y-auto ">
                        <ul className="space-y-2 flex flex-col gap-9">
       
                            <div className="flex flex-col gap-6">
                                <Link
                                    href="/"
                                    className="w-max flex items-center p-2 text-black rounded-lg"
                                >
                                    {/* Text */}
                                    <h3 className="ms-3 text-[18px] ">
                                    Home
                                    </h3>
                                </Link>
                                <Link
                                    href="/"
                                    className="w-max flex items-center p-2 text-black rounded-lg"
                                >
                                    {/* Text */}
                                    <h3 className="ms-3 text-[18px] ">
                                    services
                                    </h3>
                                </Link>
                                <Link
                                    href="/"
                                    className="w-max flex items-center p-2 text-black rounded-lg"
                                >
                                    {/* Text */}
                                    <h3 className="ms-3 text-[18px] ">
                                    Properties
                                    </h3>
                                </Link>
                                <Link
                                    href="/"
                                    className="w-max flex items-center p-2 text-black rounded-lg"
                                >
                                    {/* Text */}
                                    <h3 className="ms-3 text-[18px] ">
                                    Our Partners
                                    </h3>
                                </Link>
                                <Link
                                    href="/"
                                    className="w-max flex items-center p-2 text-black rounded-lg"
                                >
                                    {/* Text */}
                                    <h3 className="ms-3 text-[18px] ">
                                       contact us
                                    </h3>
                                </Link>
                                
                                {/* {i18n.language === "en" ? (
                                    <a
                                        href=""
                                        onClick={() => changeLanguage("ar")}
                                    >
                                        <div className="flex items-center gap-[10px] w-max  p-2 text-black rounded-lg">
                                            <img
                                                src={arFlag}
                                                alt="english flag"
                                                width="24px"
                                                // height="24px"
                                                className="rounded-full h-[24px]"
                                            />
                                            <h6>Ar</h6>
                                        </div>
                                    </a>
                                ) : (
                                    <a
                                        href=""
                                        onClick={() => changeLanguage("en")}
                                    >
                                        <div className="flex items-center gap-[10px] w-max  p-2 text-black rounded-lg">
                                            <img
                                                src={enFlag}
                                                alt="english flag"
                                                width="24px"
                                                // height="24px"
                                                className="rounded-full h-[24px]"
                                            />
                                            <h6>الانجليزية</h6>
                                        </div>
                                    </a>
                                )} */}
                               
                            </div>
                         
                        </ul>
                    </div>
                </aside>
            </div>
    </>
  );
};

export default Nav;
