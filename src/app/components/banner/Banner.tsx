'use client'

const Banner = () => {
    return (
        <div className="relative ">


            <div className=" curveContainer">

            </div>
            <div className="body_padding relative w-full lg:-translate-y-40 md:-translate-y-32 -translate-y-36">
                <div className="flex flex-wrap lg:gap-0 md:gap-8 gap-6 items-center justify-center lg:justify-between">
                    <div className="w-[300px] h-[300px] bg-[#C02424] hover:translate-z-10 hover:scale-110 hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-red-600 transform perspective-1000"></div>
                    <div className="w-[260px] h-[260px] bg-[#146FE8] hover:translate-z-10 hover:scale-110 hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-blue-600 transform perspective-1000"></div>
                    <div className="w-[300px] h-[300px] bg-[#E76666] hover:translate-z-10 hover:scale-110 hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-pink-600 transform perspective-1000"></div>
                    <div className="w-[260px] h-[260px] bg-[#A0FCD9] hover:translate-z-10 hover:scale-110 hover:-translate-y-2 transition-all duration-500 ease-in-out hover:shadow-2xl hover:shadow-teal-600 transform perspective-1000"></div>
                </div>

            </div>

        </div>
    );
};

export default Banner;