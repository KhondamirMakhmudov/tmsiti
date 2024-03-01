import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Image from "next/image";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";

const Index = () => {
  const { data, isLoading, isFetching } = useGetTMSITIQuery({
    key: KEYS.standards,
    url: URLS.standards,
  });
  return (
    <Main>
      <Menu />
      <div className={"grid grid-cols-12 container"}>
        <div className={"col-span-12 items-center flex justify-center"}>
          <img
            src={"https://ad.tmsiti.uz/api/v1/appeal/generate-certificate/111/"}
            alt={"img"}
            className={"w-[700px]"}
          />
        </div>
      </div>
    </Main>
  );
};

export default Index;
