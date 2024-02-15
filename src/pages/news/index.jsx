import React from "react";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import { motion } from "framer-motion";
import Title from "@/components/title";
import Link from "next/link";
import NewsCardTemplate from "@/containers/news-card";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();

  return (
    <Main>
      <Menu active={0} />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198]"}>
        <div className={"container py-[12px] capitalize"}>
          <Link href={"/"}>{t("homepage")} / </Link>
          <Link href={"#"}>{t("messages")} / </Link>
          <Link href={"/news"}>{t("news")} </Link>
        </div>
      </section>
      <div
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto px-[20px] md:px-0"
        }
      >
        <motion.div
          initial={{ translateX: "-200px" }}
          animate={{ translateX: "0px" }}
          className={"col-span-12 mt-[50px] mb-[30px]"}
        >
          <Title>{t("all_news")}</Title>
        </motion.div>

        {/*{head(*/}
        {/*  get(news, "data.results", []).map((item) => (*/}
        {/*    <div className={"col-span-12"} key={get(item, "id")}>*/}
        {/*      <div className={"grid grid-cols-12 gap-x-[30px]"}>*/}
        {/*        <div className={"col-span-4 w-[450px]"}>*/}
        {/*          <img*/}
        {/*            src={get(item, "news_image")}*/}
        {/*            alt="news-main-img"*/}
        {/*            className={"w-[450px] h-[260px]   object-cover"}*/}
        {/*          />*/}
        {/*        </div>*/}
        {/*        <div className={"col-span-8"}>*/}
        {/*          <p className={"text-[#2E6DFF]  font-bold"}>*/}
        {/*            {dayjs(get(item, "news_datetime")).format("DD.MM.YYYY")}*/}
        {/*          </p>*/}
        {/*          <Link href={`/news/${get(item, "id")}`}>*/}
        {/*            <h2*/}
        {/*              className={*/}
        {/*                "lg:text-xl md:text-lg text-xl font-bold text-[#001A57] hover:text-[#2E6DFF] hover:underline mt-[20px]  md:line-clamp-none line-clamp-2"*/}
        {/*              }*/}
        {/*            >*/}
        {/*              {get(item, "news_title")}*/}
        {/*            </h2>*/}
        {/*          </Link>*/}
        {/*          <p*/}
        {/*            className={*/}
        {/*              "text-[#A9AFC5] mt-[10px] md:text-base text-sm line-clamp-3 md:line-clamp-6"*/}
        {/*            }*/}
        {/*          >*/}
        {/*            {get(item, "news_desc")}*/}
        {/*          </p>*/}
        {/*          <Link*/}
        {/*            className={*/}
        {/*              "px-[55px] py-[13px] inline-block border-[2px] border-[#1A4DC2] bg-transparent hover:bg-[#1A4DC2] hover:text-[#fff] transition-all mt-[20px] rounded-[5px] font-bold text-[#1A4DC2]"*/}
        {/*            }*/}
        {/*            href={`/news/${get(item, "id")}`}*/}
        {/*          >*/}
        {/*            Batafsil*/}
        {/*          </Link>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  )),*/}
        {/*)}*/}

        <div className={"col-span-12"}>
          <NewsCardTemplate
            dateTime={"news_datetime"}
            key={KEYS.news}
            url={URLS.news}
            news_title={"news_title"}
            news_description={"news_desc"}
            imgUrl={"news_image"}
          />
        </div>
      </div>
    </Main>
  );
};

export default Index;
