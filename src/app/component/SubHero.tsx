import Image from "next/image";

function SubHero() {
    return (
        <>
            <div className="subText w-full text-center py-10">
                <h3 className="font-bold text-3xl">Browse The Range</h3>
                <p className="text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="imageArea flex flex-wrap justify-center gap-4 px-6 md:px-24 md:flex-row">
                <div className="space-y-6 imageOne text-center">
                    <Image
                        src={"/Dining_03.png"}
                        height={580}
                        width={1082.12}
                        alt="Dining"
                        className="w-full max-w-[300px] mx-auto"
                    />
                    <h6 className="font-semibold">Dining</h6>
                </div>

                <div className="space-y-6 imageTwo text-center">
                    <Image
                        src={"/Living_04.png"}
                        height={580}
                        width={1082.12}
                        alt="Living"
                        className="w-full max-w-[300px] mx-auto"
                    />
                    <h6 className="font-semibold">Living</h6>
                </div>

                <div className="space-y-6 imageThree text-center">
                    <Image
                        src={"/Bedroom_05.png"}
                        height={580}
                        width={1082.12}
                        alt="Bedroom"
                        className="w-full max-w-[300px] mx-auto"
                    />
                    <h6 className="font-semibold">Bedroom</h6>
                </div>
            </div>
        </>
    );
}

export default SubHero;
