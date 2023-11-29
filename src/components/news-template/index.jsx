import React from "react";
import dayjs from "dayjs";
import Link from "next/link";

const NewsTemplate = ({ imgUrl, dateTime, title, description, url }) => {
  const date = dayjs(dateTime).format("DD.MM.YYYY");

  return (
    <>
      <div className={"hidden md:block"}>
        <div className={"grid grid-cols-12 gap-x-[30px]"}>
          <div className={"col-span-3"}>
            <img
              src={`${imgUrl}`}
              alt={"news-img"}
              className={"w-full h-[189px] object-cover "}
            />
          </div>
          <div className={"col-span-9"}>
            <p className={"text-[#2E6DFF] mb-[20px] font-bold"}>{date}</p>
            <Link href={`${url}`}>
              <h2
                className={
                  "text-xl font-bold hover:text-[#2E6DFF] hover:underline"
                }
              >
                {title}
              </h2>
            </Link>
            <p className={"text-[#A9AFC5] mt-[10px] "}>{description}</p>
          </div>
        </div>

        <div className={"w-full h-[1px] bg-[#001A57] my-[30px]"}></div>
      </div>

      <div className={"visible md:hidden"}>
        <div className={"flex flex-col gap-x-[30px]"}>
          <div className={"flex flex-col gap-x-[20px] justify-between"}>
            <div className={""}>
              <img
                src={`${imgUrl}`}
                alt={"news-img"}
                className={"w-full h-[189px] object-cover "}
              />
            </div>

            <div className={"mt-[20px]"}>
              <p
                className={
                  "text-[#2E6DFF] mb-[20px] font-bold md:text-base text-xs"
                }
              >
                {date}
              </p>
              <Link href={`${url}`}>
                <h2
                  className={
                    "text-[18px] md:text-xl line-clamp-5 font-bold hover:text-[#2E6DFF] hover:underline"
                  }
                >
                  {title}
                </h2>
              </Link>
            </div>
          </div>
          <div className={""}>
            <p
              className={
                "text-[#A9AFC5] mt-[10px] line-clamp-3 text-sm md:text-base"
              }
            >
              {description}
            </p>
          </div>
        </div>

        <div className={"w-full h-[1px] bg-[#001A57] my-[30px]"}></div>
      </div>
    </>
  );
};

export default NewsTemplate;
