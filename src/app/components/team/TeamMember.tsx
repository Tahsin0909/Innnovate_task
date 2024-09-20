/* eslint-disable @next/next/no-img-element */


const TeamMember = () => {
    return (
        <div className="">
            <div className="flex items-center justify-center lg:justify-start md:gap-10 gap-8">
                <div className="md:space-y-20 space-y-16">

                    <div className="flex items-end relative group">
                        {/* image 1 */}
                        <img
                            className="md:w-[275px] w-[250px] md:h-[285px] h-[260px] object-cover rounded-2xl group-hover:shadow-lg group-hover:shadow-blue-400 transition-all " alt="team member img"
                            src={"https://i.ibb.co.com/Jc4b96j/close-up-toothy-smiling-brunet-man-1187-5800.jpg"} />

                        <img
                            className="w-20 h-20 border-[8px] border-white rounded-full object-cover absolute -right-6 -bottom-6 group-hover:scale-110 transition-all"
                            alt="team member img"
                            src={"https://i.ibb.co.com/Jc4b96j/close-up-toothy-smiling-brunet-man-1187-5800.jpg"} />

                    </div>


                    <div className="flex items-end relative group md:translate-x-12 translate-x-6">
                        {/* image 3  */}
                        <img
                            className="md:w-[208px] w-[150px] md:h-[217px] h-[170px] object-cover rounded-2xl group-hover:shadow-lg group-hover:shadow-gray-400 transition-all" alt="team member img"
                            src={"https://i.ibb.co.com/TrRD8vy/cheerful-happy-young-man-laughing-smiling-talking-phone-176420-12132.jpg"} />
                        <img
                            className="w-20 h-20 border-[8px] border-white rounded-full object-cover absolute md:right-9 -right-6  -bottom-6 group-hover:scale-110 transition-all"
                            alt="team member image"
                            src={"https://i.ibb.co.com/KhKDm4y/portrait-young-handsome-man-jean-shirt-smiling-with-crossed-arms-176420-12083.jpg"} />

                    </div>

                </div>




                <div className="flex items-end relative group">
                    {/* image 2  */}
                    <img
                        className="md:w-[228px] w-[200px] md:h-[238px] h-[220px] object-cover rounded-2xl group-hover:shadow-lg group-hover:shadow-black transition-all"
                        alt="team member img"
                        src={"https://i.ibb.co.com/WB0ZGNY/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands-197531-343.jpg"} />
                    <img
                        className="md:w-20 w-12 md:h-20 h-12 md:border-[8px] border-4 border-white rounded-full object-cover absolute -right-6 -bottom-6 group-hover:scale-110 transition-all"
                        alt="team member img"
                        src={"https://i.ibb.co.com/WB0ZGNY/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands-197531-343.jpg"} />

                </div>

            </div>
        </div>
    );
};

export default TeamMember;