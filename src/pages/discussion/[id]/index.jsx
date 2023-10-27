import React, { useState } from "react";
import { useRouter } from "next/router";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import { get } from "lodash";
import dayjs from "dayjs";
import Commentator from "@/components/commentator";
import Image from "next/image";

const DiscussItemPage = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useGetTMSITIQuery({
    key: [KEYS.discuss, id],
    url: `${URLS.discuss}/${id}`,
    enabled: !!id,
  });

  if (isLoading) {
    return "Loading...";
  }
  const toggleSheet = () => {
    setOpen(!open);
    console.log("hello");
  };

  const clickButton = () => {
    return alert("Heyyaaa wassup");
  };

  return (
    <Main>
      <Menu className={"!mb-[30px]"} active={0} />
      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto px-[20px] md:px-0"
        }
      >
        <div className={"col-span-12"}>
          <div className={" w-full h-[1px] bg-[#001A57]"}></div>
          <p className={"text-sm text-[#1A4DC2] my-[20px]  font-bold"}>
            {dayjs(get(data, "data.shnk_datetime")).format("DD.MM.YYYY")}
          </p>

          <div
            className={
              "flex text-xl md:text-3xl  font-bold md:mb-[30px] mb-[10px]"
            }
          >
            <p>
              {get(data, "data.shnk_number")} - {get(data, "data.shnk_title")}
            </p>
          </div>

          <p className={"md:text-xl text-base"}>
            {get(data, "data.shnk_description")}
          </p>
        </div>

        <div className={"md:col-span-7 col-span-12 mt-[50px] mb-[70px]"}>
          <p className={"text-2xl mb-[30px]"}>Hujjat matni:</p>

          <div
            className={
              "bg-transparent flex flex-col gap-[10px] p-[20px] shadow-2xl h-[1500px] overflow-y-scroll"
            }
          >
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
            <p onClick={toggleSheet} className={"cursor-pointer"}>
              Mazkur normalar asosiy qoidalarining rivoji va ijrosini
              taʼmin-lash borasidagi izlanishlarga qoʼyiladigan texnik talablar
              yoki ularning texnologiyaviy ijrosi, va muhandislik izlanishlarini
              bajarish tartibi, ularning tarkibi va hajmi, amalga oshirish
              texnologiyasi va uslublari har bir izlanish turi uchun alohida
              normativ hujjatlarda batafsil bayon etilgan.
            </p>
          </div>
        </div>
        {/*desktop version*/}
        <div className={"hidden md:block col-span-12 md:col-span-5 mt-[50px]"}>
          <p className={"text-2xl mb-[30px]"}>Fikr bildirish:</p>

          <div
            className={
              "bg-transparent  flex flex-col p-[20px] h-[791px]  shadow-2xl "
            }
          >
            <div className={"overflow-y-scroll flex flex-col gap-[30px]"}>
              <Commentator />
              <Commentator />
              <Commentator />
              <Commentator />
            </div>

            <div className={"relative pb-[50px] pt-[30px] w-full "}>
              <input
                className={
                  " rounded-[5px] w-full bg-[#F2F4F7] py-[14px] px-[20px] focus:outline-[#2E6DFF]"
                }
                placeholder={"reply"}
              />
              <button
                onClick={clickButton}
                className={"absolute top-[43px] right-0 mr-[30px]"}
              >
                <Image
                  src={"/icons/send.svg"}
                  alt={"send"}
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
        {/*mobile version*/}

        <div
          className={` relative col-span-12 md:col-span-5  md:hidden block bottom-sheet rounded-[40px] ${
            open ? "open" : ""
          }`}
        >
          <div className={"flex items-center justify-between p-[25px]"}>
            <p className={"text-xl  "}>Fikr bildirish:</p>
            <Image
              src={"/images/close.png"}
              alt={"close"}
              width={30}
              height={30}
              className={
                "cursor-pointer hover:rotate-90 transition-all duration-300"
              }
              onClick={toggleSheet}
            />
          </div>

          <div
            className={
              "bg-transparent  flex flex-col p-[20px] h-[791px]  shadow-2xl "
            }
          >
            <div
              className={"overflow-y-scroll h-[300px] flex flex-col gap-[30px]"}
            >
              <Commentator />
              <Commentator />
              <Commentator />
              <Commentator />
            </div>

            <div
              className={
                "absolute left-0 bottom-[180px]  pt-[30px] w-full px-[20px]"
              }
            >
              <input
                className={
                  " rounded-[5px] w-full bg-[#F2F4F7] py-[14px] px-[15px] focus:outline-[#2E6DFF]"
                }
                placeholder={"reply"}
              />
              <button
                onClick={clickButton}
                className={"absolute top-[43px] right-0 mr-[30px]"}
              >
                <Image
                  src={"/icons/send.svg"}
                  alt={"send"}
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default DiscussItemPage;
