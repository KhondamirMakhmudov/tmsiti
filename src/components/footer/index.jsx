import React from 'react';
import Brand from "@/components/brand";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation()
    return (
        <footer>
            <div className={'bg-[#28366D] bg-no-repeat bg-cover  py-[50px]  '} style={{backgroundImage: "url(/images/footer-background.png)"}}>
                <div className={'container mx-auto text-white'}>
                    <div className="grid grid-cols-12 gap-x-[150px]">
                        <div className="col-span-3">
                            <Brand active={1}/>
                            <p className={'my-5'}>Qurilish sohasida texnik me’yorlar, shaharzoslik normalari va standartlar reglamentlar</p>

                            <ul className={'flex my-2.5'}>
                                <li className={'mr-3'}>
                                    <p>Ijtimoiy tarmoqlar:</p>
                                </li>
                                <li className={'mr-3'}>
                                    <Link href={'#'}>
                                        <Image width={24} height={24} src={'/icons/telegram.svg'}/>
                                    </Link>
                                </li>
                                <li className={'mr-3'}>
                                    <Link href={'#'}>
                                        <Image width={24} height={24} src={'/icons/instagram.svg'}/>
                                    </Link>
                                </li>
                                <li className={'mr-3'}>
                                    <Link href={'#'}>
                                        <Image width={24} height={24} src={'/icons/facebook.svg'}/>
                                    </Link>
                                </li>
                            </ul>

                        </div>
                        <div className={'col-span-9 flex justify-end gap-x-[30px]'}>
                            <div className="">
                                <h4 className={'text-xl font-bold mb-[30px]'}>Institut</h4>
                                <ul className={'text-[#D9D9D9]'}>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/management'}>Rahbariyat</Link>
                                    </li>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/organizitional-structure'}>Tuzilma</Link>
                                    </li>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/'}>Me`yoriy hujjatlar</Link>
                                    </li>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/about'}>Biz haqimizda</Link>
                                    </li>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/classifier'}>Laboratoriya</Link>
                                    </li>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'#'}>O‘quv markazi</Link>
                                    </li>
                                </ul>
                            </div>


                            <div className="">
                                <h4 className={'text-xl font-bold mb-[30px]'}>Normalar</h4>
                                <ul className={'text-[#D9D9D9]'}>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/'}>SHNK</Link>
                                    </li>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/machine-mechano'}>Standartlar</Link>
                                    </li>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/works'}>Reestr</Link>
                                    </li>

                                </ul>
                            </div>

                            <div className="">
                                <h4 className={'text-xl font-bold mb-[30px]'}>Tizimlar</h4>
                                <ul className={'text-[#D9D9D9]'}>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/'}>Klassifikator</Link>
                                    </li>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/machine-mechano'}>Kalkulyator</Link>
                                    </li>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/works'}>Lug‘at</Link>
                                    </li>

                                </ul>
                            </div>

                            <div className="">
                                <h4 className={'text-xl font-bold mb-[30px]'}>Xabarlar</h4>
                                <ul className={'text-[#D9D9D9]'}>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/'}>E’lonlar</Link>
                                    </li>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/machine-mechano'}>Muhokamalar</Link>
                                    </li>
                                    <li className={'mb-[10px]'}>
                                        <Link href={'/works'}>Yangiliklar</Link>
                                    </li>

                                    <li className={'mb-[10px]'}>
                                        <Link href={'/works'}>Xalqaro munosobat</Link>
                                    </li>

                                </ul>
                            </div>

                            <div className="">
                                <h4 className={'text-xl font-bold mb-[30px]'}>Biz haqimizda</h4>
                                <ul className={'text-[#D9D9D9]'}>
                                    <li className={'text-base mb-[10px]'}>
                                        <p href={'/'}>Toshkent shahar, Shayxontohur tumani, Abay ko’chasi 6A-Bino</p>
                                    </li>
                                    <li className={' text-base '}>
                                        <Link href={'tel:+998 71 244-51-84'}>Phone:+998 71 244-51-84</Link> <br/>

                                    </li>
                                    <li className={'text-base'}>
                                        <Link href={'mailto:info@tmsiti.uz'}>Email:info@tmsiti.uz</Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bg-[#001A57] h-[30px] w-full text-[#fff] flex justify-center items-center text-xs'}>
                <p>Qurilishda texnik me’yorlash va standartlashtirish ilmiy-tadqiqot instituti| All rights reserved © 2021</p>
            </div>
        </footer>
    );
};
export default Footer;