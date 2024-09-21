/* eslint-disable @next/next/no-img-element */
import { TechEvent } from '@/app/types/Types';
import React from 'react';

interface EventCardProps {
    event: TechEvent;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
    return (
        <div className="md:w-[292px] md:h-[400px] w-[220px] h-[350px] md:p-3 p-2 border rounded-lg shadow-md hover:shadow-xl relative ">
            <div
                className="md:h-[210px] h-[180px] rounded-lg"
                style={{
                    background: `linear-gradient(to bottom right, ${event.colorPrimary}, ${event.colorSecondary})`,
                }}
            >

            </div>
            <div className="flex items-center absolute -translate-y-6 translate-x-2">
                <img
                    className="w-12 h-12 border-[4px] border-white rounded-full object-cover  z-40  group-hover:scale-110 transition-all"
                    alt="team member img"
                    src={"https://i.ibb.co.com/Jc4b96j/close-up-toothy-smiling-brunet-man-1187-5800.jpg"} />
                <img
                    className="w-12 h-12 border-[4px] border-white rounded-full object-cover z-20 -translate-x-4 md:right-9 group-hover:scale-110 transition-all"
                    alt="team member image"
                    src={"https://i.ibb.co.com/KhKDm4y/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms-176412-11283.jpg"} />
                <img
                    className="w-12 h-12 border-[4px]  border-white rounded-full object-cover z-0 -translate-x-8 group-hover:scale-110 transition-all"
                    alt="team member img"
                    src={"https://i.ibb.co.com/WB0ZGNY/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands-197531-343.jpg"} />
            </div>
            <div className="lg:mt-8 mt-7 flex flex-col space-y-5">
                <p className="md:text-lg font-semibold text-[#9747FF]">{event.event}</p>

                <div className="flex items-center justify-between text-[#5D06CD]">
                    <p><span>{event.joiningPrice}</span> TK</p>
                    <p>{event.joined} of 500</p>
                </div>

                <div className="flex items-center justify-between">
                    <button className="bg-gradient-to-br from-[#9747FF] to-[#651BC6] hover:text-white md:text-base text-sm md:px-2 px-1 py-2  rounded-xl active:scale-90 transition-all ease-linear">
                        Join Now
                    </button>
                    <button className="bg-gradient-to-br from-[#26DBDB] to-[#A0FCD9] hover:text-white md:text-base text-sm md:px-2 px-1 py-2  rounded-xl active:scale-90 transition-all ease-linear">
                        Explore
                    </button>
                </div>


            </div>
        </div>
    );
};

export default EventCard;