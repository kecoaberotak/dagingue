const GalleryInfoBumbu = (props) => {
  const { title, children } = props;
  return (
    <div className="gallery-info-bumbu" data-testid="gallery-info-bumbu">
      <h2>{title}</h2>
      <div
        className="w-[300px] h-[120px] sm:w-[376px] sm:h-[130px]"
        data-testid="gallery-info-bumbu-desc"
      >
        {children}
      </div>
    </div>
  );
};

export default GalleryInfoBumbu;
