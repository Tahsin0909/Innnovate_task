'use client'

import React, { useState } from 'react';

const GridColor = () => {
    // State to store the selected color, with a default value
    const [selectedColor, setSelectedColor] = useState<string>("#ff6666")

    // Function to handle color selection
    const handleColorSelectors = (color: string) => {
        setSelectedColor(color)
    }

    return (
        <div className='body_padding'>
            {/* Main grid container */}
            <div className='grid lg:grid-cols-2 grid-cols-1 items-center relative lg:-translate-y-72 md:-translate-y-40 -translate-y-40'>
                
                {/* Color grid with selectable color buttons */}
                <div className="grid grid-cols-5 grid-rows-5 gap-5 w-fit">

                    {/* Main large div that changes color based on selectedColor */}
                    <div className={`rounded-lg col-start-1 col-end-4 row-start-1 row-end-4 transition-colors bg-[${selectedColor}]`}></div>

                    {/* Buttons to change the color of the large div */}
                    <button 
                        onClick={() => handleColorSelectors("#ff6666")}
                        className={`rounded-lg md:w-28 md:h-28 w-16 h-16 col-start-4 col-end-5 row-start-1 row-end-2 bg-[#ff6666] ${selectedColor == "#ff6666" && "opacity-50"} active:scale-90 transition-all ease-linear`}>
                    </button>

                    <button 
                        onClick={() => handleColorSelectors("#66ff66")}
                        className={`rounded-lg md:w-28 md:h-28 w-16 h-16 col-start-4 col-end-5 row-start-2 row-end-3 bg-[#66ff66] ${selectedColor == "#66ff66" && "opacity-50"} active:scale-90 transition-all ease-linear`}>
                    </button>

                    <button 
                        onClick={() => handleColorSelectors("#ffff66")}
                        className={`rounded-lg md:w-28 md:h-28 w-16 h-16 col-start-4 col-end-5 row-start-3 row-end-4 bg-[#ffff66] ${selectedColor == "#ffff66" && "opacity-50"} active:scale-90 transition-all ease-linear`}>
                    </button>

                    <button 
                        onClick={() => handleColorSelectors("#cc99ff")}
                        className={`rounded-lg md:w-28 md:h-28 w-16 h-16 col-start-4 col-end-5 row-start-4 row-end-5 bg-[#cc99ff] ${selectedColor == "#cc99ff" && "opacity-50"} active:scale-90 transition-all ease-linear`}>
                    </button>

                    <button 
                        onClick={() => handleColorSelectors("#ff99cc")}
                        className={`rounded-lg md:w-28 md:h-28 w-16 h-16 col-start-3 col-end-4 row-start-4 row-end-5 bg-[#ff99cc] ${selectedColor == "#ff99cc" && "opacity-50"} active:scale-90 transition-all ease-linear`}>
                    </button>

                    <button 
                        onClick={() => handleColorSelectors("#9999ff")}
                        className={`rounded-lg md:w-28 md:h-28 w-16 h-16 col-start-2 col-end-3 row-start-4 row-end-5 bg-[#9999ff] ${selectedColor == "#9999ff" && "opacity-50"} active:scale-90 transition-all ease-linear`}>
                    </button>

                    <button 
                        onClick={() => handleColorSelectors("#ffcc66")}
                        className={`rounded-lg md:w-28 md:h-28 w-16 h-16 col-start-1 col-end-2 row-start-4 row-end-5 bg-[#ffcc66] ${selectedColor == "#ffcc66" && "opacity-50"} active:scale-90 transition-all ease-linear`}>
                    </button>
                </div>

                {/* Description section */}
                <div className='space-y-4'>
                    <p className='md:text-3xl text-xl font-semibold'> Collection Featured</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus libero est hic suscipit provident sit, quibusdam cumque cupiditate ad perspiciatis doloribus qui rem iure asperiores laboriosam sint harum. Illo autem perspiciatis a tempora ipsa repellendus voluptatem natus nostrum nemo error!</p>
                </div>

            </div>
        </div>
    );
};

export default GridColor;
