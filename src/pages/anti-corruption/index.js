import Menu from "@/components/menu";
import Main from "@/layouts/main";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import RightIcon from "@/components/icons/right";

const Index = () => {
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  const toggleQuestion = () => {
    setOpenFirst(!openFirst);
  };

  const toggleQuestionSecond = () => {
    setOpenSecond(!openSecond);
  };
  const { t } = useTranslation();
  return (
    <Main>
      <Menu />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[30px]"}>
        <div className={"container py-[12px] capitalize"}>
          <Link href={"/"}>{t("homepage")} / </Link>
          <Link href={"#"}>{t("messages")} / </Link>
          <Link href={"/news"}>{t("anti-corruption")} </Link>
        </div>
      </section>
      <div
        style={{ backgroundImage: `url("/images/bg-anti-corruption.jpg")` }}
        className=" h-[500px] relative bg-no-repeat bg-cover flex justify-center bg-center items-center mb-[30px] -z-10"
      >
        <div className="z-30 ">
          <h1 className="text-white text-[32px] uppercase">
            {t("anti-corruption")}
          </h1>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      </div>

      <div className="container px-[20px]">
        <ul className="container  my-[40px] space-y-[15px]">
          <li>
            <div className="p-[16px] border rounded-[20px]  gap-x-[330px]">
              <div>
                <div className="">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={toggleQuestion}
                  >
                    <h2 className="text-lg font-semibold ">
                      O&apos;zbekiston Respublikasida Korrupsiyaga qarshi
                      kurashish tizimini yanada takomillashtirish
                      chora-tadbirlari to&apos;g&apos;risida
                    </h2>
                    <RightIcon
                      color="black"
                      classname={`${
                        openFirst ? "-rotate-90" : "rotate-90"
                      } transition-all duration-200`}
                    />
                  </div>
                </div>

                {openFirst && (
                  <motion.div
                    initial={{ translateY: 20, opacity: 0.001 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-[20px] mt-[20px]"
                  >
                    <p>
                      O&apos;zbekiston Respublikasi Prezidentining 2019 yil 27
                      maydagi “O&apos;zbekiston Respublikasida Korrupsiyaga
                      qarshi kurashish tizimini yanada takomillashtirish
                      chora-tadbirlari to&apos;g&apos;risida”gi PF-5729-son
                      Farmoni ijrosini taʼminlash yuzasidan O&apos;zbekiston
                      Respublikasi Bosh prokurori tomonidan 2019 yil 30 avgustda
                      tasdiqlangan “Yo&apos;l xaritasi”ning 4-bandi bilan
                      Qurilish vazirligi tizimida BMT Taraqqiyot dasturi
                      ko&apos;magida tanlov o&apos;tkazish asosida, xorijiy
                      ekspertlarni jalb qilgan holda Qurilish vazirligi tizimida
                      korrupsiyaga qarshi kurashish choralarini kuchaytirishga
                      qaratilgan «komplaens nazorat» (compliance control)
                      tizimini joriy etish belgilangan.
                    </p>

                    <p>
                      O&apos;zbekiston Respublikasi Vazirlar Mahkamasining 2020
                      yil 17 fevraldagi 72-f-son farmoyishi ijrosi yuzasidan,
                      O&apos;zbekiston Respublikasi Bosh prokuraturasi va BMT
                      Taraqqiyot dasturi ko&apos;magida Qurilish vazirligi
                      tizimida xalqaro auditorlik kompaniyasi KPMG (Italiya)
                      ekspertlari ishtirokida korrupsiyaga qarshi kurashish
                      “komlaens nazorat” tizimini joriy etish belgilangan
                      farmoyish ijrosi yuzasidan qator ishlar amalga oshirildi.
                    </p>

                    <p>
                      Xalqaro auditorlik kompaniyasi KPMG (Italiya) ekspertlari
                      bilan hamkorlikda amalga oshirilgan ishlarning birinchi
                      bosqichida qurilish sohasiga taalluqli 25 ta qonun va 30
                      ta vazirlik ichki hujjatlari tahlil qilindi. Shuningdek,
                      KPMG ekspertlari tomonidan 27 nafar vazirlik boshqarmalari
                      va bo&apos;lim boshliqlari bilan 40 soatlik intervyu
                      o&apos;tkazilib, tizimda yuzaga kelayotgan korrupsion
                      holatlar kelib chiqishining 70 ta sababi aniqlanib, ularni
                      bartaraf etish yuzasidan xorijiy ekspertlar tomonidan 50
                      ta tavsiya ishlab chiqildi. Natijada KPMG ekspertlari
                      vazirlik faoliyati to&apos;g&apos;risida umumiy hisobot
                      ishlab chiqildi.
                    </p>

                    <p>
                      KPMG ekspertlarining mavjud xatarlarni hisobga olgan holda
                      vazirlikning tarkibiy bo&apos;linmalari
                      to&apos;g&apos;risidagi hisoboti tayyorlandi va ushbu
                      tavsiyalar asosida vazirlik tizimida yuzaga kelayotgan
                      korrupsion holatlarning sabab va shart-sharoitlarining
                      oldini olishga qaratilgan tadbirlarning taʼsirchanligini
                      oshirish borasidagi “Yo&apos;l xaritasi” Qurilish
                      vazirinig 2021 yil 9 martdagi 49-son buyrug&apos;i bilan
                      tasdiqlandi.
                    </p>

                    <p>
                      “Yo&apos;l xaritasi” 7 bob va 76 banddan iborat
                      bo&apos;lib, unda: <br /> 1. Normativ-huquqiy hujjatlarni
                      ishlab chiqish va takomillashtirish; <br /> 2. Ichki
                      hujjatlarni ishlab chiqish va takomillashtirish; <br /> 3.
                      Komplaens-nazorat funksiyasini tashkil etish; <br /> 4.
                      Korrupsiyaga qarshi kurashish masalalari bo&apos;yicha
                      maʼlumot berish va ommalashtirish; <br /> 5.
                      Avtomatlashtirish; <br /> 6. Vazirlik funksiyalarini
                      bajarilishini takomillashtirish bo&apos;yicha tashkiliy
                      chora-tadbirlar; <br /> 7. Boshqa tadbirlar nazarda
                      tutilgan.
                    </p>

                    <p>
                      Hozirgi kunda vazir bo&apos;yrug&apos;i asosida vazirlik
                      tizimiga kiruvchi barcha tashkilotlarda ichki buyruq bilan
                      moslashirilgan “Yo&apos;l xaritasi” ishlab chiqilib, aniq
                      ijrochilar hamda muddatlar qo&apos;yilib, ijroga
                      qaratilgan. <br />
                      O&apos;zbekiston Respublikasi Vazirlar Mahkamasining 2021
                      yil 20 mayda{" "}
                      <strong>
                        “Kapital qurilish sohasida buyurtmachi xizmati
                        faoliyatini tubdan isloh qilish chora-tadbirlari
                        to&apos;g&apos;risida”
                      </strong>
                      gi 321-son qarori qabul qilindi. <br /> Shuningdek,
                      O&apos;zbekiston Respublikasi Korrupsiyaga qarshi
                      kurashish agentligi tomonidan Davlat xaridlari sohasida
                      “Korrupsiyasiz soha” loyihasini amalga oshirish
                      bo&apos;yicha 2020 yil 24 dekabr kuni tasdiqlangan
                      “Yo&apos;l xaritasi” chora-tadbirlari ijrosi yuzasidan
                      ishlar olib borilmoqda.
                    </p>

                    <p>
                      O&apos;zbekiston Respublikasi Qurilish vazirligining 2021
                      yil 28 maydagi “O&apos;zbekiston Respublikasi Oliy Majlisi
                      Qonunchilik palatasi Korrupsiyaga qarshi kurashish va
                      sud-huquq masalalari qo&apos;mitasining 2021 yil 19
                      maydagi 06/1-02/596-son qarori ijrosini taʼminlash
                      to&apos;g&apos;risida”gi 114-son buyrug&apos;i bilan
                      tasdiqlangan “Yo&apos;l xaritasi” chora-tadbirlari ijrosi
                      yuzasidan ishlar olib borilmoqda. O&apos;zbekiston
                      Respublikasi Oliy Majlisi Senatining Korrupsiyaga qarshi
                      kurashish va sud-huquq masalalari qo&apos;mitasining 2020
                      yil 29 iyundagi “Sog&apos;liqni saqlash, taʼlim va
                      qurilish sohalarida korrupsiyaga qarshi kurashish
                      bo&apos;yicha faoliyat to&apos;g&apos;risida”gi 27-son
                      qarorida berilgan topshiriqlar va Qurilish vazirining 2020
                      yil 15 sentyabrdagi 250-son buyrug&apos;i bilan
                      tasdiqlangan “Chora-tadbirlar” rejasi ishlab chiqilib,
                      ijrosi olib borilmoqda.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </li>

          <li>
            <div className="p-[16px] border rounded-[20px]  gap-x-[330px]">
              <div>
                <div className="">
                  <div
                    className=" flex justify-between items-center cursor-pointer"
                    onClick={toggleQuestionSecond}
                  >
                    <h2 className="text-lg font-semibold ">
                      Qurilish va uy-joy kommunal xo&apos;jaligi vazirligi
                      tizimida korrupsiyaga qarshi kurashish va uning
                      samaradorligini oshirish yuzasidan Qurilish va uy-joy
                      kommunal xo&apos;jaligi vazirining jamoatchilikka
                      murojaati
                    </h2>
                    <RightIcon
                      color="black"
                      classname={`${
                        openSecond ? "-rotate-90" : "rotate-90"
                      } transition-all duration-200 min-w-[20px] h-[20px]`}
                    />
                  </div>
                </div>

                {openSecond && (
                  <motion.div
                    initial={{ translateY: 20, opacity: 0.001 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-[20px] mt-[20px]"
                  >
                    <p className={"float-end "}>
                      “Korrupsiyaga qarshi butun jamoatchilik bilan
                      kurashishimiz zarur” <br />{" "}
                      <strong>O&apos;zbekiston Respublikasi Prezidenti</strong>{" "}
                      <br />
                      <strong>Shavkat MIRZIYOYEV</strong>
                    </p>

                    <p>
                      Keyingi yillarda mamlakatimizda korrupsiyaga qarshi
                      kurashish sohasida muhim tashkiliy huquqiy islohotlar
                      amalga oshirilmoqda. Aholining huquqiy ongi va
                      madaniyatini oshirishga, jamiyatda korrupsiyaga qarshi
                      murosasiz munosabatni shakllantirishga yo&apos;naltirilgan
                      tizimli choralar ko&apos;rilmoqda. <br />{" "}
                      Prezidentimizning bevosita tashabbusi bilan mamlakatimizni
                      yanada rivojlantirish, xalq farovonligini taʼminlash va
                      inson qadrini oshirish borasida tizimli islohotlar amalga
                      oshirilmoqda. <br /> Taraqqiyotning yangi bosqichida
                      O&apos;zbekiston uchun korrupsiyaning har qanday shakldagi
                      ko&apos;rinishi islohotlar shiddatini va samarasini
                      susaytirishi mumkin bo&apos;lgan illat hisoblanadi. <br />{" "}
                      2023-yil 19-dekabr kuni Toshkent shahridagi Xalqaro
                      kongresslar saroyida o&apos;tkazilgan xalqaro tadbirda
                      Prezidentimiz korrupsiyaga qarshi kurashish sohasida
                      yuksak xalqaro mukofotni topshirish marosimida, davlat
                      idoralari faoliyatining shaffofligi va hisobdorligi yanada
                      oshirish, korrupsiya holatlari bo&apos;yicha “dastlabki
                      o&apos;rganish” – korrupsion surishtiruv institutini joriy
                      etish kabi tashabbuslarni ilgari surdi. <br /> Shuningdek,
                      joriy yilning 20-dekabr kuni Toshkent shahridagi IT-Park
                      majmuasida o&apos;tkazilgan kengaytirilgan selektor
                      yig&apos;ilishida Davlat rahbari jahon iqtisodiyoti
                      shiddat bilan o&apos;zgarib borayotgan sharoitda hech bir
                      sohani raqamli texnologiyalarsiz tasavvur qilib
                      bo&apos;lmasligini bildirib, “Raqamlashtirishdan bosh
                      tortayotgan rahbar – korrupsiyani yo&apos;q qilishga
                      intilmagan rahbar” deb taʼkidladi. <br /> Shu sababli,
                      Yangi O&apos;zbekistonda “Inson qadri uchun” tamoyili
                      asosida xalqimizning farovonligini yanada oshirish, inson
                      huquqlari va manfaatlarini so&apos;zsiz taʼminlash hamda
                      faol fuqarolik jamiyatini shakllantirishga qaratilgan
                      islohotlar doirasida barcha sohalarda korrupsiyaga qarshi
                      murosasiz kurashish muhitini shakllantirish talab etiladi.{" "}
                      <br />
                    </p>

                    <p>
                      Hujjatlar almashinuvida inson omilining aralashuviga
                      yo&apos;l qo&apos;ymaslik, bunda elektron hujjat
                      aylanishini taʼminlash maqsadida innovasion
                      texnologiyalarni joriy etgan holda “Shaffof qurilish”
                      milliy axborot tizimi ishga tushirildi. <br />
                      Davlatimiz rahbarining “Qurilish sohasiga
                      axborot-kommunikasiya texnologiyalarini keng joriy etish
                      chora-tadbirlari to&apos;g&apos;risida”gi qarori asosida
                      amalga oshirilgan ushbu loyiha bilan qurilish obʼektlarini
                      rekonstruksiya qilish, loyiha-smeta hujjatlarini
                      tayyorlash, ekspertiza va nazorat to&apos;liq
                      raqamlashtirildi.
                    </p>

                    <p>
                      Jumladan, “Shaffof qurilish” milliy axborot tizimida
                      “Loyiha-smeta hujjatlari ekspertizasi” axborot tizimlari
                      faoliyati yo&apos;lga qo&apos;yildi. <br /> “Loyiha-smeta
                      hujjatlari ekspertiza xulosalari” elektron reestri,
                      “Qurilish sohasida davlat xizmatlari” platformasi axborot
                      tizimlari ishlab chiqildi. <br /> “Shaffof qurilish”
                      milliy axborot tizimi doirasida ishlab chiqilgan axborot
                      tizimlari boshqa davlat organlarining axborot tizimlari va
                      maʼlumotlar bazalari bilan integrasiya qilindi.
                    </p>

                    <p>
                      Qurilish sohasida davlat xaridlarida ochiqlikni taminlash
                      va korrupsiyaviy xavf-xatarlarni kamaytirish bo&apos;yicha
                      elektron reyting hamda elektron tender platformalari joriy
                      etildi. Bugungi kunda vazirlikning raqamlashtirish
                      yo&apos;nalishida “Qurilish sifati nazorati”,
                      “Loyiha-smeta hujjatlari ekspertizasi”, “Ogoh fuqaro”,
                      “Geoportal”, “Qurilish materiallari klassifikatori” kabi
                      axborot tizimi joriy etilgan.
                    </p>

                    <p>
                      Hozirda “Qurilishdagi nazorat” tizimi orqali respublika
                      bo&apos;yicha 33 ming nafardan ziyod foydalanuvchi nazorat
                      faoliyatini yuritmoqda.
                    </p>

                    <p>
                      Qoraqalpog&apos;iston Respublikasi, viloyatlar va Toshkent
                      shahrida qishloq xo&apos;jaligiga mo&apos;ljallanmagan
                      bo&apos;sh turgan yer uchastkalari tadbirkorlik va
                      shaharsozlik faoliyatini amalga oshirish uchun faqat
                      “e-ijro auksion” savdo maydonchasida elektron
                      onlayn-auksion orqali berilishi yo&apos;lga qo&apos;yildi.
                    </p>

                    <p>
                      Shuningdek, korrupsion holatlari oldini olish va ularni
                      bartaraf etishning eng muhim jihatlaridan biri boshqaruv
                      tizimida “inson omili”ni kamaytirish uchun davlat va
                      jamiyat boshqaruviga axborot-kommunikasiya
                      texnologiyalarini keng joriy etishdir.
                    </p>

                    <p>
                      Shu maʼnoda, vazirlik tomonidan sohani raqamlashtirish,
                      kommunal to&apos;lovlar tizimi shaffofligini taʼminlash
                      maqsadida “Mening uyim” billing tizimi ishlab chiqilgan
                      bo&apos;lib, unda ko&apos;p kvartirali uylardagi aholining
                      majburiy badal to&apos;lovlarini elektron shaklda
                      to&apos;lash va o&apos;z navbatida yurtdoshlarimiz
                      tomonidan boshqaruv tashkilotlarining moliyaviy
                      xarajatlarini onlayn kuzatib borish imkoniyati yaratildi.
                    </p>

                    <p>
                      Vazirlik tomonidan korrupsiyaga qarshi kurashish sohasida
                      profilaktik tadbirlar, xususan, xodimlar bilan
                      tushuntirish ishlarini amalga oshirish, suhbatlar
                      o&apos;tkazish, targ&apos;ibot ishlarini amalga oshirish
                      kabi keng ko&apos;lamli ishlar amaga oshirilib kelinmoqda.
                    </p>

                    <p>
                      Vazirlikning markaziy apparati, uning hududiy bosh
                      boshqarmalari hamda tasarrufidagi korxonalari
                      xodimlarining qonunchilikka zid xatti-harakatlari yoki
                      harakatsizliklarining guvohi bo&apos;lsangiz yoki
                      xodimlarning korrupsiya va boshqa huquqbuzarlik
                      holatlariga aloqadorligi yuzasidan maʼlumotlarga ega
                      bo&apos;lsangiz, vazirlikning{" "}
                      <strong>(71) 2101104</strong> (1066) raqamli ishonch
                      telefoni yoki ushbu aloqa kanallari
                      t.me/Qurilish_Komplayens_bot telegram boti va rasmiy mc.uz
                      veb-sayti orqali o&apos;z murojaatingizni
                      yo&apos;llashingiz mumkin.
                    </p>

                    <p>
                      Ushbu murojaatingiz qonunchilikda belgilangan tartib va
                      muddatlarda ko&apos;rib chiqiladi hamda tasdiqlangan
                      korrupsion holatlar bo&apos;yicha keskin qonuniy choralar
                      ko&apos;riladi. O&apos;z navbatida, vazirlik tizimida
                      mehnat qilayotgan har bir rahbar va xodimni korrupsiya
                      holatlarining har qanday ko&apos;rinishlariga nisbatan
                      murosasiz munosabatda bo&apos;lishga hamda o&apos;z xizmat
                      vazifalarini halol va xolis bajarishga yana bir bor
                      chaqiramiz.
                    </p>

                    <p>
                      <strong>
                        B.Zakirov <br /> O&apos;zbekiston Respublikasi Qurilish
                        va uy-joy kommunal xo&apos;jaligi vaziri
                      </strong>
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </li>
        </ul>

        <div className="flex gap-x-[20px] mb-[50px]">
          <div>
            <Image
              src={"/images/anti-corruption.jpg"}
              alt="anti-corruption"
              width={300}
              height={300}
            />
          </div>

          <div>
            <h1 className="text-[32px] font-semibold">
              Korrupsiya holatiga duch keldingizmi?
            </h1>
            <div className="flex gap-x-[10px] text-lg mb-[50px]">
              <p className="">Shu raqamga murojaat qiling:</p>
              <a href="tel:+998 71 244-51-84 pl-[20px]">
                <strong>+998 71 244-51-84</strong>
              </a>
            </div>

            <button className="bg-[#2196F3]  active:bg-[#2C5EA0] scale-100 active:scale-105 text-white flex gap-x-[4px] px-[25px] py-[15px] rounded-lg items-center transition-all duration-300">
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
        </div>
      </div>
    </Main>
  );
};

export default Index;
