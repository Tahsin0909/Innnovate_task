import React from 'react';

interface button{
    text: string
}

const Button = ({text} : button) => {
    return (
        <button className="py-2 px-3 border text-[#2D0399] border-[#2D0399] rounded-xl group relative overflow-hidden active:scale-90 ease-linear transition-all ">
            <span className="relative z-10 group-hover:text-white ease-out transition-all">{text}</span>
            <span className="absolute inset-0 bg-[#2D0399] transition-all origin-top-left duration-300 ease-in-out scale-0 group-hover:scale-100 rounded-xl z-0"></span>
        </button>
    );
};

export default Button;