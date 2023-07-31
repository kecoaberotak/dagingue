import { useState } from 'react';
import Button from '../../elements/button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { addBumbu } from '../../../services/admin-service';
import { useNavigate } from 'react-router-dom';


const AddBumbu = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [desc, setDesc] = useState();
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
    addBumbu(data, res => {
      if(res.statusText === 'OK'){
        navigate('/admin');
      }
    });

  };

  return (
    <>
      <form className="form-content" onSubmit={addNewBumbu}>
        <input 
          type="title" 
          placeholder="Nama bumbu" 
          value={title} 
          onChange={e => 
          setTitle(e.target.value)}
        />
        <label htmlFor="gambar-bumbu"><p>Upload gambar bumbu</p></label>
        <input 
          type="file" 
          name='gambar-bumbu' 
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

export default AddBumbu;