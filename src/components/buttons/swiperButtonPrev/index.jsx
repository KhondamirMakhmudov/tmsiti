import { useSwiper } from "swiper/react";

export const SwiperButtonPrev = ({ children, className }) => {
    const swiper = useSwiper();
    return <button className={className} onClick={() => swiper.slidePrev()}>{children}</button>;
};