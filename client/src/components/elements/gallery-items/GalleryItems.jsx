import GalleryItemsImage from "./GalleryItemsImage";

const GalleryItems = () => {
  return(
    <section className="gallery-items">
      <GalleryItemsImage image="./images/product-chop-1.jpg" />
      <GalleryItemsImage image="./images/product-chop-2.jpg" />
      <GalleryItemsImage image="./images/product-chop-3.jpg" />
      <GalleryItemsImage image="./images/product-chop-4.jpg" />
      <GalleryItemsImage image="./images/product-chop-5.jpg" />
    </section>
  );
};

export default GalleryItems;