import React from 'react';
import Link from "next/link";
import dayjs from "dayjs";

const AnnounceTemplate = ({date, title, description, url }) => {
    const dateTime = dayjs(date).format("DD.MM.YYYY")
    return (
        <div className={'border-b-[1px] border-black pb-[30px] mb-[30px]'}>
            <p className={'text-[#2E6DFF] mb-[20px] font-bold text-sm md:text-base'}>{dateTime}</p>
            <h2 className={' text-lg md:text-xl font-bold hover:text-[#2E6DFF] cursor-pointer hover:underline'}>
                <Link href={`${url}`}>
                    {title}
                </Link>

            </h2>
            <p className={'text-[#A9AFC5] mt-[10px] text-xs md:text-base'}>{description}</p>
        </div>
    );
};

export default AnnounceTemplate;