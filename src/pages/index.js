import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/title";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Navigation, A11y} from "swiper/modules"

// Import Swiper styles
import 'swiper/css';

import { useSwiper } from 'swiper/react';

import {SwiperButtons} from "@/components/buttons";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import {drop, get, head, slice} from "lodash";
import dayjs from "dayjs";
import {SwiperButtonNext} from "@/components/buttons/swiperButtonNext";
import React, {useState} from "react";
import {SwiperButtonPrev} from "@/components/buttons/swiperButtonPrev";



export default function Home() {

    const swiper = useSwiper();

    const {data, isLoading} = useGetTMSITIQuery({
        key: KEYS.news,
        url: URLS.news
    })



    const {data: discussion, isLoading: isLoadingDiscuss} = useGetTMSITIQuery({
        url: URLS.discuss,
        key: KEYS.discuss
    })

    const [currentIndex, setCurrentIndex] = useState(0);


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? get(data, 'data.results', []).length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === get(data, 'data.results', []).length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

  return (
    <Main>
        <Menu active={0} className={'relative z-30'} />

        <section className={'container mx-auto grid grid-cols-12 gap-x-[30px] items-center'}>
            <div

                        className={'col-span-5'}>
                <h1 className={'text-[64px] text-[#14255B] font-bold mb-[90px]'}>
                    Biz qurilishda taraqqiyotni ilhomlantiramiz.
                </h1>

                <div className={'flex gap-x-[30px]'}>
                    <div className={'p-[15px] border-t-[1px] border-[#14255B]'}>
                        <Link href={'/shnk'} className={'uppercase text-[#2E6DFF] text-base'}>
                            Shnq
                        </Link>

                        <Link href={'/shnk'} className={'text-[#001A57] hover:text-[#5D84CB] hover:underline text-2xl font-bold transition-all duration-400'}>
                            <p>Shaharsozlik normalari va qoidalari</p>
                        </Link>
                    </div>

                    <div className={'p-[15px] border-t-[1px] border-[#14255B]'}>
                        <Link href={'/standards'} className={'uppercase text-[#2E6DFF] text-base'}>
                            Standartlar
                        </Link>

                        <Link href={'/standards'} className={'text-[#001A57] hover:text-[#5D84CB] hover:underline text-2xl font-bold transition-all duration-400'}>
                            <p>Texnik jihatdan tartib solish sohasidagi normativ hujjatlar</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'col-span-7'}>
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
            </div>
        </section>

        {/*<section className={'h-[130px] w-full bg-[#001A57] flex items-center justify-center text-[#fff]'}>*/}

        {/*    <div className={'mx-auto container flex justify-between items-center gap-x-[76px]'}>*/}
        {/*        <button>*/}
        {/*            <Image src={'/icons/arrow-left.svg'} alt={'right'} width={44} height={44}/>*/}
        {/*        </button>*/}

        {/*        <div className={'flex items-center justify-between gap-x-[30px]'}>*/}
        {/*            <div>*/}
        {/*                <h4 className={'text-base'}>Muhokamalar</h4>*/}
        {/*                <p className={'text-[#BCBCBC] text-[14px]'}>Iyul 15-25, 2023</p>*/}
        {/*            </div>*/}

        {/*            <div className={'w-[1px] h-[80px] bg-white'}></div>*/}

        {/*            <div>*/}
        {/*                <h4 className={'text-2xl'}>ShNK 1.02.07-19 - Qurilish uchun muhandislik-texnik izlanishlar. Asosiy qoidalar</h4>*/}
        {/*                <p className={'text-base text-[#BCBCBC]'}>Shaharsozlik normalari va qoidalariga kiritilayotga o‘zgartirishlarga o‘z fikringizni bildiring, muhokalarda ishtirok eting!</p>*/}
        {/*            </div>*/}

        {/*        </div>*/}


        {/*        <button>*/}
        {/*            <Image src={'/icons/arrow-right.svg'} alt={'right'} width={44} height={44}/>*/}
        {/*        </button>*/}
        {/*    </div>*/}
        {/*</section>*/}

        <section className={'h-[130px] mt-[40px] w-full bg-[#001A57] flex items-center justify-center text-[#fff]'}>
            <div className={' container mx-auto'}>
                <button>
                    <Image src={'/icons/arrow-left.svg'} alt={'right'} width={44} height={44}/>
                </button>

                <Swiper modules={[Autoplay, Pagination, Navigation]} autoplay={{delay: 3000, disableOnInteraction: false}}loop={true} className={'mx-auto container flex items-center justify-center gap-x-[76px]'}>
                    <SwiperButtonPrev/>
                    {
                        get(discussion, 'data.results', []).map(item =>
                            // eslint-disable-next-line react/jsx-key
                            <SwiperSlide>
                                <div className={'flex items-center justify-center  gap-x-[30px]'}>
                                    <div>
                                        <h4 className={'text-base'}>Muhokamalar</h4>
                                        <p className={'text-[#BCBCBC] text-[14px]'}>{dayjs(get(item, 'shnk_datetime')).format("MMM DD-MM, YYYY")}</p>
                                    </div>

                                    <div className={'w-[1px] h-[80px] bg-white'}></div>

                                    <div className={'w-[975px]'}>
                                        <h4 className={'text-2xl'}>{get(item, 'shnk_number')} - {get(item, 'shnk_title')}</h4>
                                        <p className={'text-base text-[#BCBCBC]'}>{get(item, 'shnk_description')}</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                        )
                    }


                    <SwiperButtonNext/>
                </Swiper>

                <button>
                    <Image src={'/icons/arrow-right.svg'} alt={'left'} width={44} height={44}/>
                </button>
            </div>
        </section>

        <section className={'mb-[82px]'}>
            <div className={'grid grid-cols-12 container mx-auto'}>
                <div className={'col-span-12 flex justify-between pt-[50px] pb-[30px] items-end '}>
                    <Title>
                        So‘nggi yangiliklar
                    </Title>

                    <Link href={'/news'} className={"underline text-[#2E6DFF] text-base font-bold"}>
                        Barcha yangiliklar
                    </Link>
                </div>

                <div className={'col-span-6'}>
                    {
                        head(get(data, 'data.results', []).map(item =>
                            <div key={get(item, 'id')}>
                                <img src={get(item, 'news_image')} alt='news-main-img' className={'w-[690px] h-[468px] object-cover'}/>
                                <p className={'text-[#2E6DFF] mt-[30px] font-bold'}>Yangilik {dayjs(get(item, 'news_datetime')).format("DD.MM.YYYY")}</p>
                                <Link href={`/news/${get(item, 'id')}`}>
                                    <h2 className={'text-2xl  font-bold text-[#001A57] hover:text-[#2E6DFF] hover:underline mt-[20px] w-[690px]'}>{get(item, 'news_title')}</h2>
                                </Link>
                                <p className={'text-[#A9AFC5] mt-[10px] w-[690px]'}>{get(item, 'news_desc')}</p>
                            </div>
                        ))
                    }
                </div>

                <div className={'col-span-6'}>
                    <ul className={'grid grid-rows-12 '}>

                        {
                            slice(drop(get(data, 'data.results', []).map(item =>
                                <li key={get(item, 'id')} className={'row-span-4'}>

                                    <div className={'flex gap-x-[30px]'}>
                                        <div className={'w-[408px]'}>
                                            <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>Yangilik {dayjs(get(item, 'news_datetime')).format("DD.MM.YYYY")}</p>
                                            <Link href={`/news/${get(item, 'id')}`}>
                                                <h2 className={'text-xl hover:text-[#2E6DFF] hover:underline font-bold'}>{get(item, 'news_title')}</h2>
                                            </Link>
                                        </div>

                                        <img src={get(item, 'news_image')} alt={'news-img'} className={'w-[330px] h-[189px] object-cover'}/>
                                    </div>

                                    <div className={'w-full h-[1px] bg-gray-900 my-[30px]'}></div>
                                </li>


                            )), 0, 3)
                        }
                    </ul>
                </div>
            </div>
        </section>
    </Main>
  )
}


