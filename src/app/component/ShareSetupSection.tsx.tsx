import Image from "next/image";
import React from "react";

function ShareSetupSection() {
  return (
    <section>
      <div className="py-12">
        <p className=" font-semibold text-center">
          Share your setup with
        </p>
        <p className="text-20 text-[40px] font-bold text-center">#FuniroFurniture</p>
      </div>
      <div className="">
        <Image
          src="/Image_17.png"
          alt="share setup"
          width={1799}
          height={721}
          className="w-full"
        />
      </div>
    </section>
  );
}

export default ShareSetupSection;