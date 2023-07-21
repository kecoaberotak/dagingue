import { useState } from "react";
import GalleryInfo from "../elements/gallery-info/GalleryInfo";
import GalleryItems from "../elements/gallery-items/GalleryItems";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState('');

  return(
    <div className="gallery">
      <GalleryInfo toChild={selectedImage}></GalleryInfo>
      <GalleryItems sendToParent={setSelectedImage}></GalleryItems>
    </div>
  )
};

export default Gallery;