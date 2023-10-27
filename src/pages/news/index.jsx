import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get } from "lodash";
import NewsTemplate from "@/components/news-template";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import SkeletonLoader from "@/components/loader/skeleton";
import NewsList from "@/containers/news-list";

const News = () => {
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

        {/*<ul className={'col-span-12'}>*/}
        {/*    {*/}
        {/*        get(news, 'data.results', []).map(newsItem =>*/}
        {/*            <li key={get(newsItem, 'id')}>*/}
        {/*                {isFetchingNews && isLoadingNews ? <SkeletonLoader/> :*/}
        {/*                    <NewsTemplate*/}
        {/*                        imgUrl={(get(newsItem, 'news_image'))}*/}
        {/*                        dateTime={get(newsItem, 'news_datetime')}*/}
        {/*                        title={get(newsItem, 'news_title')}*/}
        {/*                        description={get(newsItem, 'news_desc')}*/}
        {/*                        url={`/news/${get(newsItem,'id','#')}`}*/}
        {/*                    />*/}
        {/*                }*/}

        {/*            </li>*/}
        {/*        )*/}
        {/*    }*/}

        {/*</ul>*/}
        <div className={"col-span-12"}>
          <NewsList
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

export default News;
