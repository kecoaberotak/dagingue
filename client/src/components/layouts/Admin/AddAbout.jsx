import { useState, useContext } from 'react';
import Button from '../../elements/button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { DisplayStatus } from '../../../contexts/DisplayStatus';
import { addContent } from '../../../services/about-service';

const AddAbout = () => {
  const [srcPreview, setSrcPreview] = useState();
  const [srcPreview2, setSrcPreview2] = useState();
  const {setDisplayStatus} = useContext(DisplayStatus);

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState();
  const [cover1, setCover1] = useState('');
  const [cover2, setCover2] = useState('');
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
    data.set('title', title);
    data.set('desc', desc);
    data.set('cover1', cover1[cover1.length - 1]);
    data.set('cover2', cover2[cover2.length - 1]);

    if(!data.get('title') || data.get('cover1') === 'undefined' || data.get('cover2') === 'undefined' || data.get('desc') === 'undefined'){
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
        <label htmlFor="judul-content">Judul Content</label>
        <input 
          type="title" 
          placeholder="Judul Content" 
          value={title} 
          name='judul-content'
          onChange={e => 
          setTitle(e.target.value)}
        />
        <label htmlFor="gambar1"><p>Upload gambar content 1</p></label>
        {srcPreview && <img src={`${srcPreview}`} alt="Gambar Content" className='gambar-content'/>}
        <input 
          type="file" 
          name='gambar1' 
          onChange={e => {
            const objectUrl = URL.createObjectURL(e.target.files[0])
            setSrcPreview(objectUrl);
            setCover1(e.target.files);
          }}
        />
        <label htmlFor="gambar2"><p>Upload gambar content 2</p></label>
        {srcPreview2 && <img src={`${srcPreview2}`} alt="Gambar Content" className='gambar-content'/>}
        <input 
          type="file" 
          name='gambar2' 
          onChange={e => {
            const objectUrl = URL.createObjectURL(e.target.files[0])
            setSrcPreview2(objectUrl);
            setCover2(e.target.files);
          }}
        />
        <label htmlFor="main-content">Isi Content</label>
        <ReactQuill 
          theme="snow"  
          value={desc} 
          onChange={setDesc} 
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