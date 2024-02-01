import React, { useState } from "react";
import Link from "next/link";
import { get, isEmpty, isEqual, isNull } from "lodash";
import clsx from "clsx";
import { useTranslation } from "react-i18next";
import Brand from "@/components/brand";
import { motion } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import Image from "next/image";
import MenuItem from "@/components/menu/menu-item";
export const menuData = [
  {
    id: 1,
    title: "institut",
    url: "",
    filterUrl: "",
    subMenu: [
      {
        id: 1,
        title: "about_institute",
        url: "/about",
      },
      {
        id: 2,
        title: "leadership",
        url: "/management",
      },

      {
        id: 3,
        title: "organizational_structure",
        url: "/structure",
      },

      {
        id: 4,
        title: "Tarkibiy bo’linmalar",
        url: "/structural-divisions",
      },

      {
        id: 5,
        title: "Vakansiyalar",
        url: "/vacancies",
      },

      // {
      //     id: 5,
      //     title: 'Laboratoriya',
      //     url: '/management',
      // },
      //
      // {
      //     id: 6,
      //     title: 'O‘quv markazi',
      //     url: '/management',
      // },
    ],
  },
  {
    id: 2,
    title: "Me’yoriy hujjatlar",
    url: "",
    filterUrl: "",
    subMenu: [
      {
        id: 1,
        title: "Qonun, qaror va farmonlar",
        url: "/#",
      },

      {
        id: 2,
        title: "Shaharsozlik norma va qoidalari",
        url: "/shnk",
      },

      {
        id: 3,
        title: "Standartlar",
        url: "/standards",
      },

      {
        id: 4,
        title: "Qurilish reglamentlari",
        url: "/#",
      },
      {
        id: 5,
        title: "Muhokamalar",
        url: "/discussion",
      },
    ],
  },
  {
    id: 3,
    title: "Faoliyat",
    url: "",
    filterUrl: "",
    subMenu: [
      {
        id: 1,
        title: "Klassifikator",
        url: "https://catalog.tmsiti.uz/classifier",
      },

      {
        id: 2,
        title: "Elektron fond",
        url: "/electronic-fund",
      },

      {
        id: 3,
        title: "Laboratoriya",
        url: "#",
      },
    ],
  },

  {
    id: 4,
    title: "Xabarlar",
    url: "",
    filterUrl: "",
    subMenu: [
      {
        id: 1,
        title: "E’lonlar",
        url: "/announcement",
      },

      {
        id: 2,
        title: "Yangiliklar",
        url: "/news",
      },

      {
        id: 3,
        title: "Uchrashuvlar",
        url: "#",
      },

      {
        id: 4,
        title: "Ommaviy tadbirlar",
        url: "#",
      },

      {
        id: 5,
        title: "Xalqaro hamkorlik",
        url: "#",
      },

      {
        id: 6,
        title: "Seminar, ko’rgazmalar",
        url: "#",
      },
    ],
  },
  {
    id: 6,
    title: "Bog‘lanish",
    url: "/contact",
    subMenu: [],
  },
];
const Menu = ({ active = 0, className }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [openDropdownMenu, setOpenDropdownMenu] = useState(null);
  const [menu, setMenu] = useState();

  const dropdownMenu = () => {
    setMenu(!menu);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleDropdownMenu = () => {
    setOpenDropdownMenu(!openDropdownMenu);
  };
  return (
    <motion.div
      initial={{ opacity: 0, top: 100 }}
      animate={{ opacity: 1, top: 0 }}
      className={` bg-[#fff] py-5 px-5 md:px-0  ${className}`}
    >
      <div className={"container mx-auto flex justify-between items-center"}>
        <Brand />
        <div
          className={`${
            !openMenu
              ? "hidden"
              : "visible translate-x-0 transition-all duration-300 md:relative z-50 absolute top-0 md:h-auto h-screen w-screen bg-white md:bg-none right-0 md:w-auto  text-end "
          } md:block`}
        >
          <div
            className={
              "md:hidden flex justify-between items-center lg:px-[20px]  py-[15px]"
            }
          >
            <div onClick={toggleMenu} className={"ml-[20px]"}>
              <Brand />
            </div>
            {/*<Image src={'/icons/brand.svg'} alt={'brand'} className={'ml-[20px]'} width={52} height={56}/>*/}
            <Button variant={"text"} onClick={toggleMenu}>
              <CloseIcon />
            </Button>
          </div>
          {/*desktop version nav-bar*/}
          <ul
            className={`md:flex hidden text-green menu  justify-between md:gap-x-[15px] xl:gap-x-[30px] bg-white `}
          >
            {menuData.map((item) => (
              <li
                key={get(item, "id")}
                className={
                  "dropdown relative py-0 text-start xl:text-base md:text-xs lg:text-sm"
                }
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <Link
                  className={clsx(
                    " text-[#001A57] font-semibold transition-all border-b border-b-transparent  uppercase",
                    { "text-[#2E6DFF]": isEqual(get(item, "id"), active) },
                  )}
                  href={get(item, "url")}
                >
                  {t(get(item, "title"))}
                </Link>

                {isEmpty(get(item, "subMenu")) ? (
                  ""
                ) : (
                  <ul
                    onClick={toggleMenu}
                    className={
                      "hidden translate-y-[30px] hover:translate-y-[0px] z-50 transition-all duration-500  bg-gray-50 dropdown-menu absolute lg:w-[180px] w-[100px] text-start  rounded-[5px]"
                    }
                  >
                    {get(item, "subMenu", []).map((subItem) => (
                      <Link
                        key={get(subItem, "id")}
                        className={clsx(
                          "hover:text-[#2E6DFF] transition-all text-[10px] lg:text-sm border-b-transparent font-medium uppercase",
                          {
                            "!border-b-[#1890FF] text-[#001A57]": isEqual(
                              get(item, "id"),
                              active,
                            ),
                          },
                        )}
                        href={get(subItem, "url")}
                      >
                        <li
                          className={
                            "p-[10px] border-b-[1px] border-b-[#D6E0F5] "
                          }
                        >
                          {t(get(subItem, "title"))}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/*mobile version nav-bar*/}
          <motion.ul
            initial={{ opacity: 0, translateX: 200 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 0.2 }}
            className={`md:hidden flex flex-col text-[#001A57] bg-[#F2F4F5]`}
          >
            {menuData.map((item) => (
              <MenuItem
                key={get(item, "id")}
                item={item}
                openDropdownMenu={openDropdownMenu}
                setOpenDropdownMenu={setOpenDropdownMenu}
              />
            ))}
          </motion.ul>
        </div>{" "}
        <div className={"block md:hidden"}>
          <Button variant={"text"} onClick={toggleMenu}>
            <MenuIcon />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
