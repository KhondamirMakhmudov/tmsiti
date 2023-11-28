import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
const Hierarchy = () => {
  return (
    <Main>
      <Menu active={0} />
      <div className={"grid grid-cols-12 container mx-auto px-[20px]"}>
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
