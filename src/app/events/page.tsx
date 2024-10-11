
import EventsPage from "@/components/eventsComponents/EventsPage";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Blog Page",
    description: "Blog page",
  };


const page = () => {



    return (
        <div>
            <EventsPage/>
        </div>
    );
};

export default page;