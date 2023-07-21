import Title from "../fragments/Title";

const ProductBumbu = () => {
  return(
    <div className="product-bumbu">
      <Title classname='bumbu' title='Produk' subTitle='Varian Bumbu' />
      <div className="gallery">
        <section className="gallery-info">
          <div className="gallery-info-image"><img src="./images/product-chop-1.jpg" alt="Foto bumbu yang dipilih" /></div>
          <div className="gallery-info-bumbu">
            <h2>Teriyaki Garlic</h2>
            <p>Bumbu teriyaki garlic memiliki rasa manis<br/>
              dan asin. Dengan tambahan aroma khas<br/>
              bawang putih, akan meningkatkan<br/>
              kenikmatan dari daging yang anda beli.<br/></p>
          </div>
        </section>
        <section className="gallery-items">
          <div className="gallery-item-image"><img src="./images/product-chop-1.jpg" alt="Foto Bumbu" /></div>
          <div className="gallery-item-image"><img src="./images/product-chop-2.jpg" alt="Foto Bumbu" /></div>
          <div className="gallery-item-image"><img src="./images/product-chop-3.jpg" alt="Foto Bumbu" /></div>
          <div className="gallery-item-image"><img src="./images/product-chop-4.jpg" alt="Foto Bumbu" /></div>
          <div className="gallery-item-image"><img src="./images/product-chop-5.jpg" alt="Foto Bumbu" /></div>
        </section>
      </div>
    </div>
  );
};

export default ProductBumbu;