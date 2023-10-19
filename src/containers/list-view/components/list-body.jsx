import React from 'react';
import clsx from "clsx";
import {get} from "lodash";
import Image from "next/image";
import Link from "next/link";
import AnnounceTemplate from "@/components/announce-template";
import dayjs from "dayjs";

const ListBody = ({ dateTime, description, title, url, shnkNumber,
    rows = [], pageSize = 8, page = 1,
                  }) => {
    // const date = new Date(dateTime).toISOString().split('T')[0].replaceAll('-', '.');
    // const reversedDate = date.split('.').reverse().join('.')

    const date = dayjs(dateTime).format("DD.MM.YYYY")

    return (
        <div className={'border-b-[1px] border-black pb-[30px] mb-[30px]'}>
            <p className={'text-[#2E6DFF] mb-[20px] font-bold text-sm md:text-base'}>{date}</p>
            <h2 className={'text-lg md:text-xl font-bold hover:text-[#2E6DFF] cursor-pointer hover:underline'}>
                <Link href={`${url}`}>
                    {shnkNumber} - {title}
                </Link>

            </h2>
            <p className={'text-[#A9AFC5] mt-[10px] text-xs md:text-base'}>{description}</p>
        </div>
    );
};

export default ListBody;