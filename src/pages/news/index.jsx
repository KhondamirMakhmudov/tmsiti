import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import useGetQuery from "@/hooks/api/useGetQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import {get} from "lodash";
import NewsTemplate from "@/components/news-template";



const News = () => {
    const {data: news, isLoading:isLoadingNews} = useGetQuery({
        key: KEYS.news,
        url: URLS.news,
    })

    if(isLoadingNews){
        return 'Loading ...';
    }

    return (
        <Main>
            <Menu active={0}/>


            <div className={'grid grid-cols-12 gap-x-[30px] container mx-auto'}>
                <div className={'col-span-12 mt-[50px] mb-[30px]'}>
                    <Title>
                        Barcha yangiliklar
                    </Title>
                </div>

                <ul>
                    {
                        get(news, 'data', []).map(newsItem =>
                            <li key={get(newsItem, 'id')}>
                                <NewsTemplate
                                    imgUrl={get(newsItem, 'news_image')}
                                    dateTime={get(newsItem, 'date')}
                                    title={get(newsItem, 'title')}
                                    description={get(newsItem, 'text')}
                                />
                            </li>
                        )
                    }
                </ul>






                {/*<div className={'col-span-12 mb-[140px]'}>*/}
                {/*    <Pagination pageCount={10}/>*/}
                {/*</div>*/}
            </div>


        </Main>
    );
};

export default News;