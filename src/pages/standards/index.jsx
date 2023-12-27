import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import RSelect, { components } from "react-select";
import Select from "@/components/select";
import Checkbox from "@/components/checkbox";
import CheckboxTemplate from "@/components/checkbox";
import Template from "@/components/template";
import Pagination from "@/components/pagination";
import NewsTitle from "@/components/news-title";
import Link from "next/link";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get } from "lodash";
import parse from "html-react-parser";

const Standards = () => {
  const { data, isLoading } = useGetTMSITIQuery({
    key: KEYS.standards,
    url: URLS.standards,
  });

  const obj = get(data, "data");
  console.log(obj, "hello");

  // console.log(obj["news_text"]);

  return (
    <Main>
      <Menu />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[70px]"}>
        <div className={"container py-[12px]"}>
          <Link href={"/"}>Bosh sahifa / </Link>
          <Link href={"#"}>Standartlar</Link>
        </div>
      </section>
      <section className={"grid grid-cols-12 gap-x-[30px] container mx-auto"}>
        <div className={"col-span-12 px-[20px] md:px-0"}>
          <Title textFormatter={"uppercase"}>Standartlar</Title>
        </div>
        {/*<h2>{get(data, "data")["news_title"]} </h2>*/}

        <div
          className={
            "col-span-12 text-center flex flex-col justify-center items-center mb-[70px]"
          }
        >
          <div className={"mb-[20px]"}>
            <NewsTitle>{get(obj, "news_title")}</NewsTitle>
          </div>
          {parse(get(obj, "news_text") || " ")}
        </div>
      </section>
    </Main>
  );
};

export default Standards;
