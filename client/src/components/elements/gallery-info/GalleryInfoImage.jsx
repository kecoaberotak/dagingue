const GalleryInfoImage = (props) => {
  const {image} = props;
  return(
    <div className="gallery-info-image">
      <img src={image} alt="404" />
    </div>
  );
};

export default GalleryInfoImage;