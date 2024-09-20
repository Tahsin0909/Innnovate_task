import { useState } from 'react';
import 'swiper/css';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperCore } from 'swiper'; // Import Swiper core for typing
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OverViewSlider = () => {

    interface Colors {
        color: string
    }

    const colors: Colors[] = [
        { color: "#FFCCCC" }, // light red
        { color: "#CCFFCC" }, // light green
        { color: "#CCCCFF" }, // light blue
        { color: "#E0CCFF" }, // light purple
        { color: "#FFFFCC" }, // light yellow
        { color: "#FFD9B3" }  // light orange
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null); // Explicitly type the state

    return (
        <div className='relative'>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                centeredSlides={true}
                modules={[Navigation, Pagination, A11y]}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                onSwiper={(swiper) => setSwiperInstance(swiper)} // Capture the swiper instance
                className="mySwiper"
            >
                {colors.map((ColorData, index) => (
                    <SwiperSlide key={index} className='overview_swiper flex items-center rounded-lg'>
                        <div style={{ backgroundColor: ColorData.color }}
                            className={`w-full rounded-lg transition-all duration-300 flex justify-center  items-center ${activeIndex === index ? 'h-full' : 'md:h-80 h-48'}`}
                        >
                            <span className='font-semibold'>Slide {index + 1}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom buttons using the swiper instance */}
            <div className='flex gap-4 items-center justify-end md:mt-0 mt-4'>
                <button className={`${activeIndex > 0 ? "opacity-100" : "opacity-0"} p-3 rounded-full bg-black`}
                    onClick={() => swiperInstance?.slidePrev()}>
                    <ChevronLeft className='fill-transparent text-white relative ' />
                </button>
                <button className={`${activeIndex < colors.length -1  ? "opacity-100" : "opacity-0"} p-3 rounded-full bg-black`}
                    onClick={() => swiperInstance?.slideNext()}>
                    <ChevronRight className='fill-transparent text-white relative ' />
                </button>
            </div>
        </div>
    );
};

export default OverViewSlider;
