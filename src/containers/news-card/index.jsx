import React, { useEffect, useState } from "react";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { drop, get, isNil } from "lodash";
import NewsTitle from "@/components/news-title";
import NewsCard from "@/components/news-card";
import Pagination from "@/components/pagination";

const NewsCardTemplate = ({
  HeaderBody = null,
  columns = [],
  url,
  key,
  params = {},
  enabled = true,
  getCount = () => {},
  hasActionColumn = false,
  viewUrl = "#",
  defaultPageSize = 10,
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
        <ul className={"grid grid-cols-12 gap-x-[30px]"}>
          {drop(get(data, "data.results", []), 1).map((item) => (
            <li
              className={"col-span-4 w-[450px] mt-[50px]"}
              key={get(item, "id")}
            >
              <NewsCard
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
        className={"mb-[50px] mt-[50px]"}
      />
    </>
  );
};

export default NewsCardTemplate;
