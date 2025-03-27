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
import { useState, useEffect } from "react";
import Image from "next/image";

const Index = () => {
  const { t } = useTranslation();
  const [dataShnq, setDataShnq] = useState(null);
  const language = useSettingsStore((state) => get(state, "lang", ""));
  const [openGroup, setOpenGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openItems, setOpenItems] = useState({}); // itemlarni ochish/berkitish uchun
  const [openGroups, setOpenGroups] = useState({}); // groups uchun state

  // const toggleGroup = (index) => {
  //   setOpenGroup(openGroup === index ? null : index);
  // };
  const { data, isLoading, isFetching } = useGetTMSITIQuery({
    key: KEYS.buildingRegulations,
    url: URLS.buildingRegulations,
  });

  useEffect(() => {
    fetch("https://shnk.tmsiti.uz/subsystems/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ma'lumotlarni yuklab bo‘lmadi");
        }
        return response.json();
      })
      .then((result) => {
        setDataShnq(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Main>
        <ContentLoader />
      </Main>
    );
  if (error) return <p>Xatolik: {error}</p>;

  if (isLoading || isFetching) {
    return (
      <Main>
        <ContentLoader />
      </Main>
    );
  }

  const toggleItem = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleGroup = (itemIndex, groupIndex) => {
    setOpenGroups((prev) => ({
      ...prev,
      [`${itemIndex}-${groupIndex}`]: !prev[`${itemIndex}-${groupIndex}`],
    }));
  };

  console.log(dataShnq);

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
          <Link href={"#"}>{t("SHNQ")}</Link>
        </div>
      </section>

      <section
        className={
          "grid grid-cols-12 container mx-auto mb-[50px] px-[20px] md:px-0 "
        }
      >
        {dataShnq.map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="border rounded-md p-4 col-span-12 mb-2"
          >
            {/* Title */}
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleItem(itemIndex)}
            >
              <h3 className="font-bold cursor-pointer text-lg">{item.title}</h3>

              <Image
                src={"/icons/arrow-up.svg"}
                alt={"up-down"}
                width={24}
                height={24}
                className={`md:w-[24px] md:h-[24px] w-[19px] h-[19px] transform duration-300 ${
                  openItems[itemIndex] ? " rotate-180" : ""
                }`}
              />
            </div>

            {/* Groups (agar ochilgan bo‘lsa ko‘rsatiladi) */}
            {!openItems[itemIndex] && item.groups && (
              <div className="ml-4 mt-2">
                {item.groups.map((group, groupIndex) => (
                  <div key={groupIndex} className=" p-2 mb-2 space-y-2">
                    {/* Group title */}
                    <div
                      className="flex justify-between cursor-pointer"
                      onClick={() => toggleGroup(itemIndex, groupIndex)}
                    >
                      <h4 className="font-semibold cursor-pointer">
                        {group.title}{" "}
                      </h4>
                      <Image
                        src={"/icons/arrow-up.svg"}
                        alt={"up-down"}
                        width={24}
                        height={24}
                        className={`md:w-[24px] md:h-[24px] w-[19px] h-[19px] transform duration-300 ${
                          openGroups[`${itemIndex}-${groupIndex}`]
                            ? " rotate-180"
                            : ""
                        }`}
                      />
                    </div>
                    <div className="w-full h-[1px] bg-gray-200"></div>

                    {/* Documents (agar ochilgan bo‘lsa ko‘rsatiladi) */}
                    {!openGroups[`${itemIndex}-${groupIndex}`] && (
                      <table className=" mt-2 border-collapse border border-gray-300 w-full text-left">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 w-1/5">
                              Шифр
                            </th>
                            <th className="border border-gray-300 px-4 py-2 w-3/5">
                              Ҳужжат номи
                            </th>
                            <th className="border border-gray-300 text-center px-4 py-2 w-1/5">
                              Ҳавола
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.documents &&
                            group.documents.map((doc, docIndex) => (
                              <tr
                                key={docIndex}
                                className="border border-gray-300"
                              >
                                <td className="border border-gray-300 px-4 py-2 w-1/5">
                                  {doc.designation}
                                </td>
                                <td className="border border-gray-300 px-4 py-2 w-3/5">
                                  {doc.name_uz}
                                </td>

                                <td className="border border-gray-300 px-4 py-2 w-1/5 text-center">
                                  <a
                                    href={doc.url || "#"}
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
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </Main>
  );
};

export default Index;
