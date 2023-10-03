import React from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Card from "@/components/card";
import Title from "@/components/title";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import {drop, get, head} from "lodash";
import {motion} from "framer-motion";


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
            

            
            <section className={'grid grid-cols-12 container mx-auto gap-x-[30px] '}>
                <div className={'col-span-12'}>
                    <Title>
                        Rahbariyat
                    </Title>
                </div>

                {
                    head(get(data, 'data', []).map(item =>
                        <motion.div initial={{opacity: 0, translateX: 300}} animate={{opacity: 1, translateX: 0}} transition={{delay: .7}} className={'col-span-12'} key={get(item, 'id')}>
                            <Card
                                position={get(item, 'worker_post')}
                                img={get(item, 'worker_image')}
                                name={get(item, 'worker_name')}
                                receptionDays={get(item, 'worker_reception_day')}
                                phone={get(item, 'worker_phone')}
                                bachelor={get(item, 'worker_bachelor')}
                                master={get(item, 'worker_master')}
                                academicTitle={get(item, 'academic_title')}

                            />
                        </motion.div>
                    ))
                }

                <motion.div initial={{opacity: 0, translateX: 300}} animate={{opacity: 1, translateX: 0}} transition={{delay: .4}} className={'col-span-12 w-full h-[1px] bg-[#001A57] mt-[30px]'}>

                </motion.div>

            </section>

            <motion.ul initial={{opacity: 0, translateY: 300}} animate={{opacity: 1, translateY: 0}} transition={{delay: .9}} className={'grid grid-cols-12 container gap-x-[30px] mx-auto mb-[59px]'}>
                {drop(get(data, 'data', []).map(item =>
                    <li key={get(item, 'id')} className={'my-[30px] col-span-6'}>
                        <Card
                            position={get(item, 'worker_post')}
                            img={get(item, 'worker_image')}
                            name={get(item, 'worker_name')}
                            receptionDays={get(item, 'worker_reception_day')}
                            phone={get(item, 'worker_phone')}
                            bachelor={get(item, 'worker_bachelor')}
                            master={get(item, 'worker_master')}
                        />

                    </li>

                ))}
            </motion.ul>
        </Main>
    );
};

export default Management;