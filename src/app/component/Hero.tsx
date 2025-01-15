import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative w-full h-[calc(100vh-73px)] bg-no-repeat bg-cover bg-bottom flex items-center justify-center" 
        style={{ backgroundImage: "url('/Hero_02.png')" }}
      >
        {/* Text Content */}
        <div className="bg-[#FFF3E3] rounded-[10px] px-6 md:px-[39px] py-20 md:py-[72px] max-w-lg md:max-w-xl absolute top-[35%] right-[10%] md:top-[30%] md:right-[8%]">
          <p className="text-customBlack font-semibold text-sm md:text-base">New Arrival</p>
          <h1 className="text-primary py-4 text-2xl md:text-4xl leading-tight font-bold text-[#B88E2F]">
            Discover Our <br /> New Collection
          </h1>
          <p className="text-customGray text-sm md:text-base mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="px-10 py-3 hover:bg-yellow-700 bg-[#B88E2F] text-white rounded-md text-sm md:text-base ">
            BUY NOW
          </button>
        </div>

  
      </section>
    </>
  );
}
