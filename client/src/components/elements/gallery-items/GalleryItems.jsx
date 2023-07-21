import GalleryItemsImage from "./GalleryItemsImage";

const GalleryItems = (props) => {
  const selectImage = (e) => {
    props.sendToParent(e.target.getAttribute('data-image'))

    const imageItems = document.querySelectorAll('.cover');
    imageItems.forEach(image => {
      if(image.classList.contains('selected')){
        image.classList.remove('selected')
      }
    });

    e.target.classList.add('selected');
  };

  return(
    <section className="gallery-items" onClick={selectImage}>
      <GalleryItemsImage image="./images/product-chop-1.jpg"/>
      <GalleryItemsImage image="./images/product-chop-2.jpg" />
      <GalleryItemsImage image="./images/product-chop-3.jpg" />
      <GalleryItemsImage image="./images/product-chop-4.jpg" />
      <GalleryItemsImage image="./images/product-chop-5.jpg" />
    </section>
  );
};

export default GalleryItems;