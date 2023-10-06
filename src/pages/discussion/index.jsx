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



    return (
        <Main>
            <Menu active={5}/>


            <section className={'grid grid-cols-12 gap-x-[30px] container mx-auto'}>

                <div className={'col-span-12'}>
                    <ListView
                        HeaderBody={<Title>Muhokamalar</Title>}
                        url={URLS.discuss}
                        key={KEYS.discuss}
                        date={'shnk_datetime'}
                        title={'shnk_title'}
                        shnkNumber={'shnk_number'}
                        description={'shnk_description'}
                        defaultPageSize={3}

                    />
                </div>
            </section>
        </Main>
    );
};

export default Discussion;