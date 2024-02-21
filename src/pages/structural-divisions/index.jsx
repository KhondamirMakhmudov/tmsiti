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
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
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
          <Link href={"/"}>{t("homepage")} / </Link>
          <Link href={"#"}>{t("institut")} / </Link>
          <Link href={"#"}>{t("structure")}</Link>
        </div>
      </section>
      <section className={"container"}>
        <motion.div
          initial={{ opacity: 0, translateX: "100px" }}
          animate={{ opacity: 1, translateX: "0px" }}
          transition={{ duration: 0.5 }}
          className={"px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"}
        >
          <Title>{t("structure")}</Title>
        </motion.div>

        <div
          className={
            "grid grid-cols-12 gap-[30px] px-[20px] md:px-[15px] lg:px-[10px] xl:px-0 mb-[70px]"
          }
        >
          {get(data, "data", []).map((item) => (
            <motion.div
              initial={{ opacity: 0, translateY: "100px" }}
              animate={{ opacity: 1, translateY: "0px" }}
              transition={{ duration: 0.7 }}
              key={get(item, "id")}
              className={"lg:col-span-6 col-span-12"}
            >
              <StructuralCard
                image={get(item, "image")}
                position={
                  language === "uz"
                    ? get(item, "position_uz")
                    : language === "ru"
                    ? get(item, "position_ru")
                    : language === "en"
                    ? get(item, "position_en")
                    : get(item, "position_uz")
                }
                full_name={
                  language === "uz"
                    ? get(item, "full_name_uz")
                    : language === "ru"
                    ? get(item, "full_name_ru")
                    : language === "en"
                    ? get(item, "full_name_en")
                    : get(item, "full_name_uz")
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
