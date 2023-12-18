import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Title from "@/components/title";
import Link from "next/link";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import Card from "@/components/card";
import { get, isNil } from "lodash";

const Index = () => {
  const { data, isLoading } = useGetTMSITIQuery({
    key: KEYS.structuralDivisions,
    url: URLS.structuralDivisions,
  });
  return (
    <Main>
      <Menu />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[50px]"}>
        <div className={"container py-[12px]"}>
          <Link href={"/"}>Bosh sahifa / </Link>
          <Link href={"#"}>Institut / </Link>
          <Link href={"#"}>Tarkiribiy bo’linmalar </Link>
        </div>
      </section>
      <section className={"container"}>
        <div>
          <Title>Tarkiribiy bo’linmalar</Title>
        </div>

        <div className={"grid grid-cols-12 gap-[30px]"}>
          {/*  //////////////////////////////////////////////////////////////////// */}
          {/*  AFTER CREATING API BY BACKEND DEVELOPER, DELETER COMMENT FROM THEM */}
          {/*  //////////////////////////////////////////////////////////////////// */}
          {/*{get(data, "data", "-").map((item) => (*/}
          {/*  <div key={get(item, "id")} className={"col-span-6"}>*/}
          {/*    <Card*/}
          {/*      position={get(item, "worker_post")}*/}
          {/*      img={get(item, "worker_image")}*/}
          {/*      name={get(item, "worker_name")}*/}
          {/*      receptionDays={get(item, "worker_reception_day")}*/}
          {/*      phone={get(item, "worker_phone")}*/}
          {/*      bachelor={get(item, "worker_bachelor")}*/}
          {/*      master={*/}
          {/*        !isNil(get(item, "worker_master")) ? (*/}
          {/*          <p>*/}
          {/*            Magistratura bo`yicha mutaxassisligi:{" "}*/}
          {/*            {get(item, "worker_master")}*/}
          {/*          </p>*/}
          {/*        ) : (*/}
          {/*          ""*/}
          {/*        )*/}
          {/*      }*/}
          {/*      academicTitle={*/}
          {/*        !isNil(get(item, "academic_title")) ? (*/}
          {/*          <p>*/}
          {/*            Ilmiy daraja yoki unvon: {get(item, "academic_title")}*/}
          {/*          </p>*/}
          {/*        ) : (*/}
          {/*          ""*/}
          {/*        )*/}
          {/*      }*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*))}*/}
        </div>
      </section>
    </Main>
  );
};

export default Index;
