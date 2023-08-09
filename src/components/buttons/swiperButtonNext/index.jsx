import { useSwiper } from "swiper/react";

export const SwiperButtonNext = ({ children, className }) => {
    const swiper = useSwiper();
    return <button className={className} onClick={() => swiper.slideNext()}>{children}</button>;
};