import GalleryInfo from "../elements/gallery-info/GalleryInfo";
import GalleryItems from "../elements/gallery-items/GalleryItems";

const Gallery = () => {
  return(
    <div className="gallery">
      <GalleryInfo ></GalleryInfo>
      <GalleryItems></GalleryItems>
    </div>
  )
};

export default Gallery;