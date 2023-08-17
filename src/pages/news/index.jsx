import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import {get} from "lodash";
import NewsTemplate from "@/components/news-template";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";


const News = () => {
    const {data: news, isLoading:isLoadingNews} = useGetTMSITIQuery({key: KEYS.news,
        url: URLS.news,
    })



    return (
        <Main>
            <Menu active={0}/>

            <div className={'grid grid-cols-12 gap-x-[30px] container mx-auto'}>
                <div className={'col-span-12 mt-[50px] mb-[30px]'}>
                    <Title>
                        Barcha yangiliklar
                    </Title>
                </div>

                <ul className={'col-span-12'}>
                    {
                        get(news, 'data.results', []).map(newsItem =>
                            <li key={get(newsItem, 'id')}>
                                <NewsTemplate
                                    imgUrl={(get(newsItem, 'news_image'))}
                                    dateTime={get(newsItem, 'news_datetime')}
                                    title={get(newsItem, 'news_title')}
                                    description={get(newsItem, 'news_desc')}
                                    url={`/news/${get(newsItem,'id','#')}`}
                                />
                            </li>
                        )
                    }

                </ul>

            </div>


        </Main>
    );
};

export default News;