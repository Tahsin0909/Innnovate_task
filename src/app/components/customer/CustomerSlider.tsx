import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


const CustomerSlider = () => {


    interface Customer {
        name: string;
        email: string;
        title: string;
        subtitle: string;
        image: string;
        bgColor: string;
    }

    const people: Customer[] = [
        {
            name: "John Doe",
            email: "john.doe@example.com",
            title: "Frontend Developer",
            subtitle: "React Expert",
            image: "https://i.ibb.co/KhKDm4y/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms-176420-12083.jpg",
            bgColor: "#8B0000" // Dark Red
        },
        {
            name: "Alex Smith",
            email: "alex.smith@example.com",
            title: "Backend Developer",
            subtitle: "Node.js Specialist",
            image: "https://i.ibb.co/Jc4b96j/close-up-toothy-smiling-brunet-man-1187-5800.jpg",
            bgColor: "#006400" // Dark Green
        },
        {
            name: "Emily Davis",
            email: "emily.davis@example.com",
            title: "Full Stack Developer",
            subtitle: "MERN Enthusiast",
            image: "https://i.ibb.co/KhKDm4y/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms-176420-12083.jpg",
            bgColor: "#00008B" // Dark Blue
        },
        {
            name: "Sarah Johnson",
            email: "sarah.johnson@example.com",
            title: "UX/UI Designer",
            subtitle: "Creative Innovator",
            image: "https://i.ibb.co/Jc4b96j/close-up-toothy-smiling-brunet-man-1187-5800.jpg",
            bgColor: "#FFD700" // Gold (Deep Yellow)
        },
        {
            name: "Michael Lee",
            email: "michael.lee@example.com",
            title: "DevOps Engineer",
            subtitle: "Cloud Specialist",
            image: "https://i.ibb.co/KhKDm4y/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms-176420-12083.jpg",
            bgColor: "#FF8C00" // Dark Orange
        },
        {
            name: "Sophia Brown",
            email: "sophia.brown@example.com",
            title: "Data Scientist",
            subtitle: "AI Enthusiast",
            image: "https://i.ibb.co/Jc4b96j/close-up-toothy-smiling-brunet-man-1187-5800.jpg",
            bgColor: "#FF4500" // Orange Red
        }
    ];

    return (
        <div className="">
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className=" my-swiper-container"
            >
                {
                    people?.map((data, idx) =>
                        <SwiperSlide key={idx} className="swiper-slide rounded-lg bg-transparent">
                            <div style={{ backgroundColor: data.bgColor }} className={`md:w-[350px] md:h-[350px] w-[250px] h-[250px] rounded-lg md:p-4 p-3 flex flex-col`}>
                                <h2 className="text-2xl text-white font-semibold">{data.subtitle}</h2>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 md:mt-4">
                                        <img src={data.image} alt="John Doe" className="w-10 h-10 rounded-full object-cover" />
                                        <h3 className="text-xl text-white">{data.name}</h3>
                                    </div>
                                </div>
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