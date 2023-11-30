import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import AnnounceTemplate from "@/components/announce-template";
import Pagination from "@/components/pagination";
import ListView from "@/containers/list-view";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { get } from "lodash";
import Link from "next/link";

const Announcement = () => {
  const { data, isLoading } = useGetTMSITIQuery({
    key: KEYS.ads,
    url: URLS.ads,
  });
  if (isLoading) {
    return "...Loading";
  }
  return (
    <Main>
      <Menu />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[70px]"}>
        <div className={"container py-[12px]"}>
          <Link href={"/"}>Bosh sahifa / </Link>
          <Link href={"#"}>Xabarlar / </Link>
          <Link href={"#"}>E`lonlar </Link>
        </div>
      </section>

      <div className={"grid grid-cols-12 container mx-auto  px-[20px] md:px-0"}>
        {/*<div className={'col-span-12'}>*/}
        {/*    <ListView*/}
        {/*        HeaderBody={<Title>Barcha e`lonlar</Title>}*/}
        {/*        key={KEYS.ads}*/}
        {/*        url={URLS.ads}*/}
        {/*        date={'ads_datetime'}*/}
        {/*        title={'ads_title'}*/}
        {/*        description={'ads_text'}*/}
        {/*        defaultPageSize={0}*/}
        {/*    />*/}
        {/*</div>*/}
        <div className={"col-span-12"}>
          <Title>Barcha e’lonlar</Title>
        </div>

        <ul className={"col-span-12"}>
          {get(data, "data.results", []).map((item) => (
            <li key={get(data, "id")}>
              <AnnounceTemplate
                date={get(item, "ads_datetime")}
                title={get(item, "ads_title")}
                description={get(item, "ads_text")}
                url={"#"}
              />
            </li>
          ))}
        </ul>
      </div>
    </Main>
  );
};

export default Announcement;
