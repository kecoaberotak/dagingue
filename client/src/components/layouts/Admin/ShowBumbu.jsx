import { useContext, useEffect, useReducer, useState } from "react";
import { getBumbu, deleteBumbu } from "../../../services/bumbu-service";
import Button from "../../elements/Button";
import { DisplayStatus } from "../../../contexts/DisplayStatus";
import { IdBumbu } from "../../../contexts/IdBumbu";

const ShowBumbu = () => {
  const [dataBumbu, setDataBumbu] = useState([]);
  const { setDisplayStatus } = useContext(DisplayStatus);
  const { setIdBumbu } = useContext(IdBumbu);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    getBumbu((res) => {
      if (res.status === 200) {
        setDataBumbu(res.data.data);
      } else if (res.status === 400) {
        alert(res.data.message);
      }
    });
  }, [reducerValue]);

  return (
    <>
      <h1 className="form-title">Jenis Bumbu</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nama Bumbu</th>
            <th scope="col">Deskripsi Bumbu</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        {dataBumbu.map((data) => {
          return (
            <tbody key={data._id}>
              <tr>
                <td>{data.title}</td>
                <td dangerouslySetInnerHTML={{ __html: data.desc }}></td>
                <td>
                  <div className="table-button">
                    <Button
                      classname="button-edit"
                      onClick={() => {
                        setDisplayStatus("edit");
                        setIdBumbu(data._id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      classname="button-delete"
                      onClick={() => {
                        deleteBumbu(data._id, (res) => {
                          alert(res.data.message);
                          forceUpdate();
                        });
                      }}
                    >
                      Hapus
                    </Button>
                  </div>
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

export default ShowBumbu;
