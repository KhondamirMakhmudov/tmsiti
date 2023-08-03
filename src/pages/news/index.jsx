import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/title";
import Pagination from "@/components/pagination";



const News = () => {
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
                    <li className={'flex gap-x-[30px]'}>
                        <img src={'/images/img1.png'} alt={'news-img'} className={'w-[330px] h-[189px]'}/>

                        <div >
                            <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>07.19.2023</p>
                            <Link href={'/news/1'}>
                                <h2 className={'text-xl font-bold text-[#001A57] hover:text-[#2E6DFF] hover:underline transition-all duration-400'}>Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.</h2>

                            </Link>
                            <p className={'text-[#A9AFC5] mt-[10px] '}>Lorem ipsum dolor sit amet consectetur. Consequat sagittis amet vitae porta urna. Pretium lobortis scelerisque congue sit sodales a vitae ultricies.</p>

                        </div>
                    </li>

                    <li className={'w-full h-[1px] bg-[#001A57] my-[30px]'}></li>

                    <li className={'flex gap-x-[30px]'}>
                        <img src={'/images/img1.png'} alt={'news-img'} className={'w-[330px] h-[189px]'}/>

                        <div >
                            <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>07.19.2023</p>
                            <h2 className={'text-xl font-bold'}>Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.</h2>
                            <p className={'text-[#A9AFC5] mt-[10px] '}>Lorem ipsum dolor sit amet consectetur. Consequat sagittis amet vitae porta urna. Pretium lobortis scelerisque congue sit sodales a vitae ultricies.</p>
                        </div>
                    </li>

                    <li className={'w-full h-[1px] bg-[#001A57] my-[30px]'}></li>

                    <li className={'flex gap-x-[30px]'}>
                        <img src={'/images/img1.png'} alt={'news-img'} className={'w-[330px] h-[189px]'}/>

                        <div >
                            <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>07.19.2023</p>
                            <h2 className={'text-xl font-bold'}>Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.</h2>
                            <p className={'text-[#A9AFC5] mt-[10px] '}>Lorem ipsum dolor sit amet consectetur. Consequat sagittis amet vitae porta urna. Pretium lobortis scelerisque congue sit sodales a vitae ultricies.</p>

                        </div>
                    </li>

                    <li className={'w-full h-[1px] bg-[#001A57] my-[30px]'}></li>

                    <li className={'flex gap-x-[30px]'}>
                        <img src={'/images/img1.png'} alt={'news-img'} className={'w-[330px] h-[189px]'}/>

                        <div >
                            <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>07.19.2023</p>
                            <h2 className={'text-xl font-bold'}>Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.</h2>
                            <p className={'text-[#A9AFC5] mt-[10px] '}>Lorem ipsum dolor sit amet consectetur. Consequat sagittis amet vitae porta urna. Pretium lobortis scelerisque congue sit sodales a vitae ultricies.</p>

                        </div>
                    </li>

                    <li className={'w-full h-[1px] bg-[#001A57] my-[30px]'}></li>

                    <li className={'flex gap-x-[30px]'}>
                        <img src={'/images/img1.png'} alt={'news-img'} className={'w-[330px] h-[189px]'}/>

                        <div >
                            <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>07.19.2023</p>
                            <h2 className={'text-xl font-bold'}>Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.</h2>
                            <p className={'text-[#A9AFC5] mt-[10px] '}>Lorem ipsum dolor sit amet consectetur. Consequat sagittis amet vitae porta urna. Pretium lobortis scelerisque congue sit sodales a vitae ultricies.</p>
                        </div>
                    </li>
                </ul>

                <div className={'col-span-12 mb-[140px]'}>
                    <Pagination pageCount={10}/>
                </div>
            </div>


        </Main>
    );
};

export default News;