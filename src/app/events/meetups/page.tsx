import { TechEvent } from "@/app/types/Types";
import Event from "@/components/companyEvent/Event";
import Link from "next/link";

const page = () => {

    const data: TechEvent[] = [
        { event: "JavaScript Meet-Up", joiningPrice: 50, joined: 80, category: "Meet Ups", colorPrimary: "#0FA958", colorSecondary: "#94FFE6" },
    ];

    return (
        <div className="body_padding">
            <div className="my-10 flex items-center gap-2">
                <Link className="hover:text-blue-700" href={'/'}>Home</Link>
                <span> {'>'} </span>
                <Link className="hover:text-blue-700" href={'/events'}>Events</Link>
                <span>{'>'}</span>
                <Link className="hover:text-blue-700" href={'/events/meetups'}>Meet Ups</Link>
            </div>
            <Event events={data} />
        </div>
    );
};

export default page;