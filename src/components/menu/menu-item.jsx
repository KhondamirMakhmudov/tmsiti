import React, { useEffect, useState } from "react";
import { get, isEmpty, isEqual } from "lodash";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const MenuItem = ({
  item,
  active,
  setOpenDropdownMenu,
  openDropdownMenu,
  key,
}) => {
  const { t } = useTranslation();
  // const [openDropdownMenu, setOpenDropdownMenu] = useState(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (!isEqual(openDropdownMenu, get(item, "id"))) {
      setMenu(false);
    }
  }, [openDropdownMenu]);
  return (
    <li
      key={key}
      onClick={(e) => {
        setOpenDropdownMenu(get(item, "id"));
        setMenu((prevState) => !prevState);
      }}
      className={` relative py-[5px] text-center`}
    >
      {!isEmpty(get(item, "subMenu", [])) ? (
        <a
          className={clsx(
            "hover:text-[#2E6DFF] font-semibold transition-all border-b border-b-transparent  uppercase",
            {
              "!border-b-[#1890FF] text-white": isEqual(
                get(item, "id"),
                active,
              ),
            },
          )}
        >
          {t(get(item, "title"))}
        </a>
      ) : (
        <Link
          href={get(item, "url")}
          className={clsx(
            "hover:text-[#2E6DFF] font-semibold transition-all border-b border-b-transparent  uppercase",
            {
              "!border-b-[#1890FF] text-white": isEqual(
                get(item, "id"),
                active,
              ),
            },
          )}
        >
          {t(get(item, "title"))}
        </Link>
      )}

      {!menu ? (
        ""
      ) : (
        <motion.ul
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 0.2 }}
          className={` transition-all duration-500  bg-gray-50  w-full text-center mt-[5px] mb-0`}
        >
          {get(item, "subMenu", []).map((subItem) => (
            <Link
              key={get(subItem, "id")}
              className={clsx(
                `   hover:text-[#2E6DFF] transition-all text-sm border-b-transparent font-medium uppercase`,
                {
                  "!border-b-[#1890FF] text-white": isEqual(
                    get(item, "id"),
                    active,
                  ),
                },
              )}
              href={get(subItem, "url")}
            >
              <motion.li
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                className={`p-[10px] border-b-[1px] border-b-[#D6E0F5]`}
              >
                {t(get(subItem, "title"))}
              </motion.li>
            </Link>
          ))}
        </motion.ul>
      )}
    </li>
  );
};

export default MenuItem;
