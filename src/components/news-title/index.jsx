import React from 'react';

const NewsTitle = ({size, children, activeHover}) => {
    return (
        <h2 className={`text-${size}  font-bold text-[#001A57] ${activeHover}text-[#2E6DFF] ${activeHover}underline transition-all duration-400`}>
            {children}
        </h2>
    );
};

export default NewsTitle;