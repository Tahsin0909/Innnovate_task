"use client"

import { ListFilter } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Event from './Event';
import { TechEvent } from '@/app/types/Types';



const CompanyEvent = () => {

    const [techEvents, setTechEvents] = useState<TechEvent[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<TechEvent[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>('All Category');

    useEffect(() => {
        // Fetch data (replace with API call if needed)
        const fetchEvents = async () => {
            const data: TechEvent[] = [
                { event: "React Summit", joiningPrice: 150, joined: 120, category: "Summits", colorPrimary: "#DED4F8", colorSecondary: "#BE92FB" },

                { event: "JavaScript Meet-Up", joiningPrice: 50, joined: 80, category: "Meet Ups", colorPrimary: "#0FA958", colorSecondary: "#94FFE6" },

                { event: "AI Seminar", joiningPrice: 100, joined: 60, category: "Seminar", colorPrimary: "#2768BF", colorSecondary: "#E6E6E6" },

                { event: "Full-Stack Workshop", joiningPrice: 200, joined: 40, category: "Workshop", colorPrimary: "#4C2F72", colorSecondary: "#BE92FB" },

                { event: "Tech Conference", joiningPrice: 300, joined: 150, category: "All Category", colorPrimary: "#DED4F8", colorSecondary: "#BE92FB"},

                { event: "Cloud Computing Summit", joiningPrice: 250, joined: 110, category: "Summits", colorPrimary: "#0FA958", colorSecondary: "#94FFE6" },

                { event: "Full-Stack Workshop", joiningPrice: 200, joined: 40, category: "Workshop", colorPrimary: "#2768BF", colorSecondary: "#E6E6E6" },

                { event: "NextJs Summit", joiningPrice: 150, joined: 120, category: "Summits", colorPrimary: "#4C2F72", colorSecondary: "#BE92FB" }
            ];
            setTechEvents(data);
            setFilteredEvents(data);
        };
        fetchEvents();
    }, []);

    // Filter events by category
    const filterByCategory = (category: string) => {
        setActiveCategory(category);
        if (category === 'All Category') {
            setFilteredEvents(techEvents);
        } else {
            setFilteredEvents(techEvents.filter(event => event.category === category));
        }
    };



    return (

        <div className='body_padding '>


            <div className='space-y-6'>

                <h2 className='md:text-3xl text-base font-semibold'>Discover More</h2>


                <div className='flex items-center justify-between flex-wrap gap-5'>

                    <div className='flex items-center lg:gap-8 md:gap-4 gap-2'>
                        {['All Category', 'Workshop', 'Seminar', 'Meet Ups', 'Summits'].map(category => (
                            <div
                                key={category}
                                className={`rounded-3xl md:py-2 md:px-3 px-2 py-2 text-nowrap lg:text-base md:text-sm text-xs bg-gray-400 hover:bg-[#3F05D4] hover:text-white cursor-pointer ${activeCategory === category ? 'bg-[#3F05D4] text-white' : ''
                                    }`}
                                onClick={() => filterByCategory(category)}
                            >
                                {category}
                            </div>
                        ))}
                    </div>



                    <div className='flex items-center gap-2 rounded-3xl md:py-2 md:px-3 px-2 py-2 text-nowrap  border border-[#3F05D4] text-[#3F05D4] group relative hover:text-white'>
                        <ListFilter className='z-20' size={20} />
                        <span className='z-20 lg:text-base md:text-sm text-xs'>All Filters</span>
                        <span className="absolute inset-0 bg-[#3F05D4] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-3xl z-0"></span>
                    </div>


                </div>

            </div>

            <div className='lg:mt-10 md:mt-8 mt-6 '>
                <Event events={filteredEvents} />
            </div>

        </div>
    );
};

export default CompanyEvent;