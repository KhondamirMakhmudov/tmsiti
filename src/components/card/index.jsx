import React from 'react';
import Image from "next/image";
import Link from "next/link";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import {get, isEmpty, isNil} from "lodash";

const Card = ({name, img, position, phone, mail, receptionDays, bachelor, master, academicTitle}) => {
    const {data, isLoading} = useGetTMSITIQuery({
        key: KEYS.workers,
        url: URLS.workers
    })

    return (
        <div className={'flex gap-x-[30px] justify-center items-center px-[20px]'}>
            <div>
                <img src={`${img}`} alt={"profile-img"} className={'w-[210px] md:h-[250px] object-contain'} />
            </div>

            <div>
                {/* lavozim */}
                <h4 className={'md:text-lg text-base  text-[#2B4764]'}>{position}</h4>

                {/* F.I.O */}
                <h2 className={'font-semibold text-lg md:text-2xl mb-[30px]'}>{name}</h2>

                {/* Qabul kunlari */}
                <p className={'md:text-base text-sm'}>Qabul kunlari: {receptionDays}</p>

                {/* Telefon raqam */}
                <Link className={'md:text-base text-sm text-[#001A57] py-[30px]'} href={`tel:${phone}`}>Telefon: {phone}</Link> <br/>

                {/* Mail pochta */}
                <Link className={'md:text-base text-sm text-[#001A57]'}  href={`mailto:${mail}`}>Elektron pochta: {mail} </Link>

                {/* Bachelor */}
                <p className={'md:text-base text-sm'}>Bakalavr bo`yicha mutaxassisligi: {bachelor}</p>

                {/* Master */}
                <p className={'md:text-base text-sm'}>{master}</p>

                {/* Ilmiy daraja yoki unvon   */}
                <p className={'md:text-base text-sm'}>{academicTitle}</p>
            </div>
        </div>
    );
};

export default Card;