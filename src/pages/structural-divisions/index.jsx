import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import Link from "next/link";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get, isNil } from "lodash";
import StructuralCard from "@/components/structural_card";
import { useSettingsStore } from "@/store";
import lang from "@/components/lang";
import { motion } from "framer-motion";

const Index = () => {
  const { data, isLoading, isFetching } = useGetTMSITIQuery({
    key: KEYS.structural,
    url: URLS.structural,
  });

  const language = useSettingsStore((state) => get(state, "lang", ""));

  console.log(language, "LANGUAGE");

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
          <Link href={"#"}>Tarkibiy bo’linmalar </Link>
        </div>
      </section>
      <section className={"container"}>
        <div className={"px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"}>
          <Title>Tarkibiy bo’linmalar</Title>
        </div>

        <div
          className={
            "grid grid-cols-12 gap-[30px] px-[20px] md:px-[15px] lg:px-[10px] xl:px-0 mb-[70px]"
          }
        >
          {get(data, "data", []).map((item) => (
            <motion.div
              key={get(item, "id")}
              className={"lg:col-span-6 col-span-12"}
            >
              <StructuralCard
                image={get(item, "image")}
                position={
                  language === "Uz"
                    ? get(item, "position_uz")
                    : language === "Ru"
                    ? get(item, "position_ru")
                    : get(item, "position_en")
                }
                full_name={
                  language === "Uz"
                    ? get(item, "full_name_uz")
                    : language === "Ru"
                    ? get(item, "full_name_ru")
                    : get(item, "full_name_en")
                }
                phone={get(item, "phone")}
                email={get(item, "email")}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </Main>
  );
};

export default Index;
