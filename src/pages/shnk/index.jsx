import React, {useState} from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import useGetQuery from "@/hooks/api/useGetQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import {get} from "lodash";
import Image from "next/image";
import {motion} from 'framer-motion';
import clsx from "clsx";

const SHNQ = () => {
    const [systemId, setSystemId] = useState(null);
    const [groupId, setGroupId] = useState(null);
    const [docId, setDocId] = useState(null);



    const {data: subSystem, isLoading: isLoadingSystem, error} = useGetQuery({
        key: KEYS.subSystem,
        url: URLS.subSystem,
        params: {
            key: 'subSystem'
        }

    })

    const {data: group, isLoading: isLoadingGroup, } = useGetQuery({
        key: KEYS.group,
        url: URLS.group,
        params: {
            key: 'group',
            parent: systemId
        },
        enabled: !!(systemId)
    })

    const {data: doc, isLoading: isLoadingDoc, } = useGetQuery({
        key: KEYS.doc,
        url: URLS.doc,
        params: {
            key: 'doc',
            parent: groupId
        },


    });

    const {} = useGetQuery({})

    if(isLoadingSystem && isLoadingGroup) {
        return <p>Loading</p>
    }


    return (
        <Main>
            <Menu/>

            <section className={"grid grid-cols-12 container mx-auto "}>
                <div className={"col-span-12"}>
                    <Title>
                        Shaharsozlik normalari va qoidalari
                    </Title>
                </div>

                <div className={'col-span-12'}>
                    <ul>
                        {
                            get(subSystem, 'data', []).map((item, i) =>
                                <li onClick={(e) => {
                                    e.stopPropagation();
                                    setSystemId(get(item, 'id'));
                                    setGroupId(null);
                                    setDocId(null);
                                }} key={get(item, 'id')}
                                    className={clsx('p-1.5 transition cursor-pointer mb-3 hover:bg-[#C7E3FC]', {'text-[#1B41C6] font-medium hover:bg-transparent': get(item, 'id') == systemId,'!mb-0':get(subSystem, 'data', [])?.length == i+1})}

                                >
                                    <div className={'flex justify-between items-center'}>
                                        <p>{get(item, 'system_code')} {get(item, 'system_title')}</p>

                                        <motion.div animate={{
                                            rotate: get(item, 'id') === systemId ? 180 : 0,
                                        }}>
                                            <Image src={'/icons/arrow-up.svg'} alt={'up-down'} width={24} height={24}/>
                                        </motion.div>

                                    </div>
                                    {get(item, 'id') === systemId && ((isLoadingGroup) ?
                                        <h1>Loading</h1> :
                                            <ul>
                                                {get(group, 'data', []).map((groupItem, j) =>
                                                    <li key={get(groupItem, 'id')}
                                                        className={'text-[#1A4DC2] text-lg border  border-b-black'}                                                                                                  className={clsx(' transition cursor-pointer mb-2  hover:text-[#1B41C6] text-sm text-[#28366D] font-normal', {
                                                        '!text-[#017EFA] !font-medium': get(groupItem, 'id') == groupId,
                                                        '!mb-0': get(group, 'data.results', [])?.length == j + 1
                                                    })}>
                                                        <p>{get(groupItem, 'group_code')} {get(groupItem, 'group_title')}</p>
                                                    </li>
                                                )}
                                            </ul>

                                    )}
                                    <ul>
                                        {get(group, 'data', []).map(groupItem =>
                                            <li onClick={(e) => {
                                                e.stopPropagation();
                                                setGroupId(get(groupItem, 'id'));
                                                setDocId(null);
                                            }} key={get(groupItem, 'id')} className={'text-[#1A4DC2] text-lg  border-b-black'}>
                                                <div className={'flex justify-between items-center'}>
                                                    <p>{get(groupItem, 'group_code')} {get(groupItem, 'group_title')}</p>

                                                    <motion.div animate={{
                                                        rotate: get(groupItem, 'id') === groupId ? 180 : 0,
                                                    }}>
                                                        <Image src={'/icons/arrow-up.svg'} alt={'up-down'} width={24} height={24}/>
                                                    </motion.div>
                                                </div>
                                                {get(groupItem, 'id') && ( (isLoadingDoc) ? <h1>Loading</h1> :
                                                    <ul>
                                                            {
                                                                get(doc, 'data', []).map(docItem =>
                                                                    <li key={get(docItem, 'id')}
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            setDocId(get(docItem, 'id'));
                                                                        }}
                                                                    >
                                                                        <p>{get(docItem, 'shnk_code')}{get(docItem, 'shnk_title')}</p>
                                                                    </li>
                                                                )
                                                            }
                                                    </ul>
                                                )}
                                            </li>
                                        )}
                                    </ul>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </section>
        </Main>
    );
};

export default SHNQ;
// color: #1A4DC2;
// font-family: Noto Sans;
// font-size: 18px;
// font-style: normal;
// font-weight: 500;
// line-height: normal;