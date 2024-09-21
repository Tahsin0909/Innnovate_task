import { TechEvent } from "@/app/types/Types";
import EventCard from "./EventCard";

// Defining the type of props the Event component expects
interface EventProps {
    events: TechEvent[];  // An array of TechEvent objects
}

// Event component that takes events as a prop
const Event: React.FC<EventProps> = ({ events }) => {
    return (
        // Grid layout for different screen sizes
        <div className="md:grid lg:grid-cols-4 md:grid-cols-2 flex flex-col items-center md:gap-8 gap-6 w-full">
            {
                // Mapping through events and passing each event to EventCard component
                events.map((event, idx) => 
                    // Each EventCard receives a unique key (index) and the event object as a prop
                    <EventCard key={idx} event={event} />
                )
            }
        </div>
    );
};

export default Event;
