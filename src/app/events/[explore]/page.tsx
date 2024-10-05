'use client'

const page = ({ params }) => {

    console.log(params.explore);
    // here we can use find method to find the exact event details for that we need to have all array of object then we can use find operation
    return (
        <div className="body_padding">
            <p>{params.explore}</p>
            Events Information
        </div>
    );
};

export default page;