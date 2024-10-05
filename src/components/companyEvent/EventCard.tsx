'use client'

/* eslint-disable @next/next/no-img-element */
// Importing the TechEvent type for defining the props
import { TechEvent } from '@/app/types/Types';
import { useRouter } from 'next/navigation';
import React from 'react';

// Defining the interface for the EventCardProps, which takes a single event of type TechEvent
interface EventCardProps {
    event: TechEvent; // This prop holds the event details
}

// EventCard component receives event prop and renders an individual event card
const EventCard: React.FC<EventCardProps> = ({ event }) => {

    const explore = useRouter()

    return (
        // Main card container with responsive width and height, border, and shadow
        <div className="md:w-[292px] md:h-[400px] w-[220px] h-[350px] md:p-3 p-2 border rounded-lg shadow-md hover:shadow-xl relative">

            {/* Event header with dynamic background using colorPrimary and colorSecondary */}
            <div
                className="md:h-[210px] h-[180px] rounded-lg"
                style={{
                    background: `linear-gradient(to bottom right, ${event.colorPrimary}, ${event.colorSecondary})`,
                }}
            ></div>

            {/* Profile image section with overlapping images for visual effect */}
            <div className="flex items-center absolute -translate-y-6 translate-x-2">
                {/* First team member image */}
                <img
                    className="w-12 h-12 border-[4px] border-white rounded-full object-cover z-40 group-hover:scale-110 transition-all"
                    alt="team member img"
                    src={"https://i.ibb.co.com/Jc4b96j/close-up-toothy-smiling-brunet-man-1187-5800.jpg"} />

                {/* Second team member image */}
                <img
                    className="w-12 h-12 border-[4px] border-white rounded-full object-cover z-20 -translate-x-4 md:right-9 group-hover:scale-110 transition-all"
                    alt="team member image"
                    src={"https://i.ibb.co.com/KhKDm4y/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms-176412-11283.jpg"} />

                {/* Third team member image */}
                <img
                    className="w-12 h-12 border-[4px] border-white rounded-full object-cover z-0 -translate-x-8 group-hover:scale-110 transition-all"
                    alt="team member img"
                    src={"https://i.ibb.co.com/WB0ZGNY/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands-197531-343.jpg"} />
            </div>

            {/* Event details: Event name, price, and participants */}
            <div className="lg:mt-8 mt-7 flex flex-col space-y-5">
                {/* Event title */}
                <p className="md:text-lg font-semibold text-[#9747FF]">{event.event}</p>

                {/* Event price and participants info */}
                <div className="flex items-center justify-between text-[#5D06CD]">
                    <p><span>{event.joiningPrice}</span> TK</p>
                    <p>{event.joined} of 500</p>
                </div>

                {/* Action buttons: Join Now and Explore */}
                <div className="flex items-center justify-between">
                    {/* Join Now button with gradient background */}
                    <button className="bg-gradient-to-br from-[#9747FF] to-[#651BC6] hover:text-white md:text-base text-sm md:px-2 px-1 py-2 rounded-xl active:scale-90 transition-all ease-linear">
                        Join Now
                    </button>

                    {/* Explore button with gradient background */}
                    <button onClick={() => explore.push(`/events/${event.event}`)} className="bg-gradient-to-br from-[#26DBDB] to-[#A0FCD9] hover:text-white md:text-base text-sm md:px-2 px-1 py-2 rounded-xl active:scale-90 transition-all ease-linear">
                        Explore
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
