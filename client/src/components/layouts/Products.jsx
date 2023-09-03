import ProductPotong from './ClientProductPotong';
import ProductBumbu from './ClientProductBumbu';
import ImageSelectedContexProvider from '../../contexts/ImageSelected';
import DataBumbuProvider from '../../contexts/DataBumbu';
import DescSelectedProvider from '../../contexts/DescSelected';
import TitleSelectedProvider from '../../contexts/TitleSelected';

const Products = () => {
  return (
    <section className="product" id="product">
      <ProductPotong></ProductPotong>
      <DataBumbuProvider>
          <ImageSelectedContexProvider>
            <DescSelectedProvider>
              <TitleSelectedProvider>
                <ProductBumbu></ProductBumbu>
              </TitleSelectedProvider>
            </DescSelectedProvider>
          </ImageSelectedContexProvider>
        </DataBumbuProvider>
    </section>
  );
};

export default Products;