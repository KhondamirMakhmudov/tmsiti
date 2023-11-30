import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import Select from "@/components/select";
import CheckboxTemplate from "@/components/checkbox";
import { get } from "lodash";
import GridView from "src/containers/list-view";
import { getOptionList } from "@/utils";
import Link from "next/link";

const Dictionary = () => {
  const columns = [
    {
      title: "№",
      key: "id",
      render: ({ index }) => <span className={""}>{index}</span>,
    },

    {
      title: "RUS TILIDA",
      key: "dic_ru",
      render: (index) => <span className={""}>{index}</span>,
    },

    {
      title: "O‘ZBEK TILIDA",
      key: "dic_uz",
      render: (index) => <span className={""}>{index}</span>,
    },

    {
      title: "TURK TILIDA ",
      key: "dic_tur",
      render: (index) => <span className={""}>{index}</span>,
    },

    {
      title: "INGLIZ TILIDA",
      key: "dic_en",
      render: (index) => <span className={""}>{index}</span>,
    },
  ];

  return (
    <Main>
      <Menu />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[70px]"}>
        <div className={"container py-[12px]"}>
          <Link href={"/"}>Bosh sahifa / </Link>

          <Link href={"#"}>Tizimlar / </Link>
          <Link href={"#"}>Lug`at</Link>
        </div>
      </section>
      <section
        className={
          "grid grid-cols-12 gap-x-[30px] container mx-auto px-[20px] md:px-0"
        }
      >
        <div className={"col-span-12"}>
          <Title>Lug‘at</Title>
        </div>
      </section>

      <div
        className={
          "bg-[#28366D] bg-no-repeat bg-cover  pt-[30px] pb-[20px]  mb-[30px]"
        }
        style={{ backgroundImage: "url(/images/background-search-box.png)" }}
      >
        <div
          className={
            "grid grid-cols-12 gap-x-[30px] container mx-auto px-[20px] md:px-0"
          }
        >
          <form className={"col-span-12 md:flex  gap-x-[30px] "}>
            <Select sm placeholder={"Standart toifasini tanlang"} />
            <input
              type={"text"}
              placeholder={"Standart nomi"}
              className={
                "w-full text-sm py-[15px] max-h-[48px] px-[20px] mt-[15px] md:mt-0 placeholder-[#001A57] outline-0 rounded-[5px]"
              }
            />
          </form>
        </div>
      </div>

      <div className="grid grid-cols-12 container mx-auto">
        <div className="col-span-12 ">
          <GridView
            HeaderBody={<div className="flex mb-5"></div>}
            columns={columns}
          />
        </div>
      </div>
    </Main>
  );
};

export default Dictionary;
