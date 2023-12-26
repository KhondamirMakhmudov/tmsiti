import React from "react";
import Image from "next/image";
import Link from "next/link";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get, isEmpty, isNil } from "lodash";

const Card = ({
  name,
  img,
  position,
  phone,
  mail,
  receptionDays,
  bachelor,
  master,
  academicTitle,
}) => {
  const { data, isLoading } = useGetTMSITIQuery({
    key: KEYS.workers,
    url: URLS.workers,
  });

  return (
    <>
      <div
        className={
          "flex  gap-x-[30px] flex-col md:flex-row items-center md:items-start border px-[10px] rounded-[5px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:shadow-none md:rounded-0 md:px-0 md:border-none"
        }
      >
        <div className={"min-w-[210px] h-[250px]"}>
          <img
            src={`${img}`}
            alt={"profile-img"}
            className={" w-[210px] h-[250px] object-contain"}
          />
        </div>

        <div className={""}>
          {/* lavozim */}
          <h4
            className={
              "md:text-lg text-base  text-[#2B4764] text-center mt-[10px] md:mt-0"
            }
          >
            {position}
          </h4>
          {/* F.I.O */}
          <h2
            className={
              "font-semibold text-lg md:text-2xl mb-[30px] text-center"
            }
          >
            {name}
          </h2>
          {/* Qabul kunlari */}
          <p className={"lg:text-base md:text-sm text-xs pt-[10px]"}>
            Qabul kunlari: {receptionDays}
          </p>
          {/* Telefon raqam */}
          <Link
            className={
              "lg:text-base md:text-sm text-xs text-[#001A57] pt-[10px]"
            }
            href={`tel:${phone}`}
          >
            Telefon: {phone}
          </Link>{" "}
          <br />
          {/* Mail pochta */}
          <Link
            className={
              " lg:text-base md:text-sm text-xs text-[#001A57] pt-[10px]"
            }
            href={`mailto:${mail}`}
          >
            Elektron pochta: {mail}{" "}
          </Link>
          {/* Bachelor */}
          <p className={" lg:text-base md:text-sm text-xs pt-[10px] "}>
            Bakalavr bo`yicha mutaxassisligi: {bachelor}
          </p>
          {/* Master */}
          <p className={" lg:text-base md:text-sm text-xs pt-[10px]"}>
            {master}
          </p>
          {/* Ilmiy daraja yoki unvon   */}
          <p className={" lg:text-base md:text-sm text-xs pt-[10px]"}>
            {academicTitle}
          </p>
        </div>
      </div>

      {/*<div*/}
      {/*  className={*/}
      {/*    "flex flex-col md:hidden gap-x-[30px]  items-center md:items-start"*/}
      {/*  }*/}
      {/*>*/}
      {/*  <div className={"grid grid-cols-6 gap-x-[20px]"}>*/}
      {/*    <div className={"col-span-2"}>*/}
      {/*      <img*/}
      {/*        src={`${img}`}*/}
      {/*        alt={"profile-img"}*/}
      {/*        className={"w-[210px] md:h-[250px] object-contain"}*/}
      {/*      />*/}
      {/*    </div>*/}

      {/*    <div className={"col-span-4"}>*/}
      {/*      /!* lavozim *!/*/}
      {/*      <h4 className={"md:text-lg text-base  text-[#2B4764]"}>*/}
      {/*        {position}*/}
      {/*      </h4>*/}

      {/*      /!* F.I.O *!/*/}
      {/*      <h2 className={"font-semibold text-lg md:text-2xl mb-[30px]"}>*/}
      {/*        {name}*/}
      {/*      </h2>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  <div*/}
      {/*    className={*/}
      {/*      "mt-[10px] p-[8px] border-[1px] border-[#c5c5c5] rounded-[5px]"*/}
      {/*    }*/}
      {/*  >*/}
      {/*    /!* Qabul kunlari *!/*/}
      {/*    <p className={"md:text-base text-sm"}>*/}
      {/*      Qabul kunlari: {receptionDays}*/}
      {/*    </p>*/}
      {/*    /!* Telefon raqam *!/*/}
      {/*    <Link*/}
      {/*      className={"md:text-base text-sm text-[#001A57] py-[30px]"}*/}
      {/*      href={`tel:${phone}`}*/}
      {/*    >*/}
      {/*      Telefon: {phone}*/}
      {/*    </Link>{" "}*/}
      {/*    <br />*/}
      {/*    /!* Mail pochta *!/*/}
      {/*    <Link*/}
      {/*      className={"md:text-base text-sm text-[#001A57]"}*/}
      {/*      href={`mailto:${mail}`}*/}
      {/*    >*/}
      {/*      Elektron pochta: {mail}{" "}*/}
      {/*    </Link>*/}
      {/*    /!* Bachelor *!/*/}
      {/*    <p className={"md:text-base text-sm"}>*/}
      {/*      Bakalavr bo`yicha mutaxassisligi: {bachelor}*/}
      {/*    </p>*/}
      {/*    /!* Master *!/*/}
      {/*    <p className={"md:text-base text-sm"}>{master}</p>*/}
      {/*    /!* Ilmiy daraja yoki unvon   *!/*/}
      {/*    <p className={"md:text-base text-sm"}>{academicTitle}</p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

export default Card;
