import { useContext, useState } from "react";
import Button from "../../elements/Button";
import { DisplayStatus } from "../../../contexts/DisplayStatus";
import { addPotong } from "../../../services/potong-service";

const AddPotong = () => {
  const { setDisplayStatus } = useContext(DisplayStatus);
  const [srcPreview, setSrcPreview] = useState();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [desc, setDesc] = useState();

  const addNewPotong = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("file", file[file.length - 1]);
    data.set("desc", desc);

    addPotong(data, (res) => {
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
      <h1 className="form-title">Tambah Jenis Potongan</h1>
      <form className="form-content" onSubmit={addNewPotong}>
        <label htmlFor="jenis-potong">Jenis Potongan</label>
        <input
          data-testid="input-jenis"
          type="title"
          placeholder="Jenis Potongan"
          value={title}
          name="jenis-potong"
          className="input-info-produk"
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="desc-potong">Penjelasan Jenis Potongan</label>
        <input
          data-testid="input-desc"
          type="title"
          placeholder="Penjelasan jenis potongan"
          value={desc}
          name="desc-potong"
          className="input-info-produk"
          onChange={(e) => setDesc(e.target.value)}
        />
        <label htmlFor="gambar-potong">
          <p>Upload gambar jenis potongan</p>
        </label>
        <div className={srcPreview ? "" : "hidden"}>
          <img
            src={`${srcPreview}`}
            alt="Gambar Bumbu"
            className="gambar-bumbu"
          />
        </div>
        <input
          data-testid="input-gambar"
          type="file"
          accept="image/*"
          name="gambar-potong"
          onChange={(e) => {
            const objectUrl = URL.createObjectURL(e.target.files[0]);
            setSrcPreview(objectUrl);
            setFile(e.target.files);
          }}
        />
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

export default AddPotong;
