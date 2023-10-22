import React from 'react';

const NewsTitle = ({size, children, activeHover}) => {
    return (
        <h2 className={`md:text-3xl text-xl font-bold text-[#001A57] ${activeHover}text-[#2E6DFF] ${activeHover}underline transition-all duration-400`}>
            {children}
        </h2>
    );
};

export default NewsTitle;