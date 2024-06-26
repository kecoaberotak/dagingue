import { useContext, useState, useEffect, useReducer } from "react";
import { DisplayStatus } from "../../../contexts/DisplayStatus";
import { IdPotong } from "../../../contexts/IdPotong";
import { getPotong, deletePotong } from "../../../services/potong-service";
import Button from "../../elements/Button";

const ShowPotong = () => {
  const [dataPotong, setDataPotong] = useState([]);
  const { setDisplayStatus } = useContext(DisplayStatus);
  const { setIdPotong } = useContext(IdPotong);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    getPotong((res) => {
      if (res.status === 200) {
        setDataPotong(res.data.data);
      } else if (res.status === 400) {
        alert(res.data.message);
      }
    });
  }, [reducerValue]);

  return (
    <>
      <h1 className="form-title">Jenis Potongan Daging</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Jenis Potongan</th>
            <th scope="col">Deskripsi Jenis Potongan</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        {dataPotong.map((data) => {
          return (
            <tbody key={data._id}>
              <tr>
                <td>{data.title}</td>
                <td>{data.desc}</td>
                <td className="table-button">
                  <Button
                    classname="button-edit"
                    onClick={() => {
                      setDisplayStatus("edit");
                      setIdPotong(data._id);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    classname="button-delete"
                    onClick={() => {
                      deletePotong(data._id, (res) => {
                        alert(res.data.message);
                        forceUpdate();
                      });
                    }}
                  >
                    Hapus
                  </Button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <div className="button-add">
        <Button onClick={() => setDisplayStatus("add")}>Tambah</Button>
      </div>
    </>
  );
};

export default ShowPotong;
