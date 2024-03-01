import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Main>
      <Menu />
      <div className={"grid grid-cols-12 container"}>
        <div className={"col-span-12 flex items-center justify-center"}>
          <img
            src={`https://ad.tmsiti.uz/api/v1/appeal/generate-certificate/${id}/`}
            alt={"img"}
            className={"w-[700px]"}
          />
        </div>
      </div>
    </Main>
  );
};

export default Index;
