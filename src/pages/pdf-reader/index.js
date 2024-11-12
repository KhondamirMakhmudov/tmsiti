import Menu from "@/components/menu";
import Main from "@/layouts/main";

const PDFReader = () => {
  return (
    <Main>
      <Menu />

      <iframe
        src="/public/files/sample.pdf"
        style={{ width: "100%", height: "500px" }}
        sandbox="allow-scripts allow-same-origin"
      />
    </Main>
  );
};

export default PDFReader;
