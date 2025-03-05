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
import Link from "next/link";
import { useSettingsStore } from "@/store";
import { config } from "@/config";
import { useTranslation } from "react-i18next";

const NewsItemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const lang = useSettingsStore((state) =>
    get(state, "lang", config.DEFAULT_APP_LANG)
  );
  const { t } = useTranslation();

  const htmlString = "<p>This is some <b>HTML</b> content.</p>";
  const { data, isLoading } = useGetTMSITIQuery({
    key: [KEYS.newsMain, id],
    url: `${URLS.news}${id}`,
    params: {
      lang: lang || config.DEFAULT_APP_LANG,
    },
    enabled: !!id,
  });

  const {
    data: news,
    isLoading: isLoadingNews,
    isFetching: isFetchingNews,
  } = useGetTMSITIQuery({
    key: KEYS.news,
    url: URLS.news,
    params: {
      lang: lang || config.DEFAULT_APP_LANG,
    },
  });

  if (isLoading) {
    return "Loading...";
  }

  return (
    <Main>
      <Menu active={0} />
      <section
        className={"bg-[#EFF3FA] text-xs text-[#607198] !mt-0 mb-[70px] "}
      >
        <div className={"container py-[12px] flex gap-x-[5px] capitalize"}>
          <Link href={"/"}>{t("homepage")}/</Link>
          <Link href={"#"}>{t("messages")} /</Link>
          <Link href={"/news"}>{t("news")} /</Link>
          <div
            className={
              "w-[220px] overflow-hidden whitespace-normal line-clamp-1"
            }
          >
            <Link href={`#`} className={""}>
              {get(data, "data.news_title")}
            </Link>
          </div>
        </div>
      </section>
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

        <div
          className={
            " col-span-12 md:col-span-7 md:max-w-[810px] mb-[30px] md:mb-0"
          }
        >
          <figure>
            <div
              className={
                "relative md:max-w-[810px] md:max-h-[450px] h-[400px] -z-10"
              }
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

          <div className={"col-span-12 mt-[30px] whitespace-pre-line block"}>
            {parse(get(data, "data.news_text")) || " "}
          </div>
        </div>

        <div className={"md:col-span-5 col-span-12   "}>
          <h4 className={"text-xl font-semibold"}>{t("other_news")}</h4>

          <div
            className={"w-full h-[1px] bg-[#001A57] mt-[10px] mb-[20px]"}
          ></div>

          <ul>
            {slice(
              get(news, "data.results", []).map((newsItem) => (
                <li key={get(newsItem, "id")} className={"mb-[20px] "}>
                  {isFetchingNews && isLoadingNews ? (
                    ""
                  ) : (
                    <div className={"flex gap-x-[30px]"}>
                      <div className={"min-w-[210px]"}>
                        <img
                          alt={"img"}
                          src={`${get(newsItem, "news_image")}`}
                          className={"object-cover w-[210px] h-[120px]"}
                        />
                      </div>

                      <div className={"col-span-4 mb-[10px]"}>
                        <p
                          className={
                            "text-[#2E6DFF] text-xs font-bold mb-[10px]"
                          }
                        >
                          {dayjs(get(newsItem, "news_datetime")).format(
                            "DD.MM.YYYY"
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
              5
            )}
          </ul>

          <div className={"md:mt-[30px] mt-[50px] text-center md:text-start"}>
            <Link
              href={"/news"}
              className={
                "py-[13px] px-[55px] bg-[#1A4DC2] font-bold text-[#fff] hover:bg-[#1641A6] transition-colors duration-300 capitalize"
              }
            >
              {t("more_details")}
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
