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
        document.addEventListener("mousedown", handleClickOutside); // Listen for outside clicks
        return () => {
            document.removeEventListener("mousedown", handleClickOutside); // Clean up listener on unmount
        };
    }, []);


    return (
        <div className=" bg-[#363636] lg:px-20 md:px-10 px-8 py-4 text-white h-fit transition-all">
            {/* Menu icon for mobile view, toggles the menu */}
            <Menu onClick={handleToggle} className="block md:hidden" />

            {/* Navbar content with transition effect for toggle */}
            <div className={`${toggle ? 'flex translate-y-0 opacity-100' : 'hidden -translate-y-full opacity-0 md:flex md:translate-y-0 md:opacity-100'} transition-all duration-500 ease-linear md:flex md:flex-row flex-col-reverse items-center justify-between gap-4 md:mt-0 mt-4`}>

                {/* links section  */}
                <div className="">
                    <ul className="flex flex-row  items-center gap-10">
                        <li className="cursor-pointer lg:text-lg text-base font-semibold hover:text-green-600">
                            <span>Home</span>
                        </li>
                        <li className="cursor-pointer lg:text-lg text-base flex items-center gap-1 group relative ">
                            <span className="font-semibold group-hover:text-green-600 ">Event</span>
                            <ChevronUp size={20} className="mt-1 group-hover:rotate-180 transition-all ease-linear group-hover:text-green-600" />
                            <ul className=" p-2 scale-0 group-hover:scale-100 absolute top-6  transform origin-top-left transition-transform ">
                                <ul className="flex flex-col gap-2 p-4 w-36 rounded-md shadow-md text-black bg-white z-20">
                                    <li className="cursor-pointer  text-base hover:font-semibold hover:text-green-600">Tech Meetups</li>
                                    <li className="cursor-pointer  text-base hover:font-semibold hover:text-green-600">Summit 2024</li>
                                    <li className="cursor-pointer  text-base hover:font-semibold hover:text-green-600">Seminar</li>
                                    <li className="cursor-pointer  text-base hover:font-semibold hover:text-green-600">Workshop</li>
                                </ul>
                            </ul>
                        </li>
                        <li className="cursor-pointer lg:text-lg text-base font-semibold hover:text-green-600">
                            <span>Contact</span>
                        </li>
                        <li className="cursor-pointer lg:text-lg text-base font-semibold hover:text-green-600">
                            <span>Blogs</span>
                        </li>
                    </ul>
                </div>

                {/* Search input section */}


                <div className="border bg-white relative flex items-center justify-between lg:w-[300px] md:w-[290px] w-full h-12 focus-within:border-green-600 p-1 px-2 rounded-full">
                    <input type="search" placeholder="Search" className="w-full h-full focus:outline-none rounded-md text-black" />
                    <div>
                        <Search size={20} className="" color="black" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;