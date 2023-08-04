import { useContext, useEffect, useState } from 'react';
import Button from '../../elements/button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addBumbu } from '../../../services/admin-service';
import { DisplayStatus } from '../../../contexts/DisplayStatus';
import { IdBumbu } from '../../../contexts/IdBumbu';
import { getDetailBumbu } from '../../../services/admin-service';


const EditBumbu = () => {
  const {setDisplayStatus} = useContext(DisplayStatus);
  const {idBumbu, setIdBumbu} = useContext(IdBumbu);
  const [infoBumbu, setInfoBumbu] = useState([]);
  const [fileInfoBumbu, setFileInfoBumbu] = useState();

  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [desc, setDesc] = useState();

  useEffect(() => {
    getDetailBumbu(idBumbu, res => {
      setInfoBumbu(res.data);
    })
  }, [idBumbu])

  useEffect(() => {
    if(infoBumbu.length !== 0){
      setTitle(infoBumbu.data.title);
      setDesc(infoBumbu.data.desc);
      console.log(infoBumbu.data.file);
    }
  }, [infoBumbu]);


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

  const addNewBumbu = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('file', file[file.length - 1]);
    data.set('desc', desc);

    if(!data.get('title') || data.get('file') === 'undefined' || data.get('desc') === 'undefined'){
      alert('Masukkan Data Bumbu!');
    }else {
      addBumbu(data, res => {
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
      <h1>Edit Bumbu</h1>
      <form className="form-content" onSubmit={addNewBumbu}>
        <input 
          type="title" 
          placeholder="Nama bumbu" 
          value={title} 
          onChange={e => 
          setTitle(e.target.value)}
        />
        <label htmlFor="gambar-bumbu"><p>Upload gambar bumbu</p></label>
        <img src={`http://localhost:4000/${infoBumbu.data.file}`} alt="" />
        <input 
          type="file" 
          name='gambar-bumbu' 
          value={file}
          onChange={e => setFile(e.target.files)}
        />
        <label htmlFor="penjelasan-bumbu">Penjelasan Bumbu</label>
        <ReactQuill 
          theme="snow"  
          value={desc} 
          onChange={setDesc} 
          modules={modules} 
          formats={formats} 
          name='penjelasan-bumbu'
        />
        <Button>Submit</Button>
      </form>
    </>
  )
}

export default EditBumbu;