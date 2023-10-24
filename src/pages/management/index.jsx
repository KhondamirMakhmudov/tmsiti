import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Card from "@/components/card";
import Title from "@/components/title";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import { drop, get, head, isEmpty, isNil } from "lodash";
import { motion } from "framer-motion";

const Management = () => {
  const { data, isLoading } = useGetTMSITIQuery({
    key: KEYS.workers,
    url: URLS.workers,
  });
  const { data: scheduleList, isLoading: isLoadingSchedule } =
    useGetTMSITIQuery({
      key: KEYS.scheduleList,
      url: URLS.scheduleList,
    });

  if (isLoading) {
    return "...Loading";
  }
  console.log("data =>", get(data, "data"));
  return (
    <Main>
      <Menu active={0} />
      <section className={"grid grid-cols-12 container mx-auto gap-x-[30px] "}>
        <div className={"col-span-12 px-[20px] md:px-0"}>
          <Title>Rahbariyat</Title>
        </div>

        {head(
          get(data, "data", []).map((item) => (
            <motion.div
              initial={{ opacity: 0, translateX: 300 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 0.7 }}
              className={"col-span-12 px-[20px] md:px-0"}
              key={get(item, "id")}
            >
              <Card
                position={get(item, "worker_post")}
                img={get(item, "worker_image")}
                name={get(item, "worker_name")}
                receptionDays={get(item, "worker_reception_day")}
                phone={get(item, "worker_phone")}
                bachelor={get(item, "worker_bachelor")}
                master={
                  !isNil(get(item, "worker_master")) ? (
                    <p>
                      Magistratura bo`yicha mutaxassisligi:{" "}
                      {get(item, "worker_master")}
                    </p>
                  ) : (
                    ""
                  )
                }
                academicTitle={
                  !isNil(get(item, "academic_title")) ? (
                    <p>
                      Ilmiy daraja yoki unvon: {get(item, "academic_title")}
                    </p>
                  ) : (
                    ""
                  )
                }
              />
            </motion.div>
          )),
        )}

        <motion.div
          initial={{ opacity: 0, translateX: 300 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 0.4 }}
          className={"col-span-12 w-full h-[1px] bg-[#001A57] mt-[30px]"}
        ></motion.div>
      </section>

      <motion.ul
        initial={{ opacity: 0, translateY: 300 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.9 }}
        className={"grid grid-cols-12 container gap-x-[30px] mx-auto mb-[59px]"}
      >
        {drop(
          get(data, "data", []).map((item) => (
            <li
              key={get(item, "id")}
              className={
                "my-[30px] md:col-span-6 col-span-12 px-[20px] md:px-0"
              }
            >
              <Card
                position={get(item, "worker_post")}
                img={get(item, "worker_image")}
                name={get(item, "worker_name")}
                receptionDays={get(item, "worker_reception_day")}
                phone={get(item, "worker_phone")}
                bachelor={get(item, "worker_bachelor")}
                master={
                  !isNil(get(item, "worker_master")) ? (
                    <p>
                      Magistratura bo`yicha mutaxassisligi:{" "}
                      {get(item, "worker_master")}
                    </p>
                  ) : (
                    ""
                  )
                }
                academicTitle={
                  !isNil(get(item, "academic_title")) ? (
                    <p>
                      Ilmiy daraja yoki unvon: {get(item, "academic_title")}
                    </p>
                  ) : (
                    ""
                  )
                }
              />
            </li>
          )),
        )}
      </motion.ul>
    </Main>
  );
};

export default Management;
