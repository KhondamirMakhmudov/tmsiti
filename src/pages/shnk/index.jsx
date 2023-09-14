import React, {useEffect, useState} from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import useGetSHNKQuery from "@/hooks/api/useGetSHNKQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import {get, head, isEmpty} from "lodash";
import Image from "next/image";
import {motion} from 'framer-motion';
import clsx from "clsx";
import Link from "next/link";
import {config} from "@/config";

const SHNQ = () => {
    const [systemId, setSystemId] = useState(null);
    const [groupId, setGroupId] = useState(null);
    const [docId, setDocId] = useState(null);
    const [toggleSubSystem, setToggleSubSystem] = useState(true)
    const [toggleGroup, setToggleGroup] = useState(true)
    const [showSystem, setShowSystem] = useState(false)
    const [showGroup, setShowGroup] = useState(false);




    const {data: subSystem, isLoading: isLoadingSystem} = useGetSHNKQuery({
        key: KEYS.subSystem,
        url: URLS.subSystem,
    })

    const {data: group, isLoading: isLoadingGroup,} = useGetSHNKQuery({
        key: [KEYS.group, systemId],
        url: URLS.group,
        params: {
            group_system: systemId
        },
        enabled: !!(systemId)
    })

    const {data: docs, isLoading: isLoadingDoc,} = useGetSHNKQuery({
        key: [KEYS.doc, systemId, groupId],
        url: URLS.doc,
        params: {
            shnk_group: groupId
        },
        enabled: !!(systemId && groupId)
    });

    useEffect(() => {
        if (!isEmpty(get(subSystem, 'data', []))) {
            setSystemId(get(head(get(subSystem, 'data', [])), 'id'))
        }
    }, [get(subSystem, 'data', [])])

    if (isLoadingSystem) {
        return <p>Loading...</p>
    }


    return (
        <Main>
            <Menu/>

            <section className={"grid grid-cols-12 container mx-auto mb-[50px]"}>
                <motion.div initial={{translateX: '-200px'}} animate={{translateX: '0px'}} transition={{duration: 0.3}} className={"col-span-12"}>
                    <Title>
                        Shaharsozlik normalari va qoidalari
                    </Title>
                </motion.div>

                <div className={'col-span-12 '}>
                    <motion.ul initial={{translateX: '-200px'}} animate={{translateX: '0px'}}>
                        {
                            get(subSystem, 'data', []).map((item, i) =>
                                <li  onClick={(e) => {
                                    e.stopPropagation();
                                    setSystemId(get(item, 'id'));
                                    setGroupId(null);
                                    setDocId(null);
                                    setShowSystem(!showSystem)
                                }} key={get(item, 'id')}
                                    className={clsx('mb-[20px] transition cursor-pointer text-2xl font-semibold ', {
                                        'text-[#1B41C6] font-medium hover:bg-transparent': get(item, 'id') === systemId,
                                        '!mb-0': get(subSystem, 'data', [])?.length === i + 1
                                    })}
                                >
                                    <div className={'flex justify-between items-center'}>
                                        <p onClick={(e) => {
                                            setToggleSubSystem(!toggleSubSystem)
                                        }}>{get(item, 'system_code')} {get(item, 'system_title')}</p>

                                    </div>
                                    {get(item, 'id') === systemId && ((isLoadingGroup) ?
                                            <h1>Yuklanmoqda...</h1> : (toggleSubSystem && !showSystem &&
                                                <motion.ul initial={{opacity: 0, translateY: "30px"}} animate={{opacity: 1, translateY: "0px"}} className={'py-3'}>
                                                    {get(group, 'data', []).map((groupItem, j) =>
                                                        <li
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setGroupId(get(groupItem, 'id'));
                                                                setDocId(null)
                                                                setShowGroup(!showGroup)
                                                            }
                                                            }
                                                            key={get(groupItem, 'id')}
                                                            className={clsx(' py-[10px]  text-[#1A4DC2] border-b  text-lg border-b-black transition cursor-pointer  hover:text-[#1B41C6] font-medium', {
                                                                '!text-[#017EFA]': get(groupItem, 'id') === groupId,
                                                                '!mb-[10px]': get(group, 'data.results', [])?.length === j + 1
                                                            })}>
                                                            <div className={'flex justify-between items-center'}>
                                                                <p onClick={(e) => {
                                                                    setToggleGroup(!toggleGroup)
                                                                }}><span
                                                                    className={'font-medium'}>{get(groupItem, 'group_code')}</span>. {get(groupItem, 'group_title')}
                                                                </p>
                                                                <motion.div animate={{
                                                                    rotate: get(item, 'id') === systemId ? 180 : 0,
                                                                }}>
                                                                    <Image src={'/icons/arrow-up.svg'} alt={'up-down'}
                                                                           width={24} height={24}/>
                                                                </motion.div>
                                                            </div>

                                                            {get(groupItem, 'id') === groupId && (isLoadingDoc ?
                                                                <h1>Yuklanmoqda...</h1> : (toggleGroup && !showGroup && (
                                                                    <motion.ul initial={{opacity: 0, translateY: '100px'}} animate={{opacity: 1, translateY: '0px'}} transition={{duration: 0.4}} className={'mt-[10px]'}>
                                                                        {
                                                                            get(docs, 'data', []).map(docItem =>
                                                                                <li key={get(docItem, 'id')}
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation();
                                                                                        setDocId(get(docItem, 'id'));
                                                                                    }}
                                                                                    className={'text-lg text-black mb-[10px] grid grid-cols-12 gap-x-[30px]'}
                                                                                >
                                                                                    <p className={'col-span-2'}>  {get(docItem, 'shnk_type')} {get(docItem, 'shnk_code')}</p>
                                                                                    <h4 className={'col-span-9'}>{get(docItem, 'shnk_title')}</h4>
                                                                                    <div
                                                                                        className={'flex  gap-x-[5px] items-center col-span-1 justify-end'}>
                                                                                        <button
                                                                                            className={'uppercase text-[#2E6DFF]'}>
                                                                                            <Link target={'_blank'}
                                                                                                  href={`${config.BASE_SHNK_URL}/${get(docItem, 'shnk_pdf_link')}`}>
                                                                                                <abbr
                                                                                                    title={'pdf file(uz)'}
                                                                                                    className={'no-underline'}>uzb</abbr>
                                                                                            </Link>
                                                                                        </button>
                                                                                        <p className={'text-[#2E6DFF]'}>/</p>
                                                                                        <button
                                                                                            className={'uppercase text-[#2E6DFF]'}>
                                                                                            <Link target={'_blank'}
                                                                                                  href={`${config.BASE_SHNK_URL}/${get(docItem, 'shnk_pdf_link')}`}>
                                                                                                <abbr
                                                                                                    title={'pdf file(ru)'}
                                                                                                    className={'no-underline'}>rus</abbr>
                                                                                            </Link>
                                                                                        </button>
                                                                                    </div>
                                                                                </li>
                                                                            )
                                                                        }
                                                                    </motion.ul>)))}
                                                        </li>
                                                    )}
                                                </motion.ul>)
                                    )}

                                </li>
                            )
                        }
                    </motion.ul>
                </div>
            </section>
        </Main>
    );
};

export default SHNQ;
