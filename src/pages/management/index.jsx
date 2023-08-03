import React from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Card from "@/components/card";
import Title from "@/components/title";



const Management = () => {
    return (
        <Main>
            <Menu active={0}/>
            

            
            <section className={'grid grid-cols-12 container mx-auto gap-x-[30px] mb-[89px]'}>
                <div className={'col-span-12'}>
                    <Title>
                        Rahbariyat
                    </Title>
                </div>

                <div className={'col-span-6 mb-[30px] mt-[50px]'}>
                    <Card
                        position={"Direktor"}
                        img={'profile.png'}
                        name={'Familiya Ism Otasining ismi'}
                        receptionDays={': Dushanba c 10:00 до 13:00'}
                        phone={'998909000000'}
                        mail={'info@tmsiti.uz'}
                    />
                </div>

                <div className={'col-span-12 w-full h-[1px] bg-[#001A57]'}></div>

                <div className={'col-span-12 flex justify-between my-[30px]'}>
                    <Card
                        position={"Direktor"}
                        img={'profile.png'}
                        name={'Familiya Ism Otasining ismi'}
                        receptionDays={': Dushanba c 10:00 до 13:00'}
                        phone={'998909000000'}
                        mail={'info@tmsiti.uz'}
                    />

                    <Card
                        position={"Direktor"}
                        img={'profile.png'}
                        name={'Familiya Ism Otasining ismi'}
                        receptionDays={': Dushanba c 10:00 до 13:00'}
                        phone={'998909000000'}
                        mail={'info@tmsiti.uz'}
                    />
                </div>

                <div className={'col-span-12 flex justify-between'}>
                    <Card
                        position={"Direktor"}
                        img={'profile.png'}
                        name={'Familiya Ism Otasining ismi'}
                        receptionDays={': Dushanba c 10:00 до 13:00'}
                        phone={'998909000000'}
                        mail={'info@tmsiti.uz'}
                    />

                    <Card
                        position={"Direktor"}
                        img={'profile.png'}
                        name={'Familiya Ism Otasining ismi'}
                        receptionDays={': Dushanba c 10:00 до 13:00'}
                        phone={'998909000000'}
                        mail={'info@tmsiti.uz'}
                    />
                </div>
            </section>
        </Main>
    );
};

export default Management;