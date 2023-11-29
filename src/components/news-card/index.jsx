import React from "react";
import { get } from "lodash";
import Link from "next/link";

const newsCard = ({ imgUrl, date, url, title, description }) => {
  return (
    <div>
      <div>
        <img
          src={imgUrl}
          alt="news-main-img"
          className={"w-[450px] h-[260px]   object-cover"}
        />

        <p className={"text-[#2E6DFF] mb-[20px] font-bold"}>{date}</p>
        <Link href={`${url}`}>
          <h2
            className={"text-xl font-bold hover:text-[#2E6DFF] hover:underline"}
          >
            {title}
          </h2>
        </Link>
        <p className={"text-[#A9AFC5] mt-[10px] "}>{description}</p>
      </div>
    </div>
  );
};

export default newsCard;
