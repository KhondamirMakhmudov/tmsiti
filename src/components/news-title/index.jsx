import React from 'react';

const NewsTitle = ({size, children}) => {
    return (
        <h2 className={`text-${size} text-[#001A57] font-bold text-[#001A57] hover:text-[#2E6DFF] hover:underline transition-all duration-400`}>
            {children}
        </h2>
    );
};

export default NewsTitle;