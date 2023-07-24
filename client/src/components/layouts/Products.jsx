import ProductPotong from "./ProductPotong";
import ProductBumbu from "./ProductBumbu";

import '../../assets/landing-page-css/product.css'

const Products = () => {
  return (
    <section className="product" id="product">
      <ProductPotong></ProductPotong>
      <ProductBumbu></ProductBumbu>
    </section>
  );
};

export default Products;