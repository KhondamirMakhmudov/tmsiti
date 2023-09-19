import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {useTranslation} from "react-i18next";

const Brand = ({active = 0}) => {
    const {t} = useTranslation()
    return (
        <Link className={'flex items-center'} href={'/'}>
            {active === 0 ? <Image className={'mr-5'} width={52} alt={'brand'} height={56} src={'/icons/brand.svg'}/> : <Image className={'mr-5'} width={52} height={56} src={'/icons/brand-white.svg'} alt={'brand'}/>}
            <span className={'font-semibold w-[240px] text-sm md:text-base text-start '}>Qurilishda texnik me’yorlash va standartlashtirish ilmiy-tadqiqot instituti</span>
        </Link>
    );
};

export default Brand;