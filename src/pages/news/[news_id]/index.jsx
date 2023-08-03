import React from 'react';
import Main from "@/layouts/main";
import Menu from '@/components/menu'
import NewsTitle from "@/components/news-title";


const NewsId = () => {
    return (
        <Main>
            <Menu active={0}/>
            <section className={'grid grid-cols-12 container mx-auto gap-x-[30px] mb-[30px]'}>
                <div className={'col-span-6'}>
                    <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>Admin, <span>Iyul 15, 2023</span></p>

                    <NewsTitle size={'3xl'}>
                        Lorem ipsum dolor sit amet consectetur. Et non mauris in urna eu pellentesque morbi. Nulla lacus vel rutrum cum sagittis.
                    </NewsTitle>

                    <p className={'text-2xl text-[#001A57] mt-[20px]'}>
                        Lorem ipsum dolor sit amet consectetur. Fusce quam fermentum a habitant. Non amet donec ac vel. Molestie nulla pellentesque dui scelerisque. Vulputate suspendisse donec in risus augue.
                    </p>
                </div>

                <div className={'col-span-6'}>
                    <figure>
                        <img className={'w-full h-[390px]'} src={'/images/img1.png'}/>
                        <figcaption className={'text-sm text-neutral-600 dark:text-neutral-400'}>
                            Lorem ipsum dolor sit amet consectetur. Elementum risus duis elit potenti senectus dictum. Lectus rhoncus fermentum velit magna sapien turpis pellentesque et.
                        </figcaption>
                    </figure>
                </div>
            </section>
        </Main>
    );
};

export default NewsId;