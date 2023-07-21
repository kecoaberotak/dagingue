import GalleryItemsImage from "./GalleryItemsImage";

const GalleryItems = (props) => {
  // const selectImage = (e) => {
  //   const dataImage = e.target.getAttribute('data-image');
  //   return dataImage;
  // };

  return(
    <section className="gallery-items" onClick={(e) => props.sendToParent(e.target.getAttribute('data-image'))}>
      <GalleryItemsImage image="./images/product-chop-1.jpg" classSelect="selected"/>
      <GalleryItemsImage image="./images/product-chop-2.jpg" />
      <GalleryItemsImage image="./images/product-chop-3.jpg" />
      <GalleryItemsImage image="./images/product-chop-4.jpg" />
      <GalleryItemsImage image="./images/product-chop-5.jpg" />
    </section>
  );
};

export default GalleryItems;