import React from 'react';
import Link from "next/link";
import {get, isEmpty, isEqual, isNull} from "lodash"
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import Brand from "@/components/brand";

export const menuData = [
    {
        id: 1,
        title: 'Institut',
        url: '/',
        filterUrl:'',
        subMenu: [
            {
                id: 1,
                title: 'Rahbariyat',
                url: '/management',
            },

            {
                id: 2,
                title: 'Tuzilma',
                url: '/structure',
            },

            {
                id: 3,
                title: 'Me`yoriy hujjatlar',
                url: '/management',
            },

            {
                id: 4,
                title: 'Biz haqimizda',
                url: '/about',
            },

            // {
            //     id: 5,
            //     title: 'Laboratoriya',
            //     url: '/management',
            // },
            //
            // {
            //     id: 6,
            //     title: 'O‘quv markazi',
            //     url: '/management',
            // },

        ]

    },
    {
        id: 2,
        title: 'SHNQ',
        url: '/shnk',
        filterUrl:'',
        subMenu: []

    },
    {
        id: 3,
        title: 'Standartlar',
        url: '/standards',
        filterUrl:'',
        subMenu: []
    },
    {
        id: 4,
        title: 'Tizimlar',
        url: '/systems',
        filterUrl:'',
        subMenu: [
            {
                id: 1,
                title: 'Klassifikator',
                url: 'https://catalog-tmsiti.vercel.app/classifier',
            },
            //
            // {
            //     id: 2,
            //     title: 'Kalkulyator',
            //     url: '/structure',
            // },

            {
                id: 3,
                title: 'Lug‘at',
                url: '/dictionary',
            },

        ]
    },
    {
        id: 5,
        title: 'Xabarlar',
        url: '/',
        filterUrl:'',
        subMenu: [
            {
                id: 1,
                title: 'E’lonlar',
                url: '/announcement',
            },

            {
                id: 2,
                title: 'Muhokamalar',
                url: '/discussion',
            },

            {
                id: 3,
                title: 'Yangiliklar',
                url: '/news',
            },

            {
                id: 4,
                title: 'Xalqaro munosobat',
                url: '/management',
            },

        ]
    },
    {
        id: 6,
        title: 'Bog‘lanish',
        url: '/connect',
        subMenu: []
    },

]
const Menu = ({active = 0, className}) => {
    const {t} = useTranslation()
    return (
        <div className={` bg-[#fff]  py-5  mb-[50px] ${className}`}>
            <div className={'container mx-auto flex justify-between items-center'}>
                <Brand/>

                <ul className={'text-[#001A57] flex justify-between gap-x-[30px]'}>
                    {
                        menuData.map(item => <li key={get(item, 'id')} className={'dropdown relative'}>
                            <Link
                                className={clsx('hover:text-[#2E6DFF] font-semibold transition-all border-b border-b-transparent font-medium uppercase', {'!border-b-[#1890FF] text-white': isEqual(get(item, 'id'), active)})}
                                href={get(item, 'url')}>{t(get(item, 'title'))}
                            </Link>

                            {isEmpty(get(item, 'subMenu')) ? '' :
                                <ul className={'hidden left-[-10px]  bg-gray-50 dropdown-menu absolute w-[180px] text-start  rounded-[5px]'}>
                                    {
                                        get(item, 'subMenu', []).map(subItem =>

                                            <Link
                                                key={get(subItem, 'id')}
                                                className={clsx('hover:text-[#2E6DFF] font-semibold  transition-all text-sm border-b-transparent font-medium uppercase', {'!border-b-[#1890FF] text-white': isEqual(get(item, 'id'), active)})}
                                                href={get(subItem, 'url')}>

                                                        <li className={'p-[10px] border-b-[1px] border-b-[#D6E0F5]'}>{t(get(subItem, 'title'))}</li>

                                            </Link>

                                        )
                                    }
                                </ul>
                            }

                        </li>)
                    }
                </ul>
            </div>

        </div>
    );
};

export default Menu;