import { useEffect, useState, useContext } from "react";
import Button from "../../elements/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DisplayStatus } from "../../../contexts/DisplayStatus";
import { getContent, putContent } from "../../../services/about-service";

const EditAbout = () => {
  const [data, setData] = useState();
  const [idContent, setIdContent] = useState();
  const [srcPreview, setSrcPreview] = useState();
  const [srcPreview2, setSrcPreview2] = useState();
  const { setDisplayStatus } = useContext(DisplayStatus);

  // ubah upload file dipisah satu satu
  const [content, setContent] = useState();
  const [imglink1, setImgLink1] = useState();
  const [imglink2, setImgLink2] = useState();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();

  useEffect(() => {
    getContent((res) => {
      console.log(res);

      if (res.status === 200) {
        setData(res.data.data[0]);
      } else if (res.status === 400) {
        alert(res.data.message);
      }
    });
  }, []);

  useEffect(() => {
    if (data) {
      setContent(data.content);
      setIdContent(data._id);
      setSrcPreview(data.file1);
      setSrcPreview2(data.file2);

      setFile1(data.file1);
      setFile2(data.file2);

      setImgLink1(data.file1);
      setImgLink2(data.file2);
    }
  }, [data]);

  const modules = {
    toolbar: [[{ header: [1, 2, false] }], ["bold", "italic", "underline", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }], ["link", "image"], ["clean"]],
  };

  const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image"];

  const editContent = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.set("content", content);
    data.set("file1", file1);
    data.set("file2", file2);
    data.set("link1", imglink1);
    data.set("link2", imglink2);

    putContent(idContent, data, (res) => {
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
      <h1 className="form-title">Edit Content About</h1>
      <form className="form-content" onSubmit={editContent}>
        <div className="upload-gambar-about">
          <section className="upload-gambar">
            <label htmlFor="gambar1">
              <p>Gambar content 1 :</p>
            </label>
            {srcPreview && <img src={`${srcPreview}`} alt="Gambar Content" className="gambar-content" />}
            <input
              type="file"
              name="gambar1"
              accept="image/*"
              data-testid="input-image-1"
              onChange={(e) => {
                setFile1(e.target.files[0]);
                const objectUrl = URL.createObjectURL(e.target.files[0]);
                setSrcPreview(objectUrl);
              }}
            />
          </section>
          <section className="upload-gambar">
            <label htmlFor="gambar2">
              <p>Gambar content 2 :</p>
            </label>
            {srcPreview2 && <img src={`${srcPreview2}`} alt="Gambar Content" className="gambar-content" />}
            <input
              type="file"
              name="gambar2"
              accept="image/*"
              data-testid="input-image-2"
              onChange={(e) => {
                setFile2(e.target.files[0]);
                const objectUrl = URL.createObjectURL(e.target.files[0]);
                setSrcPreview2(objectUrl);
              }}
            />
          </section>
        </div>
        <label htmlFor="main-content">Isi Content : </label>
        <ReactQuill theme="snow" value={content} onChange={setContent} modules={modules} formats={formats} name="main-content" />
        <div className="form-button">
          <Button>Submit</Button>
        </div>
      </form>
    </>
  );
};

export default EditAbout;
