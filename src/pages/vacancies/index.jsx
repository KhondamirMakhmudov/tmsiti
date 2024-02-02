import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Link from "next/link";
import Title from "@/components/title";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  return (
    <Main>
      <Menu />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[50px]"}>
        <div className={"container py-[12px]"}>
          <Link href={"/"}>{t("homepage")} / </Link>
          <Link href={"#"}>{t("institut")} / </Link>
          <Link href={"#"}>{t("vacancies")} </Link>
        </div>
      </section>

      <section className={"container"}>
        <div>
          <Title>{t("vacancies")}</Title>
        </div>
      </section>
    </Main>
  );
};

export default Index;
