import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";
import Title from "@/components/title";
import {motion, useScroll} from "framer-motion";

export default function Home() {
  return (
    <Main>
        <Menu active={0}/>

        <section className={'container mx-auto grid grid-cols-12 gap-x-[30px] items-center'}>
            <div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className={'col-span-5'}>
                <h1 className={'text-[64px] text-[#14255B] font-bold mb-[90px]'}>
                    Biz qurilishda taraqqiyotni ilhomlantiramiz.
                </h1>

                <div className={'flex gap-x-[30px]'}>
                    <div className={'p-[15px] border-t-[1px] border-[#14255B]'}>
                        <Link href={'/shnk'} className={'uppercase text-[#2E6DFF] text-base'}>
                            Shnq
                        </Link>

                        <Link href={'#'} className={'text-[#001A57] hover:text-[#2E6DFF] hover:underline text-2xl font-bold transition-all duration-400'}>
                            <p>Shaharsozlik normalari va qoidalari</p>
                        </Link>
                    </div>

                    <div className={'p-[15px] border-t-[1px] border-[#14255B]'}>
                        <Link href={'/shnk'} className={'uppercase text-[#2E6DFF] text-base'}>
                            Standartlar
                        </Link>

                        <Link href={'#'} className={'text-[#001A57] hover:text-[#2E6DFF] hover:underline text-2xl font-bold transition-all duration-400'}>
                            <p>Texnik jihatdan tartib solish sohasidagi normativ hujjatlar</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'col-span-7'}>
                <img src={'/images/img.png'} alt={'img'} className={'w-[945px] h-[734px]'} width={945} height={734}/>
            </div>
        </section>

        <div className={'h-[130px] w-full bg-[#001A57]  text-[#fff] grid grid-cols-12 items-center'}>
                <div className={'col-span-12 container mx-auto flex gap-x-[76px] justify-between items-center'}>
                    <button className={''}>
                        <Image src={'/icons/arrow-left.svg'} width={44} height={44}/>
                    </button>

                    <div className={'flex items-center gap-x-[30px]'}>
                        <div>
                            <p className={'text-base'}>Muhokamalar</p>
                            <span className={'text-sm text-[#BCBCBC]'}>Iyul 15-25, 2023</span>
                        </div>

                        <div className={'w-[1px] h-[80px] bg-[#fff]'}></div>

                        <div>
                            <p className={'text-2xl font-medium'}>ShNK 1.02.07-19 - Qurilish uchun muhandislik-texnik izlanishlar. Asosiy qoidalar</p>
                            <span className={'text-sm text-[#BCBCBC]'}>Shaharsozlik normalari va qoidalariga kiritilayotga o‘zgartirishlarga o‘z fikringizni bildiring, muhokalarda ishtirok eting!</span>
                        </div>
                    </div>

                    <button className={''}>
                        <Image src={'/icons/arrow-right.svg'} width={44} height={44}/>
                    </button>
                </div>
        </div>

        <section>
            <div className={'grid grid-cols-12 container mx-auto'}>
                <div className={'col-span-12 flex justify-between pt-[50px] pb-[30px] items-end '}>
                    <Title>
                        So‘nggi yangiliklar
                    </Title>

                    <Link href={'/news'} className={"underline text-[#2E6DFF] text-base font-bold"}>
                        Barcha yangiliklar
                    </Link>
                </div>

                <div className={'col-span-6'}>
                    <div>
                        <img src={'/images/img1.png'} alt='news-main-img' className={'w-full] h-[468px]'}/>
                        <p className={'text-[#2E6DFF] mt-[30px] font-bold'}>Yangilik 07.19.2023</p>
                        <h2 className={'text-2xl font-bold text-[#001A57] mt-[20px] w-[690px]'}>Lorem ipsum dolor sit amet consectetur. Nec nibh  odio ornare quis quam rutrum eros id.</h2>
                        <p className={'text-[#A9AFC5] mt-[10px] w-[690px]'}>Lorem ipsum dolor sit amet consectetur. Consequat sagittis amet vitae porta urna. Pretium lobortis scelerisque congue sit sodales a vitae ultricies.</p>
                    </div>
                </div>

                <div className={'col-span-6'}>
                    <ul>
                        <li className={'flex '}>
                            <div>
                                <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>Yangilik 07.19.2023</p>
                                <h2 className={'text-xl font-bold'}>Lorem ipsum dolor sit amet consectetur. Sed eu dui vitae arcu condimentum nec arcu.</h2>
                            </div>

                            <img src={'/images/img1.png'} alt={'news-img'} className={'w-[330px] h-[189px]'}/>
                        </li>

                        <li className={'w-[full] h-[1px] bg-[#001A57] my-[30px]'}>
                        </li>

                        <li className={'flex'}>
                            <div>
                                <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>Yangilik 07.19.2023</p>
                                <h2 className={'text-xl font-bold'}>Lorem ipsum dolor sit amet consectetur. Sed eu dui vitae arcu condimentum nec arcu.</h2>
                            </div>

                            <img src={'/images/img1.png'} alt={'news-img'} className={'w-[330px] h-[189px]'}/>
                        </li>

                        <li className={'w-[full] h-[1px] bg-[#001A57] my-[30px]'}>
                        </li>

                        <li className={'flex pb-[30px]'}>
                            <div>
                                <p className={'text-[#2E6DFF] mb-[20px] font-bold'}>Yangilik 07.19.2023</p>
                                <h2 className={'text-xl font-bold'}>Lorem ipsum dolor sit amet consectetur. Sed eu dui vitae arcu condimentum nec arcu.</h2>
                            </div>

                            <img src={'/images/img1.png'} alt={'news-img'} className={'w-[330px] h-[189px]'}/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </Main>
  )
}