import React, { useEffect, useState } from "react";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import _, { drop, get, head, isNil } from "lodash";
import NewsTitle from "@/components/news-title";
import NewsCard from "@/components/news-card";
import Pagination from "@/components/pagination";
import dayjs from "dayjs";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

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
  const [currentPage, setCurrentPage] = useState(0);
  const [dataHead, setDataHead] = useState([]); // Assuming your paginated data is stored here
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const searchParams = useSearchParams();
  const router = useRouter();

  const { data, isLoading, isFetching } = useGetTMSITIQuery({
    key: key,
    url: url,
    params: {
      page: searchParams.get("page"),
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

  // Assuming your data is an array of pages, and each page has an array of items
  const itemsPerPage = 10; // Assuming 10 items per page

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };
  const currentItems = _.head(
    dataHead.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage,
    ),
  );

  console.log("searchParams", searchParams);

  return (
    <>
      {isFetching}
      <NewsTitle>{HeaderBody}</NewsTitle>

      {currentItems &&
        currentItems.map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <div className={"col-span-12"}>
            <div className={"grid grid-cols-12 gap-x-[30px]"}>
              <div className={"col-span-4 w-[450px]"}>
                <img
                  src={get(item, "news_image")}
                  alt="news-main-img"
                  className={"w-[450px] h-[260px]   object-cover"}
                />
              </div>
              <div className={"col-span-8"}>
                <p className={"text-[#2E6DFF]  font-bold"}>
                  {dayjs(get(item, "news_datetime")).format("DD.MM.YYYY")}
                </p>
                <Link href={`/news/${get(item, "id")}`}>
                  <h2
                    className={
                      "lg:text-xl md:text-lg text-xl font-bold text-[#001A57] hover:text-[#2E6DFF] hover:underline mt-[20px]  md:line-clamp-none line-clamp-2"
                    }
                  >
                    {get(item, "news_title")}
                  </h2>
                </Link>
                <p
                  className={
                    "text-[#A9AFC5] mt-[10px] md:text-base text-sm line-clamp-3 md:line-clamp-6"
                  }
                >
                  {get(item, "news_desc")}
                </p>
                <Link
                  className={
                    "px-[55px] py-[13px] inline-block border-[2px] border-[#1A4DC2] bg-transparent hover:bg-[#1A4DC2] hover:text-[#fff] transition-all mt-[20px] rounded-[5px] font-bold text-[#1A4DC2]"
                  }
                  href={`/news/${get(item, "id")}`}
                >
                  Batafsil
                </Link>
              </div>
            </div>
          </div>
        ))}

      {head(
        get(data, "data.results", []).map((item) => (
          <div className={"col-span-12"} key={get(item, "id")}>
            <div className={"grid grid-cols-12 gap-x-[30px]"}>
              <div className={"col-span-4 w-[450px]"}>
                <img
                  src={get(item, "news_image")}
                  alt="news-main-img"
                  className={"w-[450px] h-[260px]   object-cover"}
                />
              </div>
              <div className={"col-span-8"}>
                <p className={"text-[#2E6DFF]  font-bold"}>
                  {dayjs(get(item, "news_datetime")).format("DD.MM.YYYY")}
                </p>
                <Link href={`/news/${get(item, "id")}`}>
                  <h2
                    className={
                      "lg:text-xl md:text-lg text-xl font-bold text-[#001A57] hover:text-[#2E6DFF] hover:underline mt-[20px]  md:line-clamp-none line-clamp-2"
                    }
                  >
                    {get(item, "news_title")}
                  </h2>
                </Link>
                <p
                  className={
                    "text-[#A9AFC5] mt-[10px] md:text-base text-sm line-clamp-3 md:line-clamp-6"
                  }
                >
                  {get(item, "news_desc")}
                </p>
                <Link
                  className={
                    "px-[55px] py-[13px] inline-block border-[2px] border-[#1A4DC2] bg-transparent hover:bg-[#1A4DC2] hover:text-[#fff] transition-all mt-[20px] rounded-[5px] font-bold text-[#1A4DC2]"
                  }
                  href={`/news/${get(item, "id")}`}
                >
                  Batafsil
                </Link>
              </div>
            </div>
          </div>
        )),
      )}

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
        dataHead={dataHead}
        itemsPerPage={itemsPerPage}
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        page={searchParams.get("page") || 1}
        setPage={(val) => {
          router.replace(`/news?page=${val}`);
        }}
        pageCount={get(data, "data.total_pages", 10)}
        className={"mb-[50px] mt-[50px]"}
      />
    </>
  );
};

export default NewsCardTemplate;
