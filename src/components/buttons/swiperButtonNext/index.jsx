import { useSwiper } from "swiper/react";

export const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slideNext()}>{children}</button>;
};