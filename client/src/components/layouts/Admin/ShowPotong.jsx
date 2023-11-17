import { useContext, useState, useEffect } from "react";
import { DisplayStatus } from "../../../contexts/DisplayStatus";
import { ResetCount } from "../../../contexts/ResetPage";
import { IdPotong } from "../../../contexts/IdPotong";
import { getPotong, deletePotong } from "../../../services/potong-service";
import Button from "../../elements/Button";

const ShowPotong = () => {
  const [dataPotong, setDataPotong] = useState([]);
  const {setDisplayStatus} = useContext(DisplayStatus);
  const {setIdPotong} = useContext(IdPotong);
  const {resetCount, setResetCount} =  useContext(ResetCount);

  useEffect(() => {
    getPotong(res => setDataPotong(res.data));
    console.log(resetCount);
  }, [resetCount]);

  return (
    <>
      <h1 className='form-title'>Jenis Potongan Daging</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Jenis Potongan</th>
            <th scope="col">Deskripsi Jenis Potongan</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
          {dataPotong.map(data => {
            return(
              <tbody key={data._id}>
                <tr>
                  <td>{data.title}</td>
                  <td>{data.desc}</td>
                  <td className="table-button">
                    <Button classname="button-edit" onClick={() => {
                      setDisplayStatus('edit')
                      setIdPotong(data._id);
                    }}>Edit</Button>
                    <Button classname="button-delete" onClick={() => {
                      deletePotong(data._id, res => {
                        alert(res.data.message);
                        setResetCount(resetCount + 1);
                      });
                    }}>Hapus</Button>
                  </td>
                </tr>
              </tbody>
            )
          })}
      </table>
      <div className="button-add">
        <Button onClick={() => setDisplayStatus('add')}>Tambah</Button>
      </div>
    </>
  )
};

export default ShowPotong;