import React from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation, A11y} from "swiper/modules"
import Image from "next/image";
import 'swiper/css'
import 'swiper/css/navigation';
import Link from "next/link";
import {motion} from "framer-motion";

const Index = () => {
    return (
        <Main>
            <Menu/>

            <section className={'grid grid-cols-12 mx-auto container gap-x-[30px] mb-[50px] items-center'}>
                <div className={'col-span-6 place-items-center'}>

                        <motion.div
                            initial={{opacity: 0, translateX: -100}}
                            animate={{opacity: 1, translateX: 0}}
                            transition={{delay: 0.3}}
                            className="relative excel cursor-pointer p-[40px] border-[#AAAAAA] border-[1px] bg-[#D9D9D9] rounded-[10px]">
                            <Image src={'/images/table1.png'} alt={'table'} width={700} height={385} className={'rounded-[5px] object-contain'}/>
                            <Link href={'https://docs.google.com/spreadsheets/d/1f8RJkWZRu73kaYMJZZxNDOQmuXJ0jiZp/edit#gid=293985200'}>
                                <button className="absolute excel-button top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg  focus:outline-none">
                                    Faylni ochish
                                </button>
                            </Link>
                        </motion.div>

                </div>

                <div className={'col-span-6 text-3xl'}>
                    <motion.p
                        initial={{opacity: 0, translateX: 100}}
                        animate={{opacity: 1, translateX: 0}}
                        transition={{delay: 0.3}}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                    </motion.p>
                </div>
            </section>
        </Main>
    );
};

export default Index;