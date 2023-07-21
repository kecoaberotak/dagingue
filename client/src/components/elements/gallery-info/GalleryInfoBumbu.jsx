const GalleryInfoBumbu = (props) => {
  const {title, children} = props
  return(
    <div className="gallery-info-bumbu">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default GalleryInfoBumbu;