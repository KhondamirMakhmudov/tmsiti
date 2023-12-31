import React from "react";
import Brand from "@/components/brand";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div
        className={"bg-[#28366D] bg-no-repeat bg-cover  py-[50px]  "}
        style={{ backgroundImage: "url(/images/footer-background.png)" }}
      >
        <div className={"container mx-auto text-white"}>
          <div className="grid md:grid-cols-12 grid-rows-12 gap-x-[30px] px-[20px] text-center md:text-start">
            <div className="row-span-12 md:col-span-3 ">
              <Brand active={1} />
              <p className={"my-5  md:w-auto"}>
                Qurilish sohasida texnik me’yorlar, shaharzoslik normalari va
                standartlar reglamentlar
              </p>

              <ul
                className={
                  "flex justify-center md:justify-start items-center my-2.5 gap-x-[10px]"
                }
              >
                <li>
                  <p>Ijtimoiy tarmoqlar:</p>
                </li>
                <li>
                  <Link href={"#"}>
                    <Image
                      width={24}
                      alt={"social-media"}
                      height={24}
                      src={"/icons/telegram.svg"}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <Image
                      width={24}
                      alt={"social-media"}
                      height={24}
                      src={"/icons/instagram.svg"}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={"#"}>
                    <Image
                      width={24}
                      alt={"social-media"}
                      height={24}
                      src={"/icons/facebook.svg"}
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={
                " row-span-12  md:col-span-9 flex flex-col md:flex-row justify-center  md:justify-end gap-x-[30px]"
              }
            >
              <div className="">
                <h4
                  className={
                    "md:text-xl text-lg font-bold mb-[10px] md:mb-[30px]"
                  }
                >
                  Institut
                </h4>
                <ul className={"text-[#D9D9D9] text-sm md:text-base"}>
                  <li className={"mb-[10px]"}>
                    <Link href={"/about"}>Institut haqida</Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"/management"}>Rahbariyat</Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"/structure"}>Tashkiliy tuzilma</Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"/structural-divisions"}>
                      Tarkibiy bo’linmalar
                    </Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"/vacancies"}>Vakansiyalar</Link>
                  </li>
                  {/*<li className={'mb-[10px]'}>*/}
                  {/*    <Link href={'/classifier'}>Laboratoriya</Link>*/}
                  {/*</li>*/}
                  {/*<li className={'mb-[10px]'}>*/}
                  {/*    <Link href={'#'}>O‘quv markazi</Link>*/}
                  {/*</li>*/}
                </ul>
              </div>

              <div className="">
                <h4
                  className={
                    "md:text-xl text-lg font-bold mb-[10px] md:mb-[30px]"
                  }
                >
                  Me’yoriy hujjatlar
                </h4>
                <ul className={"text-[#D9D9D9]"}>
                  <li className={"mb-[10px]"}>
                    <Link href={"#"}>Qonun, qaror va farmonlar</Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"/shnk"}>Shaharsozlik norma va qoidalari</Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"/standards"}>Standartlar</Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"/works"}>Qurilish reglamentlari</Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"/discussion"}>Muhokamalar</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <h4
                  className={
                    "md:text-xl text-lg font-bold mb-[10px] md:mb-[30px]"
                  }
                >
                  Faoliyat
                </h4>
                <ul className={"text-[#D9D9D9]"}>
                  <li className={"mb-[10px]"}>
                    <Link href={"https://catalog.tmsiti.uz/classifier"}>
                      Klassifikator
                    </Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"#"}>Elektron fond</Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"#"}>Laboratoriya</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <h4
                  className={
                    "md:text-xl text-lg font-bold mb-[10px] md:mb-[30px]"
                  }
                >
                  Xabarlar
                </h4>
                <ul className={"text-[#D9D9D9]"}>
                  <li className={"mb-[10px]"}>
                    <Link href={"/announcement"}>E’lonlar</Link>
                  </li>

                  <li className={"mb-[10px]"}>
                    <Link href={"/news"}>Yangiliklar</Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"#"}>Uchrashuvlar</Link>
                  </li>
                  <li className={"mb-[10px]"}>
                    <Link href={"#"}>Ommaviy tadbirlar</Link>
                  </li>

                  <li className={"mb-[10px]"}>
                    <Link href={"#"}>Xalqaro hamkorlik</Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <Link href={"/contact"}>
                  <h4
                    className={
                      "md:text-xl text-lg font-bold mb-[10px] md:mb-[30px]"
                    }
                  >
                    Bog‘lanish
                  </h4>
                </Link>
                <ul className={"text-[#D9D9D9]"}>
                  <li className={"text-base mb-[10px]"}>
                    <p>
                      Toshkent shahar, Shayxontohur tumani, Abay ko’chasi
                      6A-Bino
                    </p>
                  </li>
                  <li className={" text-base  mb-[10px]"}>
                    <Link href={"tel:+998 71 244-51-84"}>
                      Phone:+998 71 244-51-84
                    </Link>{" "}
                    <br />
                  </li>
                  <li className={"text-base flex flex-col mb-[10px]"}>
                    <Link
                      href={"mailto:info@tmsiti.uz"}
                      className={"mb-[10px]"}
                    >
                      Email: info@tmsiti.uz
                    </Link>
                    <Link href={"mailto:TMSITI@exat.uz"}>
                      EXAT: TMSITI@exat.uz
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          "bg-[#001A57] h-[50px] md:h-[30px] w-full text-[#fff] flex justify-center items-center text-[10px] md:text-xs"
        }
      >
        <p>
          Qurilishda texnik me’yorlash va standartlashtirish ilmiy-tadqiqot
          instituti | All rights reserved © 2021
        </p>
      </div>
    </footer>
  );
};
export default Footer;
