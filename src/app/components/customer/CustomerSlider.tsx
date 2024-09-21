/* eslint-disable @next/next/no-img-element */
// Importing necessary modules from Swiper
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Importing Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

const CustomerSlider = () => {

    // Defining the structure of a Customer object
    interface Customer {
        name: string;
        email: string;
        title: string;
        subtitle: string;
        image: string;
        bgColor: string; // Background color for each customer card
    }

    // Sample customer data with relevant fields
    const people: Customer[] = [
        {
            name: "John Doe",
            email: "john.doe@example.com",
            title: "Frontend Developer",
            subtitle: "React Expert",
            image: "https://i.ibb.co/KhKDm4y/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms-176420-12083.jpg",
            bgColor: "#8B0000" // Dark Red background
        },
        {
            name: "Alex Smith",
            email: "alex.smith@example.com",
            title: "Backend Developer",
            subtitle: "Node.js Specialist",
            image: "https://i.ibb.co/Jc4b96j/close-up-toothy-smiling-brunet-man-1187-5800.jpg",
            bgColor: "#006400" // Dark Green background
        },
        {
            name: "Emily Davis",
            email: "emily.davis@example.com",
            title: "Full Stack Developer",
            subtitle: "MERN Enthusiast",
            image: "https://i.ibb.co/KhKDm4y/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms-176420-12083.jpg",
            bgColor: "#00008B" // Dark Blue background
        },
        {
            name: "Sarah Johnson",
            email: "sarah.johnson@example.com",
            title: "UX/UI Designer",
            subtitle: "Creative Innovator",
            image: "https://i.ibb.co/Jc4b96j/close-up-toothy-smiling-brunet-man-1187-5800.jpg",
            bgColor: "#FFD700" // Gold background
        },
        {
            name: "Michael Lee",
            email: "michael.lee@example.com",
            title: "DevOps Engineer",
            subtitle: "Cloud Specialist",
            image: "https://i.ibb.co/KhKDm4y/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms-176420-12083.jpg",
            bgColor: "#FF8C00" // Dark Orange background
        },
        {
            name: "Sophia Brown",
            email: "sophia.brown@example.com",
            title: "Data Scientist",
            subtitle: "AI Enthusiast",
            image: "https://i.ibb.co/Jc4b96j/close-up-toothy-smiling-brunet-man-1187-5800.jpg",
            bgColor: "#FF4500" // Orange Red background
        }
    ];

    return (
        <div className="">
            {/* Swiper component to create a slider with card effect */}
            <Swiper
                effect={'cards'}
                grabCursor={true} // Enables grabbing cursor during slide
                modules={[EffectCards]} // Swiper effect module for card animation
                className="my-swiper-container"
            >
                {
                    people?.map((data, idx) =>
                        // Each person is mapped into a SwiperSlide
                        <SwiperSlide key={idx} className="swiper-slide rounded-lg bg-transparent">
                            {/* Slide content styled based on individual bgColor */}
                            <div style={{ backgroundColor: data.bgColor }} className={`md:w-[350px] md:h-[350px] w-[250px] h-[250px] rounded-lg md:p-4 p-3 flex flex-col`}>
                                {/* Subtitle of the customer (e.g., React Expert) */}
                                <h2 className="text-2xl text-white font-semibold">{data.subtitle}</h2>

                                {/* Image and name section */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 md:mt-4">
                                        {/* Customer profile picture */}
                                        <img src={data.image} alt={data.name} className="w-10 h-10 rounded-full object-cover" />
                                        {/* Customer name */}
                                        <h3 className="text-xl text-white">{data.name}</h3>
                                    </div>
                                </div>

                                {/* Contact info section with email and title */}
                                <div className="p-2 rounded-xl glassEffect">
                                    <p className="text-white">{data.email}</p>
                                    <p className="text-white">{data.title}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default CustomerSlider;
