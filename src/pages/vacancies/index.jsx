import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Link from "next/link";
import Title from "@/components/title";

const Index = () => {
  return (
    <Main>
      <Menu />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[50px]"}>
        <div className={"container py-[12px]"}>
          <Link href={"/"}>Bosh sahifa / </Link>
          <Link href={"#"}>Institut / </Link>
          <Link href={"#"}>Vakansiyalar </Link>
        </div>
      </section>

      <section className={"container"}>
        <div>
          <Title>Bo&apos;sh ish o&apos;rinlari</Title>
        </div>
      </section>
    </Main>
  );
};

export default Index;
