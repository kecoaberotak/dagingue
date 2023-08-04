import { useContext, useEffect, useReducer, useState } from "react";
import { getBumbu, deleteBumbu } from "../../../services/admin-service";
import Button from "../../elements/button";
import { DisplayStatus } from "../../../contexts/DisplayStatus";
import { IdBumbu } from "../../../contexts/IdBumbu";

const ShowBumbu = () => {
  const [dataBumbu, setDataBumbu] = useState([]);
  const {setDisplayStatus} = useContext(DisplayStatus);
  const {setIdBumbu} = useContext(IdBumbu);
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

  useEffect(() => {
    getBumbu(res => setDataBumbu(res.data));
  }, [reducerValue]);

  return (
    <>
      <h1>Jenis Bumbu</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nama Bumbu</th>
            <th scope="col">Deskripsi Bumbu</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataBumbu.map(data => {
            return(
              <>
              <tr key={data._id}>
                <td>{data.title}</td>
                <td dangerouslySetInnerHTML={{__html:data.desc}}></td>
                <td className="table-button">
                  <Button classname="button-edit" onClick={() => {
                    setDisplayStatus('edit')
                    setIdBumbu(data._id);
                  }}>Edit</Button>
                  <Button classname="button-delete" onClick={() => {
                    deleteBumbu(data._id, res => {
                      alert(res.data.message);
                      forceUpdate();
                    });
                  }}>Hapus</Button>
                </td>
              </tr>
              </>
            )
          })}
        </tbody>
      </table>
      <div className="button-add">
        <Button onClick={() => setDisplayStatus('add')}>Tambah</Button>
      </div>
    </>
  )
};

export default ShowBumbu;