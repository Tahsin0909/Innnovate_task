import { TechEvent } from "@/app/types/Types";
import Event from "@/components/companyEvent/Event";
import Link from "next/link";

const page = () => {

    const data: TechEvent[] = [
        { event: "AI Seminar", joiningPrice: 100, joined: 60, category: "Seminar", colorPrimary: "#2768BF", colorSecondary: "#E6E6E6" },
        { event: "NextJs Seminar", joiningPrice: 150, joined: 120, category: "Seminar", colorPrimary: "#4C2F72", colorSecondary: "#BE92FB" }
    ];

    return (
        <div className="body_padding">
            <div className="my-10 flex items-center gap-2">
                <Link className="hover:text-blue-700" href={'/'}>Home</Link>
                <span> {'>'} </span>
                <Link className="hover:text-blue-700" href={'/events'}>Events</Link>
                <span>{'>'}</span>
                <Link className="hover:text-blue-700" href={'/events/seminar'}>Seminar</Link>
            </div>
            <Event events={data} />
        </div>
    );
};

export default page;