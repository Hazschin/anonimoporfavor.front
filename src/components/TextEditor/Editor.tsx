import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import "./editorStyles.css";
import CustomToolbar from "./CustomToolbar";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Cargando...</p>,
});

export default function Editor() {
  const modules = {
    toolbar: { container: "#toolbar" },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "color",
    "background",
    "align",
    "direction",
    "script",
    "formula",
  ];

  return (
    <>
      <div id="bgHeaderEditor"></div>
      <div id="toolbar-container">
        <CustomToolbar />
      </div>
      <div id="editorContainer">
        <input id="title" placeholder="Título (opcional)" />
        <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" />

        <div className="author">
          <span>Por</span>
          <input id="author" defaultValue={"ANÓNIMO"} />
        </div>
      </div>
    </>
  );
}
