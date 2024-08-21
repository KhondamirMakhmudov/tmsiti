import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "@/components/title";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { get, indexOf, nth } from "lodash";
import parse from "html-react-parser";
import { useSettingsStore } from "@/store";
import { useTranslation } from "react-i18next";
import ContentLoader from "@/components/loader/content-loader";

const Index = () => {
  const { t } = useTranslation();
  const language = useSettingsStore((state) => get(state, "lang", ""));
  const { data, isLoading, isFetching } = useGetTMSITIQuery({
    key: KEYS.buildingRegulations,
    url: URLS.buildingRegulations,
  });

  if (isLoading || isFetching) {
    return (
      <Main>
        <ContentLoader />
      </Main>
    );
  }

  console.log(indexOf(get(data, "data", []), 5));

  return (
    <Main>
      <Menu />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[70px]"}>
        <div
          className={
            "container py-[12px] px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"
          }
        >
          <Link href={"/"}>{t("homepage")} / </Link>
          <Link href={"#"}>{t("documents")} / </Link>
          <Link href={"#"}>{t("technical_regulations")}</Link>
        </div>
      </section>

      <section
        className={
          "grid grid-cols-12 container mx-auto mb-[50px] px-[20px] md:px-0"
        }
      >
        <div
          className={"col-span-12 px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"}
        >
          <motion.div
            initial={{ translateX: "-200px" }}
            animate={{ translateX: "0px" }}
            transition={{ duration: 0.3 }}
          >
            <Title>
              {language === "uz"
                ? get(nth(get(data, "data", []), 4), "title_uz")
                : language === "ru"
                ? get(nth(get(data, "data", []), 4), "title_ru")
                : language === "en"
                ? get(nth(get(data, "data", []), 4), "title_en")
                : get(nth(get(data, "data", []), 4), "title_uz")}
            </Title>
          </motion.div>

          <div
            className={
              "col-span-10  shadow-xl border-[1px] p-10 rounded-[8px] mb-[10px]"
            }
          >
            {language === "uz"
              ? parse(get(nth(get(data, "data", []), 4), "text_uz", ""))
              : language === "ru"
              ? parse(get(nth(get(data, "data", []), 4), "text_ru", ""))
              : language === "en"
              ? parse(get(nth(get(data, "data", []), 4), "text_en", ""))
              : parse(get(nth(get(data, "data", []), 4), "text_uz", ""))}
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
