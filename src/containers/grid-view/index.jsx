import React, {useEffect, useState} from 'react';
import GridHeader from "@/containers/grid-view/components/grid-header";
import GridBody from "@/containers/grid-view/components/grid-body";
import useGetQuery from "@/hooks/api/useGetQuery";

import Pagination from "@/components/pagination";
import {get, isNil} from "lodash";
import {useTranslation} from "react-i18next";
import EmptyData from "./components/empty-data";

const GridView = ({
                      HeaderBody = null,
                      columns = [],
                      url,
                      key,
                      params = {},
                      enabled = true,
                      getCount = () => {
                      },
                      hasActionColumn = false,
                      viewUrl = '#',
                      defaultPageSize = 48
                  }) => {
    const {t} = useTranslation()
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(defaultPageSize)
    const [sort, setSort] = useState(undefined)
    const {data, isLoading, isFetching} = useGetQuery({
        key: key,
        url: url,
        params: {
            page,
            ...params,
            sort_by: sort,
            page_size: pageSize
        },
        enabled
    });
    useEffect(() => {
        if (!isNil(get(data, 'data.count'))) {
            getCount(get(data, 'data.count', 0))
        }
    }, [data])

    return (
        <>
            {isFetching}
            <GridHeader>{HeaderBody}</GridHeader>
            {get(data, 'data.results', [])?.length > 0 ? <>
                    <GridBody hasActionColumn={hasActionColumn} handleSort={setSort} columns={columns}
                              rows={get(data, 'data.results', [])} pageSize={pageSize} page={page} setPage={setPage}/>
                    <Pagination page={page} setPage={setPage} pageCount={get(data, 'data.total_pages', 0)}/></> :
                <p className={'py-5'}>{hasActionColumn ?
                    <EmptyData viewUrl={viewUrl}/> : t("Ushbu sahifada ma'lumotlar hali mavjud emas...")}</p>}
        </>
    );
};

export default GridView;