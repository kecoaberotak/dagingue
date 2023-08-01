import { useContext, useEffect, useState } from "react";
import { getBumbu } from "../../../services/admin-service";
import Button from "../../elements/button";
import { DisplayStatus } from "../../../contexts/DisplayStatus";

const ShowBumbu = () => {
  const [dataBumbu, setDataBumbu] = useState([]);
  const {setDisplayStatus} = useContext(DisplayStatus);

  useEffect(() => {
    getBumbu(res => setDataBumbu(res));
  }, []);

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
                  <Button classname="button-edit">Edit</Button>
                  <Button classname="button-delete">Hapus</Button>
                </td>
              </tr>
              </>
            )
          })}
        </tbody>
      </table>
      <div className="button-add">
        <Button onClick={() => setDisplayStatus(true)}>Tambah</Button>
      </div>
    </>
  )
};

export default ShowBumbu;