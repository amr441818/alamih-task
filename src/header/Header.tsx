
import CusttomButton from '@/components/reuseableComponents/CusttomButton';
import './header.css'
import Nav from '@/components/navebar/Nav';
const Header = () => {
 
    
  return (
  
    <div className="main_header h-screen relative  w-full  ">
      
      <Nav/>
     
      <div className="overlay  absolute top-0 left-0 h-screen w-full   "></div>

      <div className="flex flex-col absolute top-0 left-0 h-screen w-full justify-center items-center ">
     <div className=" main flex flex-col justify-normal items-center gap-[48px]">
        <span className=' typo block text-white '>
        We Help You  <br/>Realize Your <br/> Dream Property
        </span>

        <CusttomButton title='Explore Properties' textColor='black2' bgColor='white' />
     </div>
      </div>
     
      
      {/* <div className=" container absolute  top-0 left-0 h-full  w-full z-20 flex flex-col justify-center items-center lg:items-start    text-white ">
        <p className=' typo   text-[50px] text-center'>
        We Help You Realize Your Dream Property
        </p>

      </div> */}
    </div>
  )
}

export default Header;
