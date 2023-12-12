import React from "react";
import clsx from "clsx";

const Title = ({ children, classNames = "" }) => {
  return (
    <h2
      className={
        "md:text-[20px] lg:text-[32px]  text-xl leading-normal font-bold text-[#001A57] mb-[30px] capitalize"
      }
    >
      {children}
    </h2>
  );
};

export default Title;
