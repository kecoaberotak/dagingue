import { useContext, useState } from "react";
import Button from "../../elements/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { addBumbu } from "../../../services/bumbu-service";
import { DisplayStatus } from "../../../contexts/DisplayStatus";

const AddBumbu = () => {
  const { setDisplayStatus } = useContext(DisplayStatus);
  const [srcPreview, setSrcPreview] = useState();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [desc, setDesc] = useState();
  const modules = {
    toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }], ["link", "image"], ["clean"]],
  };

  const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"];

  const addNewBumbu = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("file", file[file.length - 1]);
    data.set("desc", desc);

    addBumbu(data, (res) => {
      if (res.status === 400) {
        alert(res.data.message);
      } else if (res.status === 200) {
        alert(res.data.message);
        setDisplayStatus("show");
      }
    });
  };

  return (
    <>
      <h1 className="form-title">Tambah Bumbu</h1>
      <form className="form-content" onSubmit={addNewBumbu}>
        <label htmlFor="nama-bumbu">Nama Bumbu</label>
        <input data-testid="input-nama" type="title" placeholder="Nama bumbu" value={title} name="nama-bumbu" className="input-info-produk" onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="gambar-bumbu">
          <p>Upload gambar bumbu</p>
        </label>
        <div className={srcPreview ? "" : "hidden"}>
          <img src={`${srcPreview}`} alt="Gambar Bumbu" className="gambar-bumbu" />
        </div>
        <input
          data-testid="input-gambar"
          type="file"
          accept="image/*"
          name="gambar-bumbu"
          onChange={(e) => {
            const objectUrl = URL.createObjectURL(e.target.files[0]);
            setSrcPreview(objectUrl);
            setFile(e.target.files);
          }}
        />
        <label htmlFor="penjelasan-bumbu">Penjelasan Bumbu</label>
        <ReactQuill theme="snow" value={desc} onChange={setDesc} modules={modules} formats={formats} name="penjelasan-bumbu" />
        <div className="form-button">
          <Button>Submit</Button>
          <div className="button-cancel">
            <Button type="button" onClick={() => setDisplayStatus("show")}>
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddBumbu;
