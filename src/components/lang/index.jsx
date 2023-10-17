import React, {useState, useRef} from 'react';
import Image from "next/image";
import {langs} from "@/constants";
import {get} from "lodash";
import {motion} from "framer-motion"
import {useOnClickOutside} from "@/hooks/general/use-outside-click";
import {useSettingsStore} from "@/store";
import {useTranslation} from "react-i18next";
import {config} from "@/config";
import clsx from "clsx";

const Lang = () => {
  const setLang = useSettingsStore(state => get(state, 'setLang', () => {
  }))
  const language = useSettingsStore(state => get(state, 'lang', config.DEFAULT_APP_LANG))
  const { i18n } = useTranslation()
  const ref = useRef();
  const [open, setOpen] = useState(false);
  // useOnClickOutside(ref, () => setOpen(false))


  // const handleLangItemClick = lang => {
  //   setLang(lang);
  //   i18n.changeLanguage(lang)
  //   setOpen(false);
  // }

  return (
      <div ref={ref} className={'relative'}>
        <div className={'flex cursor-pointer '} onClick={() => setOpen(prev => !prev)}>
          <span className={'ml-1.5 mr-1 cursor-pointer inline-block capitalize'}>uz</span>
          <Image width={9} height={6} alt={'map'} src={'/icons/arrow-down.svg'}/>
        </div>
        {/*{open && <motion.ul className={'absolute top-full bg-white w-full text-[#8E8E8E] text-sm p-2 capitalize z-10'}>*/}
        {/*  {*/}
        {/*    langs.map(lang => <li key={get(lang, "id")}  className={'hover:text-[#1890FF] cursor-pointer text-[#1890FF] '}>*/}
        {/*      {*/}
        {/*        get(lang, 'title')*/}
        {/*      }*/}
        {/*    </li>)*/}
        {/*  }*/}
        {/*</motion.ul>}*/}
      </div>
  );
};

export default Lang;
