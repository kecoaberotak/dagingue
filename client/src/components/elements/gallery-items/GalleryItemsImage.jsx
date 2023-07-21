const GalleryItemsImage = (props) => {
  const {image} = props;
  return (
    <div className="gallery-item-image" onClick={(e) => console.log(e.target)}>
      <img src={image} alt="404" />
      <div className='cover' data-image={image}></div>
    </div>
  );
};

export default GalleryItemsImage;