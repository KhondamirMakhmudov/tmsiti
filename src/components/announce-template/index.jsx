import React from 'react';

const AnnounceTemplate = ({date= '', title= '', description = '' }) => {
    return (
        <div className={'border-b-[1px] border-black pb-[30px] mb-[30px]'}>
            <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>{date}</p>
            <h2 className={'text-xl font-bold'}>{title}</h2>
            <p className={'text-[#A9AFC5] mt-[10px] '}>{description}</p>
        </div>
    );
};

export default AnnounceTemplate;