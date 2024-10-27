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

      <section className="container mb-[30px]">
        <Reveal>
          <div className="leading-normal font-bold text-[#001A57] mb-[30px] text-xl uppercase">
            Xolislik siyosati:
          </div>
        </Reveal>

        <div className="">
          <Reveal duration={0.3}>
            <h3 className="text-lg text-center font-semibold">
              Qurilish va uy-joy kommunal xo‘jaligi vazirligi huzuridagi Texnik
              me’yorlash va standartlashtirish ilmiy tadqiqot instituti
              Menejment tizimlarini sertifikatlashtirish organiining xolislikni
              ta’minlash sohasidagi
            </h3>
            <p className="font-semibold text-center text-xl my-[30px]">
              SIYOSATI
            </p>
          </Reveal>

          <Reveal duration={0.4}>
            <p>
              Qurilish va uy-joy kommunal xo‘jaligi vazirligi huzuridagi Texnik
              me’yorlash va standartlashtirish ilmiy tadqiqot instituti davlat
              muassasi Muvofiqlikni baxolash boshqarmasi Menejment tizimlarini
              sertifikatlashtirish organi sertifikatlashtirishni o‘tkazishda
              xolislikni saqlash muhimligini tushunadi, manfaatlar to‘qnashuvini
              oldini oladi va sertifikatlashtirish faoliyatini amalga oshirishda
              xolislikni kafolatlaydi. Ushbu siyosatdan maqsad ishlarning xolis
              va malakali bajarilishini ta’minlash uchun asosdir. Siyosat barcha
              sertifikatlashtirish organi xodimlari tomonidan qo‘llanilishi
              majburiy xisoblanadi.
            </p>
          </Reveal>

          <Reveal duration={0.4}>
            <p className="text-center mt-[30px] mb-[5px] font-semibold">
              Xolislik tamoyiliga rioya etilishini ta’minlash uchun Menejment
              tizimlarini sertifikatlashtirish organi quyidagi majburiyatlarni
              oladi:
            </p>

            <ul className="text-sm ml-[20px] space-y-[6px]">
              <li>
                • Ishlarni O‘zbekiston Respublikasi qonunchiligiga, milliy va
                xalqaro akkreditatsiya tizimlarida akkreditatsiya qiluvchi
                organlarning talablariga, sertifikatlashtirish tizimlarining
                tegishli sxemalari va qoidalariga qat’iy rioya qilgan holda
                amalga oshirish;
              </li>
              <li>
                • Sertifikatlashtirish faoliyatining xolisligi uchun javobgar
                bo‘lish va xolislikni buzmaslik uchun tijorat, moliyaviy yoki
                boshqa bosimga yo‘l qo‘ymaslik;
              </li>
              <li>• Xolislikka tahdidlarni aniqlash va boshqarish;</li>
              <li>
                • Sertifikatlashtirish jarayonini qurishni ta'minlash, shu
                jumladan sertifikatlashtirish to'g'risida qarorlar qabul qilish,
                xolislik va sertifikatlashtirish xizmatlaridan kamsitilmasdan
                foydalanish tamoyiliga muvofiq ishlarni bajarish qoidalari va
                tartiblarini qo'llash.
              </li>
            </ul>

            <p className="mt-[30px]">
              Sertifikatlashtirish organining rahbari tomonidan
              sertifikatlashtirishni amalga oshirishda yuqori rahbariyat
              sertifikatlashtirishni amalga oshirishda xolislikni ta’minlash
              bo‘yicha majburiyatlarni oladi. Agar xolislikni buzish xavfi
              aniqlansa Menejment tizimlarini sertifikatlashtirish organi uni
              bartaraf etish va minimallashtirish choralarini ko‘radi.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="container mb-[30px]">
        <Reveal>
          <h3 className="leading-normal font-bold text-[#001A57] mb-[30px] text-xl uppercase">
            MENEJMENT TIZIMLARINI SERTIFIKATLASH ORGANINING YUQORI RAHBARIYATI
            XOLISLIK HAQIDAGI BAYONOTI VA SERTIFIKATLASH JARAYONINING
            OBYEKTIVLIGI HAQIDA
          </h3>
        </Reveal>

        <Reveal>
          <p className="bg-[#253568] text-white p-3 text-sm rounded-md">
            Qurilish va uy joy kommunal xo‘jaligi vazirligi Texnik me’yorlash va
            standartlashtirish ilmiy tadqiqot instituti Menejment tizimlarini
            sertifikatlash organi rahbariyati shu bilan barcha manfaatdor
            tomonlarga quyidagilarni e’lon qiladi: Rahbariyat menejment tizimini
            sertifikatlash faoliyatini amalga oshirishda xolislik muhimligini
            anglab, manfaatlar to‘qnashuvini boshqaradi va menejment tizimini
            sertifikatlash faoliyatining obyektivligini kafolatlaydi. “Texnik
            me’yorlash va standartlashtirish ilmiy tadqiqot instituti”
            rahbariyati menejment tizimlari auditi va audit natijalari bo‘yicha
            qarorlar qabul qilishning obyektivligiga bevosita yoki bilvosita
            ta’sir ko‘rsatishi mumkin bo‘lgan hech qanday ko‘rsatma bermaydi va
            ma’muriy ko‘rsatmalardan tiyiladi. Menejment tizimlarini
            sertifikatlash organi rahbarlari va xodimlari, auditlarni
            rejalashtirish, tashkil etish va amalga oshirish, auditorlik
            hujjatlarini tahlil qilish va ushbu masalalar bo‘yicha aloqa bilan
            shug‘ullanadigan tashqi auditorlar va texnik mutaxassislar
            o‘zlarining rasmiy vazifalari va kompaniya rahbariyatining
            ko‘rsatmalarini bajarishda mustaqildirlar. Har qanday mijozga
            nisbatan ushbu faoliyat turlarida ishtirok etish, agar pudratchi
            ushbu mijoz bilan bog‘liq manfaatlar to‘qnashuvida ishtirok etsa,
            amalga oshirilmasligi kerak bo‘ladi. Auditlarni rejalashtirish,
            tashkil etish va amalga oshirish, auditorlik hujjatlarini tahlil
            qilish va ushbu masalalar bo‘yicha aloqa bilan shug‘ullanadigan
            shaxslar buyurtma, resurslar bilan ta’minlash, natijalarni
            tekshirish, mijozning sertifikatlangan tadbirkorlik faoliyati
            natijalarini yetkazib berish va ulardan foydalanish suiisteʼmol
            qilish bilan bog‘liq emas. Auditorlik guruhlarining audit
            natijalariga asoslangan qarorlar bo‘yicha takliflari muvofiqlikning
            (yoki nomuvofiqlikning) obyektiv dalillariga asoslanadi, ularga
            boshqa manfaatlar yoki boshqa tomonlar ta’sir qilmaydi, ular
            tijorat, moliyaviy yoki boshqa narsalarga bog’liq emas. “Menejment
            tizimlarini sertifikatlash organi” menejment tizimlarini
            rivojlantirish va ushbu sohada konsalting sohasida faoliyat
            yuritmaydi. “Menejment tizimlarini sertifikatlash organi”ning yuqori
            rahbariyati boshqa kompaniyaning iqtisodiy muvaffaqiyati foydasiga
            xodimlar va jalb qilingan mutaxassislarning faoliyatiga har qanday
            aralashuvni rad etish majburiyatini oladi.
          </p>
        </Reveal>
      </section>

      <section className="container  mb-[30px] ">
        <h3 className="leading-normal font-bold text-[#001A57] mb-[30px] text-xl uppercase">
          Menejment tizimlarini sertifikatlashtirishga ariza topshirish
        </h3>

        <div>
          <button className="bg-[#2196F3] text-white flex gap-x-[4px] px-[25px] py-[15px] rounded-lg items-center">
            <Image
              src={"/images/download.png"}
              alt="download"
              width={30}
              height={30}
            />
            <a href="/application.docx" download>
              Yuklab olish
            </a>
          </button>
        </div>

        <div className="">
          <Reveal>
            <h3 className="text-lg font-medium mt-[30px]">
              MENEJMENT TIZIMLARINI SERTIFIKATLASH ORGANINING YUQORI RAHBARIYATI
              XOLISLIK HAQIDAGI BAYONOTI VA SERTIFIKATLASH JARAYONINING
              OBYEKTIVLIGI HAQIDA
            </h3>
          </Reveal>

          <Reveal>
            <p className="mt-[20px]">
              {" "}
              Texnik me’yorlash va standartlashtirish ilmiy tadqiqot instituti
              Menejment tizimlarini sertifikatlash organi rahbariyati shu bilan
              barcha manfaatdor tomonlarga quyidagilarni e’lon qiladi:
              Rahbariyat menejment tizimini sertifikatlash faoliyatini amalga
              oshirishda xolislik muhimligini anglab, manfaatlar to‘qnashuvini
              boshqaradi va menejment tizimini sertifikatlash faoliyatining
              obyektivligini kafolatlaydi. “Texnik me’yorlash va
              standartlashtirish ilmiy tadqiqot instituti” rahbariyati menejment
              tizimlari auditi va audit natijalari bo‘yicha qarorlar qabul
              qilishning obyektivligiga bevosita yoki bilvosita ta’sir
              ko‘rsatishi mumkin bo‘lgan hech qanday ko‘rsatma bermaydi va
              ma’muriy ko‘rsatmalardan tiyiladi. Menejment tizimlarini
              sertifikatlash organi rahbarlari va xodimlari, auditlarni
              rejalashtirish, tashkil etish va amalga oshirish, auditorlik
              hujjatlarini tahlil qilish va ushbu masalalar bo‘yicha aloqa bilan
              shug‘ullanadigan tashqi auditorlar va texnik mutaxassislar
              o‘zlarining rasmiy vazifalari va kompaniya rahbariyatining
              ko‘rsatmalarini bajarishda mustaqildirlar. Har qanday mijozga
              nisbatan ushbu faoliyat turlarida ishtirok etish, agar pudratchi
              ushbu mijoz bilan bog‘liq manfaatlar to‘qnashuvida ishtirok etsa,
              amalga oshirilmasligi kerak bo‘ladi. Auditlarni rejalashtirish,
              tashkil etish va amalga oshirish, auditorlik hujjatlarini tahlil
              qilish va ushbu masalalar bo‘yicha aloqa bilan shug‘ullanadigan
              shaxslar buyurtma, resurslar bilan ta’minlash, natijalarni
              tekshirish, mijozning sertifikatlangan tadbirkorlik faoliyati
              natijalarini yetkazib berish va ulardan foydalanish suiisteʼmol
              qilish bilan bog‘liq emas. Auditorlik guruhlarining audit
              natijalariga asoslangan qarorlar bo‘yicha takliflari
              muvofiqlikning (yoki nomuvofiqlikning) obyektiv dalillariga
              asoslanadi, ularga boshqa manfaatlar yoki boshqa tomonlar ta’sir
              qilmaydi, ular tijorat, moliyaviy yoki boshqa narsalarga bog’liq
              emas. “Menejment tizimlarini sertifikatlash organi” menejment
              tizimlarini rivojlantirish va ushbu sohada konsalting sohasida
              faoliyat yuritmaydi. “Menejment tizimlarini sertifikatlash
              organi”ning yuqori rahbariyati boshqa kompaniyaning iqtisodiy
              muvaffaqiyati foydasiga xodimlar va jalb qilingan
              mutaxassislarning faoliyatiga har qanday aralashuvni rad etish
              majburiyatini oladi.
            </p>
          </Reveal>
        </div>
      </section>
    </Main>
  );
};

export default Index;
