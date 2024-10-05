import { useRouter } from 'next/navigation';
import React from 'react';

const EventsPage = () => {

    const GoEvents = useRouter()

    return (
        <div className='grid md:grid-cols-2 gap-10 grid-cols-1 items-center text-center justify-center w-full h-full body_padding mt-20'>
            <div onClick={() => GoEvents.push("/events/meetups")} className='border p-20 hover:scale-105 transition-all ease-out md:text-lg lg:text-xl bg-[#94FFE6]  rounded-xl shadow-lg font-semibold cursor-pointer'>Tech Meetups</div>
            <div onClick={() => GoEvents.push("/events/summit")} className='border p-20 hover:scale-105 transition-all ease-out md:text-lg lg:text-xl bg-[#BE92FB]  rounded-xl shadow-lg font-semibold cursor-pointer'>Summit 2024</div>
            <div onClick={() => GoEvents.push("/events/seminar")} className='border p-20 hover:scale-105 transition-all ease-out md:text-lg lg:text-xl bg-[#0FA958]  rounded-xl shadow-lg font-semibold cursor-pointer'>Seminar</div>
            <div onClick={() => GoEvents.push("/events/workShop")} className='border p-20 hover:scale-105 transition-all ease-out md:text-lg lg:text-xl bg-[#E6E6E6]  rounded-xl shadow-lg font-semibold cursor-pointer'>Workshop</div>
        </div>
    );
};

export default EventsPage;