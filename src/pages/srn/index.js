import Main from "@/layouts/main";
import Menu from "@/components/menu";
import { useEffect, useState } from "react";
import ContentLoader from "@/components/loader/content-loader";
import Title from "@/components/title";
import Image from "next/image";

const Index = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://shnk.tmsiti.uz/sren")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ma'lumotlarni yuklab bo‘lmadi");
        }
        return response.json();
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  let rowNumber = 1;

  if (loading)
    return (
      <Main>
        <ContentLoader />
      </Main>
    );

  if (error) return <p>Xatolik: {error}</p>;

  return (
    <Main>
      <Menu />

      <div className="overflow-x-auto container my-[50px]">
        <Title>SMETA-RESURS NORMALARI</Title>
        <table className="table-auto border-collapse border border-black w-full text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-black p-2">№</th>
              <th className="border border-black p-2">Yangi ShNQ raqami</th>
              <th className="border border-black p-2">
                Yangidan ishlab chiqiladigan ShNQ nomi
              </th>
              <th className="border border-black p-2">ShNQ raqami</th>
              <th className="border border-black p-2">ShNQ nomi</th>
              <th className="border border-black p-2">Fayl</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => {
              // Agar sren_shnk bo'sh bo'lsa
              if (!item.sren_shnk || item.sren_shnk.length === 0) {
                return (
                  <tr key={`empty-${idx}`}>
                    <td className="border border-black p-2">{rowNumber++}</td>
                    <td className="border border-black p-2">
                      <b>
                        <i>{item.sren_designation}</i>
                      </b>
                    </td>
                    <td className="border border-black p-2">
                      {item.sren_name_uz}
                    </td>
                    <td className="border border-black p-2">-</td>
                    <td className="border border-black p-2">-</td>
                    <td className="border border-black p-2">
                      {item.sren_pdf_uz && (
                        <a
                          href={`https://main.tmsiti.uz/media/${item.sren_pdf_uz}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={"/icons/download.svg"}
                            alt="download"
                            width={24}
                            height={24}
                          />
                        </a>
                      )}
                    </td>
                  </tr>
                );
              }

              // Agar sren_shnk bo'sh bo'lmasa
              return item.sren_shnk.map((shnk, shnkIdx) => (
                <tr key={`${idx}-${shnkIdx}`}>
                  {shnkIdx === 0 && (
                    <>
                      <td
                        className="border border-black p-2"
                        rowSpan={item.sren_shnk.length}
                      >
                        {rowNumber++}
                      </td>
                      <td
                        className="border border-black p-2"
                        rowSpan={item.sren_shnk.length}
                      >
                        <b>
                          <i>{item.sren_designation}</i>
                        </b>
                      </td>
                      <td
                        className="border border-black p-2"
                        rowSpan={item.sren_shnk.length}
                      >
                        {item.sren_name_uz}
                      </td>
                    </>
                  )}

                  <td className="border border-black p-2">
                    <b>
                      <i>{shnk.sren_designation}</i>
                    </b>
                  </td>
                  <td className="border border-black p-2">
                    {shnk.sren_shnk_uz}
                  </td>

                  {shnkIdx === 0 && (
                    <td
                      className="border border-black p-2"
                      rowSpan={item.sren_shnk.length}
                    >
                      {item.sren_pdf_uz && (
                        <a
                          href={`https://main.tmsiti.uz/media/${item.sren_pdf_uz}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={"/icons/download.svg"}
                            alt="download"
                            width={24}
                            height={24}
                          />
                        </a>
                      )}
                    </td>
                  )}
                </tr>
              ));
            })}
          </tbody>
        </table>
      </div>
    </Main>
  );
};

export default Index;
