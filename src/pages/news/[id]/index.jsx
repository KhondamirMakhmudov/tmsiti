import React from 'react';
import Main from "@/layouts/main";
import Menu from '@/components/menu'
import NewsTitle from "@/components/news-title";
import {useRouter} from "next/router";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import {get} from "lodash";
import parse from 'html-react-parser';
import dayjs from "dayjs";
import Image from "next/image";

const NewsItemPage = () => {
    const router = useRouter()
    const {id} = router.query;
    const {data, isLoading} = useGetTMSITIQuery({
        key: [KEYS.news, id],
        url: `${URLS.news}${id}`,
        enabled: !!(id)
    });
    if (isLoading) {
        return "Loading...";
    }
    return (
        <Main>
            <Menu active={0}/>
            <section className={'grid grid-cols-12 container mx-auto gap-x-[30px] mb-[30px]'}>
                <div className={'col-span-6'}>
                    <p className={'text-[#2E6DFF] mb-[20px] font-bold'}><span>{dayjs(get(data,'data.news_datetime')).format("DD MMM YYYY")}</span></p>

                    <NewsTitle size={'3xl'}>
                        {get(data,'data.news_title')}
                    </NewsTitle>

                    <p className={'text-xl text-[#001A57] mt-[20px]'}>
                        {get(data,'data.news_desc')}
                    </p>
                </div>

                <div className={'col-span-6'}>
                    <figure>
                        <div className={'relative w-full h-96 -z-10'}>
                            <Image alt={'img'}
                                   loader={() => `${get(data,'data.news_image')}`}
                                   src={`${get(data,'data.news_image')}`}
                                    layout={'fill'}
                                   objectFit={'cover'} />
                        </div>

                        <figcaption className={'text-sm text-start mt-[10px] text-neutral-600 dark:text-neutral-400'}>
                            {get(data, 'data.img_desc')}
                        </figcaption>
                    </figure>
                </div>
                <div className={'col-span-12 mt-[30px]'}>
                    {parse(get(data,'data.news_text'))}
                </div>
            </section>
        </Main>
    );
};

export default NewsItemPage;