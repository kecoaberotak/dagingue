import Title from "../elements/Title";
import Card from "../fragments/Card";
import { getPotong } from "../../services/potong-service";
import '../../assets/landing-page-css/productPotong.css';
import { useEffect, useState } from "react";

const ProductPotong = () => {
  const [data, setData] = useState();
  let classname = '';
  
  useEffect(() => {
    getPotong(res => setData(res.data));
  }, []);

  if(data) {
    if(data.length > 2){
      classname = "cards-product-3"
    }else if(data.length < 2){
      classname = "cards-product-1"
    }else classname = "cards-product-2"
  }

  return(
    <div className="product-potong">
      <Title classname='title-section potong' title='Produk' subTitle='Jenis Potongan' />
      {data ? 
        <section className={classname}>
        {data.map(potong => {
          return (
            <Card key={potong._id} tipe={potong.title} berat={potong.desc} image={`http://localhost:4000/${potong.file}`} />
          )
        })}
        </section>
      :
        <div className="load-card"></div>
      }
    </div>
  );
};

export default ProductPotong;