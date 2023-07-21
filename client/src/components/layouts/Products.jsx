import ProductPotong from "./ProductPotong";
import ProductBumbu from "./ProductBumbu";

const Products = () => {
  return (
    <section className="product" id="product">
      <ProductPotong></ProductPotong>
      <ProductBumbu></ProductBumbu>
    </section>
  );
};

export default Products;