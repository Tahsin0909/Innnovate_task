import { TechEvent } from "@/app/types/Types";
import EventCard from "./EventCard";

interface EventProps {
    events: TechEvent[];  
  }

const Event: React.FC<EventProps> = ({ events }) => {
    return (
        <div className="md:grid lg:grid-cols-4 md:grid-cols-2 flex flex-col items-center md:gap-8 gap-6  w-full">
            {
                events.map((event, idx) => <EventCard key={idx} event={event}/>)
            }

        </div>
    );
};

export default Event;