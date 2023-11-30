import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import Link from "next/link";
const Hierarchy = () => {
  return (
    <Main>
      <Menu active={0} />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[70px]"}>
        <div className={"container py-[12px]"}>
          <Link href={"/"}>Bosh sahifa / </Link>
          <Link href={"#"}>Institut / </Link>
          <Link href={"#"}>Tuzilma </Link>
        </div>
      </section>
      <div className={"grid grid-cols-12 container mx-auto px-[20px] md:px-0"}>
        <div className={"col-span-12 mb-[50px]"}>
          <Title>Tashkiliy tuzilma</Title>
        </div>

        <div className={"col-span-12 mb-[100px]"}>
          <img
            src={"images/hierarchy.png"}
            className={"w-full h-full"}
            alt={"hierchachy"}
          />
        </div>
      </div>
    </Main>
  );
};

export default Hierarchy;
