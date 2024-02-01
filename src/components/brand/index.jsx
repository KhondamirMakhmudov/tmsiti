import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Brand = ({ active = 0 }) => {
  const { t } = useTranslation();
  return (
    <div>
      <Link
        className={"flex justify-center md:justify-start items-center"}
        href={"/"}
      >
        {active === 0 ? (
          <Image
            className={"mr-5"}
            width={52}
            alt={"brand"}
            height={56}
            src={"/icons/brand.svg"}
          />
        ) : (
          <Image
            className={"mr-5"}
            width={52}
            height={56}
            src={"/icons/brand-white.svg"}
            alt={"brand"}
          />
        )}
        <span
          className={
            "font-semibold w-[240px]  text-sm  lg:text-base text-start "
          }
        >
          {t("company_name")}
        </span>
      </Link>
    </div>
  );
};

export default Brand;
