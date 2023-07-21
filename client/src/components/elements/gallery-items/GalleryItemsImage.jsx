const GalleryItemsImage = (props) => {
  const {image} = props;
  return (
    <div className="gallery-item-image"><img src={image} alt="404" /></div>
  );
};

export default GalleryItemsImage;