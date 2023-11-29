import React from "react";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { Man } from "@mui/icons-material";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import { motion } from "framer-motion";
import Title from "@/components/title";
import { get, head } from "lodash";
import dayjs from "dayjs";
import Link from "next/link";
import NewsList from "@/containers/news-list";
import NewsCard from "@/components/news-card";
import NewsCardTemplate from "@/containers/news-card";

const Index = () => {
  const {
    data: news,
    isLoading: isLoadingNews,
    isFetching: isFetchingNews,
  } = useGetTMSITIQuery({ key: KEYS.news, url: URLS.news });
  return (
    <Main>
      <Menu active={0} />
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
          <Title>Barcha yangiliklar</Title>
        </motion.div>

        {head(
          get(news, "data.results", []).map((item) => (
            <div
              className={"col-span-12 flex items-start gap-x-[30px]"}
              key={get(item, "id")}
            >
              <img
                src={get(item, "news_image")}
                alt="news-main-img"
                className={"w-[450px] h-[260px]   object-cover"}
              />
              <div className={""}>
                <p className={"text-[#2E6DFF]  font-bold"}>
                  {dayjs(get(item, "news_datetime")).format("DD.MM.YYYY")}
                </p>
                <Link href={`/news/${get(item, "id")}`}>
                  <h2
                    className={
                      "lg:text-xl md:text-lg text-xl font-bold text-[#001A57] hover:text-[#2E6DFF] hover:underline mt-[20px]  md:line-clamp-none line-clamp-2"
                    }
                  >
                    {get(item, "news_title")}
                  </h2>
                </Link>
                <p
                  className={
                    "text-[#A9AFC5] mt-[10px] md:text-base text-sm line-clamp-3 md:line-clamp-6"
                  }
                >
                  {get(item, "news_desc")}
                </p>
                <Link
                  className={
                    "px-[55px] py-[13px] inline-block border-[2px] border-[#1A4DC2] bg-transparent hover:bg-[#1A4DC2] hover:text-[#fff] transition-all mt-[20px] rounded-[5px] font-bold text-[#1A4DC2]"
                  }
                  href={"#"}
                >
                  Batafsil
                </Link>
              </div>
            </div>
          )),
        )}

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
