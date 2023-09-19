import React from 'react';
import clsx from "clsx";

const Title = ({children,classNames=''}) => {
    return (
        <h2 className={'md:text-[32px] text-base leading-normal font-bold text-[#001A57] md:mb-[30px] mb-0  uppercase'}>
            {children}
        </h2>
    );
};

export default Title;