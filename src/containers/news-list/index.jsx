import React, { useEffect, useState } from "react";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { get, isNil } from "lodash";
import NewsTitle from "@/components/news-title";
import NewsTemplate from "@/components/news-template";
import Pagination from "@/components/pagination";

const NewsList = ({
  HeaderBody = null,
  columns = [],
  url,
  key,
  params = {},
  enabled = true,
  getCount = () => {},
  hasActionColumn = false,
  viewUrl = "#",
  defaultPageSize = 5,
  imgUrl,
  dateTime,
  news_title,
  news_description,
}) => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const { data, isLoading, isFetching } = useGetTMSITIQuery({
    key: key,
    url: url,
    params: {
      page,
      ...params,
      page_size: pageSize,
    },
    enabled,
  });
  useEffect(() => {
    if (!isNil(get(data, "count"))) {
      getCount(get(data, "count", 0));
    }
  }, [data]);
  return (
    <>
      {isFetching}
      <NewsTitle>{HeaderBody}</NewsTitle>
      {get(data, "data.results", [])?.length > 0 ? (
        <ul>
          {get(data, "data.results", []).map((item) => (
            <li key={get(item, "id")}>
              <NewsTemplate
                title={get(item, `${news_title}`)}
                description={get(item, `${news_description}`)}
                url={`/news/${get(item, "id", "#")}`}
                imgUrl={get(item, `${imgUrl}`)}
                dateTime={get(item, `${dateTime}`)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className={"py-5"}>
          <span> Ushbu sahifada malumotlar hali mavjud emas...</span>
        </p>
      )}
      <Pagination
        page={page}
        setPage={setPage}
        pageCount={get(data, "data.total_pages", 10)}
        className={"mb-[50px]"}
      />
    </>
  );
};

export default NewsList;
