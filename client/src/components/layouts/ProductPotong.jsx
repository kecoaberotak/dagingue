import Title from "../elements/Title";
import Card from "../fragments/Card";

import '../../assets/css/productPotong.css'

const ProductPotong = () => {
  return(
    <div className="product-potong">
      <Title classname='title-section potong' title='Produk' subTitle='Jenis Potongan' />
      <section className="cards-product">
        <Card tipe={'Slice Dadu'} berat={500} image={"./images/product-3.jpg"} />
        <Card tipe={'Slice Tipis'} berat={500} image={"./images/product-1.jpg"} />
      </section>
    </div>
  );
};

export default ProductPotong;