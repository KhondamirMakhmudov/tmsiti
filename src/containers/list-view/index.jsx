import React, {useEffect, useState} from 'react';
import GridHeader from "@/containers/list-view/components/list-header";
import GridBody from "@/containers/list-view/components/grid-body";
import useGetSHNKQuery from "@/hooks/api/useGetSHNKQuery";

import Pagination from "@/components/pagination";
import {get, isNil} from "lodash";
import {useTranslation} from "react-i18next";
import EmptyData from "./components/empty-data";
import ListHeader from "@/containers/list-view/components/list-header";
import ListBody from "@/containers/list-view/components/list-body";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";

const  ListView = ({
                      HeaderBody = null,
                      columns = [],
                      url,
                      key,
                      date,
                      title,
                      description,
                      shnkNumber,

                      params = {},
                      enabled = true,
                      getCount = () => {
                      },
                      hasActionColumn = false,
                      viewUrl = '#',
                      defaultPageSize = 3
                  }) => {

    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(defaultPageSize)
    const {data, isLoading, isFetching} = useGetTMSITIQuery({
        key: key,
        url: url,
        params: {
            page,
            ...params,
            page_size: pageSize
        },
        enabled
    });
    useEffect(() => {
        if (!isNil(get(data, 'count'))) {
            getCount(get(data, 'count', 0))
        }
    }, [data])

    return (
        <>
            {isFetching}
            <ListHeader>{HeaderBody}</ListHeader>
            <ul>
                {get(data, 'data.results', []).map(item =>
                    <li key={get(item, 'id')}>
                        {get(data, 'data.results', [])?.length > 0 ? <>

                                <ListBody
                                    dateTime={get(item, `${date}`)}
                                    title={get(item, `${title}`)}
                                    description={get(item, `${description}`)}
                                    shnkNumber={get(item, `${shnkNumber}`)}
                                    url={`/discussion/${get(item, 'id', '#')}`}
                                    columns={columns}
                                    pageSize={pageSize}
                                    page={page}
                                    setPage={setPage}
                                /></> :
                            <p className={'py-5'}><span> Ushbu sahifada malumotlar hali mavjud emas...</span></p>}
                    </li>
                )}
            </ul>
            <Pagination
                page={page}
                setPage={setPage}
                pageCount={get(data, 'data.total_pages', 10)}
                className={'mb-[50px]'}
            />
        </>
    );
};

export default ListView;