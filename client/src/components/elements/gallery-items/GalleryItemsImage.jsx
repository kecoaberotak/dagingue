const GalleryItemsImage = (props) => {
  const {image, classSelect} = props;
  return (
    <div className="gallery-item-image">
      <img src={image} alt="404" />
      <div className={`cover ${classSelect}`}></div>
    </div>
  );
};

export default GalleryItemsImage;