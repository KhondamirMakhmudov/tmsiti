import Main from "@/layouts/main";
import Menu from "@/components/menu";
import { useEffect, useState } from "react";
import ContentLoader from "@/components/loader/content-loader";
import Title from "@/components/title";
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
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) =>
              item.sren_shnk.map((shnk, shnkIdx) => (
                <tr key={`${idx}-${shnkIdx}`}>
                  {shnkIdx === 0 ? (
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
                        {item.sren_designation}
                      </td>
                      <td
                        className="border border-black p-2"
                        rowSpan={item.sren_shnk.length}
                      >
                        {item.sren_name_uz}
                      </td>
                    </>
                  ) : null}
                  <td className="border border-black p-2">
                    {shnk.sren_designation}
                  </td>
                  <td className="border border-black p-2">
                    {shnk.sren_shnk_uz}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Main>
  );
};

export default Index;
