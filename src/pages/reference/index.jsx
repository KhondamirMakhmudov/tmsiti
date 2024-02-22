import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "@/components/title";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { drop, get, head } from "lodash";
import parse from "html-react-parser";
import { useSettingsStore } from "@/store";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  const { data, isLoading, isFetching } = useGetTMSITIQuery({
    key: KEYS.buildingRegulations,
    url: URLS.buildingRegulations,
  });

  const language = useSettingsStore((state) => get(state, "lang", ""));
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
          <Link href={"#"}>{t("reference")}</Link>
        </div>
      </section>

      <section
        className={
          "grid grid-cols-12 container h-screen mx-auto mb-[50px] px-[20px] md:px-0"
        }
      >
        {head(
          drop(get(data, "data", []), 1).map((item) => (
            <div
              key={get(item, "id")}
              className={
                "col-span-12 px-[20px] md:px-[15px] lg:px-[10px] xl:px-0"
              }
            >
              <motion.div
                initial={{ translateX: "-200px" }}
                animate={{ translateX: "0px" }}
                transition={{ duration: 0.3 }}
              >
                <Title>
                  {language === "uz"
                    ? get(item, "title_ru")
                    : language === "ru"
                    ? get(item, "title_uz")
                    : language === "en"
                    ? get(item, "title_en")
                    : get(item, "title_ru")}
                </Title>
              </motion.div>

              <div>
                {language === "uz"
                  ? parse(get(item, "text_uz"))
                  : language === "ru"
                  ? parse(get(item, "text_ru"))
                  : language === "en"
                  ? parse(get(item, "text_en"))
                  : parse(get(item, "text_uz"))}
              </div>
            </div>
          )),
        )}
      </section>
    </Main>
  );
};

export default Index;
