import React, {useState} from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Image from "next/image";
import Link from "next/link";

const About = () => {
    const [activeButton, setActiveButton] = useState(0);

    const handleClick = (active) => {
        setActiveButton(active)
    }

    return (
        <Main>
            <Menu active={0}/>
            <section className={' grid grid-cols-12 gap-x-[30px]  container mx-auto mb-[50px]'}>
                <div className={'col-span-8'}>
                    <p className={"text-2xl"}>O’zbekiston Respublikasi Qurilish va uy-joy kommunal xo‘jaligi vazirligi huzuridagi <strong>«Qurilishda texnik me`yorlash va standartlashtirish ilmiy-tadqiqot instituti»</strong> Davlat muassasasi O‘zbekiston Respublikasi Prezidentining 2022-yil 22-sentabrdagi <strong>“Respublikada kapital Qurilish sohasida buyurtmachi xizmati faoliyatini takomillashtirish chora-tadbirlari to‘g‘risida”</strong>gi <Link href={'https://lex.uz/uz/docs/-6203336'} className={'text-[#1A4DC2] underline'}>PQ-378-son</Link> qaroriga asosan O‘zbekiston Respublikasi Qurilish vazirligi huzurida tashkil etilgan.</p>


                </div>
                <div className={'col-span-4 w-full h-[800px]'}>
                    {
                        activeButton === 0 ?
                            <img src={'/images/certificate.png'} className={'w-[450px] h-[643px] mb-[31px] mx-auto'}/>
                            : <img src={'/images/profile.png'} className={'w-[450px] h-[643px] mb-[31px] mx-auto'}/>
                    }


                    <div className={'flex justify-center gap-x-[50px] mb-[31px]'}>
                        <a target="_blank" href={'/images/certificate.png'}>
                            <button onClick={() => setActiveButton(0)} className={`flex  items-center text-white w-[170px] bg-[#1A4DC2] text-[#000] py-[13px] px-[46px] gap-x-[10px] rounded-[5px]`}>
                                <Image src={'/icons/document.svg'} alt={'document'} width={24} height={24} />
                                <p className={'text-sm text-white'}>Nizom</p>
                            </button>
                        </a>

                        <a target="_blank" href={'/images/profile.png'}>
                            <button onClick={() => setActiveButton(1)} className={`flex items-center bg-black w-[170px]  py-[13px] px-[46px] gap-x-[10px] rounded-[5px]`}>
                                <Image src={'/icons/document.svg'} alt={'document'} width={24} height={24} />
                                <p className={'text-sm text-white'}>Ustav</p>
                            </button>
                        </a>


                    </div>
                </div>
            </section>
        </Main>
    );
};

export default About;