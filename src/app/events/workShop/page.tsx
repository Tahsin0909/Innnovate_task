import { TechEvent } from "@/app/types/Types";
import Event from "@/components/companyEvent/Event";
import Link from "next/link";

const page = () => {

    const data: TechEvent[] = [
        { event: "Full-Stack Workshop", joiningPrice: 200, joined: 40, category: "Workshop", colorPrimary: "#4C2F72", colorSecondary: "#BE92FB" },
        { event: "Full-Stack Workshop", joiningPrice: 200, joined: 40, category: "Workshop", colorPrimary: "#2768BF", colorSecondary: "#E6E6E6" },
    ];

    return (
        <div className="body_padding">
            <div className="my-10 flex items-center gap-2">
                <Link className="hover:text-blue-700" href={'/'}>Home</Link>
                <span> {'>'} </span>
                <Link className="hover:text-blue-700" href={'/events'}>Events</Link>
                <span>{'>'}</span>
                <Link className="hover:text-blue-700" href={'/events/workShop'}>Workshop</Link>
            </div>
            <Event events={data} />
        </div>
    );
};

export default page;