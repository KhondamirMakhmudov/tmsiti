import React from 'react';
import Image from "next/image";
import Link from "next/link";

const Card = ({name, img, position, phone, mail, receptionDays}) => {
    return (
        <div className={'flex gap-x-[30px]'}>
            <div>
                <img src={`${img}`} alt={"profile-img"} className={'w-[210px] h-[250px] object-contain'} />
            </div>

            <div>
                {/* lavozim */}
                <h4 className={'text-lg text-[#2B4764]'}>{position}</h4>

                {/* F.I.O */}
                <h2 className={'font-semibold text-2xl mb-[30px]'}>{name}</h2>

                {/* Qabul kunlari */}
                <p>Qabul kunlari: {receptionDays}</p>

                {/* Telefon raqam */}
                <Link className={'text-base text-[#001A57] py-[30px]'} href={`tel:${phone}`}>Telefon: {phone}</Link> <br/>

                {/* Mail pochta */}
                <Link className={'text-base text-[#001A57]'}  href={`mailto:${mail}`}>Elektron pochta: {mail} </Link>
            </div>
        </div>
    );
};

export default Card;