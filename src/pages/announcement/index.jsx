import React from 'react';
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import AnnounceTemplate from "@/components/announce-template";
import Pagination from "@/components/pagination";
import ListView from "@/containers/list-view";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import {get} from "lodash";

const Announcement = () => {
    const {data, isLoading} = useGetTMSITIQuery({
        key: KEYS.ads,
        url: URLS.ads,
    })
    if (isLoading) {
        return '...Loading'
    }
    return (
        <Main>
            <Menu/>
            <div className={'grid grid-cols-12 container mx-auto'}>
                {/*<div className={'col-span-12'}>*/}
                {/*    <ListView*/}
                {/*        HeaderBody={<Title>Barcha e`lonlar</Title>}*/}
                {/*        key={KEYS.ads}*/}
                {/*        url={URLS.ads}*/}
                {/*        date={'ads_datetime'}*/}
                {/*        title={'ads_title'}*/}
                {/*        description={'ads_text'}*/}
                {/*        defaultPageSize={0}*/}
                {/*    />*/}
                {/*</div>*/}

                <ul className={'col-span-12'}>
                    {
                        get(data, 'data.results', []).map(item =>
                        <li key={get(data, 'id')}>
                            <AnnounceTemplate
                                date={get(item, 'ads_datetime')}
                                title={get(item, 'ads_title')}
                                description={get(item, 'ads_text')}
                            />
                        </li>
                    )}

                </ul>
            </div>

        </Main>
    );
};

export default Announcement;