import { useContext, useEffect, useState } from "react";
import Button from "../../elements/Button";
import { DisplayStatus } from "../../../contexts/DisplayStatus";
import { IdPotong } from "../../../contexts/IdPotong";
import { getDetailPotong, putPotong } from "../../../services/potong-service.js";

const EditPotong = () => {
  const { setDisplayStatus } = useContext(DisplayStatus);
  const { idPotong } = useContext(IdPotong);
  const [infoPotong, setInfoPotong] = useState([]);

  const [srcPreview, setSrcPreview] = useState();

  const [title, setTitle] = useState("");
  const [file, setFile] = useState();
  const [desc, setDesc] = useState("");
  const [imglink, setImgLink] = useState();

  useEffect(() => {
    getDetailPotong(idPotong, (res) => {
      if (res.status === 200) {
        setInfoPotong(res.data);
      } else if (res.status === 400) {
        alert(res.message);
      }
    });
  }, [idPotong]);

  useEffect(() => {
    if (infoPotong.length !== 0) {
      setTitle(infoPotong.data.title);
      setDesc(infoPotong.data.desc);
      setFile(infoPotong.data.file);
      setSrcPreview(infoPotong.data.file);
      setImgLink(infoPotong.data.file);
    }
  }, [infoPotong]);

  const editPotong = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("desc", desc);
    data.set("link", imglink);

    if (file == imglink) {
      data.set("file", file);
    } else {
      data.set("file", file[file.length - 1]);
    }

    putPotong(infoPotong.data._id, data, (res) => {
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
      <h1>Edit Jenis Potongan</h1>
      <form className="form-content" onSubmit={editPotong}>
        <label htmlFor="jenis-potong">Jenis Potongan</label>
        <input data-testid="input-jenis" type="title" placeholder="Jenis Potongan" value={title} name="jenis-potong" className="input-info-produk" onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="desc-potong">Penjelasan Jenis Potongan</label>
        <input data-testid="input-desc" type="title" placeholder="Penjelasan jenis potongan" value={desc} name="desc-potong" className="input-info-produk" onChange={(e) => setDesc(e.target.value)} />
        <label htmlFor="gambar-potong">
          <p>Upload gambar jenis potongan</p>
        </label>
        <div className={srcPreview ? "" : "hidden"}>
          <img src={`${srcPreview}`} alt="Gambar Potong" className="gambar-potong" />
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

export default EditPotong;
