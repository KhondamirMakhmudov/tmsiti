import React from "react";
import { useSwiper } from "swiper/react";
import Image from "next/image";

export const SwiperButtons = ({ children, className }) => {
    const swiper = useSwiper();
    return (
        <div className={'col-span-12'}>
            <button className={className} onClick={() => swiper.slidePrev()}>
                <Image src={'/icons/arrow-left.svg'} alt={'right'} width={44} height={44}/>
            </button>

            <div>
                {children}
            </div>

            <button className={className} onClick={() => swiper.slidePrev()}>
                <Image src={'/icons/arrow-right.svg'} alt={'right'} width={44} height={44}/>
            </button>
        </div>
    )
};