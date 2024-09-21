import { useState } from 'react';
import 'swiper/css'; // Import Swiper's CSS
import { A11y, Navigation, Pagination } from 'swiper/modules'; // Import modules for Swiper functionality
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import { Swiper as SwiperCore } from 'swiper'; // Import Swiper core for typing
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons for navigation buttons

const OverViewSlider = () => {

    // Define an interface for the colors object
    interface Colors {
        color: string
    }

    // Array of color objects for each slide
    const colors: Colors[] = [
        { color: "#FFCCCC" }, // light red
        { color: "#CCFFCC" }, // light green
        { color: "#CCCCFF" }, // light blue
        { color: "#E0CCFF" }, // light purple
        { color: "#FFFFCC" }, // light yellow
        { color: "#FFD9B3" }  // light orange
    ];

    // State for tracking the active slide index
    const [activeIndex, setActiveIndex] = useState(0);
    
    // State for storing the Swiper instance, typed with SwiperCore
    const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

    return (
        <div className='relative'>
            {/* Swiper container */}
            <Swiper
                slidesPerView={'auto'} // Automatically adjust the number of slides shown
                spaceBetween={20} // Space between each slide
                centeredSlides={true} // Center the active slide
                modules={[Navigation, Pagination, A11y]} // Add modules for navigation and pagination
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // Update active slide index on change
                onSwiper={(swiper) => setSwiperInstance(swiper)} // Capture the swiper instance when initialized
                className="mySwiper"
            >
                {/* Loop through the colors array to create slides */}
                {colors.map((ColorData, index) => (
                    <SwiperSlide key={index} className='overview_swiper flex items-center rounded-lg'>
                        <div style={{ backgroundColor: ColorData.color }}
                            className={`w-full rounded-lg transition-all duration-300 flex justify-center items-center ${activeIndex === index ? 'h-full' : 'md:h-80 h-48'}`}
                        >
                            {/* Display slide number */}
                            <span className='font-semibold'>Slide {index + 1}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <div className='flex gap-4 items-center justify-end md:mt-0 mt-4'>
                {/* Left (Previous) button */}
                <button className={`${activeIndex > 0 ? "opacity-100" : "opacity-0"} p-3 rounded-full bg-black`}
                    onClick={() => swiperInstance?.slidePrev()}>
                    <ChevronLeft className='fill-transparent text-white relative ' />
                </button>

                {/* Right (Next) button */}
                <button className={`${activeIndex < colors.length - 1 ? "opacity-100" : "opacity-0"} p-3 rounded-full bg-black`}
                    onClick={() => swiperInstance?.slideNext()}>
                    <ChevronRight className='fill-transparent text-white relative ' />
                </button>
            </div>
        </div>
    );
};

export default OverViewSlider;
