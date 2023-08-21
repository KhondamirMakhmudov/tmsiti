import React from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Card from "@/components/card";
import Title from "@/components/title";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import {get} from "lodash";



const Management = () => {
    const {data, isLoading} = useGetTMSITIQuery({
        key: KEYS.workers,
        url: URLS.workers,
    })

    if (isLoading) {
        return "...Loading"
    }
    return (
        <Main>
            <Menu active={0}/>
            

            
            <section className={'grid grid-cols-12 container mx-auto gap-x-[30px] mb-[89px]'}>
                <div className={'col-span-12'}>
                    <Title>
                        Rahbariyat
                    </Title>
                </div>
                <ul className={'col-span-12'}>
                    {get(data, 'data', []).map(item =>
                        <li key={get(data, 'id')} className={'my-[30px]'}>
                            <Card
                                position={get(item, 'worker_post')}
                                img={get(item, 'worker_image')}
                                name={get(item, 'worker_name')}
                                receptionDays={get(item, 'worker_reception_day')}
                                phone={get(item, 'worker_phone')}
                            />
                        </li>

                    )}
                </ul>

            </section>
        </Main>
    );
};

export default Management;