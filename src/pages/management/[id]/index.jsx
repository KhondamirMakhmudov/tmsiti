import React from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import Image from "next/image";

const Resume = () => {
    const {data, isLoading} = useGetTMSITIQuery({
        key: KEYS.workers,
        url: URLS.workers
    })

    return (
        <Main>
            <Menu/>

            <div className={'grid grid-cols-12 container mx-auto'}>
                <section className={'col-span-4 bg-[#E3FCFF] flex flex-col justify-items-start items-center py-[30px]'}>
                    <Image src={'/images/profile.png'} alt={'profile'} width={250} height={400}/>

                    <h4 className={'font-semibold text-xl'}>Murojaat uchun:</h4>
                </section>
            </div>

        </Main>
    );
};

export default Resume;
