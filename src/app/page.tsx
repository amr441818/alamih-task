import AboutUs from "@/components/aboutUs/AboutUs";
import Ambassador from "@/components/ambassador/Ambassador";
import Properties from "@/components/properties/Properties";
import CustomSwiper from "@/components/properties/PropertiesSwiper/PropertiesSwiper";
import Recently from "@/components/recently/Recently";

import Sell from "@/components/sell/Sell";

import Header from "@/header/Header";


export default function Home() {
  return (
    <div className="flex  flex-col gap-[120px]">
    <Header/>
    <AboutUs/>
   <Properties/>
   <Sell/>
   <Recently/>
   <Ambassador/>
</div>
  );
}
