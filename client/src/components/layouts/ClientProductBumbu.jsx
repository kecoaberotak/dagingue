import Title from "../elements/Title";
import Gallery from "../fragments/Gallery";
import { DataBumbu } from "../../contexts/DataBumbu";
import { useContext, useEffect } from "react";
import { getBumbu } from "../../services/bumbu-service";

const ProductBumbu = () => {
  const { setDataBumbu } = useContext(DataBumbu);

  useEffect(() => {
    getBumbu((res) => {
      if (res.status === 200) {
        setDataBumbu(res.data.data);
      } else if (res.status === 400) {
        alert(res.data.message);
      }
    });
  }, [setDataBumbu]);

  return (
    <div className="product-bumbu">
      <Title classname="title-section bumbu" title="Produk" subTitle="Varian Bumbu" />
      <Gallery />
    </div>
  );
};

export default ProductBumbu;
