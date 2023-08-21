import { useContext, useState } from 'react';
import Button from '../../elements/Button';
import { DisplayStatus } from '../../../contexts/DisplayStatus';
import { addPotong } from '../../../services/potong-service';

const AddPotong = () => {
  const {setDisplayStatus} = useContext(DisplayStatus);
  const [buttonStatus, setButtonStatus] = useState('');
  const [srcPreview, setSrcPreview] = useState();

  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [desc, setDesc] = useState();

  const addNewPotong = (e) => {
    e.preventDefault();
    if(buttonStatus === 'submit'){
      const data = new FormData();
      data.set('title', title);
      data.set('file', file[file.length - 1]);
      data.set('desc', desc);
  
      if(!data.get('title') || data.get('file') === 'undefined' || data.get('desc') === 'undefined'){
        alert('Masukkan Data Jenis Potongan!');
      }else {
        addPotong(data, res => {
          if(res.status === 400){
            // alert(res.data.message)
            console.log(res.data)
          }else if(res.status === 200){
            // alert(res.data.message);
            console.log(res.data)
            // setDisplayStatus('show');
          }
        });
      }
    }else if(buttonStatus === 'cancel'){
      setDisplayStatus('show');
    }
  };

  return (
    <>
    <h1>Tambah Jenis Potongan</h1>
    <form className="form-content" onSubmit={addNewPotong}>
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
}

export default AddPotong;