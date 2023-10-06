import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/title";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation, A11y} from "swiper/modules"
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import {drop, get, head, slice} from "lodash";
import dayjs from "dayjs";
import React, {useEffect, useState} from "react";
import {motion, useAnimation} from "framer-motion";


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation';






export default function Home() {
    const controls = useAnimation();

    const handleScroll = () => {
        const scrollY = window.scrollY;
        controls.start({ translateY: 1, opacity: 1, translateX: 0});
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });


    const {data, isLoading} = useGetTMSITIQuery({
        key: KEYS.news,
        url: URLS.news
    })



    const {data: discussion, isLoading: isLoadingDiscuss} = useGetTMSITIQuery({
        url: URLS.discuss,
        key: KEYS.discuss
    })





  return (
    <Main>
        <Menu active={0} className={'relative z-30 !mb-0'} />

        <section className={'container mx-auto grid grid-cols-12 gap-x-[30px] items-center'}>
            <div className={'col-span-12 md:col-span-5'} >

                <div className={"relative h-[450px] md:h-auto md:before:bg-none flex justify-center text-center before:absolute md:before:object-none before:opacity-60   before:inset-0 before:bg-pattern md:text-start before:object-cover before:h-[450px]"}>
                    <motion.h1 initial={{scale: 0.01}} transition={{delay: 0.3}} animate={{scale: 1}} className={' px-5 md:px-0 md:text-[64px] relative top-[100px] md:top-0 text-[45px] text-[#14255B] font-bold md:mb-[90px] mb-[50px]'}>
                        Biz qurilishda taraqqiyotni ilhomlantiramiz.
                    </motion.h1>
                </div>


                <div className={'flex flex-col md:flex-row gap-x-[30px] relative  md:px-0'}>
                    <motion.div initial={{scale: 0.01}} transition={{delay: 0.5}} animate={{scale: 1}} className={'p-[15px]  md:border-t-[1px] border-t-[0px]  border-[#14255B]'}>
                        <Link href={'/shnk'} className={'uppercase text-[#2E6DFF] text-sm md:text-base'}>
                            Shnq
                        </Link>

                        <Link href={'/shnk'} className={'text-[#001A57] hover:text-[#5D84CB] hover:underline md:text-2xl text-xl font-bold transition-all duration-400'}>
                            <p>Shaharsozlik normalari va qoidalari</p>
                        </Link>
                    </motion.div>

                    <motion.div initial={{scale: 0.01}} transition={{delay: 0.7}} animate={{scale: 1}} className={'p-[15px] md:border-t-[1px] border-t-[0px] border-[#14255B]'}>
                        <Link href={'/standards'} className={'uppercase text-[#2E6DFF] text-sm md:text-base'}>
                            Standartlar
                        </Link>

                        <Link href={'/standards'} className={'text-[#001A57] hover:text-[#5D84CB] hover:underline md:text-2xl text-xl font-bold transition-all duration-400'}>
                            <p>Texnik jihatdan tartib solish sohasidagi normativ hujjatlar</p>
                        </Link>
                    </motion.div>
                </div>
            </div>
            <motion.div initial={{translateX: 500, opacity: 0.001}} animate={{translateX: 0, opacity: 1}} transition={{delay: 1}} className={'md:col-span-7 md:block hidden'}>
                {/*<ImageGallery items={images} infinite showPlayButton />*/}
                <Swiper loop={true} centeredSlides={true} autoplay={{delay: 3000, disableOnInteraction: false}} className={'absolute z-10'} modules={[Autoplay, Pagination, Navigation]}>
                    <SwiperSlide className={'swiper-slide'}>
                        <Image src={'/images/img.png'} alt={''} className={'w-[945px] h-[734px]'} width={945} height={734}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={'/images/img.png'} alt={''} className={'w-[945px] h-[734px]'} width={945} height={734}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={'/images/img.png'} alt={''} className={'w-[945px] h-[734px]'} width={945} height={734}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={'/images/img.png'} alt={''} className={'w-[945px] h-[734px]'} width={945} height={734}/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Image src={'/images/img.png'} alt={''} className={'w-[945px] h-[734px]'} width={945} height={734}/>
                    </SwiperSlide>
                </Swiper>
            </motion.div>
        </section>


        <section className={'h-[130px]  w-full bg-[#001A57] flex items-center justify-center text-[#fff]'}>
            <motion.div initial={{translateY: 100 , opacity: 0}} animate={controls}  className={' container mx-auto'}>


                <Swiper
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    loop={true} className={'mx-auto container flex items-center justify-center gap-x-[76px]'}>

                    {
                        get(discussion, 'data.results', []).map(item =>
                            // eslint-disable-next-line react/jsx-key
                            <SwiperSlide>
                                <div className={'flex items-center justify-center  gap-x-[30px] px-[20px]'}>
                                    <div>
                                        <h4 className={'text-sm md:text-base'}>Muhokamalar</h4>
                                        <p className={'text-[#BCBCBC] text-[14px] text-xs md:text-[14px]'}>{dayjs(get(item, 'shnk_datetime')).format("MMM DD-MM, YYYY")}</p>
                                    </div>

                                    <div className={'w-[1px] h-[80px] bg-white'}></div>

                                    <div className={'w-[975px]'}>
                                        <Link href={`/discussion/${get(item, 'id', '')}`} className={'hover:underline cursor-pointer transition-all duration-500'}>
                                            <h4 className={'md:text-2xl text-base'}>{get(item, 'shnk_number')} - {get(item, 'shnk_title')}</h4>
                                        </Link>
                                        <p className={'text-xs md:text-base line-clamp-2 md:line-clamp-none text-[#BCBCBC]'}>{get(item, 'shnk_description')}</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                        )
                    }

                </Swiper>



            </motion.div>
        </section>

        <motion.section
            initial={{ translateY: 100 , opacity: 0}}
            animate={controls}
            className={'mb-[82px]'}>
            <div className={'grid grid-cols-12 gap-x-[30px] container mx-auto p-[20px] md:p-0'}>

                <div className={'col-span-12 flex justify-between pt-[50px] pb-[30px] items-end '}>
                    <Title>
                        So‘nggi yangiliklar
                    </Title>

                    <Link href={'/news'} className={"underline text-[#2E6DFF] md:text-base text-[12px] font-bold"}>
                        Barcha yangiliklar
                    </Link>
                </div>

                <motion.div
                    initial={{translateY: 200, opacity: 0}}
                    animate={controls}
                    className={'md:col-span-6 col-span-12 pb-[20px] mb-[20px] md:pb-0 mb:mb-0 md:border-b-0 md:border-none border-b-[#C5C6C7] border-b-[1px] '}>
                    {
                        head(get(data, 'data.results', []).map(item =>
                            <div key={get(item, 'id')}>
                                <img src={get(item, 'news_image')} alt='news-main-img' className={'md:w-[690px] md:h-[468px]   object-cover'}/>
                                <p className={'text-[#2E6DFF] mt-[30px] font-bold'}>Yangilik {dayjs(get(item, 'news_datetime')).format("DD.MM.YYYY")}</p>
                                <Link href={`/news/${get(item, 'id')}`}>
                                    <h2 className={'text-2xl  font-bold text-[#001A57] hover:text-[#2E6DFF] hover:underline mt-[20px]  md:line-clamp-none line-clamp-2'}>{get(item, 'news_title')}</h2>
                                </Link>
                                <p className={'text-[#A9AFC5] mt-[10px] '}>{get(item, 'news_desc')}</p>
                            </div>
                        ))
                    }
                </motion.div>

                <div className={'md:col-span-6 col-span-12'}>
                    <ul className={'grid grid-rows-12 '}>

                        {
                            slice(drop(get(data, 'data.results', []).map(item =>
                                <motion.li initial={{translateX: 100, opacity: 0}} animate={controls} key={get(item, 'id')} className={'row-span-4'}>

                                    <div className={'flex gap-x-[30px]'}>
                                        <div className={'w-[408px]'}>
                                            <p className={'text-[#2E6DFF] md:text-base text-sm mb-[20px] font-bold'}>Yangilik {dayjs(get(item, 'news_datetime')).format("DD.MM.YYYY")}</p>
                                            <Link href={`/news/${get(item, 'id')}`}>
                                                <h2 className={'md:text-xl text-base  hover:text-[#2E6DFF] hover:underline font-bold line-clamp-5'}>{get(item, 'news_title')}</h2>
                                            </Link>
                                        </div>

                                        <img src={get(item, 'news_image')} alt={'news-img'} className={'md:w-[330px] md:h-[189px] w-[250px]  object-cover'}/>
                                    </div>

                                    <div className={'w-full h-[1px] bg-gray-900 my-[30px]'}></div>
                                </motion.li>


                            )), 0, 3)
                        }
                    </ul>
                </div>
            </div>
        </motion.section>
    </Main>
  )
}
