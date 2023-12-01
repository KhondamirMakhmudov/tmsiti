import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Image from "next/image";
import { useRouter } from "next/router";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import useGetSHNKQuery from "@/hooks/api/useGetSHNKQuery";
import { get } from "lodash";
import Link from "next/link";
const ShnkId = () => {
  return (
    <Main>
      <Menu className={"!mb-0"} />
      <section
        className={"bg-[#EFF3FA] text-xs text-[#607198] !mt-0 mb-[70px]"}
      >
        <div className={"container py-[12px] flex gap-x-[5px]"}>
          <Link href={"/"}>Bosh sahifa /</Link>
          <Link href={"#"}>ShNQ /</Link>

          <div
            className={
              "w-[220px] overflow-hidden whitespace-normal line-clamp-1"
            }
          >
            <Link href={`#`} className={""}>
              ShNK 1.02.07-15 - Qurilish uchun muhandislik-texnik izlanishlar.
              Asosiy qoidalar
            </Link>
          </div>
        </div>
      </section>

      <section
        className={
          "bg-[#EFF3FA] grid grid-cols-12 container mx-auto px-[29px] py-[5px] gap-x-[50px]"
        }
      >
        <div className={"flex col-span-4 items-center gap-x-[16px] "}>
          <h3 className={"text-base text-[#001A57] font-semibold "}>
            Kuchga kirish sanasi:
          </h3>
          <p
            className={
              "bg-white px-[29px] py-[9px] text-[#1A4DC2] text-[14px] rounded-[5px] font-semibold"
            }
          >
            23.09.2022
          </p>
        </div>

        <div className={"col-span-4 items-center gap-x-[50px] flex"}>
          <button className={"flex items-center gap-x-[18px]"}>
            <p className={"text-base text-[#001A57] font-semibold "}>
              Yuklab olish
            </p>
            <Image
              src={"/images/pdf.png"}
              alt={"pdf"}
              width={32}
              height={32}
              className={"p-[4px] bg-white rounded-[5px]"}
            />
          </button>

          <button className={"flex items-center gap-x-[18px]"}>
            <p className={"text-base text-[#001A57] font-semibold"}>
              Chop etish
            </p>
            <Image
              src={"/images/print.png"}
              alt={"pdf"}
              width={32}
              height={32}
              className={"p-[4px] bg-white rounded-[5px]"}
            />
          </button>
        </div>

        <div className={"col-span-4 relative"}>
          <input
            type={"search"}
            className={"w-full p-[10px] rounded-[5px] "}
            placeholder={"Qidirish..."}
          />
          <div
            className={
              "p-[8px] bg-[#1A4DC2] absolute top-0 right-0 rounded-[5px] mt-[2px]"
            }
          >
            <Image
              src={"/images/search.png"}
              alt={"search"}
              width={24}
              height={24}
            />
          </div>
        </div>
      </section>

      <div className={"flex text-3xl font-bold mt-[30px] container mx-auto"}>
        <p>
          ShNK 1.02.07-15 - Qurilish uchun muhandislik-texnik izlanishlar.
          Asosiy qoidalar
        </p>
      </div>

      <div
        className={
          "w-full h-[1px] bg-[#001A57] container mx-auto mt-[30px] mb-[50px]"
        }
      ></div>

      <section className={"container mx-auto grid grid-cols-12"}>
        <p className={"text-2xl mb-[30px] col-span-12 "}>Hujjat matni:</p>

        <div className={"col-span-3  mb-[70px]"}>
          <div
            className={
              "bg-transparent flex flex-col gap-[10px] p-[20px] shadow-xl h-[1500px] overflow-y-scroll"
            }
          >
            <p className={"bg-[#EFF3FA] p-[10px]"}>
              Lorem ipsum dolor sit amet consectetur. Laoreet id id netus
              faucibus facilisis. Eleifend cursus sed venenatis erat donec
              dictum aenean aliquet.
            </p>
            <p className={"bg-[#EFF3FA] p-[10px]"}>
              Lorem ipsum dolor sit amet consectetur. Laoreet id id netus
              faucibus facilisis. Eleifend cursus sed venenatis erat donec
              dictum aenean aliquet.
            </p>
            <p className={"bg-[#EFF3FA] p-[10px]"}>
              Lorem ipsum dolor sit amet consectetur. Laoreet id id netus
              faucibus facilisis. Eleifend cursus sed venenatis erat donec
              dictum aenean aliquet.
            </p>
            <p className={"bg-[#EFF3FA] p-[10px]"}>
              Lorem ipsum dolor sit amet consectetur. Laoreet id id netus
              faucibus facilisis. Eleifend cursus sed venenatis erat donec
              dictum aenean aliquet.
            </p>
            <p className={"bg-[#EFF3FA] p-[10px]"}>
              Lorem ipsum dolor sit amet consectetur. Laoreet id id netus
              faucibus facilisis. Eleifend cursus sed venenatis erat donec
              dictum aenean aliquet.
            </p>
            <p className={"bg-[#EFF3FA] p-[10px]"}>
              Lorem ipsum dolor sit amet consectetur. Laoreet id id netus
              faucibus facilisis. Eleifend cursus sed venenatis erat donec
              dictum aenean aliquet.
            </p>
            <p className={"bg-[#EFF3FA] p-[10px]"}>
              Lorem ipsum dolor sit amet consectetur. Laoreet id id netus
              faucibus facilisis. Eleifend cursus sed venenatis erat donec
              dictum aenean aliquet.
            </p>
            <p className={"bg-[#EFF3FA] p-[10px]"}>
              Lorem ipsum dolor sit amet consectetur. Laoreet id id netus
              faucibus facilisis. Eleifend cursus sed venenatis erat donec
              dictum aenean aliquet.
            </p>
            <p className={"bg-[#EFF3FA] p-[10px]"}>
              Lorem ipsum dolor sit amet consectetur. Laoreet id id netus
              faucibus facilisis. Eleifend cursus sed venenatis erat donec
              dictum aenean aliquet.
            </p>
          </div>
        </div>

        <div className={"col-span-9  mb-[70px]"}>
          <div
            className={
              "bg-transparent flex flex-col gap-[10px] p-[20px] shadow-xl h-[1500px] overflow-y-scroll"
            }
          >
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
            <p>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ{" "}
              <Link href={"#"} className={"text-[#2E6DFF]"}>
                hujjatlar
              </Link>
              da batafsil bayon etilgan.
            </p>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default ShnkId;
