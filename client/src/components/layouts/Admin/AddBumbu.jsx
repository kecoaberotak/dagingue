import { useEffect, useState } from 'react';
import Button from '../../elements/button';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';


const AddBumbu = () => {
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
    data.set('file', file[0]);
    data.set('desc', desc);

    axios.post('http://localhost:4000/addBumbu', data);
  };

  useEffect(() => {
    console.log(desc)
    console.log(title)
    console.log(file)
  }, [desc, title, file]);

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