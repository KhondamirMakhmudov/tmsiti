import React from "react";
import { useRouter } from "next/router";
import { useSettingsStore } from "@/store";
import { get } from "lodash";
import { config } from "@/config";
import { useTranslation } from "react-i18next";
import useGetTMSITIQuery from "@/hooks/api/useGetTMSITIQuery";
import { KEYS } from "@/constants/key";
import { URLS } from "@/constants/url";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Image from "next/image";

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;
  const lang = useSettingsStore((state) =>
    get(state, "lang", config.DEFAULT_APP_LANG),
  );
  const { t } = useTranslation();
  const { data, isLoading } = useGetTMSITIQuery({
    key: [KEYS.standards, slug],
    url: `${URLS.standards}/${slug}/`,

    enabled: !!slug,
  });
  console.log(data);
  return (
    <Main>
      <Menu />
      <div className={"grid grid-cols-12 container"}>
        {get(data, "data", []).map((item) => (
          <div key={get(item, "id")} className={"col-span-12"}>
            <img
              className={"border"}
              src={`https://ad.tmsiti.uz${get(item, "image")}`}
              alt={"image"}
            />
          </div>
        ))}
      </div>
    </Main>
  );
};

export default Index;
