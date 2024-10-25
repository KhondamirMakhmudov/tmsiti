import Menu from "@/components/menu";
import Title from "@/components/title";
import Main from "@/layouts/main";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Reveal from "@/components/reveal";
import Image from "next/image";

const Index = () => {
  const { t } = useTranslation();
  return (
    <Main>
      <Menu />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[30px]"}>
        <div className={"container py-[12px] capitalize"}>
          <Link href={"/"}>{t("homepage")} / </Link>
          <Link href={"#"}>{t("activity")} / </Link>
          <Link href={"/news"}>{t("management_system")} </Link>
        </div>
      </section>
      <div
        style={{ backgroundImage: `url("/images/bg-management-1.jpg")` }}
        className=" h-[500px] bg-no-repeat bg-cover flex justify-center items-center mb-[30px]"
      >
        <div className=" ">
          <h1 className="text-white text-[32px]">{t("management_system")}</h1>
        </div>
      </div>

      <section className="mb-[30px]">
        <div className="container">
          <Reveal>
            <div className="leading-normal font-bold text-[#001A57] mb-[30px] text-xl">
              MENEJMENT TIZIMLARINI STANDARTLARGA MUVOFIQ SERTIFIKATLASHTIRISH
              XIZMATLARI:
            </div>
          </Reveal>

          <div className="flex items-center gap-x-[30px] justify-center">
            <ul className="flex flex-col gap-y-[18px]">
              <Reveal>
                <li className="flex gap-x-[5px] items-center">
                  <h2 className="text-white  bg-[#253568] inline py-[2px] px-[6px] rounded-lg">
                    O'z DSt ISO 9001:2015
                  </h2>

                  <p className="">Sifat menejmenti tizimlari. Talablar.</p>
                </li>
              </Reveal>
              <Reveal>
                {" "}
                <li className="flex gap-x-[5px] items-center">
                  <h2 className="text-white bg-[#253568] inline py-[2px] px-[6px] rounded-lg">
                    O'z DSt ISO 14001:2019
                  </h2>

                  <p className="">
                    Ekologik menejment tizimi. Ularni qo‘llash bo‘yicha talablar
                    va ko‘rsatmalar
                  </p>
                </li>
              </Reveal>
              <Reveal>
                {" "}
                <li className="flex gap-x-[5px] items-center">
                  <h2 className="text-white bg-[#253568] inline py-[2px] px-[6px] rounded-lg">
                    O'z DSt ISO 37001:2019
                  </h2>

                  <p className="">
                    Korrupsiyaga qarshi menejment tizimlari – Talablar va
                    qo‘llash bo‘yicha ko‘rsatmalar
                  </p>
                </li>
              </Reveal>
              <Reveal>
                {" "}
                <li className="flex gap-x-[5px] items-center">
                  <h2 className="text-white bg-[#253568] inline py-[2px] px-[6px] rounded-lg">
                    O'z DSt ISO 45001:2020
                  </h2>

                  <p className="">
                    Mehnat xavfsizligi va salomatligi sohasidagi menejment
                    tizimlari. Talablar".
                  </p>
                </li>
              </Reveal>
              <Reveal>
                {" "}
                <li className="flex gap-x-[5px] items-center">
                  <h2 className="text-white bg-[#253568] inline py-[2px] px-[6px] rounded-lg">
                    O'z DSt ISO/IEC 50001:2019
                  </h2>

                  <p className="">
                    Energiya menejment tizimlari. Talablar va qo‘llash bo‘yicha
                    ko‘rsatmalar
                  </p>
                </li>
              </Reveal>
            </ul>

            <div>
              <Image
                src={"/images/management_certificate.jpg"}
                alt="certificate"
                width={400}
                height={400}
                className="h-[300px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
