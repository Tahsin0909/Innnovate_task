import { TechEvent } from "@/app/types/Types";
import Event from "@/components/companyEvent/Event";
import Link from "next/link";

const page = () => {

    const data: TechEvent[] = [
        { event: "React Summit", joiningPrice: 150, joined: 120, category: "Summits", colorPrimary: "#DED4F8", colorSecondary: "#BE92FB" },
        { event: "Cloud Computing Summit", joiningPrice: 250, joined: 110, category: "Summits", colorPrimary: "#0FA958", colorSecondary: "#94FFE6" },
        { event: "NextJs Summit", joiningPrice: 150, joined: 120, category: "Summits", colorPrimary: "#4C2F72", colorSecondary: "#BE92FB" }
    ];

    return (
        <div className="body_padding">
            <div className="my-10 flex items-center gap-2">
                <Link className="hover:text-blue-700" href={'/'}>Home</Link>
                <span> {'>'} </span>
                <Link className="hover:text-blue-700" href={'/events'}>Events</Link>
                <span>{'>'}</span>
                <Link className="hover:text-blue-700" href={'/events/summit'}>Summits</Link>
            </div>
            <Event events={data} />
        </div>
    );
};

export default page;