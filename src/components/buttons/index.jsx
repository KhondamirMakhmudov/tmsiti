import React from "react";
import { useSwiper } from "swiper/react";
import Image from "next/image";

export const SwiperButtons = ({ children, className }) => {
    const swiper = useSwiper();
    return (
        <div className={''}>
            <button className={'w-[50px] h-[50px]'} onClick={() => swiper.slidePrev()}>
                <Image src={'/icons/arrow-left.svg'} alt={'right'} width={44} height={44}/>
            </button>

            <button className={'w-[50px] h-[50px]'} onClick={() => swiper.slideNext()}>
                <Image src={'/icons/arrow-right.svg'} alt={'right'} width={44} height={44}/>
            </button>
        </div>
    )
};