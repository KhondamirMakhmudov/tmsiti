import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import Link from "next/link";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import Card from "@/components/card";
import { get, isNil } from "lodash";
import StructuralCard from "@/components/structural_card";

const Index = () => {
  const { data, isLoading, isFetching } = useGetTMSITIQuery({
    key: KEYS.structural,
    url: URLS.structural,
  });

  if (isLoading && isFetching) {
    return <p>please wait... Loading!</p>;
  }

  console.log(data, "structural");
  return (
    <Main>
      <Menu />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[50px]"}>
        <div
          className={
            "container py-[12px] px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"
          }
        >
          <Link href={"/"}>Bosh sahifa / </Link>
          <Link href={"#"}>Institut / </Link>
          <Link href={"#"}>Tarkiribiy bo’linmalar </Link>
        </div>
      </section>
      <section className={"container"}>
        <div className={"px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"}>
          <Title>Tarkiribiy bo’linmalar</Title>
        </div>

        <div
          className={
            "grid grid-cols-12 gap-[30px] px-[20px] md:px-[15px] lg:px-[10px] xl:px-0 mb-[70px]"
          }
        >
          {get(data, "data", []).map((item) => (
            <div key={get(item, "id")} className={"lg:col-span-6 col-span-12"}>
              <StructuralCard
                image={get(item, "image")}
                position={get(item, "position_uz")}
                full_name={get(item, "full_name_uz")}
                phone={get(item, "phone")}
                email={get(item, "email")}
              />
            </div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Index;
