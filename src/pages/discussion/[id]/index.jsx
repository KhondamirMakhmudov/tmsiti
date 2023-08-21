import React from 'react';
import {useRouter} from "next/router";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import {KEYS} from "@/constants/key";
import {URLS} from "@/constants/url";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import {get} from "lodash";

const DiscussItemPage = () => {
    const router = useRouter();
    const {id} = router.query;
    const {data, isLoading} = useGetTMSITIQuery({
        key: [KEYS.discuss, id],
        url: `${URLS.discuss}/${id}`,
        enabled: !!(id)
    })

    if (isLoading) {
        return "Loading...";
    }

    return (
        <Main>
            <Menu active={0}/>
            <div className={'grid grid-cols-12 container mx-auto'}>
                <div className={'col-span-12'}>
                    <h2 className={'text-3xl'}>Not information yet</h2>
                </div>
            </div>
        </Main>
    );
};

export default DiscussItemPage;