import React from "react";
import { get } from "lodash";
import Link from "next/link";
import dayjs from "dayjs";

const newsCard = ({ imgUrl, dateTime, url, title, description }) => {
  const date = dayjs(dateTime).format("DD.MM.YYYY");
  return (
    <div>
      <div>
        <img
          src={imgUrl}
          alt="news-main-img"
          className={"w-[450px] h-[260px]   object-cover"}
        />

        <p className={"text-[#2E6DFF] mb-[10px] mt-[20px] font-bold"}>{date}</p>
        <Link href={`${url}`}>
          <h2
            className={
              "text-xl font-bold hover:text-[#2E6DFF] hover:underline line-clamp-3"
            }
          >
            {title}
          </h2>
        </Link>
        <p className={"text-[#A9AFC5] mt-[10px] line-clamp-4"}>{description}</p>
      </div>
    </div>
  );
};

export default newsCard;
