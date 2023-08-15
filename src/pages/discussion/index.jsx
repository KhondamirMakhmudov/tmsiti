import React from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import AnnounceTemplate from "@/components/announce-template";
import Pagination from "@/components/pagination";
import useGetSHNKQuery from "@/hooks/api/useGetSHNKQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import {get} from "lodash";
import GridView from "src/containers/list-view";
import ListView from "src/containers/list-view";
import GridBody from "@/containers/list-view/components/grid-body";

const Discussion = () => {
    const { data: doc, isLoading } = useGetSHNKQuery({
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



                {/*<ul className={'col-span-12'}>*/}
                {/*        {*/}
                {/*            get(doc, 'data', []).map(item =>*/}
                {/*                <li key={get(item, 'id')}>*/}
                {/*                    <AnnounceTemplate*/}
                {/*                        url={'#'}*/}
                {/*                        date={get(item, 'shnk_started_date')}*/}
                {/*                        title={get(item, 'shnk_title')}*/}
                {/*                        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}*/}
                {/*                    />*/}
                {/*                </li>*/}
                {/*            )*/}
                {/*        }*/}
                {/*</ul>*/}

                <div className={'col-span-12'}>
                    <ListView
                        HeaderBody={<Title>Muhokamalar</Title>}
                        url={URLS.doc}
                        key={KEYS.doc}
                        date={'shnk_started_date'}
                        title={'shnk_title'}
                        description={'Lorem ipsum dolor sit amet consectetur. Fringilla massa pellentesque nec sit tincidunt donec natoque. Neque scelerisque integer euismod condimentum a sed faucibus magna consequat. Elementum at velit viverra nec et. Eu id eu dolor posuere.'}
                    />
                </div>
            </section>
        </Main>
    );
};

export default Discussion;