import Image from "next/image";

function Slides() {
  return (
    <>
      <div className="flex flex-wrap justify-between items-center px-16 pt-10 slideSection bg-[#FCF8F3]">
        <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
          <div className="slideText pt-9">
            <h4 className="font-extrabold text-[2rem] pt-10 py-1">
              50+ Beautiful rooms
              <br />
              inspiration
            </h4>
            <p>
              Our designer already made a lot of beautiful
              <br />
              prototypes of rooms that inspire you
            </p>
            <button className="my-6 hover:bg-yellow-600 bg-[#B88E2F] text-white px-10 py-3">
              Explore More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
          <Image
            src="/Image_14.png"
            height={582}
            width={404}
            alt="picSeventeen"
            className="w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
          <Image
            src="/Image_15.png"
            height={386}
            width={386}
            alt="picEighteen"
            className="w-full h-auto"
          />
          <Image
            src="/Image_16.png"
            alt="Product"
            height={27}
            width={120}
            className="w-[120px] h-[27px] mt-6"
          />
        </div>
      </div>
    </>
  );
}

export default Slides;
