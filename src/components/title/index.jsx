import React from 'react';
import clsx from "clsx";

const Title = ({children,classNames=''}) => {
    return (
        <h2 className={'text-3xl font-bold text-[#001A57] mb-[30px]'}>
            {children}
        </h2>
    );
};

export default Title;