import Title from "../elements/Title";
import Card from "../fragments/Card";
import { getPotong } from "../../services/potong-service";
import { useEffect, useState } from "react";
import PotongSkeleton from "./Skeleton/PotongSkeleton";

const ProductPotong = () => {
  const [data, setData] = useState();
  let classname = "";

  useEffect(() => {
    getPotong((res) => {
      if (res.status === 200) {
        setData(res.data.data);
      } else if (res.status === 400) {
        alert(res.data.message);
      }
    });
  }, []);

  if (data) {
    if (data.length > 2) {
      classname = "cards-product-3";
    } else if (data.length < 2) {
      classname = "cards-product-1";
    } else classname = "cards-product-2";
  }

  return (
    <div className="product-potong">
      <Title classname="title-section potong" title="Produk" subTitle="Jenis Potongan" />
      {data ? (
        <section className={classname}>
          {data.map((potong) => {
            return <Card key={potong._id} tipe={potong.title} berat={potong.desc} image={potong.file} />;
          })}
        </section>
      ) : (
        <section className="cards-product-2">
          <PotongSkeleton />
          <PotongSkeleton />
        </section>
      )}
    </div>
  );
};

export default ProductPotong;
