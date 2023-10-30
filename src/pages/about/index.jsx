import React, { useState } from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/title";
import { motion } from "framer-motion";

const About = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (active) => {
    setActiveButton(active);
  };

  return (
    <Main>
      <Menu active={0} />

      <motion.section
        initial={{ translateX: "-200px" }}
        animate={{ translateX: "0px" }}
        className={"grid grid-cols-12 container mx-auto px-[20px] md:px-0"}
      >
        <div className={"col-span-12 z-0"}>
          <Title classNames={"col-span-12"}>Biz haqimizda</Title>
        </div>
      </motion.section>

      <section
        className={
          " md:flex grid grid-cols-12 justify-between gap-x-[30px]  container mx-auto mb-[50px] px-[20px] md:px-0"
        }
      >
        <motion.div
          initial={{ translateX: "-200px" }}
          animate={{ translateX: "0px" }}
          transition={{ duration: 0.4 }}
          className={"col-span-12"}
        >
          <p className={"md:text-2xl text-base mb-[30px] m:w-[950px] "}>
            O’zbekiston Respublikasi Qurilish va uy-joy kommunal xo‘jaligi
            vazirligi huzuridagi{" "}
            <strong>
              «Qurilishda texnik me`yorlash va standartlashtirish ilmiy-tadqiqot
              instituti»
            </strong>{" "}
            Davlat muassasasi O‘zbekiston Respublikasi Prezidentining 2022-yil
            22-sentabrdagi{" "}
            <strong>
              “Respublikada kapital Qurilish sohasida buyurtmachi xizmati
              faoliyatini takomillashtirish chora-tadbirlari to‘g‘risida”
            </strong>
            gi{" "}
            <Link
              href={"https://lex.uz/uz/docs/-6203336"}
              className={"text-[#1A4DC2] underline"}
            >
              PQ-378-son
            </Link>{" "}
            qaroriga asosan O‘zbekiston Respublikasi Qurilish vazirligi huzurida
            tashkil etilgan.
          </p>
          <p className={"md:w-[950px] text-sm"}>
            Qurilish vazirining 2022-yil 22-noyabrdagi 202-sonli buyrug‘iga
            ko‘ra Institut faoliyatining ustuvor yo‘nalishlari etib quyidagilar
            belgilangan:
          </p>

          <ul className={"list-disc md:w-[950px] text-xs ml-[30px]"}>
            <li>
              qurilish resurslarini guruhlarga va bo‘limlarga tasniflagan holda,
              har biri alohida identifikatsiya raqamlanishi va standartlarga
              muvofiq nomlanishini nazarda tutuvchi{" "}
              <strong>“Qurilish resurslari milliy klassifikatori”</strong>{" "}
              elektron platformasini (keyingi o‘rinlarda – Milliy klassifikator)
              joriy etish;
            </li>

            <li>
              Milliy klassifikatorga kiritilgan qurilish materiallari va
              xizmatlari (ishlari) bo‘yicha ishlab chiqaruvchi tomonidan taklif
              etilayotgan narxlarning elektron katalogini (keyingi o‘rinlarda –
              Elektron katalog) <strong>“Shaffof qurilish”</strong> milliy
              axborot tizimi orqali joriy etish;
            </li>

            <li>
              <strong>obyektlarni axborot modellashtirish </strong>(BIM /
              Building Information Modeling) texnologiyalari asosida
              loyihalashtirish, qurilish jarayonlarining barcha
              ishtirokchilarini ma’lumotlar bilan ta’minlash hamda umumiy
              ma’lumotlar muhiti (CDE / Common data environment)
            </li>

            <li>
              dasturiy-texnik majmua vositalarida qurilish loyihalarining
              raqamli boshqaruv tizimini (keyingi o‘rinlarda – Loyiha boshqaruvi
              tizimi) joriy etish;
            </li>

            <li>
              shaharsozlik hujjatlari, reglamentlar, shaharsozlik normalari va
              qoidalari va standartlarni ishlab chiqish, mavjudlarini
              takomillashtirish, amaliyotda qo‘llash bilan bog‘liq muammolarni
              tahlil qilish hamda bugungi kunda amalga oshirilayotgan islohotlar
              hamda xalqaro norma va standartlar bilan uyg‘unlashtirish;
            </li>

            <li>
              sohaga oid texnik jihatidan tartibga solishga doir milliy normativ
              hujjatlar, shuningdek, qurilish sohasidagi xorijiy standartlar,
              normalar va qoidalarning yagona reestri, elektron bazasi va
              fondini shakllantirish;
            </li>
            <li>
              vazirliklar va idoralar tomonidan yangi ishlab chiqilgan yoki
              takomillashtirilgan shaharsozlik hujjatlari loyihalariga amaldagi
              texnik jihatdan tartibga solish sohasidagi me’yoriy hujjatlarga
              muvofiqligi yuzasidan xulosalar berish tizimini raqamlashtirish;
            </li>

            <li className={"w-full"}>
              qurilishda BIM texnologiyalarini joriy etishda implementator
              (joriy etuvchi) funksiyasini bajarish, Institutda tashkil
              etilayotgan BIM-server va axborotlarni qayta ishlash markazi
              faoliyatini yo‘lga qo‘yish, shuningdek, axborot modellarining
              markazlashgan bankini shakllantirirish;
            </li>
            <li className={"w-full"}>
              maqsadli dasturlar doirasida qurilishda xalqaro tajribalarga
              asoslangan BIM standartlarini va yagona talablarni ishlab chiqish,
              shuningdek, BIM texnologiyalarini buyurtmachi, loyihalash va
              qurilish bosqichlarida joriy etish holatining monitoringini yo‘lga
              qo‘yish;
            </li>
            <li>
              BIM texnologiyalari asosida ishlab chiqilgan loyiha hujjatlarining
              energiya tejamkorlikka oid qismini ekspertizadan o‘tkazish;
            </li>

            <li>
              sohaga oid tegishli yo‘nalishlarda kadrlarni maqsadli tayyorlash
              va malakasini oshirish (shu jumladan, mahalliy va xorijiy ta’lim
              va ilmiy-tadqiqot muassasalari bilan hamkorlikda yoki qo‘shma
              ta’lim dasturlari asosida).
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ translateX: "200px" }}
          animate={{ translateX: "0px" }}
          transition={{ duration: 0.4 }}
          className={
            "col-span-12 flex items-center justify-center flex-col mt-[20px]"
          }
        >
          <img
            src={"/images/certificate.png"}
            alt={"certificate"}
            className={"md:w-[450px] w-[300px] mb-[30px]"}
          />

          <div
            className={
              "flex justify-center md:flex-row flex-col md:gap-x-[50px] gap-y-[20px] mb-[31px]"
            }
          >
            <Link href={"/images/certificate.png"} target={"_blank"}>
              <button
                onClick={() => setActiveButton(0)}
                className={`flex  items-center w-[170px] bg-[#1A4DC2] text-[#000] py-[13px] px-[46px] gap-x-[10px] rounded-[5px]`}
              >
                <Image
                  src={"/icons/document.svg"}
                  alt={"document"}
                  width={24}
                  height={24}
                />
                <p className={"text-xs text-white"}>Nizom</p>
              </button>
            </Link>

            <Link href={"/images/profile.png"} target={"_blank"}>
              <button
                onClick={() => setActiveButton(1)}
                className={`flex items-center border border-[#001A57] w-[170px]  py-[13px] px-[46px] gap-x-[10px] rounded-[5px]`}
              >
                <Image
                  src={"/icons/document_black.svg"}
                  alt={"document"}
                  width={24}
                  height={24}
                />
                <p className={"text-sm text-[#001A57] font-medium"}>Ustav</p>
              </button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section></section>
    </Main>
  );
};
//

export default About;
