import { useContext, useEffect, useState } from 'react';
import Button from '../../elements/button';
import { DisplayStatus } from '../../../contexts/DisplayStatus';
import { IdPotong } from "../../../contexts/IdPotong";
import { getDetailPotong, putPotong } from '../../../services/potong-service.js';

const EditPotong = () => {
  const {setDisplayStatus} = useContext(DisplayStatus);
  const {idPotong} = useContext(IdPotong);
  const [infoPotong, setInfoPotong] = useState([]);

  const [preview, setPreview] = useState();
  const [srcPreview, setSrcPreview] = useState();
  const [buttonStatus, setButtonStatus] = useState('');

  const [title, setTitle] = useState('');
  const [file, setFile] = useState();
  const [desc, setDesc] = useState();

  useEffect(() => {
    getDetailPotong(idPotong, res => {
      setInfoPotong(res.data);
    })
  }, [idPotong]);

  useEffect(() => {
    if(infoPotong.length !== 0){
      setTitle(infoPotong.data.title);
      setDesc(infoPotong.data.desc);
      setFile(infoPotong.data.file);
    }
  }, [infoPotong]);

  useEffect(() => { 
    if(!preview){
      setPreview(file);
    }
  }, [preview, file]);

  useEffect(() => {
    setSrcPreview(`http://localhost:4000/${preview}`);
  }, [preview]);

  const editPotong = (e) => {
    e.preventDefault();
    if(buttonStatus === 'submit'){
      const data = new FormData();
      data.set('title', title);
      data.set('file', file[file.length - 1]);
      data.set('desc', desc);
  
      putPotong(infoPotong.data._id ,data, res => {
        if(res.status === 400){
          alert(res.data.message)
        }else if(res.status === 200){
          alert(res.data.message);
          setDisplayStatus('show');
        }
      });
    }else if(buttonStatus === 'cancel'){
      setDisplayStatus('show');
    }
  };


  return (
    <>
    <h1>Edit Jenis Potongan</h1>
    <form className="form-content" onSubmit={editPotong}>
        <label htmlFor="jenis-potong">Jenis Potongan</label>
        <input 
          type="title" 
          placeholder="Jenis Potongan" 
          value={title} 
          name='jenis-potong'
          onChange={e => 
          setTitle(e.target.value)}
        />
        <label htmlFor="desc-potong">Penjelasan Jenis Potongan</label>
        <input 
          type="title" 
          placeholder="Penjelasan jenis potongan" 
          value={desc} 
          name='desc-potong'
          onChange={e => 
          setDesc(e.target.value)}
        />
        <label htmlFor="gambar-potong"><p>Upload gambar jenis potongan</p></label>
        {srcPreview && <img src={`${srcPreview}`} alt="Gambar Jenis Potongan" className='gambar-potong'/>}
        <input 
          type="file" 
          name='gambar-potong' 
          onChange={e => {
            const objectUrl = URL.createObjectURL(e.target.files[0])
            setSrcPreview(objectUrl);
            setFile(e.target.files);
          }}
        />
        <div className="form-button">
          <Button onClick={() => setButtonStatus('submit')}>Submit</Button>
          <div className="button-cancel">
            <Button onClick={() => setButtonStatus('cancel')}>Cancel</Button>
          </div>
        </div>
      </form>
    </>
  )
};

export default EditPotong;