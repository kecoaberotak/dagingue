import Card from "../fragments/Card";

const ProductPotong = () => {
  return(
    <div className="product-potong">
      <section className="title-section potong">
        <h3>Produk</h3>
        <p>Jenis Potongan</p>
      </section>
      <section className="cards-product">
        <Card tipe={'Slice Dadu'} berat={500} image={"./images/product-3.jpg"} />
        <Card tipe={'Slice Tipis'} berat={500} image={"./images/product-1.jpg"} />
      </section>
    </div>
  );
};

export default ProductPotong;