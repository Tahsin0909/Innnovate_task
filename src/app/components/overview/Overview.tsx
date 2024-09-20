'use client'



import OverViewSlider from "./OverViewSlider";




const Overview = () => {
    return (
        <div className="lg:mt-72 md:mt-20 mt-10">
            <div className="body_padding  bg-gradient-to-b from-[#3C805D] to-[#6BE6A8]">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-5">
                    <div className="space-y-4 lg:py-10 md:py-6 py-4">
                        <p className="md:text-2xl text-xl font-semibold">Overview</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nam, iure quis, neque consectetur corrupti ipsum ad facere temporibus nostrum adipisci exercitationem iusto consequuntur impedit doloremque quam. Odit ipsa beatae adipisci aut dolorum cupiditate voluptatum dignissimos sit magnam recusandae ex blanditiis explicabo quod tenetur, ut impedit sunt, non expedita voluptas.</p>
                    </div>
                    <div className="lg:col-span-3 ">
                            <div className="relative lg:-translate-y-56">
                                <OverViewSlider />
                            </div>

                    </div>
                </div>
            </div>
            <div className=" OverVIewCurveContainer">

            </div>
        </div>
    );
};

export default Overview;