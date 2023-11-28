import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import NewsTitle from "@/components/news-title";
import { useRouter } from "next/router";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { get, slice } from "lodash";
import parse from "html-react-parser";
import dayjs from "dayjs";
import Image from "next/image";

import NewsTemplate from "@/components/news-template";
import Link from "next/link";

const NewsItemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useGetTMSITIQuery({
    key: [KEYS.news, id],
    url: `${URLS.news}${id}`,
    enabled: !!id,
  });

  const {
    data: news,
    isLoading: isLoadingNews,
    isFetching: isFetchingNews,
  } = useGetTMSITIQuery({
    key: KEYS.news,
    url: URLS.news,
  });

  if (isLoading) {
    return "Loading...";
  }

  const SelectNews = () => {};
  return (
    <Main>
      <Menu active={0} />
      <section
        className={
          "grid grid-cols-12 container mx-auto gap-x-[30px] mb-[90px] md:px-0 px-[20px]"
        }
      >
        <div className={"col-span-12 mb-[30px] "}>
          <p
            className={
              "text-[#2E6DFF] mb-[20px] font-bold text-sm md:text-base"
            }
          >
            <span>
              {dayjs(get(data, "data.news_datetime")).format("DD MMM YYYY")}
            </span>
          </p>

          <NewsTitle>{get(data, "data.news_title")}</NewsTitle>
        </div>

        <div className={" col-span-12 md:col-span-7 mb-[90px] md:mb-0"}>
          <figure className={"md:w-[810px] md:h-[458px]"}>
            <div
              className={"relative md:w-[810px] md:h-[458px] h-[400px] -z-10"}
            >
              <Image
                alt={"img"}
                loader={() => `${get(data, "data.news_image")}`}
                src={`${get(data, "data.news_image")}`}
                layout={"fill"}
                objectFit={"cover"}
              />
            </div>

            <figcaption
              className={
                "text-sm text-start mt-[10px] text-neutral-600 dark:text-neutral-400"
              }
            >
              {get(data, "data.img_desc")}
            </figcaption>
          </figure>

          <div className={"col-span-7 mt-[30px] md:w-[810px] "}>
            {parse(get(data, "data.news_text"))}
          </div>
        </div>

        <div className={"md:col-span-5 col-span-12   "}>
          <h4 className={"text-xl font-semibold"}>Boshqa yangiliklar</h4>

          <div
            className={"w-full h-[1px] bg-[#001A57] mt-[10px] mb-[20px]"}
          ></div>

          <ul>
            {slice(
              get(news, "data.results", []).map((newsItem) => (
                <li key={get(newsItem, "id")} className={"mb-[20px]"}>
                  {isFetchingNews && isLoadingNews ? (
                    <SkeletonLoader />
                  ) : (
                    <div className={"grid grid-cols-9 gap-x-[30px]"}>
                      <div className={"col-span-3 "}>
                        <img
                          alt={"img"}
                          src={`${get(newsItem, "news_image")}`}
                          className={"object-cover w-[210px] h-[120px]"}
                        />
                      </div>

                      <div className={"col-span-6 mb-[10px]"}>
                        <p
                          className={
                            "text-[#2E6DFF] text-xs font-bold mb-[10px]"
                          }
                        >
                          {dayjs(get(newsItem, "news_datetime")).format(
                            "DD.MM.YYYY",
                          )}
                        </p>

                        <Link href={`/news/${get(newsItem, "id", "#")}`}>
                          <h2
                            className={
                              "text-sm font-bold hover:text-[#2E6DFF] hover:underline line-clamp-4 md:line-clamp-0"
                            }
                          >
                            {get(newsItem, "news_title")}
                          </h2>
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
              )),
              0,
              5,
            )}
          </ul>

          <div className={"md:mt-[30px] mt-[50px] text-center md:text-start"}>
            <Link
              href={"/news"}
              className={
                "py-[13px] px-[55px] bg-[#1A4DC2] font-bold text-[#fff] hover:bg-[#1641A6] transition-colors duration-300"
              }
            >
              Batafsil
            </Link>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default NewsItemPage;

// <NewsTemplate
//     imgUrl={(get(newsItem, 'news_image'))}
//     dateTime={get(newsItem, 'news_datetime')}
//     title={get(newsItem, 'news_title')}
//
//     url={`/news/${get(newsItem,'id','#')}`}
// />
