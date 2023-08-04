import ProductBumbu from './ClientProductBumbu';
import ProductPotong from './ClientProductPotong';

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