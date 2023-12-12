import React from "react";
import Main from "@/layouts/main";
import Menu from "@/components/menu";
import Link from "next/link";
import Title from "@/components/title";

const Index = () => {
  return (
    <Main>
      <Menu />
      <section className={"bg-[#EFF3FA] text-xs text-[#607198] mb-[70px]"}>
        <div className={"container py-[12px]"}>
          <Link href={"/"}>Bosh sahifa / </Link>
          <Link href={"#"}>Bog`lanish </Link>
        </div>
      </section>
      <section className={"container mb-[250px]"}>
        <Title>Bog'lanish</Title>
        <div className={"bg-[#F7F9FC] px-[50px] py-[30px] flex gap-x-[50px]"}>
          <div className={" w-[605px]"}>
            <div
              className={
                "bg-white w-full h-[404px] col-span-6 shadow-[0_1px_5px_0_rgba(40,54,109,0.15)]"
              }
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.318241820355!2d69.25291087649907!3d41.32369269994296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6cfbdaaaab%3A0x67ef3b5628043557!2zNmEg0YPQu9C40YbQsCDQkNCx0LDRjywg0KLQsNGI0LrQtdC90YIgMTAwMDExLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1702381372997!5m2!1sru!2s"
                width="605"
                height="404"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <ul
              className={"text-[#001A57] mt-[30px] flex flex-col gap-y-[12px]"}
            >
              <li className={"flex gap-x-[10px]"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_961_3637)">
                    <path
                      d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"
                      stroke="#2E6DFF"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.657 16.657L13.414 20.9C13.039 21.2746 12.5306 21.485 12.0005 21.485C11.4704 21.485 10.962 21.2746 10.587 20.9L6.343 16.657C5.22422 15.5381 4.46234 14.1127 4.15369 12.5608C3.84504 11.009 4.00349 9.40047 4.60901 7.93868C5.21452 6.4769 6.2399 5.22749 7.55548 4.34846C8.87107 3.46943 10.4178 3.00024 12 3.00024C13.5822 3.00024 15.1289 3.46943 16.4445 4.34846C17.7601 5.22749 18.7855 6.4769 19.391 7.93868C19.9965 9.40047 20.155 11.009 19.8463 12.5608C19.5377 14.1127 18.7758 15.5381 17.657 16.657V16.657Z"
                      stroke="#2E6DFF"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_961_3637">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className={"text-[]"}>
                  Toshkent shahar, Abay ko‘chasi, 6-uy
                </p>
              </li>
              <li className={"flex gap-x-[10px]"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_961_3668)">
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="#2E6DFF"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#2E6DFF"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_961_3668">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Link href={"mailto: info@tmsiti.uz"}>info@tmsiti.uz</Link>
              </li>
              <li className={"flex gap-x-[10px]"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_961_3668)">
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="#2E6DFF"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#2E6DFF"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_961_3668">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Link href={"mailto: TMSITI@exat.uz"}>TMSITI@exat.uz</Link>
              </li>
              <li className={"flex gap-x-[10px]"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_961_3629)">
                    <path
                      d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4"
                      stroke="#2E6DFF"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 6L17 8L21 4"
                      stroke="#2E6DFF"
                      strokeWidth="1.83333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_961_3629">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <Link
                  className={"text-[12px] md:text-base"}
                  href={"tel:+998 71 244-51-84"}
                >
                  +998 71 244-51-84
                </Link>
              </li>
            </ul>
          </div>

          <div className={"col-span-1 w-[2px] bg-[#2E6DFF]"}></div>

          <div className={"col-span-5 w-[605px]"}>
            <form className={"flex flex-col gap-y-[20px]"}>
              <input
                type={"text"}
                placeholder={"FIO"}
                className={
                  "w-full py-[13px] px-[30px] shadow-[0_4px_4px_0_rgba(40,54,109,0.15)]"
                }
              />
              <input
                type={"email"}
                placeholder={"E-mail"}
                className={
                  "w-full py-[13px] px-[30px] shadow-[0_4px_4px_0_rgba(40,54,109,0.15)]"
                }
              />
              <input
                type={"tel"}
                placeholder={"Telefon nomer"}
                className={
                  "w-full py-[13px] px-[30px] shadow-[0_4px_4px_0_rgba(40,54,109,0.15)]"
                }
              />

              <textarea
                placeholder={"Murojaat matni"}
                className={
                  "w-full py-[13px] px-[30px] shadow-[0_4px_4px_0_rgba(40,54,109,0.15)]"
                }
              ></textarea>
            </form>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Index;
