import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { TbPhoneFilled } from "react-icons/tb";
import { TbClockHour4Filled } from "react-icons/tb";

export default function Contact() {
  return (
    <>
      <section
        className="relative w-full h-[316px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/Image_18.png')",
        }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative flex flex-col items-center justify-center h-full">
          <Image
            src="/Logo_0.1.png"
            width={79}
            height={79}
            alt="logo"
            className="w-[79px] h-[79px]"
          />
          <h1 className="text-4xl font-bold text-black">Contact</h1>
          <p className="text-black mt-2">
            <Link href="/" className="font-bold">
              Home
            </Link>
            <span className="mx-1">&gt;</span>
            <span>Contact</span>
          </p>
        </div>
      </section>

      <div className="text-center pt-16 pb-12 mt-3">
        <h2 className="font-extrabold text-[2rem] sm:text-xl md:text-2xl lg:text-3xl">
          Get In Touch With Us
        </h2>
        <p className="text-[#9F9F9F] sm:text-sm md:text-base lg:text-lg">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us
          <br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="flex flex-wrap justify-evenly leading-8">
        <div className="w-full sm:w-[14rem] mt-6 p-4">
          <div className="flex pb-8">
            <div>
              <FaLocationDot size={27} />
            </div>
            <div>
              <h2 className="font-bold">Address</h2>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex pb-8">
            <div>
              <TbPhoneFilled size={27} />
            </div>
            <div>
              <h2 className="font-bold">Phone</h2>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <TbClockHour4Filled size={27} />
            </div>
            <div>
              <h2 className="font-bold">Working Time</h2>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[17rem] mt-6 p-4">
          <form className="flex flex-col" action="">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="border-gray-200 border-2 p-2 rounded-md w-full"
              placeholder="name"
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              className="border-gray-200 border-2 p-2 rounded-md w-full"
              placeholder="email"
            />
            <br />
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              className="border-gray-200 border-2 p-2 rounded-md w-full"
              placeholder="optional"
            />
            <br />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              className="border-gray-200 border-2 p-2 rounded-md w-full"
              placeholder="Hi! I'd like to ask about"
            />
            <br />
            <button className="self-start bg-[#B88E2F] text-white hover:bg-yellow-700 mt-6 px-6 py-2 w-[7rem] rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mt-24 mb-5 flex flex-wrap justify-evenly items-center p-4 w-full bg-[#F9F1E7]">
        <div className="flex flex-col items-center text-center w-full sm:w-[11rem] md:w-[14rem] ">
          <Image
            src="/Trophy_22.png"
            width={40}
            height={40}
            alt="High Quality"
          />
          <h4 className="font-bold">High Quality</h4>
          <p>crafted from top materials</p>
        </div>

        <div className="flex flex-col items-center text-center w-full sm:w-[11rem] md:w-[14rem]">
          <Image
            src="/Warranty_23.png"
            width={40}
            height={40}
            alt="Warranty Protection"
          />
          <h4 className="font-bold">Warranty Protection</h4>
          <p>Over 2 years</p>
        </div>

        <div className="flex flex-col items-center text-center w-full sm:w-[11rem] md:w-[14rem]">
          <Image
            src="/Shipping_24.png"
            width={40}
            height={40}
            alt="Free Shipping"
          />
          <h4 className="font-bold">Free Shipping</h4>
          <p>Order over $150</p>
        </div>

        <div className="flex flex-col items-center text-center w-full sm:w-[11rem] md:w-[14rem]">
          <Image
            src="/Suppor_25.png"
            width={40}
            height={40}
            alt="24/7 Support"
          />
          <h4 className="font-bold">24 / 7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>
    </>
  );
}
