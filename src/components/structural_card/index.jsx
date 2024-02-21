import React from "react";
import Image from "next/image";
import Link from "next/link";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get, isEmpty, isNil } from "lodash";
import { useTranslation } from "react-i18next";

const StructuralCard = ({
  full_name,
  image,
  position,
  phone,
  email,
  receptionDays,
  bachelor,
  master,
  academicTitle,
}) => {
  const { t } = useTranslation();
  const { data, isLoading } = useGetTMSITIQuery({
    key: KEYS.workers,
    url: URLS.workers,
  });

  return (
    <>
      <div
        className={
          "flex  gap-x-[30px] py-[10px] lg:py-0 flex-col md:flex-row items-center md:items-start border px-[10px] rounded-[5px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] md:shadow-none md:rounded-0 md:px-0 md:border-none"
        }
      >
        <div className={"min-w-[210px] h-[250px]"}>
          <img
            src={`${image}`}
            alt={"profile-img"}
            className={" w-[210px] h-[250px] object-contain"}
          />
        </div>

        <div className={""}>
          {/* lavozim */}
          <h4
            className={
              "lg:text-base md:text-sm text-xs text-[#2B4764]  mt-[10px] md:mt-0 text-center md:text-start"
            }
          >
            {position}
          </h4>
          {/* F.I.O */}
          <h2
            className={
              "font-semibold text-base md:text-lg lg:text-2xl mb-[30px] text-center md:text-start"
            }
          >
            {full_name}
          </h2>
          {/* Telefon raqam */}
          <Link
            className={
              "lg:text-base md:text-sm text-xs text-[#001A57] mt-[10px] text-center md:text-start"
            }
            href={`tel:${phone}`}
          >
            {t("phone")}: {phone}
          </Link>{" "}
          <br />
          {/* Mail pochta */}
          <Link
            className={
              " lg:text-base md:text-sm text-xs text-[#001A57] mt-[10px] text-center md:text-start"
            }
            href={`mailto:${email}`}
          >
            {t("email")}: {email}{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default StructuralCard;
