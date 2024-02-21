import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const Hierarchy = () => {
  const { t } = useTranslation();
  return (
    <Main>
      <Menu active={0} />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[70px]"}>
        <div className={"container py-[12px]"}>
          <Link href={"/"}>{t("homepage")} / </Link>
          <Link href={"#"}>{t("institut")} / </Link>
          <Link href={"#"}>{t("structure")} </Link>
        </div>
      </section>
      <div className={"grid grid-cols-12 container mx-auto px-[20px] md:px-0"}>
        <div className={"col-span-12 mb-[50px]"}>
          <Title>{t("structure")} </Title>
        </div>

        <div className={"col-span-12 mb-[100px]"}>
          <img
            src={"icons/structure.svg"}
            className={"w-full h-full"}
            alt={"hierchachy"}
          />
        </div>
      </div>
    </Main>
  );
};

export default Hierarchy;
