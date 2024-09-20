'use client';

import { ChevronUp, Menu, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {

    // State to toggle the visibility of the menu
    const [toggle, setToggle] = useState<boolean>(false);

    // Ref to track the navbar menu element for outside click detection
    const ref = useRef<HTMLDivElement>(null);

    // Toggle the menu open or closed when the menu icon is clicked
    const handleToggle = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevents triggering handleClickOutside when clicking inside
        setToggle((prevToggle) => !prevToggle); // Toggle the state
    };

    // Handles clicks outside the menu; closes the menu if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setToggle(false); // Close the menu
        }
    };

    // Effect hook to listen for clicks outside the navbar and clean up
    useEffect(() => {
        if (window.innerWidth > 425) {
            setToggle(false);
        }
        document.addEventListener("mousedown", handleClickOutside); // Listen for outside clicks
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Clean up listener on unmount
        };
    }, []);


    return (
        <header ref={ref} className=" bg-primary body_padding text-white h-fit transition-all relative z-50">
            {/* Menu icon for mobile view, toggles the menu */}
            <div className="flex md:hidden items-center gap-10">
                <Menu onClick={handleToggle} className="" />
                <div className="border bg-white relative flex items-center justify-between lg:w-[300px] md:w-[290px] w-full h-12 focus-within:border-hover_Color p-1 px-2 rounded-full">
                    <input type="search" placeholder="Search" className="w-full h-full focus:outline-none rounded-md text-black" />
                    <div>
                        <Search size={20} className="" color="black" />
                    </div>
                </div>
            </div>


            {/* Navbar content with transition effect for toggle */}
            <div className={`${toggle ? '' : ''} transition-all duration-500 ease-linear md:flex md:flex-row flex-col-reverse items-center justify-between gap-4 md:mt-0 mt-4 relative`}>

                {/* links section  */}
                <div className={`${toggle ? 'scale-100' : 'scale-0 md:scale-100'} md:relative absolute top-1 left-1 transform origin-top-left delay-150 transition-transform`}>
                    <ul className={`flex flex-row items-center gap-10 `}>
                        <nav className="cursor-pointer lg:text-lg text-base font-semibold hover:text-hover_Color">
                            <span>Home</span>
                        </nav>
                        <li className="cursor-pointer lg:text-lg text-base flex items-center gap-1 group relative ">
                            <span className="font-semibold group-hover:text-hover_Color ">Event</span>
                            <ChevronUp size={20} className="mt-1 group-hover:rotate-180 transition-all ease-linear group-hover:text-hover_Color" />
                            <ul className=" p-2 scale-0 group-hover:scale-100 absolute top-6  transform origin-top-left  transition-transform z-50">
                                <ul className="flex flex-col gap-2 p-4 w-36 rounded-md shadow-md text-black bg-white z-50">
                                    <nav className="cursor-pointer  text-base hover:font-semibold hover:text-hover_Color">Tech Meetups</nav>
                                    <nav className="cursor-pointer  text-base hover:font-semibold hover:text-hover_Color">Summit 2024</nav>
                                    <nav className="cursor-pointer  text-base hover:font-semibold hover:text-hover_Color">Seminar</nav>
                                    <nav className="cursor-pointer  text-base hover:font-semibold hover:text-hover_Color">Workshop</nav>
                                </ul>
                            </ul>
                        </li>
                        <nav className="cursor-pointer lg:text-lg text-base font-semibold hover:text-hover_Color">
                            <span>Contact</span>
                        </nav>
                        <nav className="cursor-pointer lg:text-lg text-base font-semibold hover:text-hover_Color">
                            <span>Blogs</span>
                        </nav>
                    </ul>
                </div>

                {/* Search input section */}


                <div className="border bg-white relative md:flex items-center justify-between lg:w-[300px] md:w-[290px] w-full h-12 focus-within:border-hover_Color p-1 px-2 rounded-full hidden">
                    <input type="search" placeholder="Search" className="w-full h-full focus:outline-none rounded-md text-black" />
                    <div>
                        <Search size={20} className="" color="black" />
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Navbar;