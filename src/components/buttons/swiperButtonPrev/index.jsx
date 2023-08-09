import { useSwiper } from "swiper/react";

export const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <button onClick={() => swiper.slidePrev()}>{children}</button>;
};