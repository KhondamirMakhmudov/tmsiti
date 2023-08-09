import React from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import AnnounceTemplate from "@/components/announce-template";
import Pagination from "@/components/pagination";
import useGetQuery from "@/hooks/api/useGetQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import {get} from "lodash";

const Discussion = () => {
    const { data: doc, isLoading } = useGetQuery({
        key: KEYS.doc,
        url: URLS.doc
    })

    if (isLoading) {
        return <h1>Loading</h1>
    }
    return (
        <Main>
            <Menu active={0}/>


            <section className={'grid grid-cols-12 gap-x-[30px] container mx-auto'}>
                <div className={'col-span-12'}>
                    <Title>
                        Muhokamalar
                    </Title>
                </div>


                <ul className={'col-span-12'}>
                        {
                            get(doc, 'data', []).map(item =>
                                <li key={get(item, 'id')}>
                                    <AnnounceTemplate
                                        date={get(item, 'shnk_started_date')}
                                        title={get(item, 'shnk_title')}
                                        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}
                                    />
                                </li>
                            )
                        }
                </ul>

                {/*<div className={'col-span-12'}>*/}
                {/*    <AnnounceTemplate*/}
                {/*        date={'19.07.2023'}*/}
                {/*        title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}*/}
                {/*        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}*/}
                {/*    />*/}

                {/*    <AnnounceTemplate*/}
                {/*        date={'19.07.2023'}*/}
                {/*        title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}*/}
                {/*        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}*/}
                {/*    />*/}

                {/*    <AnnounceTemplate*/}
                {/*        date={'19.07.2023'}*/}
                {/*        title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}*/}
                {/*        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}*/}
                {/*    />*/}

                {/*    <AnnounceTemplate*/}
                {/*        date={'19.07.2023'}*/}
                {/*        title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}*/}
                {/*        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}*/}
                {/*    />*/}

                {/*    <AnnounceTemplate*/}
                {/*        date={'19.07.2023'}*/}
                {/*        title={'Lorem ipsum dolor sit amet consectetur. Sed sem odio morbi lacus eu. Leo interdum egestas et maecenas ac neque a duis quis.'}*/}
                {/*        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}*/}
                {/*    />*/}

                {/*    <Pagination className={'mb-[169px]'}/>*/}
                {/*</div>*/}
            </section>
        </Main>
    );
};

export default Discussion;