import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Link from "next/link";

import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";

import parse from "html-react-parser";
import { useSettingsStore } from "@/store";
import { useTranslation } from "react-i18next";
import { get } from "lodash";
import useGetSHNKQuery from "@/hooks/api/useGetSHNKQuery";

const Index = () => {
  const { t } = useTranslation();
  const { data, isLoading, isFetching } = useGetSHNKQuery({
    key: KEYS.reference,
    url: URLS.reference,
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
          "grid grid-cols-12 container mx-auto mb-[50px] px-[20px] md:px-0"
        }
      >
        <h1 className="col-span-12 text-3xl mb-4 font-semibold">
          {t("reference")}
        </h1>
        <table className="col-span-12 mt-2 border-collapse border border-gray-300 w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-center">
                №
              </th>
              {/* <th className="border border-gray-300 px-4 py-2 ">
                Белгиланиши{" "}
              </th> */}
              <th className="border border-gray-300 px-4 py-2 ">Номи </th>
              <th className="border border-gray-300 px-4 py-2 ">Ҳужжат</th>
            </tr>
          </thead>
          <tbody>
            {get(data, "data", []).map((doc, docIndex) => (
              <tr key={docIndex} className="border border-gray-300">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {docIndex + 1}
                </td>
                {/* <td className="border border-gray-300 px-4 py-2 ">
                  {doc.designation}
                </td> */}
                <td className="border border-gray-300 px-4 py-2 ">
                  {doc.name}
                </td>

                <td className="border border-gray-300 px-4 py-2  ">
                  <a
                    href={`https://main.tmsiti.uz/media/${doc.pdf_uz}` || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    Кўриш
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Main>
  );
};

export default Index;
