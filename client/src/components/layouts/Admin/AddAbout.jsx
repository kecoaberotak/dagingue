import { useState, useContext } from 'react';
import Button from '../../elements/Button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { DisplayStatus } from '../../../contexts/DisplayStatus';
import { addContent } from '../../../services/about-service';

const AddAbout = () => {
  const [srcPreview, setSrcPreview] = useState();
  const [srcPreview2, setSrcPreview2] = useState();
  const {setDisplayStatus} = useContext(DisplayStatus);

  const [content, setContent] = useState();
  const [file, setFile] = useState([]);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const addNewContent = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set('content', content);
    for(let i = 0; i <= file.length; i++){
      data.append('file', file[i]);
    }

    if(data.get('file') === 'undefined' || data.get('content') === 'undefined'){
      alert('Masukkan Data!');
    }else {
      addContent(data, res => {
        if(res.status === 400){
          alert(res.data.message)
        }else if(res.status === 200){
          alert(res.data.message);
          setDisplayStatus('show');
        }
      });
    }
  };

  return (
    <>
      <h1>Tambah Content About</h1>
      <form className="form-content" onSubmit={addNewContent}>
        <div className="upload-gambar-about">
          <section className="upload-gambar">
            <label htmlFor="gambar1"><p>Upload gambar content 1</p></label>
            {srcPreview && <img src={`${srcPreview}`} alt="Gambar Content" className='gambar-content'/>}
            <input 
              type="file" 
              name='gambar1' 
              onChange={e => {
                const newData = [...file];
                newData[0] = e.target.files[0];
                setFile(newData);
                const objectUrl = URL.createObjectURL(e.target.files[0])
                setSrcPreview(objectUrl);
              }}
            />
          </section>
          <section className="upload-gambar">
            <label htmlFor="gambar2"><p>Upload gambar content 2</p></label>
            {srcPreview2 && <img src={`${srcPreview2}`} alt="Gambar Content" className='gambar-content'/>}
            <input 
              type="file" 
              name='gambar2' 
              onChange={e => {
                const newData = [...file];
                if(newData.length > 0){
                  newData[1] = e.target.files[0];
                }else if(newData.length === 0){
                  newData.push(e.target.files[0]);
                }
                setFile(newData);
                const objectUrl = URL.createObjectURL(e.target.files[0])
                setSrcPreview2(objectUrl);
              }}
            />
          </section>
        </div>
        <label htmlFor="main-content">Isi Content</label>
        <ReactQuill 
          theme="snow"  
          value={content} 
          onChange={setContent}
          modules={modules} 
          formats={formats} 
          name='main-content'
        />
        <div className="form-button">
          <Button>Submit</Button>
        </div>
      </form>
    </>
  )
}

export default AddAbout;