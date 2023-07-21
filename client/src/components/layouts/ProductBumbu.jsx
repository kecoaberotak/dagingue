import Title from "../elements/Title";
import Gallery from "../fragments/Gallery";

const ProductBumbu = () => {
  return(
    <div className="product-bumbu">
      <Title classname='title-section bumbu' title='Produk' subTitle='Varian Bumbu' />
      <Gallery />
    </div>
  );
};

export default ProductBumbu;